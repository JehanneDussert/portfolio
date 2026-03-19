<template>
  <section id="project" class="s">
    <div class="s-head reveal">
      <span class="idx">03</span>
      <h2>Side project</h2>
    </div>
    <div class="card reveal">
      <div class="card-left">
        <div class="badges">
          <span v-for="b in ['Open source','Regulated sectors']" :key="b" class="badge">{{ b }}</span>
        </div>
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
        <ul class="highlights">
          <li v-for="h in project.highlights" :key="h">{{ h }}</li>
        </ul>
        <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank" rel="noopener" class="gh-link" data-hover>
          View on GitHub
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2 11L11 2M11 2H5M11 2V8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
      </div>
      <div class="card-right">
        <p class="rl">Stack</p>
        <div class="tags">
          <span v-for="t in project.stack" :key="t" class="tech">{{ t }}</span>
        </div>
        <div class="arch">
          <p class="rl">Architecture principles</p>
          <ul>
            <li>100% env-based config — zero hardcoded defaults</li>
            <li>Docker Compose as source of truth</li>
            <li>CORS errors treated as back-end 500s</li>
            <li>Local SLMs via Ollama for data sovereignty</li>
            <li>Model routing driven by governance criteria, not performance — each use case resolves to a model via its configured governance profile</li>
            <li>uv sync from back/ · JSON array for model lists</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { usePortfolioData } from '@/composables/usePortfolioData'
const { project } = usePortfolioData()
</script>

<style scoped>
.s { padding: 3rem 1.25rem; border-top: 1px solid var(--b); }
.s-head { display: flex; align-items: baseline; gap: 1rem; margin-bottom: 2rem; }
.idx { font-family: var(--ff-mono); font-size: 11px; color: var(--txt-4); letter-spacing: .1em; }
.s-head h2 { font-size: 1.55rem; font-weight: 600; color: var(--txt); letter-spacing: -.01em; }

.card {
  background: var(--bg-3); border: 1px solid var(--b-2);
  border-radius: var(--r-lg); padding: 2rem;
  display: flex; flex-direction: column; gap: 2rem;
}

/* Desktop : side by side */
@media (min-width: 860px) {
  .card { display: grid; grid-template-columns: 1.2fr 1fr; gap: 3rem; padding: 3rem; }
}

.badges { display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 1rem; }
.badge {
  font-family: var(--ff-mono); font-size: 10px; font-weight: 500;
  letter-spacing: .09em; text-transform: uppercase;
  color: var(--txt-3); border: 1px solid var(--b-2);
  padding: 3px 9px; border-radius: 2px;
}
.card-left h3 {
  font-size: 1.3rem; font-weight: 600; color: var(--txt);
  margin-bottom: .75rem; line-height: 1.25; letter-spacing: -.01em;
}
.card-left p { font-size: 14px; color: var(--txt-2); line-height: 1.75; margin-bottom: 1.25rem; }
.card-left, .card-right { min-width: 0; }

.highlights { list-style: none; display: flex; flex-direction: column; gap: 5px; margin-bottom: 1.75rem; }
.highlights li {
  font-size: 13px; color: var(--txt-3); line-height: 1.6;
  padding-left: 1rem; position: relative;
}
.highlights li::before {
  content: ''; position: absolute; left: 0; top: 8px;
  width: 3px; height: 3px; border-radius: 50%; background: var(--teal);
}
.gh-link {
  display: inline-flex; align-items: center; gap: 6px;
  font-size: 13px; font-weight: 500; color: var(--teal);
  border-bottom: 1px solid rgba(0,212,184,.25); padding-bottom: 2px;
  transition: color .18s, border-color .18s;
}
.gh-link:hover { color: var(--teal-2); border-color: rgba(0,184,158,.4); }

.card-right { border-top: 1px solid var(--b); padding-top: 1.5rem; }
@media (min-width: 860px) { .card-right { border-top: none; padding-top: 0; } }

.rl {
  font-family: var(--ff-mono); font-size: 10px; font-weight: 500;
  text-transform: uppercase; letter-spacing: .1em;
  color: var(--txt-4); margin-bottom: .85rem;
}
.tags { display: flex; flex-wrap: wrap; gap: 7px; margin-bottom: 1.75rem; }
.tech {
  font-family: var(--ff-mono); font-size: 11px;
  padding: 4px 10px; border-radius: 2px;
  background: var(--bg-4); color: var(--txt-2);
  border: 1px solid var(--b-2);
}
.arch { border-top: 1px solid var(--b); padding-top: 1.5rem; }
.arch ul { list-style: none; display: flex; flex-direction: column; gap: 6px; }
.arch li {
  font-size: 12.5px; color: var(--txt-3); line-height: 1.6;
  padding-left: 1rem; position: relative;
}
.arch li::before { content: '—'; position: absolute; left: 0; color: var(--txt-4); }
</style>