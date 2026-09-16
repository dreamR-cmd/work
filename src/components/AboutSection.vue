<script setup>
import { advantages } from '../data/resume'
</script>

<template>
  <section class="section" id="about">
    <div class="section-inner">
      <p class="section-kicker" v-reveal>01 · About</p>
      <h2 class="section-title" v-reveal>个人优势</h2>
      <div class="adv-grid">
        <div class="adv-card" v-for="adv in advantages" :key="adv.title" v-reveal>
          <div class="adv-icon" aria-hidden="true" v-html="adv.icon"></div>
          <h3>{{ adv.title }}</h3>
          <p>{{ adv.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
