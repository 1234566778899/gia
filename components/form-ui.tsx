'use client'

import { useFormStatus } from 'react-dom'

const box =
  'w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-[15px] text-white placeholder:text-gray-600 outline-none transition-colors focus:border-indigo-400/60 focus:bg-white/[0.05] aria-[invalid=true]:border-rose-400/60'

type Base = { name: string; label: string; error?: string; hint?: string; required?: boolean; className?: string }

function Shell({ name, label, error, hint, required, className = '', children }: Base & { children: React.ReactNode }) {
  return (
    <div className={className}>
      <label htmlFor={name} className="mb-2 block text-sm text-gray-300">
        {label}
        {required && <span className="ml-0.5 text-indigo-300">*</span>}
      </label>
      {children}
      {error ? (
        <p id={`${name}-error`} className="mt-1.5 text-sm text-rose-300">{error}</p>
      ) : hint ? (
        <p className="mt-1.5 text-xs text-gray-500">{hint}</p>
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
        className={`${box} appearance-none bg-[url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M2 4l4 4 4-4' stroke='%239ca3af' fill='none' stroke-width='1.5'/%3E%3C/svg%3E")] bg-[length:12px] bg-[right_1rem_center] bg-no-repeat pr-10`}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value} className="bg-gray-900">
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
      <legend className="mb-2 text-sm text-gray-300">
        {label}
        {required && <span className="ml-0.5 text-indigo-300">*</span>}
      </legend>
      <div className="grid gap-2 sm:grid-cols-2">
        {options.map((o) => (
          <label
            key={o.value}
            className="flex cursor-pointer gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-colors has-[:checked]:border-indigo-400/70 has-[:checked]:bg-indigo-500/10"
          >
            <input type="radio" name={name} value={o.value} defaultChecked={defaultValue === o.value} className="mt-1 accent-indigo-500" />
            <span>
              <span className="block text-[15px] font-medium text-white">{o.label}</span>
              {o.hint && <span className="mt-1 block text-xs leading-relaxed text-gray-400">{o.hint}</span>}
            </span>
          </label>
        ))}
      </div>
      {error && <p className="mt-1.5 text-sm text-rose-300">{error}</p>}
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
      <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-gray-400">
        <input
          type="checkbox"
          name={name}
          defaultChecked={defaultChecked}
          onChange={(e) => onChange?.(e.target.checked)}
          className="mt-0.5 size-4 shrink-0 accent-indigo-500"
        />
        <span>{children}</span>
      </label>
      {error && <p className="mt-1.5 text-sm text-rose-300">{error}</p>}
    </div>
  )
}

export function Submit({ children }: { children: React.ReactNode }) {
  const { pending } = useFormStatus()
  return (
    <button type="submit" disabled={pending} className="btn btn-primary group disabled:opacity-60">
      {pending ? 'Enviando…' : children}
      {!pending && <span className="transition-transform group-hover:translate-x-1">→</span>}
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
    warn: 'border-amber-400/40 bg-amber-400/10 text-amber-100',
    error: 'border-rose-400/40 bg-rose-400/10 text-rose-100',
    ok: 'border-emerald-400/40 bg-emerald-400/10 text-emerald-100',
  }[tone]
  return (
    <div role="status" className={`rounded-2xl border p-4 text-sm leading-relaxed ${styles}`}>
      {children}
    </div>
  )
}
