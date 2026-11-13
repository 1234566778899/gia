import { offices as all } from '@/lib/content'

/** Lista de sedes con su dirección (direcciones provisionales, ver lib/content.ts). */
export function Offices({ offices = all, columns = 3 }: { offices?: typeof all; columns?: 1 | 3 }) {
  return (
    <ul className={`grid gap-6 ${columns === 3 ? 'sm:grid-cols-3' : ''}`}>
      {offices.map((o) => (
        <li key={o.city} className="flex gap-3">
          <PinIcon />
          <span>
            <span className="block font-display text-sm font-semibold uppercase text-ink">{o.city}</span>
            <span className="mt-1 block text-sm leading-relaxed text-muted">{o.address}</span>
          </span>
        </li>
      ))}
    </ul>
  )
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="mt-0.5 size-5 shrink-0 text-brand" aria-hidden="true">
      <path
        d="M12 2.5c-3.9 0-7 3-7 6.9 0 5.1 6.1 11.4 6.4 11.7.3.3.9.3 1.2 0 .3-.3 6.4-6.6 6.4-11.7 0-3.9-3.1-6.9-7-6.9Zm0 9.6a2.7 2.7 0 1 1 0-5.4 2.7 2.7 0 0 1 0 5.4Z"
        fill="currentColor"
      />
    </svg>
  )
}
