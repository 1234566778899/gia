import Image from 'next/image'
import { manifesto } from '@/lib/content'
import { FadeIn, ScrollRevealText } from './motion-kit'

export function Manifesto() {
  return (
    <section className="relative isolate py-24 md:py-40">
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/2 opacity-60" aria-hidden="true">
        <Image className="max-w-none" src="/images/blurred-shape.svg" width={760} height={668} alt="" />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn>
          <p className="eyebrow mb-10">Quiénes somos</p>
        </FadeIn>
        <ScrollRevealText
          text={manifesto}
          className="text-[clamp(1.9rem,4.6vw,4.25rem)] font-medium leading-[1.08] tracking-[-0.035em] text-white"
        />
      </div>
    </section>
  )
}
