import { nextTick, ref } from 'vue'
import type { SectionKey } from '@/data/site'

export type Mode = 'home' | 'section'

const reduced = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Drives the home ⇄ section choreography.
 *
 * mode    — layout of the menu (home column or sidebar); CSS animates the change.
 * shown   — the section whose content is mounted in the panel (lags the route).
 * visible — whether that content is in its "in" state.
 *
 * Every call to go() cancels pending timers and starts from the current state,
 * so fast successive clicks never leave the page half-way.
 */
export function useShell(initial: SectionKey | null) {
  const mode = ref<Mode>(initial ? 'section' : 'home')
  const shown = ref<SectionKey | null>(initial)
  const visible = ref(initial !== null)
  /** Set after the first client-side navigation; gates the mobile row/column animation. */
  const navigated = ref(false)
  /** The current leg returns home: content leaves in 250ms instead of 300ms. */
  const leavingHome = ref(false)

  let timers: number[] = []
  let gen = 0
  const cancel = () => {
    gen++
    timers.forEach(clearTimeout)
    timers = []
  }
  const later = (ms: number, fn: () => void) => {
    timers.push(window.setTimeout(fn, reduced() ? 0 : ms))
  }
  const scrollTop = () => {
    if (window.scrollY > 0) window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }
  const showNextFrame = () => {
    const g = gen
    nextTick(() =>
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          if (g === gen) visible.value = true
        }),
      ),
    )
  }

  function go(target: SectionKey | null) {
    cancel()
    navigated.value = true
    leavingHome.value = target === null

    if (target === null) {
      if (mode.value === 'home') return
      const out = visible.value ? 250 : 0
      visible.value = false
      later(out, () => {
        mode.value = 'home'
        scrollTop()
        later(800, () => (shown.value = null))
      })
      return
    }

    if (mode.value === 'home') {
      // Home → section: the menu shrinks into the sidebar, the content follows at 450ms.
      shown.value = target
      visible.value = false
      mode.value = 'section'
      scrollTop()
      later(450, () => (visible.value = true))
      return
    }

    if (shown.value === target) {
      visible.value = true
      return
    }

    // Section → section: content out (300ms), swap, back to top, content in.
    const out = visible.value ? 300 : 0
    visible.value = false
    later(out, () => {
      shown.value = target
      scrollTop()
      showNextFrame()
    })
  }

  return { mode, shown, visible, navigated, leavingHome, go, cancel }
}
