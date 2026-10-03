<script setup>
import { ref, inject, watch, nextTick } from "vue";
import { useScrollAnimations } from "../composables/useScrollAnimations";

import HeroSection from "../components/HeroSection.vue";
import FirmSection from "../components/FirmSection.vue";
import ServicesSection from "../components/ServicesSection.vue";
import ValuesSection from "../components/ValuesSection.vue";
import NotarySection from "../components/NotarySection.vue";
import ProcessSection from "../components/ProcessSection.vue";
import FaqSection from "../components/FaqSection.vue";
import PrepareSection from "../components/PrepareSection.vue";
import ContactSection from "../components/ContactSection.vue";
import MapSection from "../components/MapSection.vue";
import TestimonialsSection from "../components/TestimonialsSection.vue";
const page = ref(null);
const language = inject("language");

const { refresh } = useScrollAnimations(page);

watch(language, async () => {
  await nextTick();
  refresh();
});
</script>

<template>
  <div ref="page">
    <HeroSection />
    <FirmSection />
    <ServicesSection />
    <ValuesSection />
    <NotarySection />
    
    <TestimonialsSection />
    <ProcessSection />
    <FaqSection />
    <PrepareSection />
    <ContactSection />
    <MapSection />
  </div>
</template>
