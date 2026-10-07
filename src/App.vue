<template>
  <a class="skip" href="#main">Skip to content</a>
  <div class="wrap">
    <header class="top">
      <button type="button" class="theme" @click="toggle">
        <span class="sr-only">Switch to </span><span class="to-light">Light</span><span class="to-dark">Dark</span><span class="sr-only"> theme</span>
      </button>
    </header>

    <main
      id="main"
      tabindex="-1"
      class="shell"
      :class="[mode, { arrive, navigated, leaving: leavingHome }]"
    >
      <aside class="side">
        <div class="ident">
          <h1 class="name"><RouterLink to="/">{{ person.name }}</RouterLink></h1>
          <div class="intro" :aria-hidden="mode === 'section'">
            <div class="intro-in"><p>{{ person.intro }}</p></div>
          </div>
        </div>

        <nav aria-label="Main">
          <ul class="menu">
            <li v-for="(s, i) in sections" :key="s.key">
              <RouterLink
                :to="`/${s.key}`"
                class="entry"
                :class="{ active: current === s.key }"
                :aria-current="current === s.key ? 'page' : undefined"
                :style="{ '--c': s.color, '--c-ink': s.ink, '--i': i }"
                @click="onEntry($event, s.key)"
              >
                <span class="dot" aria-hidden="true" />
                <span class="label">{{ s.label }}</span>
                <span class="short">{{ s.short }}</span>
              </RouterLink>
            </li>
          </ul>
        </nav>

        <ul class="links">
          <li v-for="l in person.links" :key="l.label">
            <a :href="l.href" v-bind="l.href.startsWith('http') ? { target: '_blank', rel: 'noopener' } : {}">{{ l.label }}</a>
          </li>
        </ul>
      </aside>

      <section class="panel" :style="panelStyle" :aria-hidden="mode === 'home' ? 'true' : undefined">
        <div class="content" :class="{ in: visible }">
          <SectionContent v-if="shown" :section="shown" :visible="visible" />
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useHead } from '@unhead/vue'
import { home, person, SITE_URL, sectionByKey, sections, type SectionKey } from '@/data/site'
import { useShell } from '@/composables/useShell'
import { useTheme } from '@/composables/useTheme'
import SectionContent from '@/components/SectionContent.vue'

const route = useRoute()
const router = useRouter()

const keyOf = (name: unknown): SectionKey | null =>
  typeof name === 'string' && name in sectionByKey ? (name as SectionKey) : null

const current = computed(() => keyOf(route.name))
const { mode, shown, visible, navigated, leavingHome, go } = useShell(current.value)
const { toggle } = useTheme()

// Arrival animation only when the page is first loaded on "/".
const initialHome = current.value === null
const arrive = computed(() => initialHome && !navigated.value)

watch(current, (key) => go(key))

const panelStyle = computed(() => {
  const s = shown.value ? sectionByKey[shown.value] : null
  return s ? { '--c': s.color, '--c-ink': s.ink } : {}
})

function onEntry(e: MouseEvent, key: SectionKey) {
  // Clicking the open entry again goes back home.
  if (current.value === key && !e.metaKey && !e.ctrlKey) {
    e.preventDefault()
    router.push('/')
  }
}

// ── Head ────────────────────────────────────────────────────────
const meta = computed(() => {
  const s = current.value ? sectionByKey[current.value] : null
  return {
    title: s ? s.title : home.title,
    description: s ? s.description : home.description,
    url: s ? `${SITE_URL}/${s.key}` : `${SITE_URL}/`,
  }
})

const personLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Jehanne Dussert',
  url: `${SITE_URL}/`,
  jobTitle: 'AI Governance Lead',
  worksFor: { '@type': 'Organization', name: 'AXA Group Operations' },
  sameAs: ['https://www.linkedin.com/in/jehanne-dussert', 'https://github.com/JehanneDussert'],
  alumniOf: [
    { '@type': 'EducationalOrganization', name: 'École 42' },
    { '@type': 'CollegeOrUniversity', name: 'Université de Strasbourg' },
  ],
}

