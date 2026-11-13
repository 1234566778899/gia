'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { nav, site } from '@/lib/content'
import { ease } from './motion-kit'
import { Logo } from './logo'

/** Barra blanca fija con el menú en mayúsculas, como en la referencia. */
export function Header() {
  const home = usePathname() === '/'
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  // En la portada los anclajes van sin "/" para no recargar la página
  const to = (href: string) => (home && href.startsWith('/#') ? href.slice(1) : href)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-white transition-shadow duration-300 ${scrolled || open ? 'shadow-[0_1px_12px_rgba(0,0,0,0.08)]' : ''}`}
    >
      <div className="mx-auto flex h-[70px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href={home ? '#top' : '/'} aria-label={site.name} onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((l) => (
            <Link
              key={l.href}
              href={to(l.href)}
              className="font-display text-[15px] font-medium uppercase text-ink transition-colors hover:text-brand"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid size-10 place-items-center rounded-md text-ink hover:bg-black/5 md:hidden"
          aria-expanded={open}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        >
          <span className="relative block h-3 w-5">
            <span className={`absolute left-0 h-0.5 w-5 bg-current transition-all duration-300 ${open ? 'top-1.5 rotate-45' : 'top-0'}`} />
            <span className={`absolute left-0 h-0.5 w-5 bg-current transition-all duration-300 ${open ? 'top-1.5 -rotate-45' : 'top-3'}`} />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease }}
            className="overflow-hidden border-t border-line bg-white md:hidden"
          >
            <div className="px-5 py-3">
              {nav.map((l) => (
                <Link
                  key={l.href}
                  href={to(l.href)}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-display text-base font-medium uppercase text-ink"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
