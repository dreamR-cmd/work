<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { navSections } from '../data/resume'

const menuOpen = ref(false)
const activeId = ref('')

function toggleTheme() {
  const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
  document.documentElement.setAttribute('data-theme', next)
  try {
    localStorage.setItem('theme', next)
  } catch {
    /* 隐私模式等场景忽略 */
  }
}

function printResume() {
  window.print()
}

let spyObserver = null
onMounted(() => {
  if (!('IntersectionObserver' in window)) return
  const links = navSections.map((s) => document.getElementById(s.id)).filter(Boolean)
  spyObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) activeId.value = entry.target.id
      })
    },
    { rootMargin: '-40% 0px -55% 0px' },
  )
  links.forEach((sec) => spyObserver.observe(sec))
})
onBeforeUnmount(() => spyObserver && spyObserver.disconnect())
</script>

<template>
  <header class="site-nav">
    <div class="nav-inner">
      <a class="brand" href="#hero">{{ '温少豪' }}<span class="brand-dot">.</span></a>
      <nav class="nav-links" :class="{ open: menuOpen }" aria-label="页面导航">
        <a
          v-for="sec in navSections"
          :key="sec.id"
          :href="'#' + sec.id"
          :class="{ active: activeId === sec.id }"
          @click="menuOpen = false"
        >
          {{ sec.label }}
        </a>
      </nav>
      <div class="nav-actions">
        <button class="icon-btn" type="button" aria-label="切换深色模式" @click="toggleTheme">
          <svg class="icon-sun" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>
          <svg class="icon-moon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>
        </button>
        <button class="icon-btn" type="button" aria-label="打印 / 导出 PDF" title="打印 / 导出 PDF" @click="printResume">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9V3h12v6M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="7"/></svg>
        </button>
        <button
          class="icon-btn nav-toggle"
          type="button"
          aria-label="打开菜单"
          :aria-expanded="menuOpen ? 'true' : 'false'"
          @click="menuOpen = !menuOpen"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
        </button>
      </div>
    </div>
  </header>
</template>
