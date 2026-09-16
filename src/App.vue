<script setup>
import SiteNav from './components/SiteNav.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import EducationSection from './components/EducationSection.vue'
import SiteFooter from './components/SiteFooter.vue'
import BackTop from './components/BackTop.vue'
</script>

<template>
  <SiteNav />
  <main>
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ExperienceSection />
    <ProjectsSection />
    <EducationSection />
  </main>
  <SiteFooter />
  <BackTop />
</template>
