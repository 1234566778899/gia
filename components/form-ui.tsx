'use client'

import { useFormStatus } from 'react-dom'

const box =
  'w-full rounded-md border border-line bg-white px-4 py-3 text-[15px] text-ink placeholder:text-gray-400 outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/15 aria-[invalid=true]:border-rose-400'

type Base = { name: string; label: string; error?: string; hint?: string; required?: boolean; className?: string }

function Shell({ name, label, error, hint, required, className = '', children }: Base & { children: React.ReactNode }) {
  return (
    <div className={className}>
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-ink">
        {label}
        {required && <span className="ml-0.5 text-brand">*</span>}
      </label>
      {children}
      {error ? (
        <p id={`${name}-error`} className="mt-1.5 text-sm text-rose-600">{error}</p>
      ) : hint ? (
        <p className="mt-1.5 text-xs text-muted">{hint}</p>
      ) : null}
    </div>
  )
}

export function Input({
  defaultValue,
  ...p
}: Base & { type?: string; autoComplete?: string; placeholder?: string; inputMode?: 'numeric' | 'decimal' | 'tel' | 'email'; defaultValue?: string }) {
  return (
    <Shell {...p}>
      <input
        id={p.name}
        name={p.name}
        type={p.type ?? 'text'}
        autoComplete={p.autoComplete}
        placeholder={p.placeholder}
        inputMode={p.inputMode}
        required={p.required}
        defaultValue={defaultValue}
        aria-invalid={Boolean(p.error)}
        aria-describedby={p.error ? `${p.name}-error` : undefined}
        className={box}
      />
    </Shell>
  )
}

export function TextArea({ defaultValue, rows = 5, ...p }: Base & { rows?: number; placeholder?: string; defaultValue?: string }) {
  return (
    <Shell {...p}>
      <textarea
        id={p.name}
        name={p.name}
        rows={rows}
        placeholder={p.placeholder}
        required={p.required}
        defaultValue={defaultValue}
        aria-invalid={Boolean(p.error)}
        aria-describedby={p.error ? `${p.name}-error` : undefined}
        className={`${box} resize-y`}
      />
    </Shell>
  )
}

export function Select({
  options,
  defaultValue,
  ...p
}: Base & { options: { value: string; label: string }[]; defaultValue?: string }) {
  return (
    <Shell {...p}>
      <select
        id={p.name}
        name={p.name}
        required={p.required}
        defaultValue={defaultValue ?? ''}
        aria-invalid={Boolean(p.error)}
        className={`${box} appearance-none bg-[url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M2 4l4 4 4-4' stroke='%235f6368' fill='none' stroke-width='1.5'/%3E%3C/svg%3E")] bg-[length:12px] bg-[right_1rem_center] bg-no-repeat pr-10`}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value} >
            {o.label}
          </option>
        ))}
      </select>
    </Shell>
  )
}

/** Grupo de opciones tipo "pastilla" (radio). */
export function Choice({
  name,
  label,
  options,
  defaultValue,
  error,
  required,
}: {
  name: string
  label: string
  options: { value: string; label: string; hint?: string }[]
  defaultValue?: string
  error?: string
  required?: boolean
}) {
  return (
    <fieldset>
      <legend className="mb-2 text-sm font-medium text-ink">
        {label}
        {required && <span className="ml-0.5 text-brand">*</span>}
      </legend>
      <div className="grid gap-2 sm:grid-cols-2">
        {options.map((o) => (
          <label
            key={o.value}
            className="flex cursor-pointer gap-3 rounded-md border border-line bg-white p-4 transition-colors has-[:checked]:border-brand has-[:checked]:bg-indigo-50"
          >
            <input type="radio" name={name} value={o.value} defaultChecked={defaultValue === o.value} className="mt-1 accent-[#4f46e5]" />
            <span>
              <span className="block text-[15px] font-medium text-ink">{o.label}</span>
              {o.hint && <span className="mt-1 block text-xs leading-relaxed text-muted">{o.hint}</span>}
            </span>
          </label>
        ))}
      </div>
      {error && <p className="mt-1.5 text-sm text-rose-600">{error}</p>}
    </fieldset>
  )
}

export function Check({
  name,
  children,
  error,
  defaultChecked,
  onChange,
}: {
  name: string
  children: React.ReactNode
  error?: string
  defaultChecked?: boolean
  onChange?: (checked: boolean) => void
}) {
  return (
    <div>
      <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-muted">
        <input
          type="checkbox"
          name={name}
          defaultChecked={defaultChecked}
          onChange={(e) => onChange?.(e.target.checked)}
          className="mt-0.5 size-4 shrink-0 accent-[#4f46e5]"
        />
        <span>{children}</span>
      </label>
      {error && <p className="mt-1.5 text-sm text-rose-600">{error}</p>}
    </div>
  )
}

export function Submit({ children }: { children: React.ReactNode }) {
  const { pending } = useFormStatus()
  return (
    <button type="submit" disabled={pending} className="btn btn-primary group disabled:opacity-60">
      {pending ? 'Enviando…' : children}
      
    </button>
  )
}

/** Campo oculto para atrapar bots que llenan todo. */
export function Honeypot() {
  return (
    <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
      <label>
        No llenar
        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
      </label>
    </div>
  )
}

export function Notice({ tone, children }: { tone: 'warn' | 'error' | 'ok'; children: React.ReactNode }) {
  const styles = {
    warn: 'border-amber-300 bg-amber-50 text-amber-900',
    error: 'border-rose-300 bg-rose-50 text-rose-900',
    ok: 'border-emerald-300 bg-emerald-50 text-emerald-900',
  }[tone]
  return (
    <div role="status" className={`rounded-md border p-4 text-sm leading-relaxed ${styles}`}>
      {children}
    </div>
  )
}
