'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'motion/react'
import { services, site } from '@/lib/content'
import { ease, SplitLines } from './motion-kit'

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-30%'])
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  // Leve paralaje con el mouse
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 60, damping: 20 })
  const sy = useSpring(my, { stiffness: 60, damping: 20 })

  return (
    <section
      id="top"
      ref={ref}
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect()
        mx.set(((e.clientX - r.left) / r.width - 0.5) * -24)
        my.set(((e.clientY - r.top) / r.height - 0.5) * -24)
      }}
      className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden pb-10 pt-32 md:pb-14"
    >
      {/* Imagen de fondo */}
      <motion.div className="absolute inset-0 -z-10" style={{ y: imgY, scale: imgScale }}>
        <motion.div
          className="absolute inset-0"
          style={{ x: sx, y: sy }}
          initial={{ opacity: 0, scale: 1.15, filter: 'blur(20px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 2, ease }}
        >
          <Image
            src="/images/hero.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[70%_center] opacity-80 md:object-right"
          />
        </motion.div>
        <div className="absolute inset-0 bg-linear-to-r from-ink via-ink/70 to-transparent md:via-ink/40" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-ink to-transparent" />
        <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-ink/80 to-transparent" />
      </motion.div>

      <motion.div style={{ y: textY, opacity: fade }} className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <motion.p
          className="eyebrow mb-6"
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.4 }}
        >
          {site.name}
        </motion.p>

        <SplitLines
          as="h1"
          inView={false}
          delay={0.5}
          className="text-[clamp(3.2rem,11vw,10.5rem)] font-semibold leading-[0.88] tracking-[-0.055em] text-white"
          lines={[
            'Tecnología',
            <>
              que <span className="font-serif font-normal italic tracking-[-0.02em] text-accent">impulsa</span>
            </>,
            <span key="3" className="text-shine">tu empresa.</span>,
          ]}
        />

        <div className="mt-10 grid gap-8 md:mt-14 md:grid-cols-[1fr_auto] md:items-end">
          <motion.p
            className="max-w-xl text-lg leading-relaxed text-gray-300/80 md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 1 }}
          >
            Software, inteligencia artificial, datos, nube y ciberseguridad para transformar
            organizaciones públicas y privadas. La empresa de tecnología de{' '}
            <a href={site.holding.url} className="text-white underline decoration-indigo-400/50 underline-offset-4 hover:decoration-indigo-300">
              {site.holding.name}
            </a>
            .
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 1.15 }}
          >
            <a href="#servicios" className="btn btn-primary group">
              Ver servicios
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a href="/contacto" className="btn btn-ghost">
              Agendar una reunión
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hairline mt-12 flex items-center justify-between pt-5 font-mono text-[11px] uppercase tracking-[0.2em] text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          <span>{services.length} líneas de servicio</span>
          <span className="hidden sm:inline">Perú · Operación global</span>
          <span className="flex items-center gap-2">
            Scroll
            <span className="relative block h-6 w-px overflow-hidden bg-gray-700">
              <motion.span
                className="absolute inset-x-0 top-0 h-2 bg-indigo-300"
                animate={{ y: [-8, 24] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
              />
            </span>
          </span>
        </motion.div>
      </motion.div>
    </section>
  )
}
