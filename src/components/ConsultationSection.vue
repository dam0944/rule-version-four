<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <section class="consultation-section">
    <div class="consultation-container">
      <h2>
        <span class="en">
          Get the Legal Support You Deserve
          <span class="heading-line">Schedule Your Consultation Today</span>
        </span>

        <span class="km">
          ទទួលបានការគាំទ្រផ្នែកច្បាប់ដែលលោកអ្នកត្រូវការ
          <span class="heading-line">ណាត់ជួបពិគ្រោះយោបល់ជាមួយយើងថ្ងៃនេះ</span>
        </span>
      </h2>

      <p>
        <span class="en">
          Discuss your legal and notarial needs with our team. We’re here to help you
          understand your next steps.
        </span>

        <span class="km">
          ពិភាក្សាអំពីតម្រូវការផ្នែកច្បាប់ និងសារការីជាមួយក្រុមការងាររបស់យើង។
          យើងនៅទីនេះដើម្បីជួយលោកអ្នកស្វែងយល់ពីជំហានបន្ទាប់។
        </span>
      </p>

      <RouterLink class="consultation-button" to="/contact">
        <span class="en">Book a Consultation</span>
        <span class="km">ណាត់ជួបពិគ្រោះយោបល់</span>
        <span aria-hidden="true">→</span>
      </RouterLink>
    </div>
  </section>
</template>

<style scoped>
.consultation-section {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 380px;
  box-sizing: border-box;
  padding: 72px 32px;
  background-color: #071a2e;
  background-image: linear-gradient(rgb(7 18 30 / 72%), rgb(7 18 30 / 72%)),
    url("/images/background.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  color: #fff;
  text-align: center;
}

.consultation-container {
  width: 100%;
  max-width: 900px;
  margin-inline: auto;
}

.consultation-container h2 {
  margin: 0;
  color: #fff;
  font-family: "Inter", "Noto Sans Khmer", sans-serif;
  font-size: clamp(26px, 3vw, 40px);
  font-weight: 500;
  line-height: 1.5;
}

.heading-line {
  display: block;
}

.consultation-container p {
  max-width: 650px;
  margin: 20px auto 28px;
  color: #e0e5eb;
  font-size: 16px;
  line-height: 1.8;
}

.consultation-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  padding: 14px 28px;
  border: 1px solid #d8bc84;
  background: #d8bc84;
  color: #071a2e;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.7;
  text-decoration: none;
}

.consultation-button:hover {
  background: #e5cea4;
  border-color: #e5cea4;
}

.consultation-button:focus-visible {
  outline: 2px solid #fff;
  outline-offset: 5px;
}

@media (max-width: 600px) {
  .consultation-section {
    min-height: 340px;
    padding: 48px 20px;
  }

  .consultation-container p {
    font-size: 15px;
  }

  .consultation-button {
    padding: 14px 22px;
  }
}
</style>
