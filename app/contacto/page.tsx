import type { Metadata } from 'next'
import Link from 'next/link'
import { ContactForm } from '@/components/contact-form'
import { FadeIn } from '@/components/motion-kit'
import { PageHero } from '@/components/page-hero'
import { Value } from '@/components/value'
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
    <main className="overflow-x-clip">
      <PageHero
        eyebrow="Contacto"
        lines={[
          'Hablemos de tu',
          <>
            próximo <span className="font-serif font-normal italic tracking-[-0.02em] text-accent">proyecto.</span>
          </>,
        ]}
        intro="Cuéntanos qué necesitas. Te respondemos con un diagnóstico y una propuesta concreta."
      />

      <section className="mx-auto grid max-w-7xl gap-6 px-4 pb-28 sm:px-6 lg:grid-cols-[1.35fr_1fr]">
        <FadeIn>
          <div className="border-gradient rounded-[2rem] bg-gray-950 p-6 sm:p-10">
            <h2 className="mb-8 text-2xl font-semibold tracking-tight text-white md:text-3xl">Envíanos un mensaje</h2>
            <ContactForm />
          </div>
        </FadeIn>

        <div className="space-y-6">
          <FadeIn delay={0.1}>
            <div className="border-gradient rounded-[2rem] bg-gray-950 p-6 sm:p-8">
              <h2 className="text-xl font-semibold text-white">Datos de contacto</h2>
              <dl className="mt-6 space-y-5 text-[15px]">
                <Info label="Correo"><Value v={company.email} /></Info>
                <Info label="Teléfono"><Value v={company.phone} /></Info>
                <Info label="Horario">{company.hours}</Info>
                <Info label="Dirección"><Value v={company.address} /></Info>
              </dl>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="border-gradient rounded-[2rem] bg-gray-950 p-6 sm:p-8">
              <h2 className="text-xl font-semibold text-white">Qué pasa después</h2>
              <ol className="mt-6 space-y-5">
                {steps.map((s) => (
                  <li key={s.n} className="flex gap-4">
                    <span className="font-mono text-sm text-indigo-300">{s.n}</span>
                    <span>
                      <span className="block font-medium text-white">{s.title}</span>
                      <span className="mt-1 block text-sm leading-relaxed text-gray-400">{s.text}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="px-2 text-sm leading-relaxed text-gray-500">
              ¿Quieres presentar una queja o un reclamo? Usa nuestro{' '}
              <Link href="/libro-de-reclamaciones" className="text-indigo-300 underline underline-offset-2">
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
      <dt className="font-mono text-xs uppercase tracking-[0.2em] text-gray-500">{label}</dt>
      <dd className="mt-1 text-gray-200">{children}</dd>
    </div>
  )
}