useHead({
  htmlAttrs: { lang: 'en' },
  title: () => meta.value.title,
  meta: [
    { name: 'description', content: () => meta.value.description },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'Jehanne Dussert' },
    { property: 'og:locale', content: 'en_GB' },
    { property: 'og:url', content: () => meta.value.url },
    { property: 'og:title', content: () => meta.value.title },
    { property: 'og:description', content: () => meta.value.description },
    { property: 'og:image', content: `${SITE_URL}/og-image.png` },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: () => meta.value.title },
    { name: 'twitter:description', content: () => meta.value.description },
    { name: 'twitter:image', content: `${SITE_URL}/og-image.png` },
  ],
  link: [{ rel: 'canonical', href: () => meta.value.url }],
  script: () =>
    current.value === null
      ? [{ type: 'application/ld+json', key: 'person', innerHTML: JSON.stringify(personLd) }]
      : [],
})
</script>

<style scoped>
.skip {
  position: absolute;
  left: 16px;
  top: -100px;
  z-index: 100;
  padding: 10px 16px;
  border-radius: 8px;
  background: var(--fg);
  color: var(--bg);
  font-weight: 500;
}
.skip:focus-visible { top: 16px; }

.wrap {
  position: relative;
  max-width: 1240px;
  margin: 0 auto;
  padding: 48px;
}

/* ── Theme button ─────────────────────────────────────────────── */
.top {
  position: absolute;
  top: 40px;
  right: 48px;
  z-index: 20;
}
.theme {
  min-height: 44px;
  min-width: 44px;
  padding: 10px 18px;
  border: 1px solid var(--rule);
  border-radius: 999px;
  font-size: 14px;
  font-weight: 500;
  color: var(--mute);
  transition: color .3s, border-color .3s;
}
.theme:hover { color: var(--fg); border-color: var(--dim); }
.to-dark { display: none; }
:root[data-theme='light'] .to-dark { display: inline; }
:root[data-theme='light'] .to-light { display: none; }

/* ── Shell ────────────────────────────────────────────────────── */
.shell {
  position: relative;
  display: grid;
  grid-template-columns: 230px minmax(0, 1fr);
  column-gap: 72px;
  align-items: start;
}

.side {
  grid-column: 1;
  grid-row: 1;
  position: sticky;
  top: 48px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 52px;
  width: min(760px, calc(100vw - 96px));
  transition: width .8s var(--ease-move), gap .8s var(--ease-move);
}
.section .side { width: 230px; gap: 32px; }

.name {
  font-size: 22px;
  font-weight: 700;
  letter-spacing: -0.01em;
  line-height: 1.3;
  transition: font-size .8s var(--ease-move);
}
.section .name { font-size: 18px; }
.name a { display: inline-block; }

/* The intro folds away; grid rows animate the real height. */
.intro {
  display: grid;
  grid-template-rows: 1fr;
  opacity: 1;
  transition: grid-template-rows .7s var(--ease-move), opacity .35s, visibility 0s;
}
.intro-in { overflow: hidden; min-height: 0; }
.intro p {
  padding-top: 6px;
  font-size: 22px;
  line-height: 1.45;
  color: var(--mute);
}
.section .intro {
  grid-template-rows: 0fr;
  opacity: 0;
  visibility: hidden;
  transition: grid-template-rows .7s var(--ease-move), opacity .35s, visibility 0s .7s;
}

.menu {
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: gap .8s var(--ease-move);
}
.section .menu { gap: 8px; }

.entry {
  --ring: var(--c);
  display: inline-flex;
  align-items: center;
  gap: .42em;
  font-size: 40px;
  font-weight: 500;
  letter-spacing: -0.02em;
  line-height: 1.15;
  color: var(--menu-home);
  transition: font-size .8s var(--ease-move), color .5s;
}
.section .entry { font-size: 17px; color: var(--menu-bar); }
.entry:hover,
.entry:focus-visible,
.section .entry.active { color: var(--fg); }
:root[data-theme='light'] .entry { --ring: var(--c-ink); }

