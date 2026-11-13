import { Hero } from '@/components/hero'
import { About, Capabilities, ContactBand, Method, Solutions } from '@/components/home-sections'
import { JsonLd } from '@/components/json-ld'

export default function Home() {
  return (
    <>
      <JsonLd />
      <main>
        <Hero />
        <About />
        <Solutions />
        <Method />
        <Capabilities />
        <ContactBand />
      </main>
    </>
  )
}
