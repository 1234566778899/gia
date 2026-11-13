'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { motion, useScroll, useTransform, type MotionValue } from 'motion/react'
import { services, type Service } from '@/lib/content'
import { FadeIn, SplitLines } from './motion-kit'

/** Tarjetas apiladas: cada línea de servicio se queda fija y la siguiente la cubre. */
export function Services() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })

  return (
    <section id="servicios" className="relative pb-24 md:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-16 grid gap-8 md:mb-24 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <FadeIn>
              <p className="eyebrow mb-6">Servicios</p>
            </FadeIn>
            <SplitLines
              className="text-[clamp(2.75rem,7.5vw,7rem)] font-semibold leading-[0.9] tracking-[-0.05em] text-white"
              lines={[
                'Ocho frentes,',
                <>
                  una sola <span className="font-serif font-normal italic tracking-[-0.02em] text-accent">visión.</span>
                </>,
              ]}
            />
          </div>
          <FadeIn delay={0.2} className="max-w-sm text-lg text-gray-400">
            Cubrimos toda la cadena tecnológica: del hardware y la red hasta los datos, la inteligencia
            artificial y la seguridad.
          </FadeIn>
        </div>

        <div ref={ref} className="relative">
          {services.map((s, i) => (
            <Card key={s.slug} s={s} i={i} total={services.length} progress={scrollYProgress} />
          ))}
        </div>
      </div>
    </section>
  )
}

const STACK = 12

function Card({ s, i, total, progress }: { s: Service; i: number; total: number; progress: MotionValue<number> }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress: own } = useScroll({ target: ref, offset: ['start end', 'start start'] })
  const imgScale = useTransform(own, [0, 1], [1.35, 1])
  // El contenedor se desplaza (total - 1) alturas de tarjeta: la tarjeta i llega arriba en i / (total - 1).
  const steps = total - 1
  const start = Math.min(i / steps, 1)
  const target = 1 - (total - i) * 0.025
  const scale = useTransform(progress, [start, 1], [1, i === steps ? 1 : target])
  const dim = useTransform(progress, [start, Math.min((i + 1) / steps, 1)], [0, i === steps ? 0 : 0.6])

  return (
    // Fija a 24 px del borde (el menú se oculta al bajar). Cada tarjeta baja STACK px más que la anterior
    // y todas descuentan la pila completa, así la última también termina 24 px antes del borde inferior.
    <div ref={ref} className="sticky top-6 h-[calc(100svh-3rem)] min-h-[520px]" style={{ zIndex: i + 1 }}>
      <motion.article
        style={{ scale, top: `${i * STACK}px`, height: `calc(100% - ${steps * STACK}px)` }}
        className="border-gradient relative grid origin-top overflow-hidden rounded-[2rem] bg-gray-950 md:grid-cols-[1.05fr_1fr]"
      >
        <div className="relative z-10 flex flex-col justify-between gap-6 p-6 sm:p-10 lg:p-14 [@media(max-height:780px)]:gap-4 [@media(max-height:780px)]:lg:p-10">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-indigo-300/80">{s.kicker}</span>
          <div>
            <span className="text-outline mb-4 block text-7xl font-semibold leading-none tracking-[-0.06em] md:text-9xl [@media(max-height:780px)]:hidden">{s.n}</span>
            <h3 className="text-[clamp(1.9rem,3.6vw,3.4rem)] font-semibold leading-[0.98] tracking-[-0.04em] text-white">
              {s.title}
            </h3>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-gray-400 md:text-lg [@media(max-height:780px)]:mt-3 [@media(max-height:780px)]:md:text-base">{s.text}</p>
            <ul className="mt-7 flex flex-wrap gap-2 [@media(max-height:780px)]:mt-4">
              {s.tags.map((t) => (
                <li key={t} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-gray-300">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="absolute inset-0 -z-0 overflow-hidden md:relative">
          <motion.div className="absolute inset-0" style={{ scale: imgScale }}>
            <Image src={s.image} alt={s.alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
          </motion.div>
          <div className="absolute inset-0 bg-gray-950/75 md:bg-transparent md:bg-linear-to-r md:from-gray-950 md:via-transparent md:via-30% md:to-transparent" />
        </div>

        <motion.div style={{ opacity: dim }} className="pointer-events-none absolute inset-0 z-20 bg-black" />
      </motion.article>
    </div>
  )
}
