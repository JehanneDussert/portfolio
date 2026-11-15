// Site configuration: section colours and routes. All text lives in src/content/{fr,en}.ts.

export type SectionKey = 'underlaid' | 'govllm' | 'path' | 'talks'
export type Lang = 'en' | 'fr'

export interface Section {
  key: SectionKey
  color: string
  /** Darker variant for small text and focus rings on the light background (AA) */
  ink: string
  /** URL segment per language */
  slug: Record<Lang, string>
}

export const SITE_URL = 'https://jehannedussert.com'
/** The first one is the default language, served at the root. */
export const LANGS: Lang[] = ['en', 'fr']
export const DEFAULT_LANG: Lang = 'en'

export const sections: Section[] = [
  { key: 'underlaid', color: '#FF3E9A', ink: '#D1006F', slug: { en: 'underlaid', fr: 'underlaid' } },
  { key: 'govllm', color: '#4C8DFF', ink: '#2A66D6', slug: { en: 'govllm', fr: 'govllm' } },
  { key: 'path', color: '#FF8A1F', ink: '#A85200', slug: { en: 'path', fr: 'parcours' } },
  { key: 'talks', color: '#20C98B', ink: '#087F56', slug: { en: 'talks', fr: 'interventions' } },
]

export const sectionByKey = Object.fromEntries(sections.map((s) => [s.key, s])) as Record<SectionKey, Section>

/** Path of a page: English at the root, French under /fr. */
export function pathFor(lang: Lang, key: SectionKey | null): string {
  const base = lang === DEFAULT_LANG ? '' : `/${lang}`
  if (!key) return base || '/'
  return `${base}/${sectionByKey[key].slug[lang]}`
}

export const govllmVideo = {
  youtubeId: 'VBzLZySLnWU',
  start: 0,
  poster: '/media/govllm-parlez-moi-dia-poster.jpg',
}

/** Day of the build (YYYY-MM-DD): dated talks on or after it are listed as upcoming. */
export const BUILD_DATE: string = __BUILD_DATE__
