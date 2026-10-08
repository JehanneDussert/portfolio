import type { SectionKey } from '@/data/site'

// fr.ts and en.ts share this shape; components only read text from here.

export interface Link {
  label: string
  href: string
}

export interface Button extends Link {
  primary?: boolean
}

export interface AlsoRow {
  key: string
  text: string
}

export interface ListItem {
  title: string
  subtitle: string
  year: string
  href?: string
}

export interface ProjectSheet {
  tag: string
  title: string
  /** Numeric headline: counts up from 0 */
  figure?: { value: number; unit: string; vs?: string }
  /** Text headline, used instead of a number */
  headline?: string
  lede: string
  problem: string
  approach: string
  also: AlsoRow[]
  buttons: Button[]
}

export interface SectionText {
  label: string
  /** Label in the phone's horizontal row */
  short: string
  title: string
  description: string
}

export interface Content {
  lang: 'fr' | 'en'
  ogLocale: string
  ui: {
    skip: string
    nav: string
    newTab: string
    themeBefore: string
    themeAfter: string
    light: string
    dark: string
    /** The other language: visible label, its full name for screen readers */
    switchLang: { label: string; name: string }
    problem: string
    approach: string
    also: string
    play: string
    education: string
  }
  home: { title: string; description: string }
  person: { name: string; intro: string; links: Link[] }
  sections: Record<SectionKey, SectionText>
  underlaid: ProjectSheet & { mapAlt: string }
  govllm: ProjectSheet & { videoLabel: string }
  path: ListItem[]
  education: ListItem[]
  talks: ListItem[]
  commitments: string[]
}
