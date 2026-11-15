import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import { legacyRedirects } from './src/data/redirects'

// Day of the build, shared by the prerender and the client bundle so both list the same upcoming talks.
const buildDate = new Date().toISOString().slice(0, 10)
const redirected = new Set(legacyRedirects.map((r) => r.from))

export default defineConfig({
  define: { __BUILD_DATE__: JSON.stringify(buildDate) },
  // @ts-ignore — vite-ssg options
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    // /govllm → dist/govllm/index.html, served as-is by Vercel before the SPA rewrite
    dirStyle: 'nested',
    // Static routes only (vite-ssg's default), minus the old URLs: they are 301s in vercel.json.
    includedRoutes: (paths: string[]) => paths.filter((p) => !/[:*]/.test(p) && !redirected.has(p)),
  },
  plugins: [vue()],
  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  },
  build: {
    target: 'es2020',
    cssCodeSplit: true,
  },
})
