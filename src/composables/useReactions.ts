import { ref, computed } from 'vue'
import { supabase } from '@/lib/supabase'
import type { ReactionType, ReactionCount } from '@/types/writing'

const EMOJI: Record<ReactionType, string> = {
  thumbs_up: '👍',
  heart: '❤️',
  fire: '🔥',
}

const TYPES: ReactionType[] = ['thumbs_up', 'heart', 'fire']

function getFingerprint(): string {
  let fp = localStorage.getItem('jd_fp')
  if (!fp) {
    fp = crypto.randomUUID()
    localStorage.setItem('jd_fp', fp)
  }
  return fp
}

export function useReactions(articleId: string) {
  const counts = ref<Record<ReactionType, number>>({ thumbs_up: 0, heart: 0, fire: 0 })
  const userReactions = ref<Set<ReactionType>>(new Set())
  const loading = ref(false)

  async function fetchReactions() {
    const { data } = await supabase
      .from('reactions')
      .select('type, user_fingerprint')
      .eq('article_id', articleId)

    if (!data) return
    const fp = getFingerprint()
    const c: Record<ReactionType, number> = { thumbs_up: 0, heart: 0, fire: 0 }
    const ur = new Set<ReactionType>()
    for (const r of data) {
      c[r.type as ReactionType]++
      if (r.user_fingerprint === fp) ur.add(r.type as ReactionType)
    }
    counts.value = c
    userReactions.value = ur
  }

  async function toggleReaction(type: ReactionType) {
    if (loading.value) return
    loading.value = true
    const fp = getFingerprint()
    const hadReacted = userReactions.value.has(type)

    // optimistic update
    if (hadReacted) {
      counts.value[type]--
      userReactions.value.delete(type)
    } else {
      counts.value[type]++
      userReactions.value.add(type)
    }

    try {
      if (hadReacted) {
        await supabase
          .from('reactions')
          .delete()
          .eq('article_id', articleId)
          .eq('type', type)
          .eq('user_fingerprint', fp)
      } else {
        await supabase
          .from('reactions')
          .insert({ article_id: articleId, type, user_fingerprint: fp })
      }
    } catch {
      await fetchReactions()
    } finally {
      loading.value = false
    }
  }

  const reactionList = computed<ReactionCount[]>(() =>
    TYPES.map(type => ({
      type,
      emoji: EMOJI[type],
      count: counts.value[type],
      reacted: userReactions.value.has(type),
    }))
  )

  return { reactionList, loading, fetchReactions, toggleReaction }
}
