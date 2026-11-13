'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { clients } from '@/lib/content'
import { ease } from './motion-kit'
import { SectionTitle } from './section-title'

const INTERVAL = 8000

/**
 * Clientes como en grupobusiness.it: título y franja negra con un testimonio por diapositiva (año, caso, cita,
 * logo del cliente en un recuadro blanco, nombre y cargo). Los datos son de ejemplo, ver lib/content.ts.
 */
export function Clients() {
  const list = clients.testimonials
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)
  const go = (d: number) => setI((v) => (v + d + list.length) % list.length)

  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const t = setTimeout(() => setI((v) => (v + 1) % list.length), INTERVAL)
    return () => clearTimeout(t)
  }, [i, paused, list.length])

  const t = list[i]
  return (
    <section id="clientes" className="pt-16 md:pt-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionTitle title="Nuestros clientes" />
      </div>

      <div
        className="relative mt-12 bg-black px-12 py-12 text-center text-white sm:px-20 md:py-14"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        aria-roledescription="carrusel"
        aria-label="Testimonios de clientes"
      >
        <AnimatePresence mode="wait">
          <motion.figure
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease }}
            className="mx-auto flex min-h-[330px] max-w-4xl flex-col items-center"
          >
            <p className="font-display text-sm font-medium italic text-white/80">{t.year}</p>
            <p className="mt-1 font-display text-lg font-semibold uppercase md:text-2xl">{t.title}</p>
            <blockquote className="mt-4 text-[15px] italic leading-relaxed text-white/90 md:text-base">“{t.quote}”</blockquote>
            <div className="relative mt-7 h-[86px] w-[150px] rounded-md bg-white">
              <Image src={t.logo} alt={t.company} fill sizes="150px" loading="eager" className="object-contain p-2.5" />
            </div>
            <figcaption className="mt-4">
              <span className="block text-sm font-semibold">{t.name}</span>
              <span className="block text-sm text-white/70">
                {t.role}, {t.company}
              </span>
            </figcaption>
          </motion.figure>
        </AnimatePresence>

        {/* Precarga de todos los logos (misma URL optimizada que la visible), para que el recuadro blanco
            nunca aparezca vacío al cambiar de testimonio. */}
        <div aria-hidden="true" className="pointer-events-none absolute left-0 top-0 size-px overflow-hidden opacity-0">
          {list.map((x) => (
            <div key={x.company} className="relative h-[86px] w-[150px]">
              <Image src={x.logo} alt="" fill sizes="150px" loading="eager" fetchPriority="low" />
            </div>
          ))}
        </div>

        <button type="button" onClick={() => go(-1)} aria-label="Testimonio anterior" className="absolute left-2 top-1/2 -translate-y-1/2 p-3 text-white/80 hover:text-white sm:left-4">
          <Chevron dir="left" />
        </button>
        <button type="button" onClick={() => go(1)} aria-label="Testimonio siguiente" className="absolute right-2 top-1/2 -translate-y-1/2 p-3 text-white/80 hover:text-white sm:right-4">
          <Chevron dir="right" />
        </button>
        <div className="mt-6 flex justify-center gap-2">
          {list.map((x, k) => (
            <button
              key={x.company}
              type="button"
              onClick={() => setI(k)}
              aria-label={`Ver testimonio de ${x.company}`}
              aria-current={k === i}
              className={`size-2 rounded-full transition-colors ${k === i ? 'bg-white' : 'bg-white/35 hover:bg-white/60'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function Chevron({ dir }: { dir: 'left' | 'right' }) {
  return (
    <svg width="20" height="36" viewBox="0 0 22 40" fill="none" aria-hidden="true">
      <path d={dir === 'left' ? 'M20 2 2 20l18 18' : 'M2 2l18 18L2 38'} stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
