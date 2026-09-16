<script setup>
import { skillGroups } from '../data/resume'
</script>

<template>
  <section class="section section-alt" id="skills">
    <div class="section-inner">
      <p class="section-kicker" v-reveal>02 · Skills</p>
      <h2 class="section-title" v-reveal>技术栈</h2>
      <div class="skill-grid">
        <div class="skill-card" v-for="group in skillGroups" :key="group.title" v-reveal>
          <h3>{{ group.title }}</h3>
          <div class="tags">
            <span class="tag" v-for="tag in group.tags" :key="tag">{{ tag }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
