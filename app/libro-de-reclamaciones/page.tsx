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
    <main className="overflow-x-clip">
      <PageHero
        eyebrow="Atención al consumidor"
        lines={[
          'Libro de',
          <span key="2" className="font-serif font-normal italic tracking-[-0.02em] text-accent">Reclamaciones.</span>,
        ]}
        intro={
          <>
            Conforme al Código de Protección y Defensa del Consumidor (Ley 29571), ponemos a tu disposición este Libro
            de Reclamaciones virtual. Al registrar tu hoja podrás imprimirla y recibirás una copia en tu correo.
          </>
        }
      />
      <section className="mx-auto max-w-4xl px-4 pb-28 sm:px-6">
        <FadeIn>
          <div className="border-gradient rounded-[2rem] bg-gray-950 p-6 sm:p-10">
            <ClaimForm />
          </div>
        </FadeIn>
      </section>
    </main>
  )
}
