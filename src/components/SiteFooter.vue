<script setup>
import { profile } from '../data/resume'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer">
    <p>© {{ year }} {{ profile.name }} · {{ profile.role }} &amp; {{ profile.subRole }}</p>
    <p class="footer-links">
      <a :href="'tel:' + profile.phone">电话</a><span>·</span>
      <a :href="'mailto:' + profile.email">邮箱</a>
    </p>
  </footer>
</template>
