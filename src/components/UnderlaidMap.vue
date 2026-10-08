<template>
  <figure class="map">
    <!-- Both versions stay loaded; the theme switch cross-fades them. -->
    <picture class="layer light">
      <source srcset="/img/underlaid-map-light-800.webp 800w, /img/underlaid-map-light.webp 1600w" sizes="(max-width: 899px) calc(100vw - 40px), 460px" type="image/webp" />
      <img src="/img/underlaid-map-light.png" alt="" width="1600" height="1601" loading="lazy" decoding="async" />
    </picture>
    <picture class="layer dark">
      <source srcset="/img/underlaid-map-dark-800.webp 800w, /img/underlaid-map-dark.webp 1600w" sizes="(max-width: 899px) calc(100vw - 40px), 460px" type="image/webp" />
      <img src="/img/underlaid-map-dark.png" :alt="t.underlaid.mapAlt" width="1600" height="1601" loading="lazy" decoding="async" />
    </picture>
  </figure>
</template>

<script setup lang="ts">
import { usePage } from '@/composables/useContent'

const { t } = usePage()
</script>

<style scoped>
.map {
  position: relative;
  aspect-ratio: 1600 / 1601;
  width: 100%;
}
.layer,
.layer img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.layer { transition: opacity .5s; }
.light { opacity: 0; }
:root[data-theme='light'] .light { opacity: 1; }
:root[data-theme='light'] .dark { opacity: 0; }
</style>
