import type { Metadata } from 'next'
import Link from 'next/link'
import { ContactForm } from '@/components/contact-form'
import { FadeIn } from '@/components/motion-kit'
import { Offices } from '@/components/offices'
import { PageHero } from '@/components/page-hero'
import { Socials } from '@/components/socials'
import { company } from '@/lib/legal'

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Escríbenos para cotizar un proyecto de software, inteligencia artificial, datos, cloud o ciberseguridad con GIA Business & IT Consulting.',
  alternates: { canonical: '/contacto' },
  openGraph: { url: '/contacto' },
}

const steps = [
  { n: '01', title: 'Te escuchamos', text: 'Revisamos tu mensaje y agendamos una llamada para entender el reto.' },
  { n: '02', title: 'Diagnóstico', text: 'Analizamos tus procesos, sistemas y datos para definir el alcance.' },
  { n: '03', title: 'Propuesta', text: 'Recibes una propuesta con solución, plazos y presupuesto.' },
]

export default function ContactPage() {
  return (
    <main>
      <PageHero
        kicker="Contacto"
        title="Hablemos de tu próximo proyecto"
        intro="Cuéntanos qué necesitas. Te respondemos con un diagnóstico y una propuesta concreta."
      />

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:px-8 md:py-20 lg:grid-cols-[1.4fr_1fr]">
        <FadeIn>
          <div className="rounded-md border border-line bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.05)] sm:p-10">
            <h2 className="mb-8 font-display text-2xl font-semibold uppercase text-ink">Envíanos un mensaje</h2>
            <ContactForm />
          </div>
        </FadeIn>

        <div className="space-y-6">
          <FadeIn delay={0.08}>
            <div className="rounded-md bg-panel p-6 sm:p-8">
              <h2 className="font-display text-lg font-semibold uppercase text-ink">Datos de contacto</h2>
              <dl className="mt-5 space-y-4 text-[15px]">
                <Info label="Correo"><a href={`mailto:${company.email}`} className="text-brand hover:underline">{company.email}</a></Info>
                <Info label="Teléfono"><a href={`tel:${company.phone.replace(/\s/g, '')}`} className="text-brand hover:underline">{company.phone}</a></Info>
                <Info label="Horario">{company.hours}</Info>
                <Info label="Síguenos"><Socials className="mt-2" /></Info>
              </dl>
            </div>
          </FadeIn>

          <FadeIn delay={0.12}>
            <div className="rounded-md bg-panel p-6 sm:p-8">
              <h2 className="mb-5 font-display text-lg font-semibold uppercase text-ink">Nuestras sedes</h2>
              <Offices columns={1} />
            </div>
          </FadeIn>

          <FadeIn delay={0.16}>
            <div className="rounded-md bg-panel p-6 sm:p-8">
              <h2 className="font-display text-lg font-semibold uppercase text-ink">Qué pasa después</h2>
              <ol className="mt-5 space-y-5">
                {steps.map((s) => (
                  <li key={s.n} className="flex gap-4">
                    <span className="font-display text-lg font-semibold text-brand">{s.n}</span>
                    <span>
                      <span className="block font-semibold text-ink">{s.title}</span>
                      <span className="mt-1 block text-sm leading-relaxed text-muted">{s.text}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </FadeIn>

          <FadeIn delay={0.24}>
            <p className="px-1 text-sm leading-relaxed text-muted">
              ¿Quieres presentar una queja o un reclamo? Usa nuestro{' '}
              <Link href="/libro-de-reclamaciones" className="font-medium text-brand underline underline-offset-2">
                Libro de Reclamaciones
              </Link>
              .
            </p>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}

function Info({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <dt className="text-xs font-semibold uppercase tracking-wider text-muted">{label}</dt>
      <dd className="mt-1 text-ink">{children}</dd>
    </div>
  )
}
