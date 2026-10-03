<script setup>
import { ref, inject, onMounted, onBeforeUnmount, nextTick, watch } from "vue";
import { gsap } from "gsap";
import { useRoute } from "vue-router";

const changeLanguage = inject("changeLanguage");
const route = useRoute();
const menuOpen = ref(false);
const navRef = ref(null);
const blobRef = ref(null);
let blobTween;
let activeLink;
let blobVisible = false;

const closeOnEscape = (event) => {
  if (event.key === "Escape") menuOpen.value = false;
};

const moveBlob = (event, force = false) => {
  if (window.matchMedia("(max-width: 900px)").matches) return;

  const link = event.target.closest?.("a");
  const nav = navRef.value;
  const blob = blobRef.value;

  if (!link || !nav?.contains(link) || !blob || (link === activeLink && !force)) return;

  const navRect = nav.getBoundingClientRect();
  const linkRect = link.getBoundingClientRect();
  const targetX = linkRect.left - navRect.left - 4;
  const targetY = linkRect.top - navRect.top - 3;
  const targetWidth = linkRect.width + 8;
  const targetHeight = linkRect.height + 6;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  blobTween?.kill();

  if (!blobVisible) {
    gsap.set(blob, {
      x: targetX - 16,
      y: targetY,
      width: targetWidth * 0.7,
      height: targetHeight,
      autoAlpha: 1,
    });
    blobVisible = true;
  }

  if (reducedMotion) {
    gsap.set(blob, { x: targetX, y: targetY, width: targetWidth, height: targetHeight });
  } else {
    const currentX = Number(gsap.getProperty(blob, "x")) || 0;
    const distance = targetX - currentX;
    const stretch = Math.min(Math.abs(distance) * 0.18, 28);

    blobTween = gsap
      .timeline()
      .to(blob, {
        x: targetX + Math.sign(distance) * stretch,
        y: targetY,
        width: targetWidth + stretch,
        height: targetHeight,
        duration: 0.2,
        ease: "power2.out",
      })
      .to(blob, {
        x: targetX,
        width: targetWidth,
        duration: 0.55,
        ease: "elastic.out(1, 0.55)",
      });
  }

  activeLink = link;
};

const hideBlob = (event) => {
  if (event.type === "focusout" && navRef.value?.contains(event.relatedTarget)) return;

  const currentRouteLink = navRef.value?.querySelector(".router-link-exact-active");
  if (currentRouteLink) {
    moveBlob({ target: currentRouteLink, type: "route" });
    return;
  }

  activeLink = null;
  blobTween?.kill();

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    gsap.set(blobRef.value, { autoAlpha: 0 });
    blobVisible = false;
    return;
  }

  blobTween = gsap.to(blobRef.value, {
    autoAlpha: 0,
    scale: 0.75,
    duration: 0.2,
    ease: "power2.out",
    onComplete: () => {
      blobVisible = false;
    },
  });
};

const handleNavClick = (event) => {
  moveBlob(event, true);
  menuOpen.value = false;
};

const syncActiveRoute = () => {
  const currentRouteLink = navRef.value?.querySelector(".router-link-exact-active");
  if (currentRouteLink) moveBlob({ target: currentRouteLink, type: "route" });
};

watch(
  () => route.fullPath,
  async () => {
    await nextTick();
    syncActiveRoute();
  }
);

