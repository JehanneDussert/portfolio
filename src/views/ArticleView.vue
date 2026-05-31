<template>
  <!-- Reading progress bar -->
  <div class="progress-bar" :style="{ width: progress + '%' }"></div>

  <main class="article-page">
    <div v-if="loading" class="state">
      <span class="state-dot"></span>
      <span class="state-dot"></span>
      <span class="state-dot"></span>
    </div>

    <div v-else-if="error || !article" class="not-found">
      <p class="nf-code">404</p>
      <p class="nf-msg">Article not found.</p>
      <RouterLink to="/writing" class="nf-link" data-hover>← Back to writing</RouterLink>
    </div>

    <template v-else>
      <!-- Compact top bar -->
      <div class="art-topbar reveal">
        <RouterLink to="/writing" class="back" data-hover>← Writing</RouterLink>
        <span class="art-meta">
          <span class="art-date">{{ article.published_at ? formatDate(article.published_at) : '' }}</span>
          <span class="meta-sep">·</span>
          <span class="art-time">{{ article.reading_time ?? calcReadingTime(article.content ?? '') }} min read</span>
        </span>
      </div>

      <!-- Title + tags -->
      <h1 class="art-title reveal">{{ article.title }}</h1>
      <div v-if="article.tags.length" class="art-tags reveal">
        <span v-for="t in article.tags" :key="t" class="tag">{{ t }}</span>
      </div>

      <!-- Content -->
      <article
        v-if="article.content"
        class="art-body reveal"
        v-html="article.content"
      ></article>

      <!-- Actions bar -->
      <footer class="art-footer reveal reveal-delay-2">
        <!-- Reactions -->
        <div class="reactions">
          <button
            v-for="r in reactionList"
            :key="r.type"
            class="react-btn"
            :class="{ reacted: r.reacted }"
            @click="toggleReaction(r.type)"
            data-hover
          >
            <span class="react-emoji">{{ r.emoji }}</span>
            <span class="react-count">{{ r.count }}</span>
          </button>
        </div>

        <!-- Share -->
        <div class="share">
          <a :href="linkedinUrl" target="_blank" rel="noopener" class="share-btn" data-hover>LinkedIn</a>
          <a :href="twitterUrl" target="_blank" rel="noopener" class="share-btn" data-hover>X</a>
          <button class="share-btn" :class="{ copied }" @click="copyLink" data-hover>
            {{ copied ? 'Copied!' : 'Copy link' }}
          </button>
        </div>

      </footer>
    </template>
  </main>
</template>

<script setup lang="ts">
import { ref, computed, shallowRef, onMounted, onUnmounted } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useArticle, formatDate, calcReadingTime } from '@/composables/useArticles'
import { useReactions } from '@/composables/useReactions'
import type { ReactionType, ReactionCount } from '@/types/writing'

const route = useRoute()
const slug = route.params.slug as string

const { article, loading, error, fetchArticle } = useArticle()

// Reactions — initialized after article loads (shallowRef prevents auto-unwrap of inner refs)
const reactionsComposable = shallowRef<ReturnType<typeof useReactions> | null>(null)
const reactionList = computed<ReactionCount[]>(() => reactionsComposable.value?.reactionList.value ?? [])
function toggleReaction(type: ReactionType) {
  reactionsComposable.value?.toggleReaction(type)
}

// Reading progress
const progress = ref(0)
function updateProgress() {
  const el = document.documentElement
  const scrolled = el.scrollTop || document.body.scrollTop
  const total = el.scrollHeight - el.clientHeight
  progress.value = total > 0 ? Math.min(100, (scrolled / total) * 100) : 0
}

// Share
const copied = ref(false)
const pageUrl = computed(() => typeof window !== 'undefined' ? window.location.href : '')
const linkedinUrl = computed(() => {
  const p = new URLSearchParams({
    mini: 'true',
    url: pageUrl.value,
    title: article.value?.title ?? '',
    summary: article.value?.excerpt ?? '',
  })
  return `https://www.linkedin.com/shareArticle?${p}`
})
const twitterUrl = computed(() =>
  `https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl.value)}&text=${encodeURIComponent(article.value?.title ?? '')}`
)

