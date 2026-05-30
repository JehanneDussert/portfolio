import { ViteSSG } from 'vite-ssg'
import { createPinia } from 'pinia'
import App from './App.vue'
import '@/assets/css/main.css'

export const createApp = ViteSSG(
  App,
  {
    routes: [
      { path: '/', name: 'home', component: () => import('@/views/HomeView.vue') },
      { path: '/writing', name: 'writing', component: () => import('@/views/WritingView.vue') },
      { path: '/writing/:slug', name: 'article', component: () => import('@/views/ArticleView.vue') },
      { path: '/:pathMatch(.*)*', redirect: '/' },
    ],
    scrollBehavior(to, _from, savedPosition) {
      if (savedPosition) return savedPosition
      if (to.hash) return { el: to.hash, behavior: 'smooth' }
      return { top: 0 }
    },
  },
  ({ app }) => {
    app.use(createPinia())
  }
)