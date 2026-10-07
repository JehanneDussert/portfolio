<template>
  <header class="head">
    <span class="rule" aria-hidden="true" />
    <p v-if="tag" class="tag">{{ tag }}</p>
    <h2 class="title" aria-live="polite">{{ title }}</h2>
  </header>
</template>

<script setup lang="ts">
defineProps<{ title: string; tag?: string }>()
</script>

<style scoped>
.rule {
  display: block;
  width: 0;
  height: 3px;
  border-radius: 2px;
  background: var(--c);
  margin-bottom: 28px;
  /* Out: stays drawn while the content fades, then resets. */
  transition: width 0s .3s;
}
.content.in .rule {
  width: 48px;
  transition: width .8s var(--ease-move);
}
.tag {
  font-size: 14px;
  color: var(--dim);
  margin-bottom: 10px;
}
.title {
  font-size: 40px;
  font-weight: 500;
  letter-spacing: -0.02em;
  line-height: 1.1;
}
@media (max-width: 899px) {
  .title { font-size: 32px; }
}
</style>
