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
    <template v-if="talks.upcoming.length">
      <h3 class="intertitle first">{{ t.ui.upcoming }}</h3>
      <ListRows class="upcoming" :items="talks.upcoming" />
    </template>
    <ListRows class="list" :class="{ after: talks.upcoming.length }" :items="talks.past" />
    <h3 class="intertitle">{{ t.organisers.title }}</h3>
    <OrganisersFacts />
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { BUILD_DATE, type SectionKey } from '@/data/site'
import type { ListItem } from '@/content/types'
import { usePage } from '@/composables/useContent'
import ProjectSheet from './ProjectSheet.vue'
import SheetHead from './SheetHead.vue'
import ListRows from './ListRows.vue'
import UnderlaidMap from './UnderlaidMap.vue'
import VideoEmbed from './VideoEmbed.vue'
import OrganisersFacts from './OrganisersFacts.vue'

defineProps<{ section: SectionKey; visible: boolean }>()
const { t } = usePage()

// Split at build time (BUILD_DATE), so the prerendered page and the client agree.
// Upcoming: soonest first. Past: the order of the data, newest first.
const isUpcoming = (i: ListItem) => !!i.date && i.date >= BUILD_DATE
const talks = computed(() => ({
  upcoming: t.value.talks.filter(isUpcoming).sort((a, b) => a.date!.localeCompare(b.date!)),
  past: t.value.talks.filter((i) => !isUpcoming(i)),
}))
</script>

<style scoped>
.list { margin-top: 40px; }
.list.after { margin-top: 56px; }
/* The past list right below opens with its own rule: no double rule across the gap. */
.upcoming :deep(li:last-child) { border-bottom: 0; }
.intertitle {
  font-size: 13px;
  font-weight: 700;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: var(--dim);
  margin: 56px 0 16px;
}
.intertitle.first { margin-top: 40px; }
</style>
