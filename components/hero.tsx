'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { slides } from '@/lib/content'
import { ease } from './motion-kit'

const INTERVAL = 7000

/** Carrusel a pantalla completa con fundido entre imágenes, texto centrado y un solo botón. */
export function Hero() {
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)
  const go = useCallback((d: number) => setI((v) => (v + d + slides.length) % slides.length), [])

  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const t = setTimeout(() => go(1), INTERVAL)
    return () => clearTimeout(t)
  }, [i, paused, go])

  const s = slides[i]
  return (
    <section
      id="top"
      aria-roledescription="carrusel"
      aria-label="Presentación"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="relative isolate flex h-[100svh] min-h-[560px] items-center justify-center overflow-hidden bg-black pt-[70px]"
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={s.image}
          className="absolute inset-0 -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        >
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.06 }}
            animate={{ scale: 1 }}
            transition={{ duration: INTERVAL / 1000 + 1.2, ease: 'linear' }}
          >
            <Image src={s.image} alt="" fill priority={i === 0} sizes="100vw" className="object-cover" />
          </motion.div>
          <div className="absolute inset-0 bg-black/45" />
        </motion.div>
      </AnimatePresence>

      <div className="mx-auto max-w-4xl px-6 text-center text-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.6, ease }}
          >
            {i === 0 ? (
              <h1 className="text-[32px] font-semibold leading-tight md:text-5xl">{s.title}</h1>
            ) : (
              <p className="text-[32px] font-semibold leading-tight md:text-5xl">{s.title}</p>
            )}
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">{s.text}</p>
            <Link href={s.cta.href} className="btn btn-light mt-8">
              {s.cta.label}
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>

      <Arrow side="left" onClick={() => go(-1)} />
      <Arrow side="right" onClick={() => go(1)} />

      <div className="absolute inset-x-0 bottom-8 flex flex-col items-center gap-5">
        <div className="flex gap-2">
          {slides.map((sl, k) => (
            <button
              key={sl.image}
              type="button"
              onClick={() => setI(k)}
              aria-label={`Ir a la diapositiva ${k + 1}`}
              aria-current={k === i}
              className={`h-1.5 rounded-full transition-all duration-500 ${k === i ? 'w-8 bg-white' : 'w-1.5 bg-white/50 hover:bg-white/80'}`}
            />
          ))}
        </div>
        <a href="#nosotros" className="hidden flex-col items-center gap-2 text-xs text-white/80 hover:text-white sm:flex">
          <span className="grid h-8 w-5 justify-center rounded-full border-2 border-white/70 pt-1.5">
            <motion.span
              className="block h-1.5 w-1 rounded-full bg-white"
              animate={{ y: [0, 8, 0], opacity: [1, 0.2, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            />
          </span>
          Desliza para descubrir más
        </a>
      </div>
    </section>
  )
}

function Arrow({ side, onClick }: { side: 'left' | 'right'; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={side === 'left' ? 'Anterior' : 'Siguiente'}
      className={`absolute top-1/2 hidden -translate-y-1/2 p-3 text-white/80 transition-colors hover:text-white sm:block ${side === 'left' ? 'left-3' : 'right-3'}`}
    >
      <svg width="22" height="40" viewBox="0 0 22 40" fill="none" aria-hidden="true">
        <path d={side === 'left' ? 'M20 2 2 20l18 18' : 'M2 2l18 18L2 38'} stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  )
}
