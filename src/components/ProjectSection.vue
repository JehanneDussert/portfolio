<template>
  <section id="govllm" class="s">
    <div class="s-head reveal">
      <span class="idx">03</span>
      <h2>govllm</h2>
    </div>

    <div class="top reveal reveal-delay-1">
      <div class="top-left">
        <div class="badges">
          <span class="badge teal">Open source research</span>
          <span class="badge amber">Regulated sectors</span>
        </div>
        <h3>LLM Governance Monitoring Platform</h3>
        <p class="desc">
          How do you justify a model choice six months after go-live?
          govllm is my attempt to answer that — a self-hosted governance
          monitoring stack built for regulated environments, aligned to
          EU AI Act, GDPR, and ANSSI.
        </p>
        <ul class="highlights">
          <li>Governance-driven model routing — each use case resolves to a model via its configured profile</li>
          <li>Local SLMs via Ollama — data sovereignty by design</li>
        </ul>
        <a :href="project.githubUrl" target="_blank" rel="noopener" class="gh-link" data-hover>
          View on GitHub
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
            <path d="M2 11L11 2M11 2H5M11 2V8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </div>

      <div class="top-right">
        <p class="rl">Stack</p>
        <div class="tags">
          <span v-for="t in project.stack" :key="t" class="tech">{{ t }}</span>
        </div>
      </div>
    </div>

    <div class="matrix-wrap reveal reveal-delay-2">
      <GovernanceMatrix />
    </div>
  </section>
</template>

<script setup lang="ts">
import GovernanceMatrix from '@/components/GovernanceMatrix.vue'
import { usePortfolioData } from '@/composables/usePortfolioData'
const { project } = usePortfolioData()
</script>

<style scoped>
.s {
  padding: 5rem 3rem;
  border-top: 1px solid var(--b);
  background: #0a0c12;
}
@media (max-width: 768px) { .s { padding: 4rem 1.25rem; } }

.s-head {
  display: flex;
  align-items: baseline;
  gap: 1rem;
  margin-bottom: 2rem;
}
.idx {
  font-family: var(--ff-mono);
  font-size: 11px;
  color: rgba(232,234,240,.3);
  letter-spacing: .1em;
}
.s-head h2 {
  font-size: 1.55rem;
  font-weight: 600;
  color: #e8eaf0;
  letter-spacing: -.01em;
}

/* ── TOP ROW ── */
.top {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 3rem;
  margin-bottom: 2.5rem;
  align-items: start;
}
@media (max-width: 860px) {
  .top { grid-template-columns: 1fr; gap: 2rem; }
}

.badges {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}
.badge {
  font-family: var(--ff-mono);
  font-size: 10px;
  font-weight: 500;
  letter-spacing: .09em;
  text-transform: uppercase;
  padding: 3px 9px;
  border-radius: 2px;
}
.badge.teal  { color: var(--teal);  background: rgba(0,212,184,.08); border: 1px solid rgba(0,212,184,.25); }
.badge.amber { color: var(--amber); background: rgba(240,165,0,.08);  border: 1px solid rgba(240,165,0,.25); }

.top-left h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: .65rem;
  line-height: 1.25;
  letter-spacing: -.01em;
}

.desc {
  font-size: 14px;
  color: rgba(232,234,240,.6);
  line-height: 1.8;
  margin-bottom: 1.1rem;
}

.highlights {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 1.5rem;
}
.highlights li {
  font-size: 13px;
  color: rgba(232,234,240,.45);
  line-height: 1.6;
  padding-left: 1rem;
  position: relative;
}
.highlights li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 8px;
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: var(--teal);
}

.gh-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  font-weight: 500;
  color: var(--teal);
  border-bottom: 1px solid rgba(0,212,184,.25);
  padding-bottom: 2px;
  transition: color .18s, border-color .18s;
}
.gh-link:hover { color: var(--teal-2); border-color: rgba(0,184,158,.4); }

/* ── TOP RIGHT ── */
.top-right {
  border-left: 1px solid rgba(232,234,240,.08);
  padding-left: 3rem;
}
@media (max-width: 860px) {
  .top-right {
    border-left: none;
    border-top: 1px solid rgba(232,234,240,.08);
    padding-left: 0;
    padding-top: 1.5rem;
  }
}

.rl {
  font-family: var(--ff-mono);
  font-size: 10px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: .1em;
  color: rgba(232,234,240,.3);
  margin-bottom: .85rem;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
}
.tech {
  font-family: var(--ff-mono);
  font-size: 11px;
  padding: 4px 10px;
  border-radius: 2px;
  background: rgba(255,255,255,.05);
  color: rgba(232,234,240,.6);
  border: 1px solid rgba(255,255,255,.1);
}

/* ── MATRIX FULL WIDTH ── */
.matrix-wrap {
  width: 100%;
}
</style>