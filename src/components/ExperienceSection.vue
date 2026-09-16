<script setup>
import { experience } from '../data/resume'
</script>

<template>
  <section class="section" id="experience">
    <div class="section-inner">
      <p class="section-kicker" v-reveal>03 · Experience</p>
      <h2 class="section-title" v-reveal>工作经历</h2>
      <div class="timeline">
        <div class="tl-item" v-reveal>
          <div class="tl-head">
            <h3>{{ experience.company }} · {{ experience.role }}</h3>
            <span class="tl-time">{{ experience.time }}</span>
          </div>
          <ul class="plain-list">
            <li v-for="point in experience.points" :key="point.title">
              <strong>{{ point.title }}：</strong>{{ point.text }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
