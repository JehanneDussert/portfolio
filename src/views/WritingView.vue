<template>
  <main class="writing">
    <div class="page-head reveal">
      <RouterLink to="/" class="back" data-hover>← Back</RouterLink>
      <div class="head-text">
        <h1 class="page-title">Writing</h1>
        <p class="page-sub">AI governance, research, and adjacent ideas.</p>
      </div>
    </div>

    <!-- Tag filter -->
    <div v-if="allTags.length" class="filters reveal reveal-delay-1">
      <button
        class="filter-btn"
        :class="{ active: !activeTag }"
        @click="activeTag = null"
        data-hover
      >All</button>
      <button
        v-for="tag in allTags"
        :key="tag"
        class="filter-btn"
        :class="{ active: activeTag === tag }"
        @click="activeTag = activeTag === tag ? null : tag"
        data-hover
      >{{ tag }}</button>
    </div>

    <div v-if="loading" class="state">
      <span class="state-dot"></span>
      <span class="state-dot"></span>
      <span class="state-dot"></span>
    </div>

    <div v-else-if="error" class="state-msg">Failed to load articles. Please try again.</div>

    <div v-else-if="filtered.length === 0" class="state-msg">No articles for this tag.</div>

    <div v-else class="feed">
      <RouterLink
        v-for="a in filtered"
        :key="a.slug"
        :to="`/writing/${a.slug}`"
        class="article-row reveal"
        data-hover
      >
        <div class="row-left">
          <span class="row-date">{{ a.published_at ? formatDate(a.published_at) : '' }}</span>
          <div class="row-tags">
            <span v-for="t in a.tags" :key="t" class="tag">{{ t }}</span>
          </div>
        </div>
        <div class="row-center">
          <h2 class="row-title">{{ a.title }}</h2>
          <p v-if="a.excerpt" class="row-excerpt">{{ a.excerpt }}</p>
          <span class="row-read">Read →</span>
        </div>
        <span class="row-time">{{ a.reading_time ?? calcReadingTime(a.content ?? '') }} min</span>
      </RouterLink>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { useArticles, formatDate, calcReadingTime } from '@/composables/useArticles'

const { articles, loading, error, fetchArticles } = useArticles()
const activeTag = ref<string | null>(null)

onMounted(() => fetchArticles())

const allTags = computed(() => {
  const set = new Set<string>()
  articles.value.forEach(a => a.tags.forEach(t => set.add(t)))
  return [...set].sort()
})

const filtered = computed(() =>
  activeTag.value
    ? articles.value.filter(a => a.tags.includes(activeTag.value!))
    : articles.value
)
</script>

<style scoped>
.writing {
  max-width: 900px; margin: 0 auto;
  padding: 4rem 3rem 6rem;
  min-height: calc(100vh - 56px);
}

.page-head {
  display: flex; align-items: flex-start; gap: 2rem;
  margin-bottom: 3rem; border-bottom: 1px solid var(--b); padding-bottom: 2rem;
}
.back {
  font-family: var(--ff-mono); font-size: 12px; color: var(--txt-3);
  text-decoration: none; margin-top: 6px; flex-shrink: 0;
  transition: color .18s;
}
.back:hover { color: var(--teal); }
.page-title { font-size: 2rem; font-weight: 600; color: var(--txt); letter-spacing: -.02em; margin-bottom: .4rem; }
.page-sub { font-size: 14px; color: var(--txt-2); text-align: left; }

.filters { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 2.5rem; }
.filter-btn {
  font-family: var(--ff-mono); font-size: 11px; text-transform: uppercase; letter-spacing: .07em;
  color: var(--txt-3); background: var(--bg-2); border: 1px solid var(--b);
  padding: 5px 12px; border-radius: var(--r-sm);
  transition: color .18s, border-color .18s, background .18s;
}
.filter-btn:hover, .filter-btn.active {
  color: var(--teal); border-color: rgba(0,212,184,.35); background: var(--teal-dim);
}

.state { display: flex; gap: 6px; padding: 4rem 0; }
.state-dot {
  width: 6px; height: 6px; border-radius: 50%; background: var(--teal-dim);
  animation: pulse 1.2s ease-in-out infinite;
}
.state-dot:nth-child(2) { animation-delay: .2s; }
.state-dot:nth-child(3) { animation-delay: .4s; }
@keyframes pulse { 0%,100% { opacity:.3 } 50% { opacity:1 } }
.state-msg { font-size: 13px; color: var(--txt-3); padding: 4rem 0; }

.feed { display: flex; flex-direction: column; }

.article-row {
  display: grid; grid-template-columns: 160px 1fr 60px;
  gap: 2rem; padding: 1.75rem 0;
  border-top: 1px solid var(--b); text-decoration: none;
  transition: opacity .18s;
}
.article-row:last-child { border-bottom: 1px solid var(--b); }
.article-row:hover { opacity: .75; }

.row-left { padding-top: 3px; }
.row-date { display: block; font-family: var(--ff-mono); font-size: 11px; color: var(--txt-4); margin-bottom: 8px; }
.row-tags { display: flex; flex-wrap: wrap; gap: 5px; }
.tag {
  font-size: 11px; color: var(--teal); background: var(--teal-dim);
  border: 1px solid rgba(0,212,184,.2); padding: 2px 7px; border-radius: var(--r-sm);
}

.row-title { font-size: 15px; font-weight: 600; color: var(--txt); line-height: 1.4; margin-bottom: .5rem; }
.row-excerpt { font-size: 13px; color: var(--txt-2); line-height: 1.7; text-align: left; margin-bottom: .75rem; }
.row-read {
  font-family: var(--ff-mono); font-size: 12px; color: var(--teal);
  border-bottom: 1px solid rgba(0,212,184,.25); padding-bottom: 1px;
  transition: border-color .18s; align-self: flex-start;
}
.article-row:hover .row-read { border-color: var(--teal); }

.row-time {
  font-family: var(--ff-mono); font-size: 11px; color: var(--txt-4);
  text-align: right; padding-top: 3px; white-space: nowrap;
}

@media (max-width: 768px) {
  .writing { padding: 3rem 1.25rem 5rem; }
  .page-head { flex-direction: column; gap: 1rem; }
  .article-row { grid-template-columns: 1fr; gap: .75rem; }
  .row-left { display: flex; align-items: center; gap: 1rem; }
  .row-date { margin-bottom: 0; }
  .row-time { display: none; }
}
</style>
