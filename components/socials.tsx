import { siFacebook, siInstagram, siTiktok, siX, siYoutube } from 'simple-icons'
import { socials } from '@/lib/content'

// Íconos de marca de simple-icons (CC0). LinkedIn no está en el paquete: se dibuja aparte.
const paths: Record<string, string> = {
  Facebook: siFacebook.path,
  Instagram: siInstagram.path,
  X: siX.path,
  YouTube: siYoutube.path,
  TikTok: siTiktok.path,
}

function Icon({ name }: { name: string }) {
  if (name === 'LinkedIn') {
    return (
      <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="3" fill="currentColor" />
        <rect x="6" y="10" width="2.6" height="8" fill="#fff" />
        <circle cx="7.3" cy="6.8" r="1.6" fill="#fff" />
        <path d="M10.8 10h2.5v1.2c.5-.8 1.4-1.4 2.7-1.4 2 0 3 1.3 3 3.6V18h-2.6v-4.2c0-1.1-.4-1.8-1.4-1.8-.9 0-1.6.6-1.6 1.8V18h-2.6v-8Z" fill="#fff" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true">
      <path d={paths[name]} fill="currentColor" />
    </svg>
  )
}

/** Íconos de redes en círculos planos, como en la referencia. */
export function Socials({ className = '' }: { className?: string }) {
  return (
    <ul className={`flex flex-wrap gap-2 ${className}`}>
      {socials.map((s) => {
        const style =
          'grid size-9 place-items-center rounded-full bg-brand/10 text-brand transition-colors hover:bg-brand hover:text-white'
        return (
          <li key={s.name}>
            {s.url ? (
              <a href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.name} className={style}>
                <Icon name={s.name} />
              </a>
            ) : (
              // Perfil aún no creado: se muestra el ícono sin enlace
              <span title={`${s.name} (próximamente)`} className={`${style} cursor-default`}>
                <Icon name={s.name} />
                <span className="sr-only">{s.name}</span>
              </span>
            )}
          </li>
        )
      })}
    </ul>
  )
}
