<script setup>
import { profile } from '../data/resume'

function printResume() {
  window.print()
}

// profile.json 代码卡片内容（静态数据，v-html 安全）
const seg = (t, v) => `<span class="tok-${t}">${v}</span>`
const codeHtml = [
  seg('p', '{'),
  `  ${seg('k', '"name"')}${seg('p', ': ')}${seg('s', `"${profile.name}"`)},`,
  `  ${seg('k', '"role"')}${seg('p', ': ')}${seg('s', `"${profile.role}"`)},`,
  `  ${seg('k', '"experience"')}${seg('p', ': ')}${seg('s', '"3 年"')},`,
  `  ${seg('k', '"focus"')}${seg('p', ': [')}`,
  `    ${seg('s', '"Spring Cloud 微服务"')},`,
  `    ${seg('s', '"高并发 & 一致性"')},`,
  `    ${seg('s', '"RAG / AI 应用"')}`,
  `  ${seg('p', '],')}`,
  `  ${seg('k', '"openTo"')}${seg('p', ': ')}${seg('s', '"AI 应用开发方向"')}`,
  seg('p', '}'),
].join('\n')
</script>

<template>
  <section class="hero" id="hero">
    <div class="hero-inner">
      <div class="hero-text" v-reveal>
        <p class="hero-kicker">Hello，我是</p>
        <h1 class="hero-name">{{ profile.name }}</h1>
        <p class="hero-role">
          {{ profile.role }} <span class="role-sep">·</span> {{ profile.subRole }}
        </p>
        <p class="hero-brief">{{ profile.brief }}</p>
        <div class="hero-contact">
          <a class="chip" :href="'tel:' + profile.phone">
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.5 2.8.6a2 2 0 0 1 1.7 2.1z"/></svg>
            {{ profile.phone }}
          </a>
          <a class="chip" :href="'mailto:' + profile.email">
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>
            {{ profile.email }}
          </a>
          <span class="chip">
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>
            {{ profile.location }}
          </span>
        </div>
        <div class="hero-actions">
          <a class="btn btn-primary" href="#projects">查看项目经历</a>
          <button class="btn btn-ghost" type="button" @click="printResume">打印 / 导出简历 PDF</button>
        </div>
      </div>
      <div class="hero-visual" v-reveal aria-hidden="true">
        <div class="code-card">
          <div class="code-head"><span></span><span></span><span></span><em>profile.json</em></div>
          <pre class="code-body" v-html="codeHtml"></pre>
        </div>
      </div>
    </div>
  </section>
</template>
