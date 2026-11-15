import { standards } from '@/lib/content'
import { FadeIn } from './motion-kit'
import { SectionTitle } from './section-title'

/** Normas y buenas prácticas que se aplican en los proyectos (no son certificaciones de GIA). */
export function Standards() {
  return (
    <section id="normas" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionTitle title="Normas y buenas prácticas" />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {standards.map((s, k) => (
            <FadeIn key={s.code} delay={(k % 3) * 0.06}>
              <div className="flex h-full gap-4 rounded-md bg-panel p-6">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-accent text-white">
                  <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M12 3 5 6v5c0 4.4 3 8.4 7 10 4-1.6 7-5.6 7-10V6l-7-3Z" strokeLinejoin="round" />
                    <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span>
                  <span className="block font-display text-lg font-semibold text-brand">{s.code}</span>
                  <span className="mt-0.5 block text-sm font-semibold text-ink">{s.title}</span>
                  <span className="mt-1 block text-sm leading-relaxed text-muted">{s.text}</span>
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
