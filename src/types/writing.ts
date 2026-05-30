export interface Article {
  id: string
  slug: string
  title: string
  excerpt: string | null
  content: string | null
  tags: string[]
  takeaways: string[]
  reading_time: number | null
  published_at: string | null
  created_at: string
}

export type ReactionType = 'thumbs_up' | 'heart' | 'fire'

export interface ReactionCount {
  type: ReactionType
  emoji: string
  count: number
  reacted: boolean
}
