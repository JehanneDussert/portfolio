import { ViteSSG } from 'vite-ssg'
import type { RouteRecordRaw } from 'vue-router'
import App from './App.vue'
import Empty from './components/Empty.vue'
import { LANGS, pathFor, sections } from '@/data/site'
import '@/assets/css/main.css'

// Every route renders the same shell (App.vue); the route only says which
// language and which section are open, so the menu is never remounted and can animate.
const routes: RouteRecordRaw[] = [
  ...LANGS.flatMap((lang) => [
    { path: pathFor(lang, null), name: `${lang}:home`, component: Empty, meta: { lang, key: null } },
    ...sections.map((s) => ({
      path: pathFor(lang, s.key),
      name: `${lang}:${s.key}`,
      component: Empty,
      meta: { lang, key: s.key },
    })),
  ]),
  // English slugs served at the root before the site became bilingual
  { path: '/path', redirect: '/en/path' },
  { path: '/talks', redirect: '/en/talks' },
  { path: '/commitments', redirect: '/en/commitments' },
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

export const createApp = ViteSSG(
  App,
  {
    routes,
    // The shell handles scrolling itself, in step with the transitions.
    scrollBehavior: () => false,
  },
  ({ isClient }) => {
    if (!isClient) return
    // Vercel Web Analytics, only on the deployed site (the script 404s elsewhere).
    if (/(^|\.)jehannedussert\.com$|\.vercel\.app$/.test(location.hostname)) {
      import('@vercel/analytics').then(({ inject }) => inject())
    }
  },
)
