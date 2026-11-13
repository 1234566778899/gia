'use client'

import Link from 'next/link'
import { useActionState, useEffect, useState } from 'react'
import { submitClaim, type FormState } from '@/app/actions'
import type { RegisteredClaim } from '@/lib/delivery'
import { company, text } from '@/lib/legal'
import { Check, Choice, Honeypot, Input, Notice, Select, Submit, TextArea } from './form-ui'
import { Value } from './value'

const initial: FormState<RegisteredClaim> = { status: 'idle' }

const DEFINITIONS = {
  reclamo: 'Disconformidad relacionada a los productos o servicios.',
  queja: 'Disconformidad no relacionada a los productos o servicios; o malestar o descontento respecto a la atención al público.',
}

/** Hoja de Reclamación virtual (Anexo I del Reglamento del Libro de Reclamaciones, D.S. 011-2011-PCM). */
export function ClaimForm() {
  const [state, action] = useActionState(submitClaim, initial)
  const [minor, setMinor] = useState(false)
  const [today, setToday] = useState('')
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- la fecha se toma del reloj del visitante
    setToday(new Date().toLocaleDateString('es-PE', { day: '2-digit', month: '2-digit', year: 'numeric' }))
  }, [])

  if (state.status === 'ok') return <Receipt claim={state.data} />

  const v = 'values' in state ? state.values : {}
  const e = state.status === 'invalid' ? state.errors : {}
  const showMinor = minor || v.minor === 'on'

  return (
    <form action={action} noValidate className="relative space-y-10">
      <Honeypot />
      <SheetHeader number="Se asigna al registrar" date={today || '—'} />

      {state.status === 'unavailable' && (
        <Notice tone="warn">
          El registro de hojas de reclamación todavía no está activo: se habilita al publicar el sitio. Tu hoja no se
          guardó.
        </Notice>
      )}
      {state.status === 'error' && <Notice tone="error">No pudimos registrar tu hoja. Inténtalo de nuevo en unos minutos.</Notice>}
      {state.status === 'invalid' && <Notice tone="error">Revisa los campos marcados en rojo.</Notice>}

      <Section n="1" title="Identificación del consumidor reclamante">
        <div className="grid gap-5 sm:grid-cols-2">
          <Input name="name" label="Nombre completo" autoComplete="name" required defaultValue={v.name} error={e.name} className="sm:col-span-2" />
          <Select
            name="docType"
            label="Tipo de documento"
            required
            defaultValue={v.docType || 'DNI'}
            options={[
              { value: 'DNI', label: 'DNI' },
              { value: 'CE', label: 'Carné de extranjería' },
              { value: 'Pasaporte', label: 'Pasaporte' },
              { value: 'RUC', label: 'RUC' },
            ]}
          />
          <Input name="docNumber" label="Número de documento" required defaultValue={v.docNumber} error={e.docNumber} />
          <Input name="address" label="Domicilio" autoComplete="street-address" required defaultValue={v.address} error={e.address} className="sm:col-span-2" />
          <Input name="phone" label="Teléfono" type="tel" autoComplete="tel" inputMode="tel" required defaultValue={v.phone} error={e.phone} />
          <Input name="email" label="Correo electrónico" type="email" autoComplete="email" inputMode="email" required defaultValue={v.email} error={e.email} />
        </div>
        <Check name="minor" defaultChecked={v.minor === 'on'} onChange={setMinor}>
          Soy menor de edad (se registran los datos del padre, madre o representante).
        </Check>
        {showMinor && (
          <div className="grid gap-5 rounded-md border border-line bg-panel p-5 sm:grid-cols-2">
            <Input name="gName" label="Nombre del padre, madre o representante" required defaultValue={v.gName} error={e.gName} className="sm:col-span-2" />
            <Input name="gAddress" label="Domicilio" required defaultValue={v.gAddress} error={e.gAddress} className="sm:col-span-2" />
            <Input name="gPhone" label="Teléfono" type="tel" required defaultValue={v.gPhone} error={e.gPhone} />
            <Input name="gEmail" label="Correo electrónico" type="email" required defaultValue={v.gEmail} error={e.gEmail} />
          </div>
        )}
      </Section>

      <Section n="2" title="Identificación del bien contratado">
        <Choice
          name="itemType"
          label="Tipo"
          required
          defaultValue={v.itemType}
          error={e.itemType}
          options={[
            { value: 'servicio', label: 'Servicio' },
            { value: 'producto', label: 'Producto' },
          ]}
        />
        <div className="grid gap-5 sm:grid-cols-[1fr_14rem]">
          <Input name="description" label="Descripción del producto o servicio" required defaultValue={v.description} error={e.description} />
          <Input name="amount" label="Monto reclamado (S/)" inputMode="decimal" placeholder="0.00" defaultValue={v.amount} error={e.amount} />
        </div>
      </Section>

      <Section n="3" title="Detalle de la reclamación y pedido del consumidor">
        <Choice
          name="kind"
          label="Tipo de solicitud"
          required
          defaultValue={v.kind}
          error={e.kind}
          options={[
            { value: 'reclamo', label: 'Reclamo', hint: DEFINITIONS.reclamo },
            { value: 'queja', label: 'Queja', hint: DEFINITIONS.queja },
          ]}
        />
        <TextArea name="detail" label="Detalle" required rows={6} defaultValue={v.detail} error={e.detail} />
        <TextArea name="request" label="Pedido" required rows={3} hint="Qué solución esperas." defaultValue={v.request} error={e.request} />
        <Choice
          name="replyBy"
          label="¿Cómo quieres recibir la respuesta?"
          defaultValue={v.replyBy || 'correo'}
          options={[
            { value: 'correo', label: 'Por correo electrónico' },
            { value: 'carta', label: 'Por carta a mi domicilio' },
          ]}
        />
      </Section>

      <Legends />

      <Check name="accept" defaultChecked={v.accept === 'on'} error={e.accept}>
        Declaro que los datos son verdaderos y autorizo su tratamiento para atender esta hoja conforme a la{' '}
        <Link href="/politica-de-privacidad" className="text-brand underline underline-offset-2">
          política de privacidad
        </Link>
        .
      </Check>
      <Submit>Registrar hoja de reclamación</Submit>
    </form>
  )
}