async function copyLink() {
  try {
    await navigator.clipboard.writeText(pageUrl.value)
    copied.value = true
    setTimeout(() => { copied.value = false }, 2000)
  } catch { /* ignore */ }
}


onMounted(async () => {
  await fetchArticle(slug)
  if (article.value) {
    document.title = `${article.value.title} — Jehanne Dussert`
    const meta = document.querySelector('meta[name="description"]')
    if (meta && article.value.excerpt) meta.setAttribute('content', article.value.excerpt)
    const r = useReactions(article.value.id)
    reactionsComposable.value = r
    r.fetchReactions()
  }
  window.addEventListener('scroll', updateProgress, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateProgress)
})
</script>

<style scoped>
.progress-bar {
  position: fixed; top: 56px; left: 0; height: 2px;
  background: var(--teal); z-index: 99; transition: width .1s linear;
  pointer-events: none;
}

.article-page {
  max-width: 720px; margin: 0 auto;
  padding: 1.5rem 3rem 6rem;
  min-height: calc(100vh - 56px);
}

.state { display: flex; gap: 6px; padding: 4rem 0; }
.state-dot {
  width: 6px; height: 6px; border-radius: 50%; background: var(--teal-dim);
  animation: pulse 1.2s ease-in-out infinite;
}
.state-dot:nth-child(2) { animation-delay: .2s; }
.state-dot:nth-child(3) { animation-delay: .4s; }
@keyframes pulse { 0%,100% { opacity:.3 } 50% { opacity:1 } }

.not-found { padding: 4rem 0; }
.nf-code { font-family: var(--ff-mono); font-size: 3rem; color: var(--txt-4); margin-bottom: .5rem; }
.nf-msg { font-size: 15px; color: var(--txt-2); margin-bottom: 1.5rem; }
.nf-link { font-family: var(--ff-mono); font-size: 12px; color: var(--teal); text-decoration: none; }

.art-topbar {
  display: flex; align-items: center; justify-content: space-between;
  margin-bottom: .75rem;
}
.back {
  font-family: var(--ff-mono); font-size: 12px; color: var(--txt-3);
  text-decoration: none; transition: color .18s;
}
.back:hover { color: var(--teal); }
.art-meta { display: flex; align-items: center; gap: .5rem; }
.art-date { font-family: var(--ff-mono); font-size: 11px; color: var(--txt-4); }
.meta-sep { color: var(--txt-4); }
.art-time { font-family: var(--ff-mono); font-size: 11px; color: var(--teal); }
.art-title {
  font-size: clamp(1.3rem, 2.5vw, 1.75rem); font-weight: 600; color: var(--txt);
  line-height: 1.25; letter-spacing: -.02em; margin-bottom: .6rem;
}
.art-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: .75rem; }
.tag {
  font-size: 11.5px; color: var(--teal); background: var(--teal-dim);
  border: 1px solid rgba(0,212,184,.2); padding: 4px 10px; border-radius: var(--r-sm);
}

