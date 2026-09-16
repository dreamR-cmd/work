<script setup>
import { education } from '../data/resume'
</script>

<template>
  <section class="section" id="education">
    <div class="section-inner">
      <p class="section-kicker" v-reveal>05 · Education</p>
      <h2 class="section-title" v-reveal>教育背景</h2>
      <div class="edu-card" v-reveal>
        <div class="tl-head">
          <h3>{{ education.school }}</h3>
          <span class="tl-time">{{ education.time }}</span>
        </div>
        <p class="edu-major">{{ education.major }}</p>
      </div>
    </div>
  </section>
</template>
