<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const teamSection = ref(null);
let media;

onMounted(() => {
  media = gsap.matchMedia();
  media.add("(prefers-reduced-motion: no-preference)", () => {
    const photos = teamSection.value.querySelectorAll(".team-photo img");
    photos.forEach((photo, index) => {
      gsap.fromTo(
        photo,
        { clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" },
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 1.2,
          delay: index * 0.12,
          ease: "power3.inOut",
          clearProps: "clipPath",
          scrollTrigger: {
            trigger: photo,
            start: "top 85%",
            once: true,
          },
        }
      );
    });
  });
});

onBeforeUnmount(() => media?.revert());

const socialLinks = [
  {
    platform: "Facebook",
    path:
      "M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047v-2.66c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.971h-1.513c-1.491 0-1.956.931-1.956 1.887v2.264h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073Z",
    url: "https://www.facebook.com/YOUR_PAGE",
  },
  {
    platform: "LinkedIn",
    path:
      "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM7.119 20.452H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z",
    url: "https://www.linkedin.com/in/YOUR_PROFILE",
  },
  {
    platform: "YouTube",
    path:
      "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.121 2.136c1.872.505 9.377.505 9.377.505s7.505 0 9.376-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814ZM9.545 15.568V8.432L15.818 12l-6.273 3.568Z",
    url: "https://www.youtube.com/@YOUR_CHANNEL",
  },
];

const members = [
  {
    name: "សុខ ដារ៉ា",
    image: "/images/team-1.png",
    socials: socialLinks,
  },
  {
    name: "ចាន់ សុភា",
    image: "/images/team-2.png",
    socials: socialLinks,
  },
  {
    name: "លី វិសាល",
    image: "/images/team-3.png",
    socials: socialLinks,
  },
  {
    name: "ហេង ស្រីនាង",
    image: "/images/team-4.png",
    socials: socialLinks,
  },
];
</script>

<template>
  <section ref="teamSection" class="team-section">
    <div class="team-container">
      <header class="team-heading">
        <p class="team-eyebrow">
          <span class="en">Meet our team</span>
          <span class="km">ជួបជាមួយក្រុមការងាររបស់យើង</span>
        </p>

        <h2>
          <span class="en"> Working together to protect your interests. </span>
          <span class="km"> រួមគ្នាដើម្បីការពារផលប្រយោជន៍របស់លោកអ្នក។ </span>
        </h2>
      </header>

      <div class="team-grid">
        <article v-for="member in members" :key="member.name" class="team-card">
          <div class="team-photo">
            <img :src="member.image" :alt="member.name" loading="lazy" />

            <div v-if="member.socials.length" class="team-socials">
              <a
                v-for="social in member.socials"
                :key="social.platform"
                :href="social.url"
                target="_blank"
                rel="noopener noreferrer"
                :aria-label="`${member.name} on ${social.platform}`"
              >
                <svg
                  class="social-icon"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path :d="social.path" />
                </svg>
              </a>
            </div>
          </div>

          <div class="team-details">
            <h3>{{ member.name }}</h3>
            <p>
              <span class="en">Lawyer</span>
              <span class="km">មេធាវី</span>
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.team-section {
  padding: 80px 32px;
  background: #fff;
}

.team-container {
  max-width: 1520px;
  margin-inline: auto;
}
.social-icon {
  display: block;
  width: 16px;
  height: 16px;
}
.team-heading {
  margin-bottom: 48px;
  padding: 8px 0 8px 24px;
  border-left: 4px solid #d8bc84;
}

.team-eyebrow {
  margin: 0 0 12px;
  color: #8b6b34;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.6;
}

.team-heading h2 {
  margin: 0;
  color: #071a2e;
  font-size: clamp(26px, 3vw, 40px);
  font-weight: 500;
  line-height: 1.4;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 24px;
}

.team-card {
  min-width: 0;
}

.team-photo {
  position: relative;
  aspect-ratio: 1 / 1;
  background: #e9e9e9;
}

.team-photo img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  filter: grayscale(100%);
  transition: filter 250ms ease;
}

.team-card:hover img,
.team-card:focus-within img {
  filter: grayscale(0%);
}

.team-socials {
  position: absolute;
  top: -10px;
  right: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 12px 8px;
  background: #d8bc84;
}

.team-socials a {
  display: grid;
  place-items: center;
  width: 28px;
  height: 28px;
  color: #071a2e;
  font-family: Arial, sans-serif;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
}

.team-socials a:hover {
  background: rgb(255 255 255 / 35%);
}

.team-socials a:focus-visible {
  outline: 2px solid #071a2e;
  outline-offset: 2px;
}

.team-details {
  padding: 22px 16px;
  background: #f3f3f3;
  text-align: center;
}

.team-details h3 {
  margin: 0;
  color: #071a2e;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.4;
}

.team-details p {
  margin: 6px 0 0;
  color: #8b6b34;
  font-size: 12px;
  line-height: 1.6;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

@media (max-width: 900px) {
  .team-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 32px 24px;
  }
}

@media (max-width: 600px) {
  .team-section {
    padding: 48px 20px;
  }

  .team-heading {
    margin-bottom: 32px;
    padding-left: 18px;
  }
}

@media (max-width: 420px) {
  .team-grid {
    grid-template-columns: 1fr;
  }
}

@media (prefers-reduced-motion: reduce) {
  .team-photo img {
    transition: none;
  }
}
</style>
