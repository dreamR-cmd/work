<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const show = ref(false)
const reducedMotion =
  window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches

function onScroll() {
  show.value = window.scrollY > 600
}

function toTop() {
  window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <button class="back-top" :class="{ show }" type="button" aria-label="回到顶部" @click="toTop">
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5m-7 7 7-7 7 7"/></svg>
  </button>
</template>
