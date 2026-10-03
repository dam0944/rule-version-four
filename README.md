# Dharmasastra Vue website

Vue 3 + Vite conversion of the existing bilingual website. Requires Node.js 20.19+ or 22.12+.

## Run

```sh
npm install
npm run dev
```

Open the local URL shown by Vite.

## Build

```sh
npm run build
npm run preview
```

Deploy the generated `dist` folder to your static hosting provider.

## Structure

- `src/views/HomeView.vue`: page composition and Khmer/English state.
- `src/components`: header, footer and one component per section.
- `src/assets/main.css`: preserved site styling and responsive layouts.
- `src/composables/useScrollAnimations.js`: GSAP and ScrollTrigger lifecycle management.
- `src/config/office.js`: appointment email configuration.
- `public/images`: images extracted from the original embedded assets.

## Before publishing

Set the real email in `src/config/office.js`. The form prepares an email in the visitor's email app; it is not a backend booking system. Confirm the real professional portrait and biography, replace pending FAQ answers, provide the full office address, hours and precise map, and add the approved privacy policy. These facts remain placeholders in this conversion.

Hero content uses 900px max-width; other containers use 1520px. Khmer is the default language. GSAP is bundled locally by Vite and honors reduced motion. Google Fonts still needs internet access. No router or state library is required for this single-page site.
