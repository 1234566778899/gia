'use client'

import { useEffect, useRef, type ReactNode } from 'react'
import Lenis from 'lenis'
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from 'motion/react'

export const ease = [0.22, 1, 0.36, 1] as const

/** Scroll suave en toda la página. Los enlaces "#ancla" también se desplazan con Lenis. */
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const lenis = new Lenis({ lerp: 0.09, anchors: { offset: -80 } })
    let id = 0
    const raf = (t: number) => {
      lenis.raf(t)
      id = requestAnimationFrame(raf)
    }
    id = requestAnimationFrame(raf)
    return () => {
      cancelAnimationFrame(id)
      lenis.destroy()
    }
  }, [])
  return null
}

/** Titular que entra línea por línea desde abajo, con máscara. */
export function SplitLines({
  lines,
  className = '',
  lineClassName = '',
  delay = 0,
  as: Tag = 'h2',
  inView = true,
}: {
  lines: ReactNode[]
  className?: string
  lineClassName?: string
  delay?: number
  as?: 'h1' | 'h2' | 'h3' | 'p'
  inView?: boolean
}) {
  const reduce = useReducedMotion()
  const MotionTag = motion[Tag]
  // La visibilidad se mide en el contenedor: las líneas empiezan recortadas por su máscara
  // y el IntersectionObserver no las detectaría.
  return (
    <MotionTag
      className={className}
      initial={reduce ? false : 'hidden'}
      {...(inView ? { whileInView: 'shown', viewport: { once: true, margin: '-10% 0px' } } : { animate: 'shown' })}
    >
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em]">
          <motion.span
            className={`block origin-top-left ${lineClassName}`}
            variants={{ hidden: { y: '110%', rotate: 2 }, shown: { y: '0%', rotate: 0 } }}
            transition={{ duration: 1.1, ease, delay: delay + i * 0.09 }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  )
}

/** Aparece con desplazamiento y desenfoque al entrar en pantalla. */
export function FadeIn({
  children,
  className = '',
  delay = 0,
  y = 24,
}: {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
}) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-8% 0px' }}
      transition={{ duration: 0.9, ease, delay }}
    >
      {children}
    </motion.div>
  )
}

/** Párrafo grande que se "enciende" palabra por palabra al hacer scroll. */
export function ScrollRevealText({ text, className = '' }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.45'] })
  const words = text.split(' ')
  return (
    <p ref={ref} className={className}>
      {words.map((w, i) => (
        <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
          {w}
        </Word>
      ))}
    </p>
  )
}

function Word({ children, progress, range }: { children: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.14, 1])
  return (
    <>
      <motion.span style={{ opacity }}>{children}</motion.span>{' '}
    </>
  )
}