function SheetHeader({ number, date }: { number: string; date: string }) {
  return (
    <div className="grid gap-4 rounded-md border border-line bg-panel p-5 text-sm sm:grid-cols-2">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-muted">Proveedor</p>
        <p className="mt-1 text-ink"><Value v={company.legalName} /></p>
        <p className="mt-1 text-muted">RUC <Value v={company.ruc} /></p>
        <p className="mt-1 text-muted"><Value v={company.address} /></p>
      </div>
      <div className="sm:text-right">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted">Hoja de reclamación N.°</p>
        <p className="mt-1 text-ink">{number}</p>
        <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-muted">Fecha</p>
        <p className="mt-1 text-ink">{date}</p>
      </div>
    </div>
  )
}

function Section({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <fieldset className="space-y-5">
      <legend className="mb-5 flex items-center gap-3 font-display text-lg font-semibold uppercase text-ink">
        <span className="grid size-7 place-items-center rounded-full bg-brand text-xs font-semibold text-white">{n}</span>
        {title}
      </legend>
      {children}
    </fieldset>
  )
}

function Legends() {
  return (
    <div className="space-y-2 rounded-md border border-line bg-panel p-5 text-xs leading-relaxed text-muted">
      <p><strong className="text-ink">Reclamo:</strong> {DEFINITIONS.reclamo}</p>
      <p><strong className="text-ink">Queja:</strong> {DEFINITIONS.queja}</p>
      <p>
        La formulación del reclamo no impide acudir a otras vías de solución de controversias ni es requisito previo
        para interponer una denuncia ante el INDECOPI.
      </p>
      <p>El proveedor deberá dar respuesta al reclamo o queja en un plazo no mayor a quince (15) días hábiles.</p>
    </div>
  )
}

/** Constancia que el consumidor puede imprimir (art. 4 y 4-B del Reglamento). */
function Receipt({ claim }: { claim: RegisteredClaim }) {
  const created = new Date(claim.createdAt).toLocaleString('es-PE', { dateStyle: 'long', timeStyle: 'short', timeZone: 'America/Lima' })
  const rows: [string, string][] = [
    ['Proveedor', `${text(company.legalName)} · RUC ${text(company.ruc)}`],
    ['Dirección del proveedor', text(company.address)],
    ['Consumidor', claim.consumer.name],
    ['Documento', `${claim.consumer.docType} ${claim.consumer.docNumber}`],
    ['Domicilio', claim.consumer.address],
    ['Teléfono / correo', `${claim.consumer.phone} · ${claim.consumer.email}`],
    ...(claim.guardian ? ([['Padre, madre o representante', `${claim.guardian.name} · ${claim.guardian.phone} · ${claim.guardian.email}`]] as [string, string][]) : []),
    ['Bien contratado', `${claim.item.type === 'producto' ? 'Producto' : 'Servicio'}: ${claim.item.description}`],
    ['Monto reclamado', claim.item.amount ? `S/ ${claim.item.amount}` : '—'],
    ['Tipo', claim.kind === 'reclamo' ? 'Reclamo' : 'Queja'],
    ['Detalle', claim.detail],
    ['Pedido', claim.request],
    ['Respuesta por', claim.replyBy === 'carta' ? 'Carta' : 'Correo electrónico'],
    ['Observaciones y acciones adoptadas por el proveedor', 'Pendiente de respuesta'],
  ]
  return (
    <div className="space-y-6">
      <Notice tone="ok">
        <strong className="block text-base text-ink">Hoja de reclamación N.° {claim.number} registrada</strong>
        Enviamos una copia a {claim.consumer.email}. Te responderemos en un plazo no mayor a quince (15) días hábiles.
      </Notice>
      <div className="print-area rounded-md border border-line p-6 text-sm">
        <h2 className="text-lg font-semibold text-ink">Libro de Reclamaciones · Hoja N.° {claim.number}</h2>
        <p className="mt-1 text-muted">Registrada el {created}</p>
        <dl className="mt-5 divide-y divide-line">
          {rows.map(([k, val]) => (
            <div key={k} className="grid gap-1 py-2.5 sm:grid-cols-[14rem_1fr]">
              <dt className="text-muted">{k}</dt>
              <dd className="whitespace-pre-line text-ink">{val}</dd>
            </div>
          ))}
        </dl>
      </div>
      <button type="button" onClick={() => window.print()} className="btn btn-outline">
        Imprimir o guardar en PDF
      </button>
    </div>
  )
}
