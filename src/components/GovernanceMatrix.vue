<template>
  <div class="gov-matrix" :class="activeProfile.cls">
    <div class="gm-controls">
      <span class="gm-controls-label">governance profile</span>
      <div class="gm-buttons">
        <button
          v-for="(p, i) in profiles"
          :key="p.name"
          class="gm-btn"
          :class="[p.cls, { active: i === currentIdx }]"
          @click="setProfile(i)"
        >
          {{ p.name }}
        </button>
      </div>
    </div>

    <div class="gm-card">
      <div class="gm-header">
        <div class="gm-header-left">
          <span class="gm-title">model × use case matrix</span>
          <span class="gm-active-label" :class="activeProfile.cls">{{ activeProfile.name }}</span>
        </div>
        <span class="gm-live"><span class="gm-dot"></span>live</span>
      </div>

      <div class="gm-rows">
        <div v-for="uc in useCases" :key="uc" class="gm-row">
          <span class="gm-uc">{{ uc }}</span>
          <canvas :ref="el => canvases[uc] = el" class="gm-canvas" height="28" />
          <div class="gm-bar-wrap">
            <div
              class="gm-bar"
              :style="{ width: (displayedScores[uc] * 100).toFixed(1) + '%', background: scoreColor(displayedScores[uc]) }"
            />
          </div>
          <span class="gm-score" :style="{ color: scoreColor(displayedScores[uc]) }">
            {{ displayedScores[uc].toFixed(2) }}
          </span>
        </div>
      </div>

      <div class="gm-criteria">
        <span
          v-for="(c, i) in activeProfile.criteria"
          :key="c"
          class="gm-criterion"
          :class="[{ active: activeProfile.active.includes(i) }, activeProfile.cls]"
        >
          {{ c }}
        </span>
      </div>
    </div>

    <p class="gm-note">{{ activeProfile.note }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, reactive } from 'vue'

const profiles = [
  {
    name: 'AI Act',
    cls: 'p-aiact',
    criteria: ['transparency', 'traceability', 'human oversight', 'risk documentation', 'accuracy'],
    active: [0, 1, 2],
    note: '→ AI Act Art. 9 — ongoing risk management required',
    scores: { General: 0.72, Translation: 0.41, Code: 0.88 }
  },
  {
    name: 'Data protection',
    cls: 'p-gdpr',
    criteria: ['data minimisation', 'consent', 'purpose limitation', 'retention', 'anonymisation'],
    active: [0, 2, 4],
    note: '→ GDPR Art. 5 — lawfulness, fairness, transparency',
    scores: { General: 0.55, Translation: 0.80, Code: 0.92 }
  },
  {
    name: 'Security',
    cls: 'p-security',
    criteria: ['prompt injection', 'output validation', 'access control', 'audit log', 'sandboxing'],
    active: [0, 1, 3],
    note: '→ ANSSI — hardening & incident traceability',
    scores: { General: 0.44, Translation: 0.20, Code: 0.95 }
  },
  {
    name: 'Accessibility',
    cls: 'p-a11y',
    criteria: ['plain language', 'reading level', 'inclusivity', 'RGAA', 'alt text'],
    active: [0, 2, 3],
    note: '→ RGAA — accessibility for all public sector outputs',
    scores: { General: 0.88, Translation: 0.76, Code: 0.30 }
  }
]

const useCases = ['General', 'Translation', 'Code']

const currentIdx = ref(0)
const activeProfile = computed(() => profiles[currentIdx.value])

const currentScores = reactive({ General: 0.72, Translation: 0.41, Code: 0.88 })
const targetScores = reactive({ ...currentScores })
const displayedScores = reactive({ ...currentScores })
const histories: Record<string, number[]> = reactive({
  General: [], Translation: [], Code: []
})
const canvases: Record<string, HTMLCanvasElement | null> = reactive({
  General: null, Translation: null, Code: null
})

