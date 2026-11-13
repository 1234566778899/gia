'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'motion/react'
import { method } from '@/lib/content'

/** Sección fija con desplazamiento horizontal: los cuatro pasos del método avanzan con el scroll. */
export function Method() {
  const section = useRef<HTMLElement>(null)
  const track = useRef<HTMLDivElement>(null)
  const [distance, setDistance] = useState(0)

  useEffect(() => {
    const measure = () => {
      if (track.current) setDistance(Math.max(0, track.current.scrollWidth - window.innerWidth))
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  const { scrollYProgress } = useScroll({ target: section, offset: ['start start', 'end end'] })
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance])
  const bar = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  return (
    <section id="metodo" ref={section} className="relative h-[320vh]">
      <div className="sticky top-0 flex h-[100svh] flex-col justify-center overflow-hidden">
        <motion.div ref={track} style={{ x }} className="flex w-max items-stretch gap-5 px-4 sm:px-6 md:gap-8 lg:pl-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]">
          <div className="flex w-[82vw] shrink-0 flex-col justify-center pr-6 sm:w-[60vw] lg:w-[34rem]">
            <p className="eyebrow mb-6">Método</p>
            <h2 className="text-[clamp(2.75rem,7vw,6.5rem)] font-semibold leading-[0.9] tracking-[-0.05em] text-white">
              Del diagnóstico a la <span className="font-serif font-normal italic tracking-[-0.02em] text-accent">operación.</span>
            </h2>
            <p className="mt-6 max-w-md text-lg text-gray-400">
              Un mismo equipo acompaña el proyecto de punta a punta, con entregas medibles en cada etapa.
            </p>
          </div>

          {method.map((m) => (
            <article
              key={m.n}
              className="border-gradient group relative flex h-[62svh] min-h-[420px] w-[78vw] shrink-0 flex-col justify-between overflow-hidden rounded-[2rem] bg-linear-to-b from-gray-900 to-gray-950 p-8 sm:w-[46vw] md:p-10 lg:w-[30rem]"
            >
              <div
                className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-indigo-500/20 blur-3xl transition-all duration-700 group-hover:bg-cyan-400/25"
                aria-hidden="true"
              />
              <span className="text-[clamp(6rem,14vw,11rem)] font-semibold leading-[0.8] tracking-[-0.06em] text-shine">{m.n}</span>
              <div>
                <h3 className="text-4xl font-semibold tracking-[-0.04em] text-white md:text-5xl">{m.title}</h3>
                <p className="mt-4 max-w-sm text-lg leading-relaxed text-gray-400">{m.text}</p>
              </div>
            </article>
          ))}
          <div className="w-4 shrink-0 sm:w-6" />
        </motion.div>

        <div className="mx-auto mt-10 h-px w-full max-w-7xl px-4 sm:px-6">
          <div className="h-px w-full bg-gray-800">
            <motion.div style={{ scaleX: bar }} className="h-px origin-left bg-linear-to-r from-indigo-500 to-cyan-300" />
          </div>
        </div>
      </div>
    </section>
  )
}
