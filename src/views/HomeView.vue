<template>
  <main>
    <HeroSection />
    <PhilosophySection />
    <PositioningSection />
    <ExperienceSection />
    <ProjectSection />
    <SkillsSection />
    <ContributionsSection />
    <ContactSection />
  </main>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import HeroSection from '@/components/HeroSection.vue'
import PhilosophySection from '@/components/PhilosophySection.vue'
import PositioningSection from '@/components/PositioningSection.vue'
import ExperienceSection from '@/components/ExperienceSection.vue'
import ProjectSection from '@/components/ProjectSection.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import ContributionsSection from '@/components/ContributionsSection.vue'
import ContactSection from '@/components/ContactSection.vue'
</script>
