import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  // @ts-ignore — vite-ssg options
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    // /govllm → dist/govllm/index.html, served as-is by Vercel before the SPA rewrite
    dirStyle: 'nested',
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
