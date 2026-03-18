<template>
  <section id="experience" class="s">
    <div class="s-head reveal">
      <span class="idx">02</span>
      <h2>Experience</h2>
    </div>
    <div class="list">
      <article
        v-for="(e,i) in experiences" :key="e.role"
        class="item reveal" :class="`reveal-delay-${Math.min(i+1,3)}`"
      >
        <div class="meta">
          <span class="period">{{ e.period }}</span>
          <span class="org">{{ e.org }}</span>
        </div>
        <div class="body">
          <h3>{{ e.role }}</h3>
          <ul>
            <li v-for="b in e.bullets" :key="b">{{ b }}</li>
          </ul>
          <div class="impact">
            <span class="impact-label">Impact</span>
            <span class="impact-text">{{ e.impact }}</span>
          </div>
          <a v-if="e.githubUrl" :href="e.githubUrl" target="_blank" rel="noopener" class="exp-link" data-hover>
            View on GitHub →
          </a>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { usePortfolioData } from '@/composables/usePortfolioData'
const { experiences } = usePortfolioData()
</script>

<style scoped>
.s { padding: 5rem 3rem; border-top: 1px solid var(--b); background: var(--bg-2); }
.s-head { display: flex; align-items: baseline; gap: 1rem; margin-bottom: 2.5rem; }
.idx { font-family: var(--ff-mono); font-size: 11px; color: var(--txt-4); letter-spacing: .1em; }
.s-head h2 { font-size: 1.55rem; font-weight: 600; color: var(--txt); letter-spacing: -.01em; }
.list { display: flex; flex-direction: column; }
.item {
  display: grid; grid-template-columns: 185px 1fr;
  gap: 3rem; padding: 2.25rem 0; border-bottom: 1px solid var(--b);
}
.item:first-child { border-top: 1px solid var(--b); }
.meta { padding-top: 2px; }
.period { display: block; font-family: var(--ff-mono); font-size: 11px; color: var(--txt-4); letter-spacing: .07em; margin-bottom: 6px; }
.org { display: block; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: .09em; color: var(--teal); }
.body h3 { font-size: 15px; font-weight: 600; color: var(--txt); letter-spacing: -.01em; margin-bottom: .9rem; line-height: 1.3; }
.body ul { list-style: none; display: flex; flex-direction: column; gap: 5px; margin-bottom: 1.25rem; }
.body li { font-size: 13.5px; color: var(--txt-2); line-height: 1.7; padding-left: 1.1rem; position: relative; }
.body li::before { content: ''; position: absolute; left: 0; top: 10px; width: 4px; height: 4px; border-radius: 50%; background: var(--teal); opacity: .5; }
.impact {
  display: flex; align-items: flex-start; gap: 10px;
  padding: 10px 14px;
  background: var(--teal-dim); border-left: 2px solid var(--teal);
  border-radius: 0 var(--r-sm) var(--r-sm) 0;
}
.impact-label { font-family: var(--ff-mono); font-size: 10px; font-weight: 500; text-transform: uppercase; letter-spacing: .1em; color: var(--teal); flex-shrink: 0; padding-top: 1px; }
.impact-text { font-size: 13px; color: var(--txt-2); line-height: 1.55; }
.exp-link {
  display: inline-flex; align-items: center; gap: 5px;
  margin-top: .85rem;
  font-size: 12px; font-weight: 500;
  color: var(--teal);
  border-bottom: 1px solid rgba(0,212,184,.25);
  padding-bottom: 1px;
  transition: border-color .18s;
}
.exp-link:hover { border-color: var(--teal); }
</style>