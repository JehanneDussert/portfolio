<template>
  <article class="sheet">
    <SheetHead :tag="sheet.tag" :title="sheet.title" />

    <p v-if="sheet.figure" class="figure">
      <span class="num"><CountUp :value="sheet.figure.value" :run="run" /><span class="unit">&nbsp;{{ sheet.figure.unit }}</span></span>
      <span v-if="sheet.figure.vs" class="vs">vs {{ sheet.figure.vs }}</span>
    </p>
    <p v-else-if="sheet.headline" class="figure text">
      <span class="num">{{ sheet.headline }}</span>
    </p>

    <p class="lede">{{ sheet.lede }}</p>

    <div v-if="layout === 'media-left'" class="pa media-left">
      <div class="media"><slot name="media" /></div>
      <div class="stack">
        <section class="block">
          <h3>Problem</h3>
          <p>{{ sheet.problem }}</p>
        </section>
        <section class="block">
          <h3>Approach</h3>
          <p>{{ sheet.approach }}</p>
        </section>
      </div>
    </div>
    <template v-else>
      <div class="pa cols">
        <section class="block">
          <h3>Problem</h3>
          <p>{{ sheet.problem }}</p>
        </section>
        <section class="block">
          <h3>Approach</h3>
          <p>{{ sheet.approach }}</p>
        </section>
      </div>
      <div class="media wide"><slot name="media" /></div>
    </template>

    <h3 class="sr-only">Also</h3>
    <ul class="also">
      <li v-for="row in sheet.also" :key="row.key">
        <span class="key">{{ row.key }}</span>
        <span class="txt">{{ row.text }}</span>
      </li>
    </ul>

    <ul class="buttons">
      <li v-for="b in sheet.buttons" :key="b.href">
        <a :href="b.href" target="_blank" rel="noopener" class="btn" :class="{ primary: b.primary }">
          {{ b.label }} <span class="arrow" aria-hidden="true">↗</span><span class="sr-only"> (opens in a new tab)</span>
        </a>
      </li>
    </ul>
  </article>
</template>

<script setup lang="ts">
import type { ProjectSheet } from '@/data/site'
import SheetHead from './SheetHead.vue'
import CountUp from './CountUp.vue'

defineProps<{ sheet: ProjectSheet; layout: 'media-left' | 'media-below'; run: boolean }>()
</script>

<style scoped>
.figure {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  column-gap: 24px;
  margin: 28px 0 20px;
  line-height: .95;
}
.num {
  font-size: 128px;
  font-weight: 700;
  letter-spacing: -0.05em;
  color: var(--c);
  font-variant-numeric: tabular-nums;
}
.unit {
  font-size: .4em;
  letter-spacing: -0.02em;
}
.text .num {
  font-size: 80px;
  letter-spacing: -0.04em;
  line-height: 1;
}
.vs {
  font-size: 52px;
  font-weight: 500;
  letter-spacing: -0.03em;
  color: var(--menu-bar);
}
.lede {
  font-size: 20px;
  line-height: 1.5;
  color: var(--mid);
  max-width: 640px;
}

.pa { margin-top: 56px; }
.media-left {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 48px;
  align-items: center;
}
.stack { display: grid; gap: 32px; }
.cols {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
}
.block h3 {
  font-size: 13px;
  font-weight: 700;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: var(--dim);
  margin-bottom: 10px;
}
.block p {
  font-size: 16px;
  line-height: 1.65;
  color: var(--mid);
}
.media.wide { margin-top: 40px; }

.also { margin-top: 56px; }
.also li {
  display: grid;
  grid-template-columns: minmax(120px, 160px) 1fr;
  gap: 24px;
  align-items: baseline;
  padding: 18px 0;
  border-top: 1px solid var(--rule);
}
.also li:last-child { border-bottom: 1px solid var(--rule); }
.key {
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--ring);
}
.txt {
  font-size: 16px;
  color: var(--mute);
}

.buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 40px;
}
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 48px;
  padding: 12px 24px;
  border-radius: 999px;
  border: 1px solid var(--rule);
  font-size: 16px;
  font-weight: 500;
  color: var(--fg);
  transition: border-color .3s, background-color .3s;
}
.btn:hover { border-color: var(--dim); }
.btn.primary {
  background: var(--c);
  border-color: var(--c);
  color: var(--on-accent);
}
.btn.primary:hover { border-color: var(--c); filter: brightness(1.08); }
.arrow {
  display: inline-block;
  transition: transform .3s var(--ease-out);
}
.btn:hover .arrow { transform: translate(2px, -2px); }

@media (max-width: 899px) {
  .figure { column-gap: 14px; margin: 20px 0 16px; }
  .num { font-size: 72px; }
  .text .num { font-size: 48px; }
  .vs { font-size: 32px; }
  .lede { font-size: 18px; }
  .pa { margin-top: 40px; }
  .media-left,
  .cols { grid-template-columns: 1fr; gap: 32px; }
  .also { margin-top: 40px; }
  .also li { grid-template-columns: 1fr; gap: 4px; }
}
</style>
