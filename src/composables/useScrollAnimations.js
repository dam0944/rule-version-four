import { onMounted, onBeforeUnmount } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useScrollAnimations(page) {
 let context
 let media
 let disposed = false
 const refresh = () => ScrollTrigger.refresh()
 onMounted(() => {
  context = gsap.context(() => {
   media = gsap.matchMedia()
   media.add('(prefers-reduced-motion: no-preference)', motionContext => {
    const reveal = (nodes, delay = 0) => {
     const targets = [...nodes].filter(Boolean)
     if (targets.length) gsap.from(targets, { y: 22, opacity: 0, duration: 0.65, stagger: 0.09, delay, ease: 'power2.out', clearProps: 'transform,opacity' })
    }
    const hero = page.value.querySelector('.hero')
    if (hero.getBoundingClientRect().bottom > 0 && hero.getBoundingClientRect().top < innerHeight) reveal(hero.querySelectorAll('.eyebrow,h1,.sub,.btns'))
    page.value.querySelectorAll('section:not(.hero)').forEach(section => {
     // A tween is created only on entry; content is never pre-hidden.
     ScrollTrigger.create({ trigger: section, start: 'top 88%', once: true,
      onEnter: () => motionContext.add(() => {
       reveal([section.querySelector('.eyebrow,.tag'), section.querySelector('h2')])
       reveal(section.querySelectorAll('.item,.vals .col,.steps li,.faq details,.prepare-list li'), 0.12)
       reveal([section.querySelector('.card2,.scales,.map,form')], 0.16)
      })
     })
    })
   })
  }, page.value)
  // Capture non-bubbling details toggle events for FAQ height changes.
  page.value.addEventListener('toggle', refresh, true)
  window.addEventListener('load', refresh)
  document.fonts?.ready.then(() => { if (!disposed) refresh() })
 })
 onBeforeUnmount(() => {
  disposed = true
  page.value?.removeEventListener('toggle', refresh, true)
  window.removeEventListener('load', refresh)
  media?.revert()
  context?.revert()
 })
 return { refresh }
}