/* Article prose */
.art-body {
  font-size: 15px; color: var(--txt-2); line-height: 1.85;
  border-top: 1px solid var(--b); padding-top: 1.25rem; margin-bottom: 3rem;
  overflow-wrap: break-word; word-break: break-word;
}
.art-body :deep(h2) {
  font-size: 1.2rem; font-weight: 600; color: var(--txt); margin: 2rem 0 .75rem;
  letter-spacing: -.01em;
}
.art-body :deep(h3) {
  font-size: 1rem; font-weight: 600; color: var(--txt); margin: 1.5rem 0 .5rem;
}
.art-body :deep(p) { margin-bottom: 1.25rem; text-align: left; }
.art-body :deep(ul), .art-body :deep(ol) {
  padding-left: 1.5rem; margin-bottom: 1.25rem; display: flex; flex-direction: column; gap: .4rem;
}
.art-body :deep(li) { color: var(--txt-2); line-height: 1.7; }
.art-body :deep(strong) { color: var(--txt); font-weight: 600; }
.art-body :deep(em) { font-style: italic; }
.art-body :deep(code) {
  font-family: var(--ff-mono); font-size: .88em; background: var(--bg-3);
  border: 1px solid var(--b); padding: 1px 5px; border-radius: var(--r-sm); color: var(--teal);
}
.art-body :deep(pre) {
  background: var(--bg-3); border: 1px solid var(--b); border-radius: var(--r-sm);
  padding: 1rem; margin-bottom: 1.25rem; overflow-x: auto;
}
.art-body :deep(pre code) { background: none; border: none; padding: 0; font-size: .85em; }
.art-body :deep(blockquote) {
  border-left: 2px solid var(--teal); padding-left: 1.25rem;
  margin: 1.5rem 0; color: var(--txt-2); font-style: italic;
}
.art-body :deep(a) { color: var(--teal); border-bottom: 1px solid rgba(0,212,184,.3); }
.art-body :deep(a:hover) { border-color: var(--teal); }
.art-body :deep(hr) { border: none; border-top: 1px solid var(--b); margin: 2.5rem 0; }
.art-body :deep(img) { max-width: 100%; height: auto; border-radius: var(--r-sm); }
.art-body :deep(table) { width: 100%; border-collapse: collapse; overflow-x: auto; display: block; }
.art-body :deep(td), .art-body :deep(th) { padding: .5rem .75rem; border: 1px solid var(--b); font-size: 13px; }

/* Footer / actions */
.art-footer {
  display: flex; flex-wrap: wrap; align-items: center; gap: 1.5rem;
  border-top: 1px solid var(--b); padding-top: 2rem;
}

.reactions { display: flex; gap: .75rem; }
.react-btn {
  display: flex; align-items: center; gap: 6px;
  padding: 8px 14px; background: var(--bg-2); border: 1px solid var(--b);
  border-radius: var(--r-md); font-size: 13px; color: var(--txt-2);
  transition: border-color .18s, background .18s, color .18s;
}
.react-btn:hover { border-color: var(--b-3); background: var(--bg-3); }
.react-btn.reacted { border-color: rgba(0,212,184,.4); background: var(--teal-dim); color: var(--txt); }
.react-emoji { font-size: 16px; line-height: 1; }
.react-count { font-family: var(--ff-mono); font-size: 12px; }

.share { display: flex; gap: .5rem; margin-left: auto; }
.share-btn {
  font-family: var(--ff-mono); font-size: 11px; text-transform: uppercase; letter-spacing: .06em;
  color: var(--txt-3); background: var(--bg-2); border: 1px solid var(--b);
  padding: 6px 12px; border-radius: var(--r-sm); text-decoration: none;
  transition: color .18s, border-color .18s;
}
.share-btn:hover, .share-btn.copied { color: var(--teal); border-color: rgba(0,212,184,.35); }

.pdf-btn {
  font-family: var(--ff-mono); font-size: 11px; text-transform: uppercase; letter-spacing: .06em;
  color: var(--txt-3); background: none; border: 1px solid var(--b);
  padding: 6px 14px; border-radius: var(--r-sm);
  transition: color .18s, border-color .18s;
}
.pdf-btn:hover { color: var(--amber); border-color: rgba(240,165,0,.35); }

@media (max-width: 768px) {
  .article-page { padding: 1rem 1rem 5rem; }
  .art-topbar { flex-wrap: wrap; gap: .4rem; }
  .art-meta { font-size: 10px; }
  .art-title { font-size: 1.35rem; line-height: 1.3; }
  .art-body { font-size: 14.5px; line-height: 1.8; }
  .art-body :deep(h2) { font-size: 1.1rem; margin: 1.5rem 0 .5rem; }
  .art-body :deep(blockquote) { padding-left: 1rem; margin: 1rem 0; }
  .art-body :deep(ul), .art-body :deep(ol) { padding-left: 1.1rem; }
  .art-footer { flex-direction: column; align-items: flex-start; gap: 1rem; }
  .reactions { flex-wrap: wrap; }
  .share { margin-left: 0; flex-wrap: wrap; }
  .react-btn { padding: 7px 11px; font-size: 12px; }
}
</style>
