import type { Metadata } from 'next'
import Link from 'next/link'
import { CookieSettingsLink } from '@/components/cookie-consent'
import { LegalBody, PageHero } from '@/components/page-hero'
import { legalUpdated } from '@/lib/legal'

export const metadata: Metadata = {
  title: 'Política de cookies',
  description: 'Qué cookies usa el sitio de GIA Business & IT Consulting y cómo configurarlas.',
  alternates: { canonical: '/politica-de-cookies' },
  openGraph: { url: '/politica-de-cookies' },
}

const toc = [
  { id: 'que-son', label: '¿Qué son?' },
  { id: 'cuales', label: 'Cookies que usamos' },
  { id: 'configurar', label: 'Cómo configurarlas' },
]

export default function CookiesPage() {
  return (
    <main>
      <PageHero
        kicker="Legal"
        title="Política de cookies"
        intro="Usamos pocas cookies y solo activamos las de analítica si nos das permiso."
      />
      <LegalBody updated={legalUpdated} toc={toc}>
        <h2 id="que-son">1. ¿Qué son las cookies?</h2>
        <p>
          Son pequeños archivos que un sitio web guarda en tu navegador para recordar información sobre tu visita. Una
          tecnología parecida, el almacenamiento local del navegador, cumple la misma función.
        </p>

        <h2 id="cuales">2. Cookies que usamos</h2>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Tipo</th>
              <th>Para qué sirve</th>
              <th>Duración</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>gia-cookie-consent</td>
              <td>Técnica (almacenamiento local)</td>
              <td>Recordar si aceptaste o rechazaste la analítica.</td>
              <td>Hasta que la borres</td>
            </tr>
            <tr>
              <td>_ga</td>
              <td>Analítica (Google Analytics)</td>
              <td>Distinguir visitantes de forma anónima para contar visitas.</td>
              <td>2 años</td>
            </tr>
            <tr>
              <td>_ga_&lt;ID&gt;</td>
              <td>Analítica (Google Analytics)</td>
              <td>Mantener el estado de la sesión de analítica.</td>
              <td>2 años</td>
            </tr>
          </tbody>
        </table>
        <p>
          Las cookies técnicas son necesarias para que el sitio funcione. Las de analítica solo se instalan si las
          aceptas, y la información se trata según la <Link href="/politica-de-privacidad">política de privacidad</Link>.
          No usamos cookies de publicidad.
        </p>

        <h2 id="configurar">3. Cómo configurarlas</h2>
        <p>
          Puedes cambiar tu elección cuando quieras desde este enlace: <CookieSettingsLink />. También puedes borrar o
          bloquear las cookies desde la configuración de tu navegador; si bloqueas las técnicas, algunas partes del sitio
          pueden no funcionar bien.
        </p>
      </LegalBody>
    </main>
  )
}
