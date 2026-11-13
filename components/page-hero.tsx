import { Children } from 'react'
import Image from 'next/image'
import { FadeIn, SplitLines } from './motion-kit'

/** Encabezado de las páginas internas: misma tipografía grande y entrada línea por línea del inicio. */
export function PageHero({
  eyebrow,
  lines,
  intro,
  children,
}: {
  eyebrow: string
  lines: React.ReactNode[]
  intro?: React.ReactNode
  children?: React.ReactNode
}) {
  return (
    <section className="relative isolate overflow-hidden pb-14 pt-36 md:pb-20 md:pt-48">
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/4 opacity-70" aria-hidden="true">
        <Image className="max-w-none" src="/images/page-illustration.svg" width={846} height={594} alt="" priority />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <FadeIn>
          <p className="eyebrow mb-6">{eyebrow}</p>
        </FadeIn>
        <SplitLines
          as="h1"
          inView={false}
          delay={0.15}
          className="max-w-5xl text-[clamp(2.75rem,8vw,7rem)] font-semibold leading-[0.9] tracking-[-0.05em] text-white"
          // toArray asigna keys: el arreglo viaja del servidor a un componente de cliente
          lines={Children.toArray(lines)}
        />
        {intro && (
          <FadeIn delay={0.4} className="mt-8 max-w-2xl text-lg leading-relaxed text-gray-400 md:text-xl">
            {intro}
          </FadeIn>
        )}
        {children}
      </div>
    </section>
  )
}

/** Contenedor de texto legal con índice lateral fijo en escritorio. */
export function LegalBody({
  updated,
  toc,
  children,
}: {
  updated: string
  toc: { id: string; label: string }[]
  children: React.ReactNode
}) {
  return (
    <div className="mx-auto grid max-w-7xl gap-12 px-4 pb-28 sm:px-6 lg:grid-cols-[16rem_1fr]">
      <aside className="hidden lg:block">
        <nav className="sticky top-28 space-y-1 text-sm" aria-label="Índice">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-gray-500">Contenido</p>
          {toc.map((t) => (
            <a key={t.id} href={`#${t.id}`} className="block rounded-lg px-3 py-1.5 text-gray-400 transition-colors hover:bg-white/5 hover:text-white">
              {t.label}
            </a>
          ))}
        </nav>
      </aside>
      <article className="legal max-w-3xl">
        <p className="!mt-0 font-mono text-xs uppercase tracking-[0.2em] text-gray-500">Última actualización: {updated}</p>
        {children}
      </article>
    </div>
  )
}
