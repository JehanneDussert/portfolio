<template>
  <nav class="nav" :class="{ scrolled }">
    <RouterLink to="/" class="logo" data-hover>Jehanne Dussert</RouterLink>

    <!-- Desktop links -->
    <div class="links desktop">
      <a class="link" @click.prevent="goHome" data-hover>About</a>
      <RouterLink to="/writing" class="link" :class="{ active: isWriting }">Writing</RouterLink>
      <a href="https://github.com/JehanneDussert/govllm" target="_blank" rel="noopener" class="link ext">
        govllm <span class="ext-icon">↗</span>
      </a>
      <a href="https://arxiv.org/abs/2605.24737" target="_blank" rel="noopener" class="link ext">
        arXiv <span class="ext-icon">↗</span>
      </a>
    </div>

    <!-- Hamburger button -->
    <button class="burger" @click="open = !open" :class="{ active: open }" aria-label="Menu" data-hover>
      <span></span><span></span><span></span>
    </button>

    <!-- Mobile overlay -->
    <Transition name="overlay">
      <div v-if="open" class="mobile-overlay" @click="open = false">
        <div class="mobile-menu" @click.stop>
          <a class="mob-link" @click.prevent="goHome">About</a>
          <RouterLink to="/writing" @click="open = false" class="mob-link" :class="{ active: isWriting }">Writing</RouterLink>
          <a href="https://github.com/JehanneDussert/govllm" target="_blank" rel="noopener" @click="open = false" class="mob-link">
            govllm ↗
          </a>
          <a href="https://arxiv.org/abs/2605.24737" target="_blank" rel="noopener" @click="open = false" class="mob-link">
            arXiv ↗
          </a>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup lang="ts">
import { ref, computed, nextTick, onMounted, onUnmounted } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'

const scrolled = ref(false)
const open = ref(false)
const route = useRoute()
const router = useRouter()

const isWriting = computed(() => route.path.startsWith('/writing'))

async function goHome() {
  open.value = false
  if (route.path !== '/') {
    await router.push('/')
    await nextTick()
  }
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

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

.logo {
  font-family: var(--ff-mono); font-size: 13px; font-weight: 500;
  color: var(--teal); letter-spacing: .04em; text-decoration: none;
  transition: opacity .18s;
}
.logo:hover { opacity: .75; }

.links { display: flex; align-items: center; gap: 2.5rem; }

.link {
  font-size: 12px; font-weight: 500; letter-spacing: .07em; text-transform: uppercase;
  color: var(--txt-3); transition: color .18s; position: relative; text-decoration: none;
}
.link::after {
  content: ''; position: absolute; bottom: -3px; left: 0; right: 0;
  height: 1px; background: var(--teal);
  transform: scaleX(0); transform-origin: left;
  transition: transform .2s var(--ease);
}
.link:hover, .link.active { color: var(--txt); }
.link:hover::after, .link.active::after { transform: scaleX(1); }

.ext { display: flex; align-items: center; gap: 3px; }
.ext-icon { font-size: 10px; opacity: .6; }

/* hamburger */
.burger {
  display: none; flex-direction: column; justify-content: center; align-items: center;
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
  background: rgba(18,20,26,0.6); backdrop-filter: blur(4px);
}
.mobile-menu {
  position: absolute; top: 56px; left: 0; right: 0;
  background: var(--bg-2); border-bottom: 1px solid var(--b-2);
  display: flex; flex-direction: column;
  padding: 1.5rem 1.5rem 2rem; gap: 0;
}
.mob-link {
  font-size: 14px; font-weight: 500; text-transform: uppercase;
  letter-spacing: .08em; color: var(--txt-2);
  padding: 1rem 0; border-bottom: 1px solid var(--b);
  text-decoration: none; transition: color .18s;
}
.mob-link:last-child { border-bottom: none; }
.mob-link:hover, .mob-link.active { color: var(--teal); }

.overlay-enter-active, .overlay-leave-active { transition: opacity .25s; }
.overlay-enter-from, .overlay-leave-to { opacity: 0; }

@media (max-width: 768px) {
  .nav { padding: 0 1.25rem; }
  .desktop { display: none; }
  .burger { display: flex; }
}
</style>
