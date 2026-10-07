import { ViteSSG } from 'vite-ssg'
import type { RouteRecordRaw } from 'vue-router'
import App from './App.vue'
import Empty from './components/Empty.vue'
import { sections } from '@/data/site'
import '@/assets/css/main.css'

// Every route renders the same shell (App.vue); the route only says which
// section is open, so the menu is never remounted and can animate.
const routes: RouteRecordRaw[] = [
  { path: '/', name: 'home', component: Empty },
  ...sections.map((s) => ({ path: `/${s.key}`, name: s.key, component: Empty })),
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
