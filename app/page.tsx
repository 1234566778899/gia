import { Capabilities } from '@/components/capabilities'
import { Cta } from '@/components/cta'
import { JsonLd } from '@/components/json-ld'
import { Hero } from '@/components/hero'
import { Manifesto } from '@/components/manifesto'
import { Marquee } from '@/components/marquee'
import { Method } from '@/components/method'
import { Services } from '@/components/services'

export default function Home() {
  return (
    <>
      <JsonLd />
      <main className="overflow-x-clip">
        <Hero />
        <Marquee />
        <Manifesto />
        <Services />
        <Method />
        <Capabilities />
        <Cta />
      </main>
    </>
  )
}
