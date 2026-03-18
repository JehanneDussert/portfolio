<template>
  <section id="positioning" class="s">
    <div class="s-head reveal">
      <span class="idx">01</span>
      <h2>Positioning</h2>
    </div>
    <div class="grid">
      <div
        v-for="(c,i) in cards" :key="c.tag"
        class="card reveal" :class="`reveal-delay-${i+1}`"
        :style="`--cc:${c.color};--cb:${c.bg};--cborder:${c.border}`"
        data-hover
      >
        <div class="tag-row"><span class="tag">{{ c.tag }}</span></div>
        <h3>{{ c.title }}</h3>
        <p>{{ c.body }}</p>
        <ul>
          <li v-for="b in c.bullets" :key="b">{{ b }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const cards = [
  {
    tag: 'Deployment',
    title: 'LLM in production',
    color: 'var(--teal)',
    bg: 'var(--teal-dim)',
    border: 'rgba(0,212,184,0.18)',
    body: 'API integration, open-source model benchmarking, prompt engineering, A/B testing — all translated into architecture decisions.',
    bullets: ['TTFT & latency thresholds', 'Acceptance criteria with data scientists'],
  },
  {
    tag: 'Observability',
    title: 'Monitoring → Governance',
    color: '#7c8cf8',
    bg: 'rgba(124,140,248,0.08)',
    border: 'rgba(124,140,248,0.18)',
    body: 'Grafana / Prometheus / Loki stack. Production metrics don\'t stop at the dashboard — they feed compliance posture and evolve the governance.',
    bullets: ['Uptime, errors, user signals', 'Metrics as governance inputs'],
  },
  {
    tag: 'Governance',
    title: 'Frameworks that hold',
    color: 'var(--amber)',
    bg: 'var(--amber-dim)',
    border: 'rgba(240,165,0,0.18)',
    body: 'National doctrine, risk taxonomies, supervision models — built with 40+ cross-functional contributors and grounded in production reality.',
    bullets: ['AI Act, ANSSI PA-102, GDPR', '3-level supervision model'],
  },
]
</script>

<style scoped>
.s { padding: 5rem 3rem; border-top: 1px solid var(--b); }
.s-head { display: flex; align-items: baseline; gap: 1rem; margin-bottom: 2.5rem; }
.idx { font-family: var(--ff-mono); font-size: 11px; color: var(--txt-4); letter-spacing: .1em; }
.s-head h2 { font-size: 1.55rem; font-weight: 600; color: var(--txt); letter-spacing: -.01em; }
.grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 1.25rem; }
.card {
  background: var(--bg-2); border: 1px solid var(--b);
  border-radius: var(--r-lg); padding: 1.75rem;
  position: relative; overflow: hidden;
  transition: border-color .2s, transform .2s var(--ease);
}
.card::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
  background: var(--cc); transform: scaleX(0); transform-origin: left;
  transition: transform .3s var(--ease);
}
.card:hover { border-color: var(--cborder); transform: translateY(-2px); }
.card:hover::before { transform: scaleX(1); }
.tag-row { margin-bottom: 1rem; }
.tag {
  font-family: var(--ff-mono); font-size: 10px; font-weight: 500;
  letter-spacing: .1em; text-transform: uppercase;
  color: var(--cc); background: var(--cb);
  padding: 3px 9px; border-radius: 2px;
  border: 1px solid var(--cborder);
}
.card h3 { font-size: 15px; font-weight: 600; color: var(--txt); margin-bottom: .6rem; }
.card p { font-size: 13.5px; color: var(--txt-2); line-height: 1.7; margin-bottom: 1rem; }
.card ul { list-style: none; display: flex; flex-direction: column; gap: 4px; }
.card li {
  font-size: 12px; color: var(--txt-3);
  padding-left: 1rem; position: relative;
}
.card li::before { content: '—'; position: absolute; left: 0; color: var(--cc); opacity: .6; font-size: 11px; }
</style>
