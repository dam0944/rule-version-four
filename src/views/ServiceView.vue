<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { RouterLink } from "vue-router";
import ConsultationSection from "../components/ConsultationSection.vue";
const page = ref(null);
let revealObserver;

onMounted(() => {
  if (
    window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
    !("IntersectionObserver" in window)
  )
    return;

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        const content = target.firstElementChild;
        content.classList.toggle("reveal-pending", !isIntersecting);
        content.classList.toggle("reveal-visible", isIntersecting);
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );

  // Observe an unclipped wrapper so the hidden content cannot affect intersection.
  page.value.querySelectorAll(".reveal-trigger").forEach((element) => {
    element.firstElementChild.classList.add("reveal-pending");
    revealObserver.observe(element);
  });
});

onBeforeUnmount(() => revealObserver?.disconnect());

const services = [
  {
    number: "01",
    en: "Document Notarization",
    km: "សេវាបញ្ជាក់ឯកសារ",
    descriptionEn: "Notarial assistance for documents requiring formal certification.",
    descriptionKm: "ជំនួយផ្នែកសារការីសម្រាប់ឯកសារដែលត្រូវការការបញ្ជាក់ជាផ្លូវការ។",
  },
  {
    number: "02",
    en: "Contracts and Agreements",
    km: "កិច្ចសន្យា និងកិច្ចព្រមព្រៀង",
    descriptionEn:
      "Preparation and review of contracts with clear terms for all parties.",
    descriptionKm: "រៀបចំ និងពិនិត្យកិច្ចសន្យា ដោយមានលក្ខខណ្ឌច្បាស់លាស់សម្រាប់គ្រប់ភាគី។",
  },
  {
    number: "03",
    en: "Property Transactions",
    km: "ប្រតិបត្តិការអចលនទ្រព្យ",
    descriptionEn: "Document guidance for property sales, purchases, and transfers.",
    descriptionKm: "ការណែនាំអំពីឯកសារសម្រាប់ការលក់ ការទិញ និងការផ្ទេរអចលនទ្រព្យ។",
  },
  {
    number: "04",
    en: "Business Documentation",
    km: "ឯកសារអាជីវកម្ម",
    descriptionEn: "Support with business agreements and corporate documentation.",
    descriptionKm: "ជំនួយលើកិច្ចព្រមព្រៀងអាជីវកម្ម និងឯកសាររបស់ក្រុមហ៊ុន។",
  },
  {
    number: "05",
    en: "Powers of Attorney",
    km: "លិខិតប្រគល់សិទ្ធិ",
    descriptionEn:
      "Assistance preparing documents that authorize a representative to act.",
    descriptionKm: "ជំនួយក្នុងការរៀបចំឯកសារប្រគល់សិទ្ធិឱ្យអ្នកតំណាងធ្វើសកម្មភាព។",
  },
  {
    number: "06",
    en: "Legal Consultation",
    km: "ការប្រឹក្សាផ្នែកច្បាប់",
    descriptionEn:
      "Discuss your circumstances and understand the documents you may need.",
    descriptionKm: "ពិភាក្សាអំពីស្ថានភាពរបស់លោកអ្នក និងស្វែងយល់ពីឯកសារដែលអាចត្រូវការ។",
  },
];
</script>

