<script setup>
import { ref, provide, watch, onMounted, onBeforeUnmount } from "vue";
import { gsap } from "gsap";

import SiteHeader from "./components/SiteHeader.vue";
import SiteFooter from "./components/SiteFooter.vue";

const language = ref("km");

provide("language", language);

let languageTween;
let pendingLanguage = language.value;

function changeLanguage(nextLanguage) {
  if (nextLanguage === pendingLanguage) return;
  pendingLanguage = nextLanguage;
  languageTween?.kill();
  const targets = document.querySelectorAll("#app > header, #main-content, #app > footer");

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    language.value = nextLanguage;
    gsap.set(targets, { clearProps: "opacity" });
    return;
  }

  languageTween = gsap.timeline()
    .to(targets, { opacity: 0, duration: 0.12, ease: "power1.out" })
    .call(() => { language.value = nextLanguage; })
    .to(targets, { opacity: 1, duration: 0.24, ease: "power1.inOut", clearProps: "opacity" });
}

provide("changeLanguage", changeLanguage);
onBeforeUnmount(() => languageTween?.kill());

function handleLanguageKey(event) {
  if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(event.key)) return;
  event.preventDefault();
  const nextLanguage = event.currentTarget.value === "en" ? "km" : "en";
  document.getElementById(`l-${nextLanguage}`).focus();
  changeLanguage(nextLanguage);
}

function updateLanguage() {
  document.documentElement.lang = language.value;
}

onMounted(updateLanguage);
watch(language, updateLanguage);
</script>

<template>
  <input
    id="l-en"
    :checked="language === 'en'"
    @click.prevent="changeLanguage('en')"
    @keydown="handleLanguageKey"
    class="lang-radio"
    type="radio"
    name="lang"
    value="en"
  />

  <input
    id="l-km"
    :checked="language === 'km'"
    @click.prevent="changeLanguage('km')"
    @keydown="handleLanguageKey"
    class="lang-radio"
    type="radio"
    name="lang"
    value="km"
  />

  <a class="skip-link" href="#main-content"> Skip to content · រំលងទៅមាតិកា </a>

  <SiteHeader />

  <main id="main-content">
    <RouterView />
  </main>

  <SiteFooter />
</template>
