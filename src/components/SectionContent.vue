<template>
  <ProjectSheet v-if="section === 'underlaid'" :sheet="t.underlaid" layout="media-left" :run="visible">
    <template #media><UnderlaidMap /></template>
  </ProjectSheet>

  <ProjectSheet v-else-if="section === 'govllm'" :sheet="t.govllm" layout="media-below" :run="visible">
    <template #media><VideoEmbed /></template>
  </ProjectSheet>

  <article v-else-if="section === 'path'" class="list-page">
    <SheetHead :title="t.sections.path.label" />
    <ListRows class="list" :items="t.path" />
    <h3 class="intertitle">{{ t.ui.education }}</h3>
    <ListRows :items="t.education" />
  </article>

  <article v-else-if="section === 'talks'" class="list-page">
    <SheetHead :title="t.sections.talks.label" />
    <ListRows class="list" :items="t.talks" />
  </article>

  <article v-else-if="section === 'commitments'" class="list-page">
    <SheetHead :title="t.sections.commitments.label" />
    <ul class="tags">
      <li v-for="c in t.commitments" :key="c" class="tag"><span class="dot" aria-hidden="true" />{{ c }}</li>
    </ul>
  </article>
</template>

<script setup lang="ts">
import type { SectionKey } from '@/data/site'
import { usePage } from '@/composables/useContent'
import ProjectSheet from './ProjectSheet.vue'
import SheetHead from './SheetHead.vue'
import ListRows from './ListRows.vue'
import UnderlaidMap from './UnderlaidMap.vue'
import VideoEmbed from './VideoEmbed.vue'

defineProps<{ section: SectionKey; visible: boolean }>()
const { t } = usePage()
</script>

<style scoped>
.list { margin-top: 40px; }
.intertitle {
  font-size: 13px;
  font-weight: 700;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: var(--dim);
  margin: 56px 0 16px;
}
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 40px;
}
.tag {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 22px;
  border: 1px solid var(--rule);
  border-radius: 999px;
  font-size: 18px;
  color: var(--fg);
}
.dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--c);
}
</style>