<template>
  <div ref="page" class="services-page">
    <!-- Hero -->
    <section class="services-hero">
      <div class="hero-container">
        <h1>
          <span class="en">Our Services</span>
          <span class="km">សេវាកម្មរបស់យើង</span>
        </h1>

        <p class="hero-lead">
          <span class="en">
            Professional guidance for your legal and notarial needs.
          </span>
          <span class="km">
            ការណែនាំប្រកបដោយវិជ្ជាជីវៈ សម្រាប់តម្រូវការផ្នែកច្បាប់ និងសារការីរបស់លោកអ្នក។
          </span>
        </p>
      </div>
    </section>
    <!-- Service introduction -->
    <section class="service-intro">
      <div class="services-container service-intro-grid">
        <div class="service-intro-content">
          <p class="eyebrow">
            <span class="en">Our service</span>
            <span class="km">សេវាកម្មរបស់យើង</span>
          </p>

          <h2>
            <span class="en"> Professional and trusted lawyer services </span>
            <span class="km"> សេវាកម្មមេធាវីប្រកបដោយវិជ្ជាជីវៈ និងទំនុកចិត្ត </span>
          </h2>

          <blockquote>
            <span class="en">
              We listen carefully, explain your options, and help you prepare for the next
              step.
            </span>
            <span class="km">
              យើងស្តាប់ដោយយកចិត្តទុកដាក់ ពន្យល់ពីជម្រើសរបស់លោកអ្នក
              និងជួយរៀបចំសម្រាប់ជំហានបន្ទាប់។
            </span>
          </blockquote>

          <p class="service-intro-description">
            <span class="en">
              From legal consultation to document preparation, our team provides practical
              support tailored to your personal and business needs.
            </span>
            <span class="km">
              ចាប់ពីការប្រឹក្សាផ្នែកច្បាប់រហូតដល់ការរៀបចំឯកសារ
              ក្រុមការងាររបស់យើងផ្តល់ជំនួយសមស្របតាមតម្រូវការផ្ទាល់ខ្លួន
              និងអាជីវកម្មរបស់លោកអ្នក។
            </span>
          </p>
        </div>

        <div class="reveal-trigger">
          <div class="service-intro-visual">
            <img
              src="/images/team-1.png"
              alt="Portrait of a team member"
              loading="lazy"
            />

            <div class="service-intro-ribbon">
              <span class="en">Protect Your Rights</span>
              <span class="km">ការពារសិទ្ធិរបស់លោកអ្នក</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <ConsultationSection />
    <!-- Services -->
    <section class="services-section">
      <div class="services-container">
        <header class="section-heading">
          <p class="eyebrow">
            <span class="en">What we do</span>
            <span class="km">អ្វីដែលយើងផ្តល់ជូន</span>
          </p>

          <h2>
            <span class="en">Clear advice. Careful preparation.</span>
            <span class="km"> ការប្រឹក្សាច្បាស់លាស់ និងការរៀបចំយ៉ាងយកចិត្តទុកដាក់។ </span>
          </h2>

          <p class="section-description">
            <span class="en">
              Explore our services and contact our office to discuss your requirements.
            </span>
            <span class="km">
              ស្វែងយល់អំពីសេវាកម្មរបស់យើង និងទាក់ទងការិយាល័យ
              ដើម្បីពិភាក្សាអំពីតម្រូវការរបស់លោកអ្នក។
            </span>
          </p>
        </header>

        <div class="services-grid">
          <div v-for="service in services" :key="service.number" class="reveal-trigger">
            <article class="service-card">
              <span class="service-number" aria-hidden="true">
                {{ service.number }}
              </span>

              <h3>
                <span class="en">{{ service.en }}</span>
                <span class="km">{{ service.km }}</span>
              </h3>

              <p>
                <span class="en">{{ service.descriptionEn }}</span>
                <span class="km">{{ service.descriptionKm }}</span>
              </p>

              <RouterLink class="service-link" to="/contact">
                <span class="en">Enquire about this service</span>
                <span class="km">សាកសួរអំពីសេវានេះ</span>
                <span aria-hidden="true">→</span>
              </RouterLink>
            </article>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.services-page {
  color: #071a2e;
}

/* A diagonal polygon opens across each card and the introduction image. */
.reveal-trigger {
  display: grid;
  min-width: 0;
}

.reveal-pending {
  clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
}

.reveal-visible {
  animation: service-clip-reveal 1400ms cubic-bezier(0.22, 1, 0.36, 1) both;
}

.service-card:focus-within {
  clip-path: none;
  animation: none;
}

