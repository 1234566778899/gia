import 'server-only'

/**
 * Punto único donde los formularios guardan y envían lo que reciben.
 *
 * PENDIENTE (al crear el proyecto en Vercel): instalar desde el Marketplace una base de datos
 * (para numerar y conservar 2 años las hojas de reclamación, art. 12 D.S. 011-2011-PCM) y un
 * proveedor de correo (copia automática al consumidor, art. 4-B, y aviso interno a GIA).
 * Mientras no estén configurados, `enabled` es false y los formularios lo dicen con claridad
 * en lugar de fingir que el envío funcionó.
 */
export const delivery = {
  enabled: false,
}

export type ContactMessage = {
  name: string
  company: string
  email: string
  phone: string
  service: string
  message: string
}

export type Claim = {
  kind: 'reclamo' | 'queja'
  consumer: { name: string; docType: string; docNumber: string; address: string; phone: string; email: string }
  minor: boolean
  guardian?: { name: string; address: string; phone: string; email: string }
  item: { type: 'producto' | 'servicio'; description: string; amount: string }
  detail: string
  request: string
  replyBy: 'correo' | 'carta'
}

export type RegisteredClaim = Claim & { number: string; createdAt: string }

export class DeliveryNotConfigured extends Error {}

export async function sendContact(message: ContactMessage): Promise<void> {
  void message
  throw new DeliveryNotConfigured()
}

/** Guarda la hoja, le asigna el número correlativo y envía la copia al correo del consumidor. */
export async function registerClaim(claim: Claim): Promise<RegisteredClaim> {
  void claim
  throw new DeliveryNotConfigured()
}
