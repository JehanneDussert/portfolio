<template>
  <span class="count">{{ shown }}</span>
</template>

<script setup lang="ts">
import { onBeforeUnmount, ref, watch } from 'vue'

const props = defineProps<{ value: number; run: boolean; duration?: number }>()

// Starts at the final value: server render, direct loads and no-JS show the real number.
const shown = ref(props.value)
let raf = 0

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)

function play() {
  cancelAnimationFrame(raf)
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    shown.value = props.value
    return
  }
  const d = props.duration ?? 1100
  const t0 = performance.now()
  const step = (now: number) => {
    const t = Math.min(1, (now - t0) / d)
    shown.value = Math.round(easeOutCubic(t) * props.value)
    if (t < 1) raf = requestAnimationFrame(step)
  }
  shown.value = 0
  raf = requestAnimationFrame(step)
}

// Counts once each time the sheet comes in.
watch(
  () => props.run,
  (run) => (run ? play() : cancelAnimationFrame(raf)),
)

onBeforeUnmount(() => cancelAnimationFrame(raf))
</script>

<style scoped>
.count { font-variant-numeric: tabular-nums; }
</style>
