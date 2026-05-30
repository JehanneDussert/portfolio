<template>
  <section id="writing" class="s">
    <div class="s-head reveal">
      <span class="idx">06</span>
      <h2 class="section-title">Writing</h2>
      <RouterLink to="/writing" class="see-all" data-hover>See all →</RouterLink>
    </div>

    <div v-if="loading" class="state">
      <span class="state-dot"></span>
      <span class="state-dot"></span>
      <span class="state-dot"></span>
    </div>

    <div v-else-if="error" class="state-text">Failed to load articles.</div>

    <div v-else-if="articles.length === 0" class="state-text">No articles yet.</div>

    <div v-else class="cards">
      <RouterLink
        v-for="a in articles"
        :key="a.slug"
        :to="`/writing/${a.slug}`"
        class="card reveal"
        data-hover
      >
        <div class="card-meta">
          <span class="card-date">{{ a.published_at ? formatDate(a.published_at) : '' }}</span>
          <span class="card-time">{{ a.reading_time ?? calcReadingTime(a.content ?? '') }} min read</span>
        </div>
        <h3 class="card-title">{{ a.title }}</h3>
        <p v-if="a.excerpt" class="card-excerpt">{{ a.excerpt }}</p>
        <div class="card-tags">
          <span v-for="t in a.tags" :key="t" class="tag">{{ t }}</span>
        </div>
        <span class="card-read">Read →</span>
      </RouterLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { useArticles, formatDate, calcReadingTime } from '@/composables/useArticles'

const { articles, loading, error, fetchArticles } = useArticles()
onMounted(() => fetchArticles(3))
</script>

<style scoped>
.s { padding: 5rem 3rem; border-top: 1px solid var(--b); background: var(--bg); }
.s-head {
  display: flex; align-items: baseline; gap: 1rem; margin-bottom: 2.5rem;
}
.idx { font-family: var(--ff-mono); font-size: 11px; color: var(--txt-4); letter-spacing: .1em; }
.section-title { font-size: 1.55rem; font-weight: 600; color: var(--txt); letter-spacing: -.01em; flex: 1; }
.see-all {
  font-family: var(--ff-mono); font-size: 12px; color: var(--teal);
  border-bottom: 1px solid rgba(0,212,184,.25); padding-bottom: 1px;
  transition: border-color .18s; text-decoration: none; flex-shrink: 0;
}
.see-all:hover { border-color: var(--teal); }

.state { display: flex; gap: 6px; padding: 3rem 0; }
.state-dot {
  width: 6px; height: 6px; border-radius: 50%; background: var(--teal-dim);
  animation: pulse 1.2s ease-in-out infinite;
}
.state-dot:nth-child(2) { animation-delay: .2s; }
.state-dot:nth-child(3) { animation-delay: .4s; }
@keyframes pulse { 0%,100% { opacity:.3 } 50% { opacity:1 } }

.state-text { font-size: 13px; color: var(--txt-3); padding: 3rem 0; }

.cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem; }

.card {
  display: flex; flex-direction: column; gap: .75rem;
  padding: 1.5rem; border: 1px solid var(--b);
  border-radius: var(--r-lg); background: var(--bg-2);
  text-decoration: none; transition: border-color .2s, background .2s;
}
.card:hover { border-color: rgba(0,212,184,.3); background: var(--bg-3); }

.card-meta { display: flex; align-items: center; justify-content: space-between; }
.card-date { font-family: var(--ff-mono); font-size: 11px; color: var(--txt-4); }
.card-time { font-family: var(--ff-mono); font-size: 11px; color: var(--teal); }
.card-title { font-size: 14px; font-weight: 600; color: var(--txt); line-height: 1.4; }
.card-excerpt { font-size: 13px; color: var(--txt-2); line-height: 1.7; flex: 1; }
.card-tags { display: flex; flex-wrap: wrap; gap: 6px; }
.card-read {
  font-family: var(--ff-mono); font-size: 12px; color: var(--teal);
  margin-top: auto; align-self: flex-start;
  border-bottom: 1px solid rgba(0,212,184,.25); padding-bottom: 1px;
  transition: border-color .18s;
}
.card:hover .card-read { border-color: var(--teal); }
.tag {
  font-size: 11px; color: var(--txt-3); background: var(--bg-3);
  border: 1px solid var(--b); padding: 3px 8px; border-radius: var(--r-sm);
}

@media (max-width: 900px) { .cards { grid-template-columns: 1fr 1fr; } }
@media (max-width: 640px) {
  .s { padding: 4rem 1.25rem; }
  .cards { grid-template-columns: 1fr; }
  .s-head { flex-wrap: wrap; }
}
</style>
