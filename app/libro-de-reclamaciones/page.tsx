import type { Metadata } from 'next'
import { ClaimForm } from '@/components/claim-form'
import { FadeIn } from '@/components/motion-kit'
import { PageHero } from '@/components/page-hero'

export const metadata: Metadata = {
  title: 'Libro de Reclamaciones',
  description:
    'Libro de Reclamaciones virtual de GIA Business & IT Consulting, conforme al Código de Protección y Defensa del Consumidor (Ley 29571).',
  alternates: { canonical: '/libro-de-reclamaciones' },
  openGraph: { url: '/libro-de-reclamaciones' },
}

export default function ClaimsPage() {
  return (
    <main>
      <PageHero
        kicker="Atención al consumidor"
        title="Libro de Reclamaciones"
        intro="Conforme al Código de Protección y Defensa del Consumidor (Ley 29571), ponemos a tu disposición este Libro de Reclamaciones virtual. Al registrar tu hoja podrás imprimirla y recibirás una copia en tu correo."
      />
      <section className="mx-auto max-w-4xl px-5 py-14 sm:px-8 md:py-20">
        <FadeIn>
          <div className="rounded-md border border-line bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.05)] sm:p-10">
            <ClaimForm />
          </div>
        </FadeIn>
      </section>
    </main>
  )
}
