import Image from 'next/image'
import Link from 'next/link'
import imgCta from '@/assets/images/cta.jpg'
import { about, method, services } from '@/lib/content'
import { FadeIn } from './motion-kit'
import { SectionTitle } from './section-title'

/** Convierte **negritas** del contenido en <strong>. */
function Rich({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\*\*[^*]+\*\*)/).map((part, k) =>
        part.startsWith('**') ? <strong key={k} className="font-semibold text-ink">{part.slice(2, -2)}</strong> : part,
      )}
    </>
  )
}

export function About() {
  return (
    <section id="nosotros" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionTitle kicker={about.kicker} title={about.title} />
      </div>
      <FadeIn className="mt-10 grid md:mt-14 md:grid-cols-2">
        <div className="relative aspect-[16/10] md:aspect-auto md:min-h-[360px]">
          <Image src={about.image} alt="Escalones de metal unidos por una ruta de luz hacia un prisma" fill placeholder="blur" sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
        </div>
        <div className="flex items-center bg-panel px-6 py-10 sm:px-10 lg:px-16">
          <div className="max-w-xl space-y-5 text-[15px] leading-relaxed text-muted md:text-base">
            {about.paragraphs.map((p) => (
              <p key={p}>
                <Rich text={p} />
              </p>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  )
}

export function Solutions() {
  return (
    <section id="soluciones" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionTitle title="Soluciones tecnológicas" />
        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {services.map((s, k) => (
            <FadeIn key={s.slug} delay={(k % 4) * 0.06}>
              <Link
                href={`/contacto?servicio=${s.slug}`}
                className="group relative block aspect-square overflow-hidden rounded-md bg-black"
              >
                <Image
                  src={s.image}
                  alt={s.alt}
                  fill
                  placeholder="blur"
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-60"
                />
                <div className="absolute inset-0 bg-black/35" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                  <h3 className="text-[15px] font-semibold leading-snug text-white sm:text-lg">{s.short}</h3>
                  <p className="mt-2 max-h-0 overflow-hidden text-xs leading-relaxed text-white/85 opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100 sm:text-[13px]">
                    {s.kicker}
                  </p>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Method() {
  return (
    <section id="metodo" className="bg-panel py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionTitle title="Cómo trabajamos" />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {method.map((m, k) => (
            <FadeIn key={m.n} delay={k * 0.06}>
              <div className="h-full rounded-md bg-white p-7 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
                <span className="font-display text-3xl font-semibold text-accent">{m.n}</span>
                <h3 className="mt-4 text-lg font-semibold text-ink">{m.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{m.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ContactBand() {
  return (
    <section id="contacto" className="relative isolate overflow-hidden bg-black py-16 text-center text-white md:py-20">
      <Image src={imgCta} alt="" fill placeholder="blur" sizes="100vw" className="-z-10 object-cover opacity-35" />
      <FadeIn className="mx-auto max-w-3xl px-6">
        <p className="font-display text-sm italic text-white/70">Hablemos</p>
        <h2 className="mt-2 font-display text-2xl font-semibold uppercase md:text-3xl">¿Construimos lo que sigue?</h2>
        <p className="mx-auto mt-4 max-w-xl text-white/80">
          Cuéntanos tu reto tecnológico. Te respondemos con un diagnóstico y una propuesta concreta.
        </p>
        <Link href="/contacto" className="btn btn-light mt-8">
          Contáctanos
        </Link>
      </FadeIn>
    </section>
  )
}
