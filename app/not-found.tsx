import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = { title: 'Página no encontrada', robots: { index: false } }

export default function NotFound() {
  return (
    <main className="flex min-h-[100svh] flex-col items-center justify-center px-4 text-center">
      <p className="eyebrow mb-6">Error 404</p>
      <h1 className="text-[clamp(3rem,10vw,8rem)] font-semibold leading-[0.9] tracking-[-0.05em] text-white">
        Esta ruta <span className="font-serif font-normal italic tracking-[-0.02em] text-accent">no existe.</span>
      </h1>
      <Link href="/" className="btn btn-primary mt-10">
        Volver al inicio
      </Link>
    </main>
  )
}
