// v-reveal：元素进入视口时添加过渡动画（尊重系统"减少动态效果"设置）
const reducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export const reveal = {
  mounted(el) {
    if (reducedMotion || !('IntersectionObserver' in window)) return
    // 挂载时已在视口内的元素直接显示：避免首屏整页渐入的突兀感
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) return
    el.classList.add('reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08 },
    )
    observer.observe(el)
    el._revealObserver = observer
  },
  unmounted(el) {
    if (el._revealObserver) el._revealObserver.disconnect()
  },
}
