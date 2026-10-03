<script setup>
import ExpertiseSection from "../components/ExpertiseSection.vue";
import TeamSection from "../components/TeamSection.vue";
import FirmSection from "../components/FirmSection.vue";
import ValuesSection from "../components/ValuesSection.vue";
import NotarySection from "../components/NotarySection.vue";
</script>

<template>
  <div class="about-page">
    <section class="about-intro">
      <div class="in">
        <h1>
          <span class="en">About us</span>
          <span class="km">អំពីយើង</span>
        </h1>

        <p class="lead">
          <span class="en">
            Your Ultimate Destination for the Best Legal Aid Services.
          </span>

          <span class="km">
            ជម្រើសដ៏ល្អបំផុតរបស់លោកអ្នក សម្រាប់សេវាជំនួយផ្នែកច្បាប់ដ៏ប្រសើរ។
          </span>
        </p>
      </div>
    </section>
    <ExpertiseSection />
    <div class="trust-divider">
      <p class="trust-badge">
        <svg
          class="trust-icon"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            d="m12 1 3 3 4-.1.1 4L22 11l-2.9 3.1-.1 4-4-.1-3 3-3-3-4 .1-.1-4L2 11l2.9-3.1.1-4 4 .1Z"
          />
          <path
            d="m7.5 11.5 3 3 6-6"
            fill="none"
            stroke="#fff"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <span class="en">
          Trust Dharmasastra for Reliable Notarization Anytime, Anywhere
        </span>
        <span class="km">
          ជឿទុកចិត្តលើធម្មសាស្ត្រ សម្រាប់សេវាសារការីគ្រប់ពេលវេលា និងគ្រប់ទីកន្លែង
        </span>
      </p>
    </div>
    <TeamSection />
    <!-- <FirmSection /> -->
    <!-- <ValuesSection /> -->
    <!-- <NotarySection /> -->
  </div>
</template>

<style scoped>
.about-intro {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  aspect-ratio: 3 / 1;
  display: flex;
  align-items: center;
  background-color: #18272b;
  color: #fff;
  padding-block: 80px;
  text-align: center;
}

.about-intro::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  background-image: linear-gradient(90deg, rgb(7 26 46 / 65%), rgb(7 26 46 / 10%)),
    url("/images/image.png");
  background-size: 100% 100%, contain;
  background-position: center;
  background-repeat: no-repeat;
}

@media (prefers-reduced-motion: no-preference) {
  .about-intro::before {
    animation: about-background-enter 1800ms cubic-bezier(0.22, 1, 0.36, 1) both;
  }

  .about-intro h1 {
    animation: about-text-enter 1000ms cubic-bezier(0.22, 1, 0.36, 1) 150ms both;
  }

  .about-intro .lead {
    animation: about-text-enter 1000ms cubic-bezier(0.22, 1, 0.36, 1) 350ms both;
  }
}

@keyframes about-background-enter {
  from {
    opacity: 0;
    transform: scale(1.12);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes about-text-enter {
  from {
    opacity: 0;
    transform: translateY(28px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.in {
  max-width: 1520px;
  margin-inline: auto;
}

h1 {
  margin: 0;
  color: #d8bc84;
  font-family: "Inter", "Noto Sans Khmer", sans-serif;
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 500;
  line-height: 1.2;
}

.lead {
  color: #fff;
  max-width: 600px;
  margin: 24px auto 0;
  font-size: clamp(1.125rem, 2.5vw, 1.75rem);
  line-height: 1.35;
}

.about-contact {
  background: #071a2e;
  color: #fff;
  text-align: center;
}

.about-contact h2 {
  color: #fff;
}

.about-contact p {
  max-width: 650px;
  margin: 20px auto 28px;
  color: #c8d0dc;
}
.trust-divider {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px 20px;
  background: #fff;
  isolation: isolate;
}

.trust-divider::before {
  content: "";
  position: absolute;
  inset-inline: 0;
  top: 50%;
  height: 1px;
  background: #e2e2e2;
  z-index: -1;
}

.trust-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  max-width: 100%;
  box-sizing: border-box;
  margin: 0;
  padding: 16px 32px;
  border-radius: 999px;
  background: #fff;
  box-shadow: 0 6px 36px rgb(7 26 46 / 8%);
  color: #071a2e;
  font-size: 14px;
  line-height: 1.6;
  text-align: center;
}

.trust-icon {
  width: 22px;
  height: 22px;
  flex-shrink: 0;
  color: #b9975b;
}

@media (max-width: 600px) {
  .trust-badge {
    padding: 14px 20px;
    font-size: 12px;
  }
}
@media (max-width: 600px) {
  .about-intro {
    padding-block: 48px;
  }

  .about-intro::before {
    background-image: linear-gradient(rgb(7 26 46 / 75%), rgb(7 26 46 / 75%)),
      url("/images/image.png");
  }
}
</style>
