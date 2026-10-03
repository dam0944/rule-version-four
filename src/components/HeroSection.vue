<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const hero = ref(null);
const background = ref(null);
const portrait = ref(null);

let media;

onMounted(() => {
  media = gsap.matchMedia();

  media.add(
    "(prefers-reduced-motion: no-preference)",
    () => {
      gsap.fromTo(
        background.value,
        {
          clipPath: "polygon(0% 0%, 0% 0%, -20% 100%, 0% 100%)",
          scale: 1.08,
        },
        {
          clipPath: "polygon(0% 0%, 120% 0%, 100% 100%, 0% 100%)",
          scale: 1,
          duration: 1.8,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: hero.value,
            start: "top 85%",
            end: "bottom top",
            toggleActions: "restart none restart reset",
          },
        }
      );

      gsap.fromTo(
        portrait.value,
        {
          opacity: 0,
          x: 80,
          y: 20,
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          delay: 0.3,
        }
      );
    },
    hero.value
  );
});

onBeforeUnmount(() => {
  media?.revert();
});
</script>

<template>
  <section id="home" ref="hero" class="hero">
    <!-- Existing full-width background -->
    <div ref="background" class="hero-background" aria-hidden="true"></div>

    <div class="hero-layout">
      <div class="hero-content">
        <p class="eyebrow">
          <span class="en">Phnom Penh · Kingdom of Cambodia</span>
          <span class="km"> រាជធានីភ្នំពេញ · ព្រះរាជាណាចក្រកម្ពុជា </span>
        </p>

        <h1>
          <span class="en">
            Documents with certainty.
            <em>Service with integrity.</em>
          </span>

          <span class="km">
            ឯកសារដែលមានភាពច្បាស់លាស់
            <em>សេវាកម្មប្រកបដោយសុចរិតភាព</em>
          </span>
        </h1>

        <p class="sub">
          <span class="en">
            Notarial services, authentication and document verification, delivered with
            confidence for individuals, businesses and institutions in Cambodia.
          </span>

          <span class="km">
            សេវាសារការី ការបញ្ជាក់ភាពត្រឹមត្រូវ និងការផ្ទៀងផ្ទាត់ឯកសារ ប្រកបដោយទំនុកចិត្ត
            សម្រាប់បុគ្គល អាជីវកម្ម និងស្ថាប័ននៅកម្ពុជា។
          </span>
        </p>

        <div class="btns">
          <a class="go" href="#contact">
            <span class="en">Book an Appointment</span>
            <span class="km">ណាត់ជួបជាមួយយើង</span>
            <span aria-hidden="true">→</span>
          </a>

          <a class="more" href="#services">
            <span class="en">Explore Our Services</span>
            <span class="km">ស្វែងយល់ពីសេវាកម្ម</span>
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </div>
    <div class="side">
      <small>01</small>
      <span class="en">Authenticity, accuracy and trust</span>
      <span class="km"> ភាពពិតប្រាកដ ភាពត្រឹមត្រូវ និងទំនុកចិត្ត </span>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  display: flex;
  align-items: center;
  min-height: 740px;
  box-sizing: border-box;
  padding: 100px 32px 110px;
  background-image: none;
}

/* Your original background remains across the whole hero. */
.hero-background {
  position: absolute;
  inset: 0;
  z-index: -2;
  pointer-events: none;
  background-image: var(--hero-img);
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
}

.hero-layout {
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);
  align-items: center;
  gap: clamp(40px, 5vw, 90px);
  width: 100%;
  max-width: 1520px;
  margin-inline: auto;
}

.hero-content {
  min-width: 0;
  max-width: 900px;
}

.eyebrow {
  margin: 0 0 24px;
  color: #d8bc84;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.8;
}

.hero h1 {
  margin: 0;
  color: black;
  font-family: "Inter", "Noto Sans Khmer", sans-serif;
  font-size: clamp(34px, 3.6vw, 62px);
  font-weight: 500;
  line-height: 1.45;
}

.hero h1 em {
  display: block;
  margin-top: 12px;
  color: #d8bc84;
  font-style: normal;
}

.sub {
  max-width: 650px;
  margin: 28px 0 0;
  color: #d4dce5;
  font-size: 17px;
  line-height: 1.9;
}

.btns {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 28px;
  margin-top: 36px;
}

.go {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 15px 24px;
  border: 1px solid #d8bc84;
  border-radius: 6px;
  background: #d8bc84;
  color: #071a2e;
  font-weight: 500;
  line-height: 1.7;
  text-decoration: none;
}

.go:hover {
  background: #e5cea4;
}

.more {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: #fff;
  font-size: 14px;
  line-height: 1.8;
  text-decoration: none;
}

.more:hover {
  color: #d8bc84;
}

.go:focus-visible,
.more:focus-visible {
  outline: 2px solid #fff;
  outline-offset: 5px;
}

/* Portrait stays visible and feels intentional instead of being clipped away. */
.hero-portrait {
  width: 100%;
  max-width: 490px;
  box-sizing: border-box;
  justify-self: end;
  padding: 36px 28px 24px 20px;
  opacity: 1;
  transform: none;
}

.portrait-frame {
  position: relative;
  isolation: isolate;
}

.portrait-frame::before {
  content: "";
  position: absolute;
  inset: -16px -14px 12px 16px;
  z-index: -1;
  border-radius: 18px 44px 18px 18px;
  background: #d8bc84;
  transform: rotate(-5deg);
}

.portrait-frame img {
  display: block;
  width: 100%;
  aspect-ratio: 0.9;
  border-radius: 16px;
  background: #111820;
  object-fit: cover;
  object-position: center top;
}

.side {
  position: absolute;
  bottom: 28px;
  left: max(32px, calc((100% - 1520px) / 2));
  right: 32px;
  display: flex;
  align-items: center;
  gap: 16px;
  color: #c8d0dc;
  font-size: 12px;
  line-height: 1.8;
}

.side small {
  color: #d8bc84;
  font-size: 12px;
}

@media (max-width: 1100px) {
  .hero-layout {
    grid-template-columns: minmax(0, 1.3fr) minmax(0, 1fr);
    gap: 28px;
  }

  .hero h1 {
    font-size: 38px;
  }
}

@media (max-width: 900px) {
  .hero {
    min-height: auto;
    padding: 72px 24px 90px;
  }

  .hero-layout {
    grid-template-columns: 1fr;
    gap: 36px;
  }

  .hero-content {
    max-width: 720px;
  }

  .hero-portrait {
    max-width: 380px;
    justify-self: center;
  }

  .hero-background {
    background-position: 78% bottom;
  }

  .side {
    left: 24px;
    right: 24px;
  }
}

@media (max-width: 600px) {
  .hero {
    padding: 56px 20px 90px;
  }

  .hero h1 {
    font-size: 32px;
  }

  .eyebrow {
    font-size: 12px;
  }

  .sub {
    font-size: 16px;
  }

  .btns {
    align-items: flex-start;
    flex-direction: column;
    gap: 20px;
  }

  .hero-portrait {
    max-width: 320px;
  }

  .side {
    left: 20px;
    right: 20px;
    font-size: 11px;
  }
}
</style>
