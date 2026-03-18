<template>
  <main class="page">
    <div class="inner">
      <div class="eyebrow reveal"><span class="ew-line"></span><span>Let's connect</span></div>
      <h1 class="title reveal reveal-delay-1">Open to any role<br /><span class="acc">at the intersection</span></h1>
      <p class="desc reveal reveal-delay-2">
        Technical AI work and governance — a position, a mission, an advisory role, or a collaboration.
      </p>

      <div class="links reveal reveal-delay-3">
        <a href="https://calendly.com/jehanne-dussert/30min" target="_blank" rel="noopener" class="link-card primary" data-hover>
          <div class="link-icon">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="2" y="3" width="14" height="13" rx="2" stroke="currentColor" stroke-width="1.4"/><path d="M6 1v4M12 1v4M2 7h14" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>
          </div>
          <div>
            <p class="link-title">Book a 30-min call</p>
            <p class="link-sub">calendly.com/jehanne-dussert</p>
          </div>
          <span class="link-arrow">→</span>
        </a>

        <a href="https://www.linkedin.com/in/jehanne-dussert" target="_blank" rel="noopener" class="link-card" data-hover>
          <div class="link-icon">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="1" y="1" width="16" height="16" rx="3" stroke="currentColor" stroke-width="1.4"/><path d="M5 7v6M5 4.5v.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><path d="M8 13v-3.5A1.5 1.5 0 0 1 11.5 8v0A1.5 1.5 0 0 1 13 9.5V13" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>
          </div>
          <div>
            <p class="link-title">Connect on LinkedIn</p>
            <p class="link-sub">linkedin.com/in/jehanne-dussert</p>
          </div>
          <span class="link-arrow">→</span>
        </a>

        <a href="https://github.com/jehannedussert" target="_blank" rel="noopener" class="link-card" data-hover>
          <div class="link-icon">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 1.5a7.5 7.5 0 0 0-2.372 14.61c.375.07.512-.163.512-.362v-1.27c-2.085.453-2.523-.998-2.523-.998-.34-.865-.83-1.096-.83-1.096-.679-.464.051-.455.051-.455.75.053 1.145.771 1.145.771.667 1.143 1.75.813 2.176.622.068-.483.261-.813.474-1-.664-.075-1.363-.332-1.363-1.478 0-.327.117-.594.308-.803-.031-.076-.134-.38.029-.792 0 0 .251-.08.822.307A2.87 2.87 0 0 1 9 8.92c.254.001.51.034.748.1.57-.387.82-.307.82-.307.164.412.061.716.03.792.192.21.308.476.308.803 0 1.149-.702 1.402-1.37 1.475.108.093.204.276.204.556v.824c0 .2.136.435.516.361A7.502 7.502 0 0 0 9 1.5Z" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </div>
          <div>
            <p class="link-title">See my Github</p>
            <p class="link-sub">github.com/jehannedussert</p>
          </div>
          <span class="link-arrow">→</span>
        </a>
      </div>

      <div class="avail reveal reveal-delay-4">
        <p class="avail-label">Open to</p>
        <div class="avail-tags">
          <span v-for="item in availability" :key="item" class="avail-tag">{{ item }}</span>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">

const availability = [
  'Roles combining engineering & AI governance',
  'Freelance missions & advisory',
  'Talks & conference appearances',
  'Research & open-source collaboration',
]
</script>

<style scoped>
.page {
  min-height: calc(100vh - 56px);
  display: flex; align-items: center;
  padding: 5rem 3rem;
}
.inner { max-width: 620px; margin: 0 auto; width: 100%; }
.eyebrow { display: flex; align-items: center; gap: 12px; font-family: var(--ff-mono); font-size: 11px; color: var(--teal); letter-spacing: .1em; text-transform: uppercase; margin-bottom: 1.5rem; }
.ew-line { display: block; width: 28px; height: 1px; background: var(--teal); }
.title { font-size: clamp(2.2rem, 4vw, 3.2rem); font-weight: 300; line-height: 1.06; letter-spacing: -.025em; color: var(--txt); margin-bottom: 1.25rem; }
.acc { display: block; font-weight: 600; color: var(--teal); }
.desc { font-size: 15px; color: var(--txt-2); line-height: 1.8; margin-bottom: 2.5rem; }

.links { display: flex; flex-direction: column; gap: .75rem; margin-bottom: 2.5rem; }
.link-card {
  display: flex; align-items: center; gap: 1rem;
  padding: 1rem 1.25rem;
  background: var(--bg-2); border: 1px solid var(--b);
  border-radius: var(--r-md);
  transition: border-color .2s, transform .2s var(--ease);
}
.link-card:hover { border-color: var(--b-3); transform: translateX(4px); }
.link-card.primary { border-color: rgba(0,212,184,.25); background: var(--teal-dim); }
.link-card.primary:hover { border-color: rgba(0,212,184,.45); }
.link-icon { color: var(--txt-3); flex-shrink: 0; }
.link-card.primary .link-icon { color: var(--teal); }
.link-title { font-size: 14px; font-weight: 500; color: var(--txt); margin-bottom: 2px; }
.link-card.primary .link-title { color: var(--teal); }
.link-sub { font-family: var(--ff-mono); font-size: 11px; color: var(--txt-3); }
.link-arrow { margin-left: auto; font-size: 14px; color: var(--txt-4); transition: color .2s; }
.link-card:hover .link-arrow { color: var(--txt-2); }
.link-card.primary .link-arrow { color: var(--teal); opacity: .6; }

.avail-label { font-family: var(--ff-mono); font-size: 10px; font-weight: 500; text-transform: uppercase; letter-spacing: .1em; color: var(--txt-4); margin-bottom: .85rem; }
.avail-tags { display: flex; flex-wrap: wrap; gap: 8px; }
.avail-tag {
  font-size: 12.5px; color: var(--txt-2);
  background: var(--bg-3); border: 1px solid var(--b);
  padding: 5px 12px; border-radius: var(--r-sm);
}
</style>