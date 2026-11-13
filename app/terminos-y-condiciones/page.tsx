import type { Metadata } from 'next'
import Link from 'next/link'
import { LegalBody, PageHero } from '@/components/page-hero'
import { Value } from '@/components/value'
import { site } from '@/lib/content'
import { company, legalUpdated } from '@/lib/legal'

export const metadata: Metadata = {
  title: 'Términos y condiciones',
  description: 'Condiciones de uso del sitio web de GIA Business & IT Consulting.',
  alternates: { canonical: '/terminos-y-condiciones' },
  openGraph: { url: '/terminos-y-condiciones' },
}

const toc = [
  { id: 'titular', label: 'Titular del sitio' },
  { id: 'objeto', label: 'Objeto' },
  { id: 'uso', label: 'Uso del sitio' },
  { id: 'informacion', label: 'Información y propuestas' },
  { id: 'propiedad', label: 'Propiedad intelectual' },
  { id: 'enlaces', label: 'Enlaces a terceros' },
  { id: 'responsabilidad', label: 'Responsabilidad' },
  { id: 'datos', label: 'Datos personales' },
  { id: 'reclamos', label: 'Quejas y reclamos' },
  { id: 'ley', label: 'Ley aplicable' },
  { id: 'cambios', label: 'Cambios' },
]

export default function TermsPage() {
  return (
    <main className="overflow-x-clip">
      <PageHero
        eyebrow="Legal"
        lines={['Términos y', <span key="2" className="font-serif font-normal italic tracking-[-0.02em] text-accent">condiciones.</span>]}
        intro="Las reglas para usar este sitio web. Al navegarlo aceptas estas condiciones."
      />
      <LegalBody updated={legalUpdated} toc={toc}>
        <h2 id="titular">1. Titular del sitio</h2>
        <p>
          Este sitio web ({site.url}) pertenece a <Value v={company.legalName} />, con RUC <Value v={company.ruc} /> y
          domicilio en <Value v={company.address} />, que opera con el nombre comercial {site.name} (en adelante, «GIA»),
          empresa de {site.holding.name}.
        </p>

        <h2 id="objeto">2. Objeto</h2>
        <p>
          El sitio informa sobre los servicios de tecnología de GIA y permite contactarnos y registrar quejas o reclamos.
          No se venden productos ni se realizan pagos a través de él.
        </p>

        <h2 id="uso">3. Uso del sitio</h2>
        <p>Te comprometes a usar el sitio de forma lícita y, en particular, a no:</p>
        <ul>
          <li>Enviar información falsa o datos de terceros sin su autorización.</li>
          <li>Intentar acceder sin permiso a sistemas, cuentas o datos, ni afectar el funcionamiento del sitio.</li>
          <li>Usar el sitio para enviar publicidad no solicitada o contenido ilícito.</li>
        </ul>

        <h2 id="informacion">4. Información y propuestas</h2>
        <p>
          La información sobre servicios es referencial. Cada proyecto se define en una propuesta formal y un contrato
          que establecen el alcance, los plazos, el precio y las condiciones. Lo publicado en el sitio no constituye una
          oferta vinculante.
        </p>

        <h2 id="propiedad">5. Propiedad intelectual</h2>
        <p>
          Los textos, imágenes, logotipos, diseño y código del sitio pertenecen a GIA o se usan con autorización, y están
          protegidos por las normas de derecho de autor y propiedad industrial. No puedes reproducirlos ni usarlos con
          fines comerciales sin autorización escrita. Las marcas de terceros mencionadas (por ejemplo AWS, Microsoft
          Azure o Google Cloud) pertenecen a sus titulares.
        </p>

        <h2 id="enlaces">6. Enlaces a terceros</h2>
        <p>
          El sitio puede contener enlaces a otros sitios, como el de {site.holding.name}. GIA no es responsable del
          contenido ni de las políticas de sitios de terceros.
        </p>

        <h2 id="responsabilidad">7. Responsabilidad</h2>
        <p>
          Procuramos que el sitio esté disponible y actualizado, pero pueden existir interrupciones por mantenimiento o
          causas ajenas a GIA. En la medida que lo permita la ley, GIA no responde por daños derivados del uso del sitio
          o de su indisponibilidad temporal.
        </p>

        <h2 id="datos">8. Datos personales</h2>
        <p>
          El tratamiento de tus datos se rige por nuestra <Link href="/politica-de-privacidad">política de privacidad</Link>{' '}
          y el uso de cookies por la <Link href="/politica-de-cookies">política de cookies</Link>.
        </p>

        <h2 id="reclamos">9. Quejas y reclamos</h2>
        <p>
          Conforme al Código de Protección y Defensa del Consumidor (Ley N.° 29571), puedes registrar una queja o reclamo
          en nuestro <Link href="/libro-de-reclamaciones">Libro de Reclamaciones</Link>. Te responderemos en un plazo no
          mayor a quince (15) días hábiles.
        </p>

        <h2 id="ley">10. Ley aplicable</h2>
        <p>
          Estos términos se rigen por las leyes de la República del Perú. Cualquier controversia se someterá a los jueces
          y tribunales competentes del Perú, sin perjuicio de los derechos que la ley reconoce a los consumidores, como
          acudir al INDECOPI.
        </p>

        <h2 id="cambios">11. Cambios</h2>
        <p>
          GIA puede modificar estos términos. La versión vigente es la publicada en esta página, con su fecha de
          actualización.
        </p>
      </LegalBody>
    </main>
  )
}