// Seed histories
useCases.forEach(uc => {
  const s = currentScores[uc as keyof typeof currentScores]
  for (let i = 0; i < 20; i++) {
    histories[uc].push(s + (Math.random() - 0.5) * 0.05)
  }
})

function scoreColor(s: number) {
  if (s >= 0.7) return '#3a8a50'
  if (s >= 0.4) return '#8a7a30'
  return '#8a3a3a'
}

function lerp(a: number, b: number, t: number) { return a + (b - a) * t }

function setProfile(idx: number) {
  currentIdx.value = idx
  const p = profiles[idx]
  useCases.forEach(uc => {
    (targetScores as any)[uc] = p.scores[uc as keyof typeof p.scores]
  })
}

function drawSparkline(uc: string) {
  const canvas = canvases[uc]
  if (!canvas) return
  const W = canvas.offsetWidth || 90
  const H = 28
  if (canvas.width !== W) canvas.width = W
  canvas.height = H
  const ctx = canvas.getContext('2d')!
  ctx.clearRect(0, 0, W, H)
  const pts = histories[uc]
  if (pts.length < 2) return
  const min = Math.min(...pts)
  const max = Math.max(...pts)
  const range = Math.max(max - min, 0.08)
  ctx.strokeStyle = scoreColor(pts[pts.length - 1])
  ctx.lineWidth = 1.5
  ctx.lineCap = 'round'
  ctx.lineJoin = 'round'
  ctx.beginPath()
  pts.forEach((v, i) => {
    const x = (i / (pts.length - 1)) * W
    const y = H - ((v - min) / range) * (H - 6) - 3
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
  })
  ctx.stroke()
}

function tick() {
  useCases.forEach(uc => {
    const k = uc as keyof typeof currentScores
    currentScores[k] = lerp(currentScores[k], targetScores[k], 0.1)
    const noise = (Math.random() - 0.5) * 0.03
    const v = Math.min(1, Math.max(0, currentScores[k] + noise))
    histories[uc].push(parseFloat(v.toFixed(3)))
    if (histories[uc].length > 36) histories[uc].shift()
    displayedScores[k] = v
    drawSparkline(uc)
  })
}

let interval: ReturnType<typeof setInterval>
onMounted(() => { interval = setInterval(tick, 700) })
onUnmounted(() => clearInterval(interval))
</script>

<style scoped>
.gov-matrix { display: flex; flex-direction: column; gap: 0.75rem; margin-top: 2rem; }

.gm-controls { display: flex; flex-direction: column; gap: 6px; }
.gm-controls-label {
  font-family: var(--ff-mono);
  font-size: 10px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(232,234,240,.3);
}
.gm-buttons { display: flex; gap: 7px; flex-wrap: wrap; }

.gm-btn {
  font-family: var(--ff-mono);
  font-size: 11px;
  padding: 5px 13px;
  border-radius: 5px;
  border: 1.5px solid rgba(232,234,240,.12);
  background: transparent;
  color: rgba(232,234,240,.35);
  letter-spacing: 0.05em;
  transition: all 0.2s;
}
.gm-btn:hover { color: rgba(232,234,240,.6); border-color: rgba(232,234,240,.25); }

