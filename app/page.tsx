import { Clients } from '@/components/clients'
import { Hero } from '@/components/hero'
import { About, ContactBand, Method, Solutions } from '@/components/home-sections'
import { JsonLd } from '@/components/json-ld'
import { Standards } from '@/components/standards'

export default function Home() {
  return (
    <>
      <JsonLd />
      <main>
        <Hero />
        <About />
        <Solutions />
        <Method />
        <Clients />
        <Standards />
        <ContactBand />
      </main>
    </>
  )
}