@keyframes service-clip-reveal {
  0% {
    clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
  }
  45% {
    clip-path: polygon(0 0, 70% 0, 40% 100%, 0 100%);
  }
  100% {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
}

.services-hero {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  box-sizing: border-box;
  aspect-ratio: 3 / 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 24px;
  background-color: #18272b;
  color: #fff;
  text-align: center;
}

.services-hero::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  background-image: linear-gradient(90deg, rgb(7 26 46 / 65%), rgb(7 26 46 / 10%)),
    url("/images/image.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

@media (prefers-reduced-motion: no-preference) {
  .services-hero::before {
    animation: services-background-enter 1800ms cubic-bezier(0.22, 1, 0.36, 1) both;
  }

  .services-hero h1 {
    animation: services-text-enter 1000ms cubic-bezier(0.22, 1, 0.36, 1) 150ms both;
  }

  .services-hero .hero-lead {
    animation: services-text-enter 1000ms cubic-bezier(0.22, 1, 0.36, 1) 350ms both;
  }
}

@keyframes services-background-enter {
  from {
    opacity: 0;
    transform: scale(1.12);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes services-text-enter {
  from {
    opacity: 0;
    transform: translateY(28px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.service-intro {
  padding: 80px 32px;
  background: #fff;
}

.service-intro-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  align-items: center;
  gap: clamp(40px, 7vw, 120px);
}

.service-intro-content {
  max-width: 620px;
}

.service-intro-content h2 {
  margin: 0;
  color: #071a2e;
  font-size: clamp(28px, 3vw, 44px);
  font-weight: 500;
  line-height: 1.45;
}

.service-intro-content blockquote {
  margin: 24px 0;
  padding-left: 18px;
  border-left: 4px solid #d8bc84;
  color: #647080;
  font-size: 15px;
  font-style: italic;
  line-height: 1.8;
}

.service-intro-description {
  margin: 0;
  color: #647080;
  font-size: 15px;
  line-height: 1.8;
}

.service-intro-visual {
  position: relative;
  isolation: isolate;
  width: 100%;
  max-width: 620px;
  box-sizing: border-box;
  justify-self: end;
  padding-top: 14px;
  padding-right: 48px;
}

/* Gold panel behind the portrait. */
.service-intro-visual::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 14px;
  width: 38%;
  background: #d8bc84;
  z-index: -1;
}

.service-intro-visual img {
  display: block;
  width: 100%;
  aspect-ratio: 1.1 / 1;
  object-fit: cover;
  object-position: center;
  filter: grayscale(100%);
}

.service-intro-ribbon {
  position: absolute;
  top: 14px;
  right: 0;
  bottom: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  color: #071a2e;
  font-size: clamp(16px, 1.8vw, 24px);
  font-weight: 500;
}

.service-intro-ribbon > span {
  writing-mode: vertical-rl;
  text-orientation: mixed;
  white-space: nowrap;
}

@media (max-width: 900px) {
  .service-intro-grid {
    gap: 32px;
  }
}

@media (max-width: 680px) {
  .service-intro {
    padding: 48px 20px;
  }

  .service-intro-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .service-intro-content,
  .service-intro-visual {
    max-width: 100%;
  }

  .service-intro-visual {
    justify-self: stretch;
  }
}
.hero-container {
  width: 100%;
  max-width: 900px;
  margin-inline: auto;
}

.services-hero h1 {
  margin: 0;
  color: #d8bc84;
  font-family: "Inter", "Noto Sans Khmer", sans-serif;
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 500;
  line-height: 1.35;
}

.hero-lead {
  max-width: 650px;
  margin: 24px auto 0;
  color: #fff;
  font-size: clamp(1.125rem, 2.5vw, 1.75rem);
  line-height: 1.6;
}

.services-container {
  max-width: 1520px;
  margin-inline: auto;
}

.services-section {
  padding: 80px 32px;
  background: #fff;
}

.section-heading {
  max-width: 850px;
  margin-bottom: 48px;
  padding-left: 24px;
  border-left: 4px solid #d8bc84;
}

.eyebrow {
  margin: 0 0 12px;
  color: #8b6b34;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.6;
}

.section-heading h2,
.services-contact h2 {
  margin: 0;
  font-size: clamp(26px, 3vw, 40px);
  font-weight: 500;
  line-height: 1.5;
}

.section-description {
  margin: 20px 0 0;
  color: #647080;
  line-height: 1.8;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}

.service-card {
  display: flex;
  flex-direction: column;
  min-width: 0;
  padding: 32px;
  border: 1px solid #e4e7eb;
  background: #fff;
  transition: border-color 200ms ease;
}

.service-card:hover,
.service-card:focus-within {
  border-color: #b9975b;
}

.service-number {
  margin-bottom: 24px;
  color: #b9975b;
  font-size: 32px;
  font-weight: 500;
}

.service-card h3 {
  margin: 0;
  color: #071a2e;
  font-size: 22px;
  font-weight: 500;
  line-height: 1.5;
}

.service-card > p {
  margin: 16px 0 28px;
  color: #647080;
  font-size: 15px;
  line-height: 1.8;
}

.service-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-top: auto;
  padding-top: 20px;
  border-top: 1px solid #e4e7eb;
  color: #8b6b34;
  font-size: 14px;
  line-height: 1.6;
  text-decoration: none;
}

.service-link:hover {
  color: #071a2e;
}

.services-contact {
  padding: 80px 32px;
  background: #071a2e;
  color: #fff;
  text-align: center;
}

.services-contact .eyebrow {
  color: #d8bc84;
}

.services-contact h2 {
  color: #fff;
}

.contact-description {
  max-width: 650px;
  margin: 20px auto 28px;
  color: #c8d0dc;
  line-height: 1.8;
}

.contact-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 14px 28px;
  border: 1px solid #d8bc84;
  background: #d8bc84;
  color: #071a2e;
  font-weight: 500;
  line-height: 1.6;
  text-decoration: none;
}

.contact-button:hover {
  background: #e5cea4;
}

.service-link:focus-visible,
.contact-button:focus-visible {
  outline: 2px solid #b9975b;
  outline-offset: 5px;
}

@media (max-width: 900px) {
  .services-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 600px) {
  .services-hero {
    aspect-ratio: auto;
    min-height: 300px;
    padding: 48px 20px;
  }

  .services-hero::before {
    background-image: linear-gradient(rgb(7 26 46 / 75%), rgb(7 26 46 / 75%)),
      url("/images/image.png");
  }

  .services-section,
  .services-contact {
    padding: 48px 20px;
  }

  .section-heading {
    padding-left: 18px;
    margin-bottom: 32px;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }

  .service-card {
    padding: 28px 24px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .reveal-pending,
  .reveal-visible {
    clip-path: none;
    animation: none;
  }

  .service-card {
    transition: none;
  }
}
</style>