onMounted(() => {
  document.addEventListener("keydown", closeOnEscape);
  requestAnimationFrame(syncActiveRoute);
});
onBeforeUnmount(() => {
  document.removeEventListener("keydown", closeOnEscape);
  blobTween?.kill();
  if (blobRef.value) gsap.set(blobRef.value, { clearProps: "all" });
});
</script>
<template>
  <header class="top">
    <svg class="gooey-filter" aria-hidden="true" focusable="false">
      <filter id="nav-goo">
        <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
        <feColorMatrix
          in="blur"
          mode="matrix"
          values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 18 -7"
          result="goo"
        />
        <feComposite in="SourceGraphic" in2="goo" operator="atop" />
      </filter>
    </svg>
    <div class="in">
      <RouterLink class="brand" to="/"
        ><i>D</i
        ><span
          ><b><span class="en">DHARMASASTRA</span><span class="km">ធម្មសាស្ត្រ</span></b
          ><small
            ><span class="en">NOTARY PUBLIC</span
            ><span class="km">សារការីសាធារណៈ</span></small
          ></span
        ></RouterLink
      >
      <nav
        ref="navRef"
        :class="{ 'is-open': menuOpen }"
        @click="handleNavClick"
        @focusin="moveBlob"
        @focusout="hideBlob"
        id="main-navigation"
        aria-label="Main navigation"
      >
        <span ref="blobRef" class="gooey-blob" aria-hidden="true"></span>
        <RouterLink to="/"
          ><span class="en">Home</span><span class="km">ទំព័រដើម</span></RouterLink
        >
        <RouterLink to="/about"
          ><span class="en">About Us</span><span class="km">អំពីយើង</span></RouterLink
        >
        <RouterLink to="/service"
          ><span class="en">Service</span><span class="km">សេវាកម្ម</span></RouterLink
        >
        <RouterLink to="/contact"
          ><span class="en">Contact Us</span
          ><span class="km">ទំនាក់ទំនងយើង</span></RouterLink
        >
      </nav>
      <button
        class="menu-toggle"
        type="button"
        aria-controls="main-navigation"
        :aria-expanded="menuOpen"
        @click="menuOpen = !menuOpen"
      >
        <span class="en">{{ menuOpen ? "Close" : "Menu" }}</span>
        <span class="km">{{ menuOpen ? "បិទ" : "ម៉ឺនុយ" }}</span>
        <span class="menu-icon" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>
      <div class="tools">
        <div class="switch">
          <label for="l-en" @click.prevent="changeLanguage('en')">EN</label
          ><span class="sep">|</span
          ><label for="l-km" @click.prevent="changeLanguage('km')">ខ្មែរ</label>
        </div>
        <RouterLink class="reqbtn" to="/contact"
          ><span class="en">Request an Appointment</span
          ><span class="km">ស្នើសុំការណាត់ជួប</span></RouterLink
        >
      </div>
    </div>
  </header>
</template>

<style scoped>
.top nav {
  position: relative;
  isolation: isolate;
}

.top nav > a {
  position: relative;
  z-index: 1;
  padding: 8px 12px;
}

.gooey-blob {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  border-radius: 999px;
  background: rgba(184, 137, 58, 0.55);
  filter: url(#nav-goo);
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  will-change: transform, width, height;
}

.gooey-filter {
  position: absolute;
  width: 0;
  height: 0;
  overflow: hidden;
}

.menu-toggle {
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
}

.menu-icon {
  position: relative;
  display: inline-block;
  flex: 0 0 22px;
  width: 22px;
  height: 18px;
}

.menu-icon > span {
  position: absolute;
  left: 0;
  top: 8px;
  width: 100%;
  height: 2px;
  border-radius: 2px;
  background: currentColor;
  transform-origin: center;
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms ease;
}

.menu-icon > span:first-child {
  transform: translateY(-7px);
}

.menu-icon > span:last-child {
  transform: translateY(7px);
}

.menu-toggle[aria-expanded="true"] .menu-icon > span:first-child {
  transform: rotate(45deg);
}

.menu-toggle[aria-expanded="true"] .menu-icon > span:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}

.menu-toggle[aria-expanded="true"] .menu-icon > span:last-child {
  transform: rotate(-45deg);
}

@media (max-width: 900px) {
  .gooey-blob {
    display: none;
  }

  .menu-toggle {
    display: inline-flex;
  }
}

@media (prefers-reduced-motion: reduce) {
  .gooey-blob {
    filter: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .menu-icon > span {
    transition: none;
  }
}
</style>
