<template>
  <AppNav />
  <RouterView />
  <AppFooter />
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import AppNav from '@/components/AppNav.vue'
import AppFooter from '@/components/AppFooter.vue'

let dot: HTMLElement | null = null
let ring: HTMLElement | null = null
let rx = 0, ry = 0, mx = 0, my = 0, raf = 0
let io: IntersectionObserver | null = null

function move(e: MouseEvent) {
  mx = e.clientX; my = e.clientY
  if (dot) { dot.style.left = mx + 'px'; dot.style.top = my + 'px' }
}
function hover(e: MouseEvent) {
  const el = e.target as HTMLElement
  document.body.classList.toggle('cursor-hover', !!el.closest('a,button,[data-hover]'))
}
function tick() {
  rx += (mx - rx) * 0.11; ry += (my - ry) * 0.11
  if (ring) { ring.style.left = rx + 'px'; ring.style.top = ry + 'px' }
  raf = requestAnimationFrame(tick)
}
function initReveal() {
  io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io?.unobserve(e.target) } })
  }, { threshold: 0.1 })
  document.querySelectorAll('.reveal').forEach(el => io?.observe(el))
}
const mo = new MutationObserver(() =>
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => io?.observe(el))
)
onMounted(() => {
  dot = document.getElementById('cursor')
  ring = document.getElementById('cursor-ring')
  rx = window.innerWidth / 2; ry = window.innerHeight / 2
  window.addEventListener('mousemove', move)
  window.addEventListener('mouseover', hover)
  tick()
  setTimeout(initReveal, 80)
  mo.observe(document.body, { childList: true, subtree: true })
})
onUnmounted(() => {
  window.removeEventListener('mousemove', move)
  window.removeEventListener('mouseover', hover)
  cancelAnimationFrame(raf); io?.disconnect(); mo.disconnect()
})
</script>
