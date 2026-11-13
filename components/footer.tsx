import Image from 'next/image'
import Link from 'next/link'
import imgBook from '@/public/libro-reclamaciones.png'
import { nav, offices, services, site } from '@/lib/content'
import { legalNav } from '@/lib/legal'
import { CookieSettingsLink } from './cookie-consent'
import { Logo } from './logo'
import { Offices } from './offices'
import { Socials } from './socials'

/** Pie gris claro con barra negra inferior, como en la referencia. */
export function Footer() {
  return (
    <footer className="bg-panel">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:grid-cols-2 sm:px-8 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo variant="full" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">{site.description}</p>
          <a href={site.holding.url} className="mt-4 inline-block text-sm font-medium text-brand hover:underline">
            Una empresa de {site.holding.name} →
          </a>
          {/* Aviso del Libro de Reclamaciones: visible y con enlace al libro (art. 9, D.S. 011-2011-PCM) */}
          <Link
            href="/libro-de-reclamaciones"
            className="mt-6 flex max-w-xs items-center gap-3 rounded-md border border-line bg-white p-3 transition-shadow hover:shadow-md"
          >
            <Image src={imgBook} alt="" width={40} height={40} className="size-10 shrink-0" />
            <span>
              <span className="block text-sm font-semibold text-ink">Libro de Reclamaciones</span>
              <span className="block text-xs text-muted">Registra aquí tu queja o reclamo</span>
            </span>
          </Link>
        </div>
        <Column title="Navegación">
          {nav.map((l) => (
            <FooterLink key={l.href} href={l.href}>{l.label}</FooterLink>
          ))}
        </Column>
        <Column title="Soluciones">
          {services.map((s) => (
            <FooterLink key={s.slug} href="/#soluciones">{s.short}</FooterLink>
          ))}
        </Column>
        <Column title="Legal">
          {legalNav.map((l) => (
            <FooterLink key={l.href} href={l.href}>{l.label}</FooterLink>
          ))}
          <li>
            <CookieSettingsLink />
          </li>
        </Column>
      </div>
      {/* Redes y sedes, como en la referencia */}
      <div className="mx-auto grid max-w-7xl gap-10 border-t border-line px-5 py-10 sm:px-8 lg:grid-cols-[1.4fr_3fr]">
        <div>
          <p className="mb-4 font-display text-sm font-semibold uppercase text-ink">Síguenos</p>
          <Socials />
        </div>
        <div>
          <p className="mb-4 font-display text-sm font-semibold uppercase text-ink">Nuestras sedes</p>
          <Offices offices={offices} />
        </div>
      </div>
      <div className="bg-black px-5 py-4 text-center text-xs font-medium text-white">
        © 2026 {site.name}. Todos los derechos reservados.
      </div>
    </footer>
  )
}

function Column({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="mb-4 font-display text-sm font-semibold uppercase text-ink">{title}</p>
      <ul className="space-y-2 text-sm">{children}</ul>
    </div>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-muted transition-colors hover:text-brand">
        {children}
      </Link>
    </li>
  )
}
