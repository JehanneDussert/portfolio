<template>
  <main class="page">
    <div class="grid">
      <div class="left">
        <div class="eyebrow reveal"><span class="ew-line"></span><span>Available for</span></div>
        <h1 class="title reveal reveal-delay-1">Let's work<br /><span class="acc">together</span></h1>
        <p class="desc reveal reveal-delay-2">Open to any role at the intersection of technical AI work and governance (position, mission, advisory role, or collaboration).</p>
        <ul class="avail reveal reveal-delay-3">
          <li v-for="item in availability" :key="item"><span class="arr">→</span>{{ item }}</li>
        </ul>
        <a href="https://calendly.com/jehanne-dussert/30min" target="_blank" rel="noopener" class="calendly-btn" data-hover>
          Book a 30-min call →
        </a>
      </div>
      <div class="right reveal reveal-delay-2">
        <form @submit.prevent="handleSubmit" novalidate>
          <div class="field">
            <label for="name">Name</label>
            <input id="name" v-model="form.name" type="text" placeholder="First Last" :class="{err:errors.name}" autocomplete="name" />
            <span v-if="errors.name" class="ferr">{{ errors.name }}</span>
          </div>
          <div class="field">
            <label for="email">Email</label>
            <input id="email" v-model="form.email" type="email" placeholder="you@organisation.com" :class="{err:errors.email}" autocomplete="email" />
            <span v-if="errors.email" class="ferr">{{ errors.email }}</span>
          </div>
          <div class="field">
            <label for="subject">Subject</label>
            <input id="subject" v-model="form.subject" type="text" placeholder="Mission, conference, chat..." :class="{err:errors.subject}" />
            <span v-if="errors.subject" class="ferr">{{ errors.subject }}</span>
          </div>
          <div class="field">
            <label for="message">Message</label>
            <textarea id="message" v-model="form.message" rows="5" placeholder="Describe what you need..." :class="{err:errors.message}" />
            <span v-if="errors.message" class="ferr">{{ errors.message }}</span>
          </div>
          <button type="submit" :disabled="loading" data-hover>
            <span v-if="!loading">Send message →</span>
            <span v-else>Sending…</span>
          </button>
          <div v-if="successMsg" class="banner ok">{{ successMsg }}</div>
          <div v-if="errorMsg" class="banner ko">{{ errorMsg }}</div>
        </form>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useApi } from '@/composables/useApi'
const { submitContact, trackView } = useApi()
const route = useRoute()
onMounted(() => trackView({ page: route.path }))
const form = reactive({ name:'', email:'', subject:'', message:'' })
const errors = reactive({ name:'', email:'', subject:'', message:'' })
const loading = ref(false), successMsg = ref(''), errorMsg = ref('')
const availability = ['Roles combining engineering & AI governance','Freelance missions & advisory','Talks & conference appearances','Research & open-source collaboration']
function validate() {
  errors.name = form.name.trim() ? '' : 'Required'
  errors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ? '' : 'Invalid email'
  errors.subject = form.subject.trim() ? '' : 'Required'
  errors.message = form.message.trim().length >= 10 ? '' : 'Too short (min. 10 characters)'
  return !Object.values(errors).some(Boolean)
}
async function handleSubmit() {
  successMsg.value = ''; errorMsg.value = ''
  if (!validate()) return
  loading.value = true
  try {
    const res = await submitContact({ ...form })
    if (res.success) { successMsg.value = res.message; form.name = form.email = form.subject = form.message = '' }
  } catch (e: unknown) { errorMsg.value = e instanceof Error ? e.message : 'Something went wrong.' }
  finally { loading.value = false }
}
</script>

<style scoped>
.page { min-height: calc(100vh - 56px); display: flex; align-items: center; padding: 5rem 3rem; }
.grid { display: grid; grid-template-columns: 1fr 1fr; gap: 6rem; width: 100%; max-width: 1100px; margin: 0 auto; }
.eyebrow { display: flex; align-items: center; gap: 12px; font-family: var(--ff-mono); font-size: 11px; color: var(--teal); letter-spacing: .1em; text-transform: uppercase; margin-bottom: 1.5rem; }
.ew-line { display: block; width: 28px; height: 1px; background: var(--teal); }
.title { font-size: clamp(2.4rem,4vw,3.5rem); font-weight: 300; line-height: 1.06; letter-spacing: -.025em; color: var(--txt); margin-bottom: 1.5rem; }
.acc { display: block; font-weight: 600; color: var(--teal); }
.desc { font-size: 14.5px; color: var(--txt-2); line-height: 1.8; margin-bottom: 2rem; }
.avail { list-style: none; display: flex; flex-direction: column; gap: 9px; }
.avail li { display: flex; align-items: center; gap: 10px; font-size: 14px; color: var(--txt-2); }
.arr { color: var(--teal); font-size: 12px; flex-shrink: 0; }
.calendly-btn {
  display: inline-flex; align-items: center; gap: 8px;
  margin-top: 1.5rem;
  padding: 11px 22px;
  background: var(--teal-dim);
  color: var(--teal);
  border: 1px solid rgba(0,212,184,0.3);
  border-radius: var(--r-sm);
  font-size: 13px; font-weight: 500; letter-spacing: .02em;
  transition: background .18s, border-color .18s;
}
.calendly-btn:hover { background: var(--teal-glow); border-color: rgba(0,212,184,.5); }
form { display: flex; flex-direction: column; gap: 1.1rem; }
.field { display: flex; flex-direction: column; gap: 5px; }
.field label { font-size: 11px; font-weight: 500; text-transform: uppercase; letter-spacing: .08em; color: var(--txt-3); }
.field input, .field textarea {
  font-family: var(--ff); font-size: 14px; color: var(--txt);
  background: var(--bg-3); border: 1px solid var(--b-2);
  border-radius: var(--r-sm); padding: 10px 13px;
  outline: none; resize: vertical;
  transition: border-color .18s, background .18s;
}
.field input:focus, .field textarea:focus { border-color: var(--teal); background: var(--bg-4); }
.field input.err, .field textarea.err { border-color: #e05260; }
.ferr { font-size: 11.5px; color: #e05260; }
button {
  padding: 12px 26px; align-self: flex-start;
  background: var(--teal); color: #000;
  border: none; border-radius: var(--r-sm);
  font-family: var(--ff); font-size: 13.5px; font-weight: 600;
  cursor: pointer; letter-spacing: .02em;
  transition: background .18s, opacity .18s;
}
button:hover:not(:disabled) { background: var(--teal-2); }
button:disabled { opacity: .5; cursor: not-allowed; }
.banner { padding: 11px 14px; border-radius: var(--r-sm); font-size: 13.5px; line-height: 1.5; }
.ok { background: var(--teal-dim); border: 1px solid rgba(0,212,184,.2); color: var(--teal); }
.ko { background: rgba(224,82,96,.07); border: 1px solid rgba(224,82,96,.2); color: #e05260; }
</style>