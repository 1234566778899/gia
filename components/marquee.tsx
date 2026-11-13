'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { marquee } from '@/lib/content'

/** Dos cintas infinitas en sentidos opuestos que además se inclinan con el scroll. */
export function Marquee() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const x1 = useTransform(scrollYProgress, [0, 1], ['4%', '-10%'])
  const x2 = useTransform(scrollYProgress, [0, 1], ['-10%', '4%'])

  return (
    <div ref={ref} className="relative overflow-hidden py-16 md:py-24" aria-hidden="true">
      <motion.div style={{ x: x1 }}>
        <Row items={marquee[0]} className="text-[clamp(2.75rem,8vw,7.5rem)] font-semibold tracking-[-0.04em] text-white" duration="55s" />
      </motion.div>
      <motion.div style={{ x: x2 }} className="mt-2">
        <Row
          items={marquee[1]}
          reverse
          className="text-outline text-[clamp(2.75rem,8vw,7.5rem)] font-semibold tracking-[-0.04em]"
          duration="45s"
        />
      </motion.div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-linear-to-r from-ink to-transparent md:w-48" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-linear-to-l from-ink to-transparent md:w-48" />
    </div>
  )
}

function Row({ items, className, duration, reverse }: { items: string[]; className: string; duration: string; reverse?: boolean }) {
  const list = [...items, ...items]
  return (
    <div
      className={`flex w-max animate-marquee whitespace-nowrap ${reverse ? '[animation-direction:reverse]' : ''}`}
      style={{ ['--marquee-duration' as string]: duration }}
    >
      {list.map((t, i) => (
        <span key={i} className={`flex items-center leading-none ${className}`}>
          {t}
          <span className="mx-[0.35em] inline-block size-[0.18em] rotate-45 rounded-[0.03em] bg-indigo-400/70" />
        </span>
      ))}
    </div>
  )
}
