import { ref } from 'vue'
import { supabase } from '@/lib/supabase'
import type { Article } from '@/types/writing'

export function calcReadingTime(content: string): number {
  const text = content.replace(/<[^>]+>/g, ' ')
  const words = text.trim().split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.ceil(words / 200))
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric',
  })
}

export function useArticles() {
  const articles = ref<Article[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  async function fetchArticles(limit?: number) {
    loading.value = true
    error.value = null
    try {
      let query = supabase
        .from('articles')
        .select('*')
        .not('published_at', 'is', null)
        .lte('published_at', new Date().toISOString())
        .order('published_at', { ascending: false })

      if (limit) query = query.limit(limit)

      const { data, error: err } = await query
      if (err) throw err
      articles.value = (data as Article[]) ?? []
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'Failed to load articles'
    } finally {
      loading.value = false
    }
  }

  return { articles, loading, error, fetchArticles }
}

export function useArticle() {
  const article = ref<Article | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)

  async function fetchArticle(slug: string) {
    loading.value = true
    error.value = null
    try {
      const { data, error: err } = await supabase
        .from('articles')
        .select('*')
        .eq('slug', slug)
        .single()
      if (err) throw err
      article.value = data
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'Article not found'
      article.value = null
    } finally {
      loading.value = false
    }
  }

  return { article, loading, error, fetchArticle }
}
