<template>
  <section id="skills" class="s">
    <div class="s-head reveal">
      <span class="idx">04</span>
      <h2>Skills</h2>
    </div>
    <div class="skills-grid">
      <div v-for="(tags,cat) in skills" :key="cat" class="col reveal">
        <p class="col-head">{{ labels[cat as keyof typeof labels] }}</p>
        <ul>
          <li v-for="t in tags" :key="t">{{ t }}</li>
        </ul>
      </div>
    </div>
    <div class="pubs reveal">
      <div class="pubs-head">
        <span class="idx">—</span>
        <p class="pubs-title">Publications & roles</p>
      </div>
      <div class="pubs-list">
        <div class="pub-item" v-for="p in pubs" :key="p.title">
          <span class="pub-year">{{ p.year }}</span>
          <div>
            <p class="pub-name">{{ p.title }}</p>
            <p class="pub-sub">{{ p.sub }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { usePortfolioData } from '@/composables/usePortfolioData'
const { skills } = usePortfolioData()
const labels = { governance: 'AI Governance', deployment: 'LLM Deployment', observability: 'Observability', engineering: 'Engineering' }
const pubs = [
  { year: '2025', title: 'EU Horizon — Expert Evaluator', sub: 'Assessment of AI proposals: risk, feasibility, impact' },
  { year: '2024', title: 'Council of Europe — AI Advisory Board', sub: 'Appointed member (1 of 5) · Co-authored AI governance report on justice systems' },
  { year: '2024', title: 'Co-author — Public sector & digital transformation', sub: 'Vuibert editions' },
  { year: '2024', title: 'GenAI Trainer — CNFPT', sub: 'National Centre for Local Public Administration' },
]
</script>

<style scoped>
.s { padding: 5rem 3rem; border-top: 1px solid var(--b); background: var(--bg-2); }
.s-head { display: flex; align-items: baseline; gap: 1rem; margin-bottom: 2.5rem; }
.idx { font-family: var(--ff-mono); font-size: 11px; color: var(--txt-4); letter-spacing: .1em; }
.s-head h2 { font-size: 1.55rem; font-weight: 600; color: var(--txt); letter-spacing: -.01em; }
.skills-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 2.5rem; margin-bottom: 4rem; }
.col-head { font-family: var(--ff-mono); font-size: 10px; font-weight: 500; text-transform: uppercase; letter-spacing: .1em; color: var(--teal); margin-bottom: 1rem; }
.col ul { list-style: none; display: flex; flex-direction: column; }
.col li {
  font-size: 13.5px; color: var(--txt-2);
  padding: 7px 0; border-bottom: 1px solid var(--b);
  transition: color .15s, padding-left .15s;
}
.col li:hover { color: var(--teal); padding-left: 4px; }
.pubs { border-top: 1px solid var(--b-3); padding-top: 2.5rem; }
.pubs-head { display: flex; align-items: baseline; gap: 1rem; margin-bottom: 1.5rem; }
.pubs-title { font-size: 13px; font-weight: 500; color: var(--txt-3); text-transform: uppercase; letter-spacing: .08em; }
.pubs-list { display: flex; flex-direction: column; }
.pub-item {
  display: grid; grid-template-columns: 68px 1fr; gap: 2rem;
  padding: .9rem 0; border-bottom: 1px solid var(--b); align-items: start;
}
.pub-year { font-family: var(--ff-mono); font-size: 11px; color: var(--txt-4); padding-top: 2px; }
.pub-name { font-size: 13.5px; font-weight: 500; color: var(--txt); margin-bottom: 2px; }
.pub-sub { font-size: 12.5px; color: var(--txt-3); }
</style>
