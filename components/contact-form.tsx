'use client'

import Link from 'next/link'
import { useActionState } from 'react'
import { submitContact, type FormState } from '@/app/actions'
import { services } from '@/lib/content'
import { Check, Honeypot, Input, Notice, Select, Submit, TextArea } from './form-ui'

const initial: FormState = { status: 'idle' }

export function ContactForm() {
  const [state, action] = useActionState(submitContact, initial)

  if (state.status === 'ok') {
    return (
      <Notice tone="ok">
        <strong className="block text-base text-white">¡Gracias! Recibimos tu mensaje.</strong>
        Un consultor de GIA revisará tu caso y te escribirá al correo que dejaste.
      </Notice>
    )
  }

  const v = 'values' in state ? state.values : {}
  const e = state.status === 'invalid' ? state.errors : {}

  return (
    <form action={action} noValidate className="relative space-y-5">
      <Honeypot />
      {state.status === 'unavailable' && (
        <Notice tone="warn">
          El envío del formulario todavía no está activo: se habilita al publicar el sitio. Tus datos no se
          guardaron.
        </Notice>
      )}
      {state.status === 'error' && <Notice tone="error">No pudimos enviar tu mensaje. Inténtalo de nuevo en unos minutos.</Notice>}

      <div className="grid gap-5 sm:grid-cols-2">
        <Input name="name" label="Nombre y apellido" autoComplete="name" required defaultValue={v.name} error={e.name} />
        <Input name="company" label="Empresa" autoComplete="organization" defaultValue={v.company} />
        <Input name="email" label="Correo" type="email" autoComplete="email" inputMode="email" required defaultValue={v.email} error={e.email} />
        <Input name="phone" label="Teléfono" type="tel" autoComplete="tel" inputMode="tel" defaultValue={v.phone} />
      </div>
      <Select
        name="service"
        label="¿En qué podemos ayudarte?"
        defaultValue={v.service}
        error={e.service}
        options={[
          { value: '', label: 'Elige un servicio (opcional)' },
          ...services.map((s) => ({ value: s.slug, label: s.title })),
          { value: 'otro', label: 'Otro' },
        ]}
      />
      <TextArea
        name="message"
        label="Cuéntanos tu proyecto"
        required
        rows={6}
        placeholder="Qué necesitas, en qué plazo y con qué sistemas trabajas hoy."
        defaultValue={v.message}
        error={e.message}
      />
      <Check name="privacy" defaultChecked={v.privacy === 'on'} error={e.privacy}>
        He leído la{' '}
        <Link href="/politica-de-privacidad" className="text-indigo-300 underline underline-offset-2">
          política de privacidad
        </Link>{' '}
        y autorizo el uso de mis datos para responder a mi consulta.
      </Check>
      <Submit>Enviar mensaje</Submit>
    </form>
  )
}
