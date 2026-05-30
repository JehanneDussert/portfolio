import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

const BASE = 'https://jehannedussert.com'

type ArticleMeta = { slug: string; title: string; excerpt: string | null }

function esc(s: string) {
  return s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

async function fetchMeta(url: string, key: string): Promise<ArticleMeta[]> {
  try {
    const r = await fetch(
      `${url}/rest/v1/articles?select=slug,title,excerpt&published_at=not.is.null&order=published_at.desc`,
      { headers: { apikey: key, Authorization: `Bearer ${key}` } },
    )
    return r.ok ? ((await r.json()) as ArticleMeta[]) : []
  } catch {
    return []
  }
}

export default defineConfig(({ mode }) => {
  const envFile = loadEnv(mode, process.cwd(), '')
  const supabaseUrl = process.env.VITE_SUPABASE_URL ?? envFile.VITE_SUPABASE_URL ?? ''
  const anonKey = process.env.VITE_SUPABASE_ANON_KEY ?? envFile.VITE_SUPABASE_ANON_KEY ?? ''

  let cache: ArticleMeta[] = []

  return {
    // @ts-ignore
    ssgOptions: {
      script: 'async',
      formatting: 'minify',

      async includedRoutes(paths: string[]) {
        if (supabaseUrl && anonKey) cache = await fetchMeta(supabaseUrl, anonKey)
        return [...paths, ...cache.map((a) => `/writing/${a.slug}`)]
      },

      async onPageRendered(route: string, html: string) {
        function patch(h: string, title: string, desc: string, url: string, img: string) {
          const t = esc(title)
          const d = esc(desc)
          return h
            .replace(/<title>[^<]*<\/title>/, `<title>${t}</title>`)
            .replace(/(<meta\s+name="description"\s+content=")[^"]*"/, `$1${d}"`)
            .replace(/(<link\s+rel="canonical"\s+href=")[^"]*"/, `$1${esc(url)}"`)
            .replace(/(<meta\s+property="og:url"\s+content=")[^"]*"/, `$1${esc(url)}"`)
            .replace(/(<meta\s+property="og:title"\s+content=")[^"]*"/, `$1${t}"`)
            .replace(/(<meta\s+property="og:description"\s+content=")[^"]*"/, `$1${d}"`)
            .replace(/(<meta\s+property="og:image"\s+content=")[^"]*"/, `$1${esc(img)}"`)
            .replace(/(<meta\s+name="twitter:title"\s+content=")[^"]*"/, `$1${t}"`)
            .replace(/(<meta\s+name="twitter:description"\s+content=")[^"]*"/, `$1${d}"`)
            .replace(/(<meta\s+name="twitter:image"\s+content=")[^"]*"/, `$1${esc(img)}"`)
        }

        if (route === '/writing') {
          return patch(
            html,
            'Writing — Jehanne Dussert',
            'AI governance, research, and adjacent ideas.',
            `${BASE}/writing`,
            `${BASE}/og-image.png`,
          )
        }

        if (route.startsWith('/writing/')) {
          const slug = route.slice('/writing/'.length)
          const a = cache.find((x) => x.slug === slug)
          if (!a) return html
          const title = `${a.title} — Jehanne Dussert`
          const desc = a.excerpt ?? 'AI governance and research by Jehanne Dussert.'
          const img = `${BASE}/api/og?title=${encodeURIComponent(a.title)}&description=${encodeURIComponent(desc)}`
          return patch(html, title, desc, `${BASE}${route}`, img)
        }

        return html
      },
    },

    plugins: [vue()],
    resolve: {
      alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
    },
    server: {
      proxy: { '/api': { target: 'http://localhost:8000', changeOrigin: true } },
    },
    build: {
      target: 'es2015',
      cssCodeSplit: true,
    },
  }
})
