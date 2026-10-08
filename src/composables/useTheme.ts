import { onMounted, ref } from 'vue'

export type Theme = 'dark' | 'light'

// The inline script in index.html sets data-theme before first paint;
// this only reads it back and handles the toggle.
export function useTheme() {
  const theme = ref<Theme>('dark')
  let timer = 0

  onMounted(() => {
    theme.value = document.documentElement.dataset.theme === 'light' ? 'light' : 'dark'
  })

  function toggle() {
    const next: Theme = theme.value === 'dark' ? 'light' : 'dark'
    const root = document.documentElement
    root.classList.add('theme-anim')
    root.dataset.theme = next
    theme.value = next
    try { localStorage.setItem('theme', next) } catch { /* private mode */ }
    clearTimeout(timer)
    timer = window.setTimeout(() => root.classList.remove('theme-anim'), 550)
  }

  return { theme, toggle }
}