.dot {
  position: relative;
  flex: none;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--c);
  transition: transform .5s var(--ease-pop);
}
.dot::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: var(--c);
  opacity: 0;
}
.entry:hover .dot::after { animation: pulse 1.4s var(--ease-out) infinite; }
.section .entry.active .dot { transform: scale(1.3); }
.short { display: none; }

.links {
  display: flex;
  flex-wrap: wrap;
  font-size: 15px;
  color: var(--mute);
}
.links li + li::before {
  content: '·';
  padding: 0 .5em;
  color: var(--dim);
}
.links a { transition: color .3s; }
.links a:hover { color: var(--fg); }

/* Arrival on "/" */
.arrive .ident,
.arrive nav,
.arrive .links { animation: fadeUp .9s var(--ease-out) both; }
.arrive nav { animation-delay: .1s; }
.arrive .links { animation-delay: .2s; }
.arrive .dot { animation: dotIn .5s var(--ease-pop) both; animation-delay: calc(.35s + var(--i) * .1s); }

/* ── Panel ────────────────────────────────────────────────────── */
.panel {
  --ring: var(--c);
  grid-column: 2;
  grid-row: 1;
  min-width: 0;
  padding-top: 4px;
}
:root[data-theme='light'] .panel { --ring: var(--c-ink); }
.shell:focus { outline: none; }

.home .panel {
  position: absolute;
  inset: 0 0 auto 0;
  opacity: 0;
  transform: translateX(48px);
  visibility: hidden;
  pointer-events: none;
  transition: opacity .6s, transform .8s var(--ease-out), visibility 0s .6s;
}
.section .panel {
  opacity: 1;
  transform: none;
  transition: opacity .6s .3s, transform .8s var(--ease-out) .3s, visibility 0s .3s;
}

.content {
  opacity: 0;
  transform: translateY(14px);
  transition: opacity .3s, transform .3s;
}
.leaving .content { transition-duration: .25s; }
.content.in {
  opacity: 1;
  transform: none;
  transition: opacity .35s, transform .5s var(--ease-out);
}

/* ── Phone ────────────────────────────────────────────────────── */
@media (max-width: 899px) {
  .wrap { padding: 24px 20px 64px; }
  .top { position: static; display: flex; justify-content: flex-end; margin-bottom: 16px; }
  .shell { display: flex; flex-direction: column; align-items: stretch; gap: 28px; }
  .side { min-width: 0; }

  .side,
  .section .side {
    width: auto;
    position: static;
    transition: none;
  }
  .side { gap: 40px; }
  .entry { font-size: 32px; transition: color .5s; }
  .name, .intro, .menu { transition: none; }
  .entry { min-height: 44px; }

  /* Section: the column becomes a sticky horizontal row */
  .section .side {
    position: sticky;
    top: 0;
    flex-direction: row;
    align-items: center;
    gap: 18px;
    margin: 0 -20px;
    padding: 6px 20px;
    background: var(--bg);
    border-bottom: 1px solid var(--rule);
    overflow-x: auto;
    scrollbar-width: none;
  }
  .section .side::-webkit-scrollbar { display: none; }
  .section .ident { flex: none; }
  .section .name { font-size: 16px; white-space: nowrap; }
  .section .name a { display: inline-flex; align-items: center; min-height: 44px; }
  .section .intro { display: none; }
  .section .menu { flex-direction: row; gap: 4px; }
  .section .entry { font-size: 15px; padding: 0 8px; white-space: nowrap; }
  .section .label { display: none; }
  .section .short { display: inline; }
  .section .links { display: none; }
  .links a { display: inline-block; padding: 12px 0; }

  .navigated.section .side { animation: rowIn .5s var(--ease-out) both; }
  .navigated.home .side { animation: colIn .5s var(--ease-out) both; }

  .home .panel { transform: none; }
  .section .panel { transition: opacity .5s, visibility 0s; }
  .content { transform: translateY(24px); }
}
</style>
