/**
 * Datos legales de GIA. Los que aún no tenemos quedan como `pending(...)` y se muestran resaltados
 * en el sitio para que nadie publique datos inventados. Completar antes de salir a producción.
 */
export type Maybe = string | { pending: string }
export const pending = (label: string): Maybe => ({ pending: label })
export const isPending = (v: Maybe): v is { pending: string } => typeof v !== 'string'
export const text = (v: Maybe) => (isPending(v) ? `[${v.pending}]` : v)

/**
 * PROVISIONAL: razón social, RUC, domicilio, correos y teléfono son DE EJEMPLO a pedido del usuario (formato
 * válido, RUC con dígito verificador correcto, pero no son datos reales de GIA). Reemplazar por los datos de la
 * ficha RUC de SUNAT antes de publicar: el Libro de Reclamaciones y la política de privacidad los exigen reales.
 */
export const company = {
  tradeName: 'GIA Business & IT Consulting',
  legalName: 'GIA Business & IT Consulting S.A.C.',
  ruc: '20614827352',
  address: 'Av. Javier Prado Este 1234, Of. 801, San Isidro, Lima',
  email: 'contacto@gia.grupohen.com',
  claimsEmail: 'reclamos@gia.grupohen.com',
  phone: '+51 1 640 2580',
  hours: 'Lunes a viernes, de 9:00 a 18:00 (hora de Perú)',
}

export const legalUpdated = '12 de noviembre de 2026'

export const legalNav = [
  { href: '/terminos-y-condiciones', label: 'Términos y condiciones' },
  { href: '/politica-de-privacidad', label: 'Política de privacidad' },
  { href: '/politica-de-cookies', label: 'Política de cookies' },
  { href: '/libro-de-reclamaciones', label: 'Libro de Reclamaciones' },
]
