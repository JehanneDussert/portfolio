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
  </section>
</template>

<script setup lang="ts">
import { usePortfolioData } from '@/composables/usePortfolioData'
const { skills } = usePortfolioData()
const labels = { governance: 'AI Governance', deployment: 'LLM Deployment', observability: 'Observability', engineering: 'Engineering' }
</script>

<style scoped>
.s { padding: 5rem 3rem; border-top: 1px solid var(--b); background: var(--bg-2); }
@media (max-width: 768px) { .s { padding: 4rem 1.25rem; } }
.s-head { display: flex; align-items: baseline; gap: 1rem; margin-bottom: 2.5rem; }
.idx { font-family: var(--ff-mono); font-size: 11px; color: var(--txt-4); letter-spacing: .1em; }
.s-head h2 { font-size: 1.55rem; font-weight: 600; color: var(--txt); letter-spacing: -.01em; }
.skills-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 2.5rem; margin-bottom: 4rem; }
@media (max-width: 768px) { .skills-grid { grid-template-columns: repeat(2,1fr); gap: 2rem; } }
@media (max-width: 400px) { .skills-grid { grid-template-columns: 1fr; } }
.col-head { font-family: var(--ff-mono); font-size: 10px; font-weight: 500; text-transform: uppercase; letter-spacing: .1em; color: var(--teal); margin-bottom: 1rem; }
.col ul { list-style: none; display: flex; flex-direction: column; }
.col li {
  font-size: 13.5px; color: var(--txt-2);
  padding: 7px 0; border-bottom: 1px solid var(--b);
  transition: color .15s, padding-left .15s;
}
.col li:hover { color: var(--teal); padding-left: 4px; }

</style>