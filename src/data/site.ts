// Site configuration: section colours and routes. All text lives in src/content/{fr,en}.ts.

export type SectionKey = 'underlaid' | 'govllm' | 'path' | 'talks' | 'commitments'
export type Lang = 'fr' | 'en'

export interface Section {
  key: SectionKey
  color: string
  /** Darker variant for small text and focus rings on the light background (AA) */
  ink: string
  /** URL segment per language */
  slug: Record<Lang, string>
}

export const SITE_URL = 'https://jehannedussert.com'
export const LANGS: Lang[] = ['fr', 'en']

export const sections: Section[] = [
  { key: 'underlaid', color: '#FF3E9A', ink: '#D1006F', slug: { fr: 'underlaid', en: 'underlaid' } },
  { key: 'govllm', color: '#4C8DFF', ink: '#2A66D6', slug: { fr: 'govllm', en: 'govllm' } },
  { key: 'path', color: '#FF8A1F', ink: '#A85200', slug: { fr: 'parcours', en: 'path' } },
  { key: 'talks', color: '#20C98B', ink: '#087F56', slug: { fr: 'interventions', en: 'talks' } },
  { key: 'commitments', color: '#B48CFF', ink: '#7D4FDB', slug: { fr: 'engagements', en: 'commitments' } },
]

export const sectionByKey = Object.fromEntries(sections.map((s) => [s.key, s])) as Record<SectionKey, Section>

/** Path of a page: French at the root, English under /en. */
export function pathFor(lang: Lang, key: SectionKey | null): string {
  const base = lang === 'en' ? '/en' : ''
  if (!key) return base || '/'
  return `${base}/${sectionByKey[key].slug[lang]}`
}

export const govllmVideo = {
  youtubeId: 'VBzLZySLnWU',
  start: 0,
  poster: '/media/govllm-parlez-moi-dia-poster.jpg',
}
