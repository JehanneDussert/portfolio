<template>
  <ul class="rows">
    <li v-for="item in items" :key="item.title">
      <component
        :is="item.href ? 'a' : 'div'"
        class="row"
        :class="{ link: item.href }"
        v-bind="item.href ? { href: item.href, target: '_blank', rel: 'noopener' } : {}"
      >
        <span class="main">
          <span class="title">
            {{ item.title }}<template v-if="item.href">&nbsp;<span class="arrow" aria-hidden="true">↗</span><span class="sr-only"> {{ t.ui.newTab }}</span></template>
          </span>
          <span class="sub">{{ item.subtitle }}</span>
        </span>
        <span class="year">{{ item.year }}</span>
      </component>
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { ListItem } from '@/content/types'
import { usePage } from '@/composables/useContent'

defineProps<{ items: ListItem[] }>()
const { t } = usePage()
</script>

<style scoped>
.rows li { border-top: 1px solid var(--rule); }
.rows li:last-child { border-bottom: 1px solid var(--rule); }
.row {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 24px;
  align-items: baseline;
  padding: 18px 0;
  min-height: 44px;
}
.main { display: grid; gap: 4px; }
.title {
  font-size: 18px;
  font-weight: 500;
  color: var(--fg);
}
.sub,
.year {
  font-size: 14px;
  color: var(--dim);
}
.year { font-variant-numeric: tabular-nums; white-space: nowrap; }
.arrow {
  display: inline-block;
  color: var(--ring);
  transition: transform .3s var(--ease-out);
}
.link:hover .arrow,
.link:focus-visible .arrow { transform: translate(2px, -2px); }
.link:focus-visible { outline-offset: 2px; }
</style>
