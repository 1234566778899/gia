'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react'
import { nav, site } from '@/lib/content'
import { ease } from './motion-kit'
import { Logo } from './logo'

/** Píldora flotante de "Open": se oculta al bajar y vuelve al subir. */
export function Header() {
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  // En la portada los anclajes van sin "/" para que Lenis haga el desplazamiento suave.
  const home = usePathname() === '/'
  const to = (href: string) => (home && href.startsWith('/#') ? href.slice(1) : href)

  useMotionValueEvent(scrollY, 'change', (y) => {
    const prev = scrollY.getPrevious() ?? 0
    setHidden(y > prev && y > 240 && !open)
    setScrolled(y > 24)
  })

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6 md:pt-5"
      animate={{ y: hidden ? '-120%' : '0%' }}
      transition={{ duration: 0.5, ease }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease, delay: 0.2 }}
        className={`border-gradient mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 rounded-2xl px-3 pl-4 transition-colors duration-500 ${
          scrolled || open ? 'bg-gray-900/80 backdrop-blur-md' : 'bg-gray-900/30 backdrop-blur-sm'
        }`}
      >
        <Link href={home ? '#top' : '/'} aria-label={site.name}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((l) => (
            <Link
              key={l.href}
              href={to(l.href)}
              className="rounded-full px-4 py-2 text-sm text-gray-400 transition-colors hover:bg-white/5 hover:text-white"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/contacto" className="btn btn-primary hidden !px-4 !py-2 sm:inline-flex">
            Hablemos
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-full text-gray-300 hover:bg-white/5 md:hidden"
            aria-expanded={open}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          >
            <span className="relative block h-3 w-5">
              <span className={`absolute left-0 h-px w-5 bg-current transition-all duration-300 ${open ? 'top-1.5 rotate-45' : 'top-0'}`} />
              <span className={`absolute left-0 h-px w-5 bg-current transition-all duration-300 ${open ? 'top-1.5 -rotate-45' : 'top-3'}`} />
            </span>
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -12, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -12, filter: 'blur(6px)' }}
            transition={{ duration: 0.4, ease }}
            className="border-gradient mx-auto mt-2 max-w-6xl rounded-2xl bg-gray-900/90 p-3 backdrop-blur-md md:hidden"
          >
            {nav.map((l, i) => (
              <motion.a
                key={l.href}
                href={to(l.href)}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * i, ease, duration: 0.4 }}
                className="block rounded-xl px-4 py-3 text-2xl font-medium tracking-tight text-gray-200 hover:bg-white/5"
              >
                {l.label}
              </motion.a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
