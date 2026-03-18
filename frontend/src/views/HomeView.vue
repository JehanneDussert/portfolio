<template>
  <main>
    <HeroSection />
    <PhilosophySection />
    <PositioningSection />
    <ExperienceSection />
    <ProjectSection />
    <SkillsSection />
  </main>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useApi } from '@/composables/useApi'
import HeroSection from '@/components/HeroSection.vue'
import PositioningSection from '@/components/PositioningSection.vue'
import ExperienceSection from '@/components/ExperienceSection.vue'
import ProjectSection from '@/components/ProjectSection.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import PhilosophySection from '@/components/PhilosophySection.vue'

const { trackView } = useApi()
const route = useRoute()
onMounted(() => trackView({ page: route.path, referrer: document.referrer || undefined }))
</script>
