'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'motion/react'
import { site } from '@/lib/content'
import { SplitLines } from './motion-kit'

export function Cta() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end end'] })
  const scale = useTransform(scrollYProgress, [0, 1], [0.86, 1])
  const radius = useTransform(scrollYProgress, [0, 1], [64, 0])

  return (
    <section id="contacto" ref={ref} className="relative px-2 pt-10">
      <motion.div
        style={{ scale, borderRadius: radius }}
        className="relative isolate mx-auto flex min-h-[92svh] origin-bottom flex-col items-center justify-center overflow-hidden bg-gray-950 px-4 py-28 text-center"
      >
        <Image src="/images/cta.jpg" alt="" fill sizes="100vw" className="-z-10 object-cover opacity-50" />
        <div className="absolute inset-0 -z-10 bg-radial from-transparent via-ink/60 to-ink" />

        <p className="eyebrow mb-8">Contacto</p>
        <SplitLines
          className="text-[clamp(3rem,10vw,9.5rem)] font-semibold leading-[0.88] tracking-[-0.055em] text-white"
          lines={[
            '¿Construimos',
            <>
              lo que <span className="font-serif font-normal italic tracking-[-0.02em] text-accent">sigue?</span>
            </>,
          ]}
        />
        <p className="mx-auto mt-8 max-w-xl text-lg text-gray-300/80 md:text-xl">
          Cuéntanos tu reto tecnológico. Te respondemos con un diagnóstico y una propuesta concreta.
        </p>
        <div className="mt-12">
          <Magnetic>
            <a
              href={site.contactUrl}
              className="group relative grid size-40 place-items-center rounded-full bg-white text-base font-medium text-gray-950 transition-colors hover:bg-indigo-200 md:size-48 md:text-lg"
            >
              <span className="flex items-center gap-2">
                Escríbenos
                <span className="transition-transform duration-300 group-hover:-rotate-45">→</span>
              </span>
            </a>
          </Magnetic>
        </div>
      </motion.div>
    </section>
  )
}

/** Botón que se deja "atraer" por el cursor. */
function Magnetic({ children }: { children: React.ReactNode }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 150, damping: 15, mass: 0.2 })
  const sy = useSpring(y, { stiffness: 150, damping: 15, mass: 0.2 })
  return (
    <motion.div
      style={{ x: sx, y: sy }}
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect()
        x.set((e.clientX - r.left - r.width / 2) * 0.35)
        y.set((e.clientY - r.top - r.height / 2) * 0.35)
      }}
      onPointerLeave={() => {
        x.set(0)
        y.set(0)
      }}
    >
      {children}
    </motion.div>
  )
}
