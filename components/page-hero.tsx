import { FadeIn } from './motion-kit'

/** Encabezado de las páginas internas: banda gris con título en mayúsculas y barra de acento. */
export function PageHero({ kicker, title, intro }: { kicker?: string; title: string; intro?: React.ReactNode }) {
  return (
    <section className="bg-panel pb-12 pt-[126px] md:pb-16 md:pt-[142px]">
      <FadeIn className="mx-auto max-w-7xl px-5 sm:px-8">
        {kicker && <p className="kicker mb-2">{kicker}</p>}
        <h1 className="section-title">{title}</h1>
        <span className="accent-bar mt-4" />
        {intro && <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-muted md:text-base">{intro}</p>}
      </FadeIn>
    </section>
  )
}

/** Texto legal con índice lateral fijo en escritorio. */
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
    <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-8 md:py-20 lg:grid-cols-[15rem_1fr]">
      <aside className="hidden lg:block">
        <nav className="sticky top-24 space-y-1 border-l border-line text-sm" aria-label="Índice">
          {toc.map((t) => (
            <a key={t.id} href={`#${t.id}`} className="-ml-px block border-l border-transparent py-1.5 pl-4 text-muted transition-colors hover:border-brand hover:text-ink">
              {t.label}
            </a>
          ))}
        </nav>
      </aside>
      <article className="legal max-w-3xl">
        <p className="!mt-0 text-xs font-medium uppercase tracking-wider text-muted/80">Última actualización: {updated}</p>
        {children}
      </article>
    </div>
  )
}
