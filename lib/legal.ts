/**
 * Datos legales de GIA. Los que aún no tenemos quedan como `pending(...)` y se muestran resaltados
 * en el sitio para que nadie publique datos inventados. Completar antes de salir a producción.
 */
export type Maybe = string | { pending: string }
export const pending = (label: string): Maybe => ({ pending: label })
export const isPending = (v: Maybe): v is { pending: string } => typeof v !== 'string'
export const text = (v: Maybe) => (isPending(v) ? `[${v.pending}]` : v)

export const company = {
  tradeName: 'GIA Business & IT Consulting',
  legalName: pending('Razón social'),
  ruc: pending('RUC'),
  address: pending('Domicilio fiscal'),
  email: pending('Correo de contacto'),
  claimsEmail: pending('Correo para reclamos y datos personales'),
  phone: pending('Teléfono'),
  hours: 'Lunes a viernes, de 9:00 a 18:00 (hora de Perú)',
  /** Código de inscripción del banco de datos personales ante la ANPD, cuando exista. */
  dataBankCode: pending('Código de inscripción del banco de datos ante la ANPD'),
}

export const legalUpdated = '12 de noviembre de 2026'

export const legalNav = [
  { href: '/terminos-y-condiciones', label: 'Términos y condiciones' },
  { href: '/politica-de-privacidad', label: 'Política de privacidad' },
  { href: '/politica-de-cookies', label: 'Política de cookies' },
  { href: '/libro-de-reclamaciones', label: 'Libro de Reclamaciones' },
]
