<template>
  <dl class="facts">
    <div class="fact">
      <dt>{{ o.bio.label }}</dt>
      <dd>
        <p class="bio">{{ o.bio.text }}</p>
        <button type="button" class="copy" @click="copy">
          {{ copied ? o.copied : o.copy }}<span v-if="!copied" class="sr-only"> — {{ o.bio.label }}</span>
        </button>
        <span class="sr-only" role="status">{{ copied ? o.copied : '' }}</span>
      </dd>
    </div>

    <div v-for="f in o.facts" :key="f.label" class="fact">
      <dt>{{ f.label }}</dt>
      <dd>{{ f.text }}</dd>
    </div>

    <div class="fact">
      <dt>{{ o.contact.label }}</dt>
      <dd><a class="link" :href="`mailto:${o.contact.email}`">{{ o.contact.email }}</a></dd>
    </div>

    <div v-if="o.photos.items.length" class="fact">
      <dt>{{ o.photos.label }}</dt>
      <dd>
        <ul class="photos">
          <li v-for="p in o.photos.items" :key="p.href">
            <a class="link" :href="p.href" download>{{ p.label }}&nbsp;<span aria-hidden="true">↓</span></a>
          </li>
        </ul>
      </dd>
    </div>
  </dl>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, ref } from 'vue'
import { usePage } from '@/composables/useContent'

const { t } = usePage()
const o = computed(() => t.value.organisers)

const copied = ref(false)
let timer = 0

async function copy() {
  const text = o.value.bio.text
  try {
    await navigator.clipboard.writeText(text)
  } catch {
    // No Clipboard API (http, older browsers): copy through a hidden field.
    const field = document.createElement('textarea')
    field.value = text
    field.setAttribute('readonly', '')
    field.style.position = 'fixed'
    field.style.opacity = '0'
    document.body.appendChild(field)
    field.select()
    const ok = document.execCommand('copy')
    field.remove()
    if (!ok) return
  }
  copied.value = true
  clearTimeout(timer)
  timer = window.setTimeout(() => (copied.value = false), 2000)
}

onBeforeUnmount(() => clearTimeout(timer))
</script>

<style scoped>
.fact {
  display: grid;
  grid-template-columns: minmax(120px, 160px) 1fr;
  gap: 24px;
  align-items: baseline;
  padding: 18px 0;
  border-top: 1px solid var(--rule);
}
.fact:last-child { border-bottom: 1px solid var(--rule); }
dt {
  font-size: 14px;
  color: var(--dim);
}
dd {
  font-size: 16px;
  line-height: 1.65;
  color: var(--mid);
}
.bio { max-width: 640px; }
.copy {
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  font-size: 14px;
  font-weight: 500;
  color: var(--mute);
  transition: color .3s;
}
.copy:hover { color: var(--fg); }
.link {
  overflow-wrap: anywhere;
  color: var(--fg);
  transition: color .3s;
}
.link:hover { color: var(--mute); }
.photos { display: grid; gap: 4px; }

@media (max-width: 899px) {
  .fact { grid-template-columns: 1fr; gap: 4px; }
}
</style>
