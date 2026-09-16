<script setup>
import { projects } from '../data/resume'
</script>

<template>
  <section class="section section-alt" id="projects">
    <div class="section-inner">
      <p class="section-kicker" v-reveal>04 · Projects</p>
      <h2 class="section-title" v-reveal>项目经历</h2>

      <article class="project-card" v-for="project in projects" :key="project.name" v-reveal>
        <div class="project-head">
          <h3>{{ project.name }}</h3>
          <span class="role-badge">{{ project.badge }}</span>
        </div>
        <div class="tags project-tags">
          <span class="tag" v-for="tag in project.tags" :key="tag">{{ tag }}</span>
        </div>
        <p class="project-desc">{{ project.desc }}</p>
        <div class="stat-row" v-if="project.stats.length">
          <div class="stat" v-for="stat in project.stats" :key="stat.label">
            <b>{{ stat.value }}</b><span>{{ stat.label }}</span>
          </div>
        </div>
        <ul class="achieve-list">
          <li v-for="point in project.points" :key="point.title">
            <strong>{{ point.title }}：</strong>{{ point.text }}
          </li>
        </ul>
      </article>
    </div>
  </section>
</template>
