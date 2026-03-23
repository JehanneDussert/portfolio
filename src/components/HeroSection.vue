<template>
  <section class="hero">
    <div class="hero-photo reveal reveal-delay-1">
      <div class="photo-wrap">
        <img src="/hero.jpg" alt="Jehanne Dussert speaking" class="photo" />
      </div>
    </div>
    <div class="hero-right-content">
      <div class="eyebrow reveal">
        <span class="ew-line"></span>
        <span class="ew-text">GenAI Tech Lead · Paris (open to relocation) · French Tax Administration (DGFiP)</span>
      </div>
      <h1 class="title reveal reveal-delay-1">
        AI Governance<br />
        <span class="title-accent">by Design</span>
      </h1>
      <p class="desc reveal reveal-delay-2">
        Deploying and monitoring LLM-based systems at national scale (95K users),
        at the intersection of software engineering, observability, and institutional governance.
      </p>
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
      <div class="stats-inline reveal reveal-delay-3">
        <div v-for="s in stats" :key="s.num" class="stat-item">
          <span class="stat-num">{{ s.num }}</span>
          <span class="stat-label">{{ s.label }}</span>
        </div>
      </div>
      <div class="actions reveal reveal-delay-4">
        <a href="/#experience" class="btn-primary" data-hover>View experience</a>
        <a href="/#contact" class="btn-ghost" data-hover>Get in touch →</a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const stats = [
  { num: '95K', label: 'public sector users' },
  { num: '50+', label: 'use cases evaluated' },
  { num: '40+', label: 'contributors coordinated' },
  { num: '3', label: 'EU mandates' },
]
</script>

<style scoped>
.hero {
  min-height: calc(100vh - 56px);
  display: grid;
  grid-template-columns: 0.75fr 1.25fr;
  align-items: center;
  gap: 4rem;
  padding: 4rem 3rem;
}

.eyebrow { display: flex; align-items: center; gap: 12px; margin-bottom: 1.5rem; }
.ew-line { display: block; width: 28px; height: 1px; background: var(--teal); flex-shrink: 0; }
.ew-text { font-family: var(--ff-mono); font-size: 11px; color: var(--teal); letter-spacing: .1em; text-transform: uppercase; }

.title {
  font-size: clamp(2.6rem,4vw,4.2rem); font-weight: 300;
  line-height: 1.06; letter-spacing: -.025em; color: var(--txt);
  margin-bottom: 1.5rem;
}
.title-accent { display: block; font-weight: 600; color: var(--teal); }
.desc { font-size: 15px; color: var(--txt-2); line-height: 1.8; margin-bottom: 1.75rem; }

.dual { display: flex; align-items: center; gap: 12px; margin-bottom: 1.75rem; flex-wrap: wrap; }
.dual-pill {
  display: flex; align-items: center; gap: 8px;
  padding: 8px 14px; border-radius: var(--r-md); border: 1px solid var(--b-2);
}
.dual-pill.tech { background: var(--teal-dim); border-color: rgba(0,212,184,.2); }
.dual-pill.law  { background: var(--amber-dim); border-color: rgba(240,165,0,.2); }
.pill-icon { font-family: var(--ff-mono); font-size: 13px; font-weight: 500; }
.dual-pill.tech .pill-icon { color: var(--teal); }
.dual-pill.law  .pill-icon { color: var(--amber); }
.pill-label { font-size: 12px; font-weight: 600; color: var(--txt); }
.pill-sub { font-size: 11px; color: var(--txt-3); }
.dual-sep { font-size: 14px; color: var(--txt-4); font-weight: 300; }

/* stats inline sous les pills */
.stats-inline {
  display: flex; gap: 0;
  border: 1px solid var(--b); border-radius: var(--r-md);
  overflow: hidden; margin-bottom: 2rem;
}
.stat-item {
  flex: 1; padding: .75rem 1rem;
  display: flex; flex-direction: column; gap: 2px;
  border-right: 1px solid var(--b);
}
.stat-item:last-child { border-right: none; }
.stat-num {
  font-size: 1.2rem; font-weight: 600;
  color: var(--teal); letter-spacing: -.02em; line-height: 1;
}
.stat-label { font-size: 10px; color: var(--txt-3); text-transform: uppercase; letter-spacing: .06em; }

.actions { display: flex; align-items: center; gap: 1rem; }
.btn-primary {
  display: inline-flex; align-items: center;
  padding: 10px 22px; background: var(--teal); color: #000;
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

/* photo — grande, pleine hauteur droite */
.hero-photo { display: flex; align-items: center; }
.photo-wrap {
  width: 100%; border-radius: var(--r-lg);
  overflow: hidden; aspect-ratio: 3/4; max-height: 65vh;
}
.photo {
  width: 100%; height: 100%;
  object-fit: cover; object-position: center 15%;
  display: block; filter: grayscale(8%);
  transition: filter .3s;
}
.photo-wrap:hover .photo { filter: grayscale(0%); }

@media (max-width: 900px) {
  .hero { grid-template-columns: 1fr; padding: 3rem 1.25rem; min-height: auto; gap: 2.5rem; }
  .hero-photo { height: auto; }
  .photo-wrap { min-height: 260px; aspect-ratio: 3/2; }
  .photo { object-position: center 10%; }
  .dual { flex-direction: column; align-items: flex-start; gap: 8px; }
  .dual-sep { display: none; }
}
</style>