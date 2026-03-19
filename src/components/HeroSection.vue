<template>
  <section class="hero">
    <div class="hero-left">
      <div class="eyebrow reveal">
        <span class="ew-line"></span>
        <span class="ew-text">GenAI Tech Lead · Paris (open to relocation) · French Directorate General of Public Finances</span>
      </div>
      <h1 class="title reveal reveal-delay-1">
        AI Governance<br />
        <span class="title-accent">by Design</span>
      </h1>
      <p class="desc reveal reveal-delay-2">
        Deploying and monitoring LLM-based systems at national scale (95K users),
        at the intersection of software engineering, observability, and institutional governance.
      </p>

      <!-- dual identity badge -->
      <div class="dual reveal reveal-delay-3">
        <div class="dual-pill tech">
          <span class="pill-icon">{ }</span>
          <span class="pill-label">École 42</span>
          <span class="pill-sub">Software engineering</span>
        </div>
        <span class="dual-sep">×</span>
        <div class="dual-pill law">
          <span class="pill-icon">§</span>
          <span class="pill-label">IT Law</span>
          <span class="pill-sub">Cyberjustice · Master's</span>
        </div>
      </div>

      <div class="actions reveal reveal-delay-4">
        <a href="/#experience" class="btn-primary" data-hover>View experience</a>
        <RouterLink to="/contact" class="btn-ghost" data-hover>Get in touch →</RouterLink>
      </div>
    </div>

    <div class="hero-right">
      <div
        v-for="(s, i) in stats"
        :key="s.num"
        class="stat reveal"
        :class="`reveal-delay-${i+1}`"
        data-hover
      >
        <span class="stat-num">{{ s.num }}</span>
        <p class="stat-label">{{ s.label }}</p>
        <p class="stat-sub">{{ s.sub }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const stats = [
  { num: '95K', label: 'Civil servants', sub: 'Served by deployed GenAI assistants' },
  { num: '50+', label: 'Use cases', sub: 'Evaluated in national AI doctrine' },
  { num: '40+', label: 'Contributors', sub: 'Legal, security, compliance, engineering' },
  { num: '11',  label: 'Directorates', sub: 'Standardised GenAI rollout, DGFiP' },
]
</script>

<style scoped>
.hero {
  min-height: calc(100vh - 56px);
  display: grid; grid-template-columns: 1.15fr 1fr;
  align-items: center; gap: 5rem;
  padding: 5rem 3rem;
}
@media (max-width: 768px) {
  .hero { grid-template-columns: 1fr; gap: 3rem; padding: 3rem 1.25rem; min-height: auto; }
  .hero-right { grid-template-columns: 1fr 1fr; }
  .dual { flex-direction: column; align-items: flex-start; gap: 10px; }
  .dual-sep { display: none; }
}
.eyebrow { display: flex; align-items: center; gap: 12px; margin-bottom: 1.5rem; }
.ew-line { display: block; width: 28px; height: 1px; background: var(--teal); flex-shrink: 0; }
.ew-text { font-family: var(--ff-mono); font-size: 11px; color: var(--teal); letter-spacing: .1em; text-transform: uppercase; }
.title {
  font-size: clamp(2.6rem,4.2vw,4rem); font-weight: 300;
  line-height: 1.06; letter-spacing: -.025em; color: var(--txt);
  margin-bottom: 1.5rem;
}
.title-accent { display: block; font-weight: 600; color: var(--teal); }
.desc { font-size: 15px; color: var(--txt-2); line-height: 1.8; max-width: 500px; margin-bottom: 2rem; }

/* dual pill */
.dual { display: flex; align-items: center; gap: 14px; margin-bottom: 2.5rem; }
.dual-pill {
  display: flex; align-items: center; gap: 10px;
  padding: 10px 16px; border-radius: var(--r-md);
  border: 1px solid var(--b-2);
}
.dual-pill.tech { background: var(--teal-dim); border-color: rgba(0,212,184,.2); }
.dual-pill.law  { background: var(--amber-dim); border-color: rgba(240,165,0,.2); }
.pill-icon { font-family: var(--ff-mono); font-size: 14px; font-weight: 500; }
.dual-pill.tech .pill-icon { color: var(--teal); }
.dual-pill.law  .pill-icon { color: var(--amber); }
.pill-label { font-size: 13px; font-weight: 600; color: var(--txt); }
.pill-sub { font-size: 11px; color: var(--txt-3); margin-left: -2px; }
.dual-sep { font-size: 16px; color: var(--txt-4); font-weight: 300; }

/* actions */
.actions { display: flex; align-items: center; gap: 1.25rem; }
.btn-primary {
  display: inline-flex; align-items: center;
  padding: 11px 24px; background: var(--teal); color: #000;
  font-size: 13px; font-weight: 600; letter-spacing: .02em;
  border-radius: var(--r-sm); transition: background .18s;
}
.btn-primary:hover { background: var(--teal-2); }
.btn-ghost {
  font-size: 13px; font-weight: 500; color: var(--txt-2);
  border-bottom: 1px solid var(--b-3); padding-bottom: 1px;
  transition: color .18s, border-color .18s;
}
.btn-ghost:hover { color: var(--teal); border-color: var(--teal); }

/* stats */
.hero-right { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
.stat {
  background: var(--bg-2); border: 1px solid var(--b);
  border-radius: var(--r-md); padding: 1.5rem;
  transition: border-color .2s, transform .2s var(--ease);
}
.stat:hover { border-color: var(--teal-glow); transform: translateY(-2px); }
.stat-num {
  display: block; font-size: 2rem; font-weight: 600;
  color: var(--teal); letter-spacing: -.02em; line-height: 1; margin-bottom: 7px;
}
.stat-label { font-size: 13px; font-weight: 500; color: var(--txt); margin-bottom: 3px; }
.stat-sub { font-size: 12px; color: var(--txt-3); line-height: 1.4; }
</style>