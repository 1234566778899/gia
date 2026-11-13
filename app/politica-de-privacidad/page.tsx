import type { Metadata } from 'next'
import Link from 'next/link'
import { LegalBody, PageHero } from '@/components/page-hero'
import { Value } from '@/components/value'
import { site } from '@/lib/content'
import { company, legalUpdated } from '@/lib/legal'

export const metadata: Metadata = {
  title: 'Política de privacidad',
  description: 'Cómo GIA Business & IT Consulting trata tus datos personales conforme a la Ley 29733 de Protección de Datos Personales.',
  alternates: { canonical: '/politica-de-privacidad' },
  openGraph: { url: '/politica-de-privacidad' },
}

const toc = [
  { id: 'responsable', label: 'Responsable' },
  { id: 'datos', label: 'Datos que recopilamos' },
  { id: 'finalidades', label: 'Finalidades' },
  { id: 'base', label: 'Base legal' },
  { id: 'banco', label: 'Banco de datos' },
  { id: 'destinatarios', label: 'Destinatarios y transferencias' },
  { id: 'conservacion', label: 'Plazo de conservación' },
  { id: 'derechos', label: 'Tus derechos' },
  { id: 'seguridad', label: 'Seguridad' },
  { id: 'menores', label: 'Menores de edad' },
  { id: 'cambios', label: 'Cambios' },
]

export default function PrivacyPage() {
  return (
    <main>
      <PageHero
        kicker="Legal"
        title="Política de privacidad"
        intro="Te explicamos qué datos personales tratamos, para qué y cómo puedes ejercer tus derechos."
      />
      <LegalBody updated={legalUpdated} toc={toc}>
        <p>
          En {site.name} (en adelante, «GIA») protegemos tus datos personales conforme a la Ley N.° 29733, Ley de
          Protección de Datos Personales, y su Reglamento. Esta política aplica a la información que recibimos a través
          de este sitio web.
        </p>

        <h2 id="responsable">1. Responsable del tratamiento</h2>
        <ul>
          <li>Razón social: <Value v={company.legalName} /></li>
          <li>RUC: <Value v={company.ruc} /></li>
          <li>Domicilio: <Value v={company.address} /></li>
          <li>Correo para asuntos de datos personales: <Value v={company.claimsEmail} /></li>
        </ul>

        <h2 id="datos">2. Datos que recopilamos</h2>
        <ul>
          <li>
            <strong>Formulario de contacto:</strong> nombre, empresa, correo, teléfono, servicio de interés y el mensaje
            que nos envías.
          </li>
          <li>
            <strong>Libro de Reclamaciones:</strong> nombre, tipo y número de documento, domicilio, teléfono, correo y,
            si eres menor de edad, los datos de tu padre, madre o representante; además del detalle de tu reclamo o queja.
          </li>
          <li>
            <strong>Navegación:</strong> datos técnicos como la dirección IP, el navegador y las páginas visitadas. Las
            cookies de analítica solo se activan si las aceptas (ver la{' '}
            <Link href="/politica-de-cookies">política de cookies</Link>).
          </li>
        </ul>
        <p>No te pedimos datos sensibles. Por favor, no los incluyas en tus mensajes.</p>

        <h2 id="finalidades">3. Finalidades</h2>
        <ol>
          <li>Responder tus consultas y preparar propuestas comerciales que nos solicites.</li>
          <li>Registrar, atender y responder las quejas y reclamos del Libro de Reclamaciones.</li>
          <li>Medir el uso del sitio para mejorarlo, solo si aceptas las cookies de analítica.</li>
          <li>Cumplir las obligaciones legales que nos corresponden.</li>
        </ol>
        <p>
          No usamos tus datos para enviarte publicidad sin tu consentimiento expreso, ni los vendemos a terceros.
        </p>

        <h2 id="base">4. Base legal</h2>
        <p>
          Tratamos tus datos con tu consentimiento, que otorgas al marcar la casilla correspondiente en cada formulario,
          y, en el caso del Libro de Reclamaciones, para cumplir la obligación legal que establece el Código de
          Protección y Defensa del Consumidor (Ley N.° 29571) y su reglamento. Puedes revocar tu consentimiento en
          cualquier momento.
        </p>

        <h2 id="banco">5. Banco de datos</h2>
        <p>
          Los datos se almacenan en los bancos de datos personales de titularidad de GIA, que se inscriben ante la
          Autoridad Nacional de Protección de Datos Personales conforme a la normativa vigente.
        </p>

        <h2 id="destinatarios">6. Destinatarios y transferencias</h2>
        <p>
          Para operar este sitio usamos proveedores que tratan datos por cuenta de GIA y bajo nuestras instrucciones:
        </p>
        <ul>
          <li>Vercel Inc. (Estados Unidos): alojamiento del sitio web.</li>
          <li>Google LLC (Estados Unidos): Google Analytics, solo si aceptas las cookies de analítica.</li>
          <li>
            Proveedores de base de datos y de correo electrónico que reciben y conservan los formularios de este sitio.
          </li>
        </ul>
        <p>
          Algunos de estos proveedores están fuera del Perú, por lo que puede existir flujo transfronterizo de datos.
          Solo trabajamos con proveedores que ofrecen niveles adecuados de protección. También podremos comunicar tus
          datos a las empresas de {site.holding.name} cuando sea necesario para atender tu solicitud, y a autoridades
          cuando la ley lo exija.
        </p>

        <h2 id="conservacion">7. Plazo de conservación</h2>
        <ul>
          <li>Consultas del formulario de contacto: mientras dure la relación comercial y hasta 2 años después del último contacto.</li>
          <li>
            Hojas del Libro de Reclamaciones: al menos 2 años desde su registro, como exige el artículo 12 del Reglamento
            del Libro de Reclamaciones.
          </li>
        </ul>
        <p>Vencidos estos plazos, eliminamos o anonimizamos los datos.</p>

        <h2 id="derechos">8. Tus derechos</h2>
        <p>
          Puedes ejercer en cualquier momento tus derechos de información, acceso, rectificación, cancelación y
          oposición, así como revocar tu consentimiento. Escríbenos a <Value v={company.claimsEmail} /> indicando tu
          nombre, una copia de tu documento de identidad, el derecho que deseas ejercer y un correo o domicilio para
          responderte. Atenderemos tu solicitud en los plazos que establece la normativa.
        </p>
        <p>
          Si consideras que no atendimos tu solicitud, puedes presentar una reclamación ante la Autoridad Nacional de
          Protección de Datos Personales del Ministerio de Justicia y Derechos Humanos.
        </p>

        <h2 id="seguridad">9. Seguridad</h2>
        <p>
          Aplicamos medidas técnicas y organizativas para proteger tus datos: conexiones cifradas (HTTPS), acceso
          restringido al personal autorizado y proveedores con estándares de seguridad reconocidos.
        </p>

        <h2 id="menores">10. Menores de edad</h2>
        <p>
          Nuestros servicios están dirigidos a empresas y personas mayores de edad. Si un menor registra una hoja en el
          Libro de Reclamaciones, le pedimos también los datos de su padre, madre o representante.
        </p>

        <h2 id="cambios">11. Cambios a esta política</h2>
        <p>
          Podemos actualizar esta política. Publicaremos la versión vigente en esta página con su fecha de actualización.
        </p>
      </LegalBody>
    </main>
  )
}
