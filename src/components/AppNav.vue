<template>
  <nav class="nav" :class="{ scrolled }">
    <a href="/" class="logo">
      <span class="logo-id">JD</span>
      <span class="logo-div">/</span>
      <span class="logo-tag">AI Governance</span>
    </a>

    <!-- Desktop links -->
    <div class="links desktop">
      <a href="/#positioning">Positioning</a>
      <a href="/#experience">Experience</a>
      <a href="/#project">Project</a>
      <a href="/#skills">Skills</a>
      <a href="/#contributions">Writing</a>
      <a href="/#contact" class="cta" data-hover>Contact</a>
    </div>

    <!-- Hamburger button -->
    <button class="burger" @click="open = !open" :class="{ active: open }" aria-label="Menu" data-hover>
      <span></span>
      <span></span>
      <span></span>
    </button>

    <!-- Mobile overlay -->
    <Transition name="overlay">
      <div v-if="open" class="mobile-overlay" @click="open = false">
        <div class="mobile-menu" @click.stop>
          <a href="/#positioning" @click="open = false">Positioning</a>
          <a href="/#experience" @click="open = false">Experience</a>
          <a href="/#project" @click="open = false">Project</a>
          <a href="/#skills" @click="open = false">Skills</a>
          <a href="/#contributions" @click="open = false">Writing</a>
          <a href="/#contact" @click="open = false" class="mobile-cta">Contact</a>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const open = ref(false)

const onScroll = () => { scrolled.value = window.scrollY > 40 }
onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.nav {
  position: sticky; top: 0; z-index: 100;
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 3rem; height: 56px;
  background: rgba(18,20,26,0.9);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid transparent;
  transition: border-color .3s, background .3s;
}
.nav.scrolled { border-bottom-color: var(--b-2); background: rgba(18,20,26,0.97); }

.logo { display: flex; align-items: center; gap: 7px; font-family: var(--ff-mono); font-size: 13px; text-decoration: none; }
.logo-id { font-weight: 500; color: var(--teal); letter-spacing: .06em; }
.logo-div { color: var(--txt-4); }
.logo-tag { font-size: 12px; color: var(--txt-3); }

.links { display: flex; align-items: center; gap: 2.25rem; }
.links a {
  font-size: 12px; font-weight: 500; letter-spacing: .07em; text-transform: uppercase;
  color: var(--txt-3); transition: color .18s; position: relative; text-decoration: none;
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

/* hamburger */
.burger {
  display: none;
  flex-direction: column; justify-content: center; align-items: center;
  gap: 5px; width: 36px; height: 36px;
  background: none; border: none; cursor: none; padding: 0;
}
.burger span {
  display: block; width: 22px; height: 1.5px;
  background: var(--txt-2); border-radius: 1px;
  transition: transform .25s var(--ease), opacity .2s, width .2s;
}
.burger.active span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
.burger.active span:nth-child(2) { opacity: 0; width: 0; }
.burger.active span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

/* mobile overlay */
.mobile-overlay {
  position: fixed; inset: 0; z-index: 99;
  background: rgba(18,20,26,0.6);
  backdrop-filter: blur(4px);
}
.mobile-menu {
  position: absolute; top: 56px; left: 0; right: 0;
  background: var(--bg-2);
  border-bottom: 1px solid var(--b-2);
  display: flex; flex-direction: column;
  padding: 1.5rem 1.5rem 2rem;
  gap: 0;
}
.mobile-menu a {
  font-size: 14px; font-weight: 500; text-transform: uppercase;
  letter-spacing: .08em; color: var(--txt-2);
  padding: 1rem 0; border-bottom: 1px solid var(--b);
  text-decoration: none; transition: color .18s;
}
.mobile-menu a:last-child { border-bottom: none; }
.mobile-menu a:hover { color: var(--teal); }
.mobile-cta { color: var(--teal) !important; }

.overlay-enter-active, .overlay-leave-active { transition: opacity .25s; }
.overlay-enter-from, .overlay-leave-to { opacity: 0; }

@media (max-width: 768px) {
  .nav { padding: 0 1.25rem; }
  .desktop { display: none; }
  .burger { display: flex; }
}
</style>