.gm-btn.active.p-aiact    { color: #3a8a50; border-color: rgba(58,138,80,.6);   background: rgba(58,138,80,.07); }
.gm-btn.active.p-gdpr     { color: #3a6aaa; border-color: rgba(58,106,170,.6);  background: rgba(58,106,170,.07); }
.gm-btn.active.p-security { color: #8a3a3a; border-color: rgba(138,58,58,.6);   background: rgba(138,58,58,.07); }
.gm-btn.active.p-a11y     { color: #8a7a30; border-color: rgba(138,122,48,.6);  background: rgba(138,122,48,.07); }

.gm-card {
  border-radius: 6px;
  overflow: hidden;
  border: 0.5px solid rgba(232,234,240,.12);
  transition: border-color 0.3s;
}
.gov-matrix.p-aiact    .gm-card { border-color: rgba(58,138,80,.3); }
.gov-matrix.p-gdpr     .gm-card { border-color: rgba(58,106,170,.3); }
.gov-matrix.p-security .gm-card { border-color: rgba(138,58,58,.3); }
.gov-matrix.p-a11y     .gm-card { border-color: rgba(138,122,48,.3); }

.gm-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 16px;
  background: rgba(255,255,255,.03);
  border-bottom: 0.5px solid rgba(232,234,240,.08);
}
.gm-header-left { display: flex; align-items: center; gap: 10px; }
.gm-title {
  font-family: var(--ff-mono);
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(232,234,240,.3);
}
.gm-active-label {
  font-family: var(--ff-mono);
  font-size: 10px;
  padding: 2px 7px;
  border-radius: 3px;
  letter-spacing: 0.05em;
  transition: all 0.3s;
}
.gm-active-label.p-aiact    { color: #3a8a50; background: rgba(58,138,80,.1); }
.gm-active-label.p-gdpr     { color: #3a6aaa; background: rgba(58,106,170,.1); }
.gm-active-label.p-security { color: #8a3a3a; background: rgba(138,58,58,.1); }
.gm-active-label.p-a11y     { color: #8a7a30; background: rgba(138,122,48,.1); }

.gm-live {
  display: flex;
  align-items: center;
  gap: 5px;
  font-family: var(--ff-mono);
  font-size: 10px;
  color: rgba(232,234,240,.25);
}
.gm-dot {
  width: 5px; height: 5px;
  border-radius: 50%;
  background: #3a8a50;
  animation: blink 1.4s infinite;
}
@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.2} }

.gm-rows { display: flex; flex-direction: column; }
.gm-row {
  display: grid;
  grid-template-columns: 90px 80px 1fr 50px;
  align-items: center;
  gap: 12px;
  padding: 11px 16px;
  border-bottom: 0.5px solid rgba(232,234,240,.05);
}
.gm-row:last-child { border-bottom: none; }

.gm-uc { font-size: 12px; color: rgba(232,234,240,.5); }

.gm-canvas { display: block; width: 80px; height: 28px; }

.gm-bar-wrap {
  height: 3px;
  background: rgba(232,234,240,.08);
  border-radius: 2px;
  overflow: hidden;
}
.gm-bar {
  height: 100%;
  border-radius: 2px;
  transition: width 0.5s ease, background 0.4s;
}
.gm-score {
  font-family: var(--ff-mono);
  font-size: 13px;
  font-weight: 500;
  text-align: right;
  transition: color 0.4s;
}

.gm-criteria {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  padding: 10px 16px;
  border-top: 0.5px solid rgba(232,234,240,.08);
  background: rgba(255,255,255,.02);
}
.gm-criterion {
  font-family: var(--ff-mono);
  font-size: 10px;
  padding: 3px 7px;
  border-radius: 3px;
  border: 0.5px solid rgba(232,234,240,.1);
  color: rgba(232,234,240,.2);
  transition: all 0.35s;
}
.gm-criterion.active.p-aiact    { border-color: rgba(58,138,80,.5);   color: #3a8a50; background: rgba(58,138,80,.07); }
.gm-criterion.active.p-gdpr     { border-color: rgba(58,106,170,.5);  color: #3a6aaa; background: rgba(58,106,170,.07); }
.gm-criterion.active.p-security { border-color: rgba(138,58,58,.5);   color: #8a3a3a; background: rgba(138,58,58,.07); }
.gm-criterion.active.p-a11y     { border-color: rgba(138,122,48,.5);  color: #8a7a30; background: rgba(138,122,48,.07); }

.gm-note {
  font-family: var(--ff-mono);
  font-size: 10px;
  color: rgba(232,234,240,.25);
  letter-spacing: 0.03em;
}
</style>