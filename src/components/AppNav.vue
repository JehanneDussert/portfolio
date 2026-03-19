<template>
  <nav class="nav" :class="{ scrolled }">
    <RouterLink to="/" class="logo">
      <span class="logo-id">JD</span>
      <span class="logo-div">/</span>
      <span class="logo-tag">AI Governance</span>
    </RouterLink>
    <div class="links">
      <a href="/#positioning">Positioning</a>
      <a href="/#experience">Experience</a>
      <a href="/#project">Project</a>
      <a href="/#skills">Skills</a>
      <RouterLink to="/contact" class="cta" data-hover>Contact</RouterLink>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
const scrolled = ref(false)
const fn = () => { scrolled.value = window.scrollY > 40 }
onMounted(() => window.addEventListener('scroll', fn, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', fn))
</script>

<style scoped>
.nav {
  position: sticky; top: 0; z-index: 100;
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 1.25rem; height: 56px;
  background: rgba(18,20,26,0.85);
  backdrop-filter: blur(18px);
  border-bottom: 1px solid transparent;
  transition: border-color .3s, background .3s;
}
.nav.scrolled { border-bottom-color: var(--b-2); background: rgba(18,20,26,0.97); }
.logo { display: flex; align-items: center; gap: 7px; font-family: var(--ff-mono); font-size: 13px; }
.logo-id { font-weight: 500; color: var(--teal); letter-spacing: .06em; }
.logo-div { color: var(--txt-4); }
.logo-tag { font-size: 12px; color: var(--txt-3); }
.links { display: flex; align-items: center; gap: 2.25rem; }
@media (max-width: 640px) {
  .logo-sub { display: none; }
  .links { gap: 1.25rem; }
  .links a:not(.cta) { display: none; }
}
.links a {
  font-size: 12px; font-weight: 500; letter-spacing: .07em; text-transform: uppercase;
  color: var(--txt-3); transition: color .18s; position: relative;
}
.links a::after {
  content: ''; position: absolute; bottom: -3px; left: 0; right: 0;
  height: 1px; background: var(--teal);
  transform: scaleX(0); transform-origin: left;
  transition: transform .2s var(--ease);
}
.links a:hover { color: var(--txt); }
.links a:hover::after { transform: scaleX(1); }
.cta {
  padding: 7px 16px !important; background: var(--teal-dim) !important;
  color: var(--teal) !important; border: 1px solid rgba(0,212,184,.25) !important;
  border-radius: var(--r-sm) !important; transition: background .18s, border-color .18s !important;
}
.cta:hover { background: var(--teal-glow) !important; border-color: rgba(0,212,184,.45) !important; }
.cta::after { display: none !important; }
</style>