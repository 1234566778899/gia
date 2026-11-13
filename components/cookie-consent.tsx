'use client'

import Link from 'next/link'
import Script from 'next/script'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ease } from './motion-kit'

type Choice = 'accepted' | 'rejected'
const KEY = 'gia-cookie-consent'
const OPEN_EVENT = 'gia:cookie-settings'

function read(): Choice | null {
  try {
    const v = localStorage.getItem(KEY)
    return v === 'accepted' || v === 'rejected' ? v : null
  } catch {
    return null
  }
}

/**
 * Aviso de cookies. Las cookies técnicas no necesitan consentimiento; las de analítica
 * (Google Analytics) solo se cargan si el visitante las acepta.
 */
export function CookieConsent({ gaId }: { gaId?: string }) {
  const [choice, setChoice] = useState<Choice | null>(null)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const saved = read()
    // eslint-disable-next-line react-hooks/set-state-in-effect -- localStorage solo existe en el navegador
    setChoice(saved)
    setOpen(saved === null)
    const reopen = () => setOpen(true)
    window.addEventListener(OPEN_EVENT, reopen)
    return () => window.removeEventListener(OPEN_EVENT, reopen)
  }, [])

  const decide = (c: Choice) => {
    try {
      localStorage.setItem(KEY, c)
    } catch {}
    setChoice(c)
    setOpen(false)
  }

  return (
    <>
      {gaId && choice === 'accepted' && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
          <Script id="ga" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${gaId}',{anonymize_ip:true});`}
          </Script>
        </>
      )}
      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-label="Preferencias de cookies"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.5, ease }}
            className="fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-xl rounded-md border border-line bg-white p-5 shadow-[0_8px_40px_rgba(0,0,0,0.15)] sm:bottom-5"
          >
            <p className="text-sm font-semibold text-ink">Usamos cookies</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Las técnicas hacen funcionar el sitio. Con tu permiso también usamos cookies de analítica para medir
              las visitas y mejorar el contenido. Más detalles en la{' '}
              <Link href="/politica-de-cookies" className="text-brand underline underline-offset-2">
                política de cookies
              </Link>
              .
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <button type="button" onClick={() => decide('accepted')} className="btn btn-primary !px-5 !py-2.5">
                Aceptar analítica
              </button>
              <button type="button" onClick={() => decide('rejected')} className="btn btn-outline !px-5 !py-2.5">
                Solo las necesarias
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

/** Enlace del pie para volver a abrir el aviso y cambiar la elección. */
export function CookieSettingsLink() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_EVENT))}
      className="text-left text-muted transition-colors hover:text-brand"
    >
      Configurar cookies
    </button>
  )
}
