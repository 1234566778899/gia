'use server'

import { services } from '@/lib/content'
import {
  DeliveryNotConfigured,
  registerClaim,
  sendContact,
  type Claim,
  type RegisteredClaim,
} from '@/lib/delivery'

export type FormState<T = undefined> =
  | { status: 'idle' }
  | { status: 'invalid'; errors: Record<string, string>; values: Record<string, string> }
  | { status: 'unavailable'; values: Record<string, string> }
  | { status: 'error'; values: Record<string, string> }
  | { status: 'ok'; data: T }

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const get = (f: FormData, k: string) => String(f.get(k) ?? '').trim()
const valuesOf = (f: FormData) =>
  Object.fromEntries([...f.entries()].filter(([, v]) => typeof v === 'string').map(([k, v]) => [k, String(v)]))

function required(f: FormData, errors: Record<string, string>, fields: Record<string, string>) {
  for (const [k, label] of Object.entries(fields)) if (!get(f, k)) errors[k] = `Ingresa ${label}.`
}

export async function submitContact(_: FormState, f: FormData): Promise<FormState> {
  const values = valuesOf(f)
  if (get(f, 'website')) return { status: 'ok', data: undefined } // trampa para bots
  const errors: Record<string, string> = {}
  required(f, errors, { name: 'tu nombre', email: 'tu correo', message: 'tu mensaje' })
  if (get(f, 'email') && !EMAIL.test(get(f, 'email'))) errors.email = 'El correo no es válido.'
  if (get(f, 'message').length > 4000) errors.message = 'El mensaje es demasiado largo.'
  const service = get(f, 'service')
  if (service && service !== 'otro' && !services.some((s) => s.slug === service)) errors.service = 'Elige un servicio de la lista.'
  if (f.get('privacy') !== 'on') errors.privacy = 'Debes aceptar la política de privacidad.'
  if (Object.keys(errors).length) return { status: 'invalid', errors, values }

  try {
    await sendContact({
      name: get(f, 'name'),
      company: get(f, 'company'),
      email: get(f, 'email'),
      phone: get(f, 'phone'),
      service: services.find((s) => s.slug === service)?.title ?? (service === 'otro' ? 'Otro' : ''),
      message: get(f, 'message'),
    })
    return { status: 'ok', data: undefined }
  } catch (e) {
    if (e instanceof DeliveryNotConfigured) return { status: 'unavailable', values }
    console.error('submitContact', e)
    return { status: 'error', values }
  }
}

export async function submitClaim(_: FormState<RegisteredClaim>, f: FormData): Promise<FormState<RegisteredClaim>> {
  const values = valuesOf(f)
  if (get(f, 'website')) return { status: 'idle' }
  const errors: Record<string, string> = {}
  // Mínimos del art. 5 del Reglamento del Libro de Reclamaciones (D.S. 011-2011-PCM, mod. D.S. 101-2022-PCM)
  required(f, errors, {
    name: 'tu nombre completo',
    docNumber: 'tu número de documento',
    address: 'tu domicilio',
    phone: 'tu teléfono',
    email: 'tu correo',
    description: 'el producto o servicio',
    detail: 'el detalle',
    request: 'tu pedido',
  })
  if (get(f, 'email') && !EMAIL.test(get(f, 'email'))) errors.email = 'El correo no es válido.'
  const kind = get(f, 'kind')
  if (kind !== 'reclamo' && kind !== 'queja') errors.kind = 'Indica si es un reclamo o una queja.'
  const itemType = get(f, 'itemType')
  if (itemType !== 'producto' && itemType !== 'servicio') errors.itemType = 'Indica si es un producto o un servicio.'
  const amount = get(f, 'amount')
  if (amount && !/^\d+(\.\d{1,2})?$/.test(amount)) errors.amount = 'Escribe el monto solo con números, por ejemplo 1500.00.'
  const minor = f.get('minor') === 'on'
  if (minor) {
    required(f, errors, {
      gName: 'el nombre del padre, madre o representante',
      gAddress: 'su domicilio',
      gPhone: 'su teléfono',
      gEmail: 'su correo',
    })
    if (get(f, 'gEmail') && !EMAIL.test(get(f, 'gEmail'))) errors.gEmail = 'El correo no es válido.'
  }
  if (f.get('accept') !== 'on') errors.accept = 'Debes aceptar la política de privacidad para registrar la hoja.'
  if (Object.keys(errors).length) return { status: 'invalid', errors, values }

  const claim: Claim = {
    kind: kind as Claim['kind'],
    consumer: {
      name: get(f, 'name'),
      docType: get(f, 'docType') || 'DNI',
      docNumber: get(f, 'docNumber'),
      address: get(f, 'address'),
      phone: get(f, 'phone'),
      email: get(f, 'email'),
    },
    minor,
    guardian: minor
      ? { name: get(f, 'gName'), address: get(f, 'gAddress'), phone: get(f, 'gPhone'), email: get(f, 'gEmail') }
      : undefined,
    item: { type: itemType as Claim['item']['type'], description: get(f, 'description'), amount },
    detail: get(f, 'detail'),
    request: get(f, 'request'),
    replyBy: get(f, 'replyBy') === 'carta' ? 'carta' : 'correo',
  }

  try {
    return { status: 'ok', data: await registerClaim(claim) }
  } catch (e) {
    if (e instanceof DeliveryNotConfigured) return { status: 'unavailable', values }
    console.error('submitClaim', e)
    return { status: 'error', values }
  }
}
