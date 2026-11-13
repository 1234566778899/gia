import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = { title: 'Página no encontrada', robots: { index: false } }

export default function NotFound() {
  return (
    <main className="flex min-h-[80svh] flex-col items-center justify-center px-5 pt-[78px] text-center">
      <p className="kicker mb-2">Error 404</p>
      <h1 className="section-title">Esta página no existe</h1>
      <span className="accent-bar mx-auto mt-4" />
      <p className="mt-6 max-w-md text-muted">Es posible que el enlace esté roto o que la página se haya movido.</p>
      <Link href="/" className="btn btn-primary mt-8">
        Volver al inicio
      </Link>
    </main>
  )
}
