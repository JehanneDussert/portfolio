import { computed } from 'vue'
import { useRoute } from 'vue-router'
import type { Lang, SectionKey } from '@/data/site'
import fr from '@/content/fr'
import en from '@/content/en'

export const content = { fr, en }

export function usePage() {
  const route = useRoute()
  const lang = computed<Lang>(() => (route.meta.lang === 'en' ? 'en' : 'fr'))
  const key = computed<SectionKey | null>(() => (route.meta.key as SectionKey | null | undefined) ?? null)
  const t = computed(() => content[lang.value])
  return { lang, key, t }
}
