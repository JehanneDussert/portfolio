<template>
  <div class="video">
    <iframe
      v-if="playing"
      :src="src"
      :title="video.label"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
    <!-- Lightweight stand-in: YouTube only loads once the visitor asks for it. -->
    <button v-else type="button" class="facade" :aria-label="`Play: ${video.label}`" @click="playing = true">
      <img :src="video.poster" alt="" width="1280" height="720" loading="lazy" decoding="async" />
      <span class="play" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="28" height="28"><path d="M8 5.5v13l11-6.5z" fill="currentColor" /></svg>
      </span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { govllmVideo as video } from '@/data/site'

const playing = ref(false)
const src = computed(
  () =>
    `https://www.youtube-nocookie.com/embed/${video.youtubeId}?start=${video.start}&autoplay=1&rel=0&modestbranding=1`,
)
</script>

<style scoped>
.video {
  position: relative;
  aspect-ratio: 16 / 9;
  border-radius: 16px;
  overflow: hidden;
  background: var(--rule);
}
iframe,
.facade,
.facade img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
}
.facade img { object-fit: cover; }
.play {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 72px;
  height: 72px;
  margin: -36px 0 0 -36px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: var(--c);
  color: var(--on-accent);
  transition: transform .3s var(--ease-out);
}
.facade:hover .play,
.facade:focus-visible .play { transform: scale(1.08); }
.facade:focus-visible { outline-offset: -4px; border-radius: 16px; }
</style>
