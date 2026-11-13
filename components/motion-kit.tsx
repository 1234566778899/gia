'use client'

import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'motion/react'

export const ease = [0.22, 1, 0.36, 1] as const

/** Aparición suave al entrar en pantalla: única animación de las secciones. */
export function FadeIn({
  children,
  className = '',
  delay = 0,
  y = 16,
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
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 0.7, ease, delay }}
    >
      {children}
    </motion.div>
  )
}
