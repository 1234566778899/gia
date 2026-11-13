import Link from 'next/link'
import { nav, services, site } from '@/lib/content'
import { company, legalNav } from '@/lib/legal'
import { CookieSettingsLink } from './cookie-consent'
import { Logo } from './logo'
import { Value } from './value'

export function Footer() {
  return (
    <footer className="relative overflow-hidden pt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 pb-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-gray-400">{site.description}</p>
            <a href={site.holding.url} className="mt-6 inline-flex items-center gap-2 text-sm text-indigo-300 hover:text-indigo-200">
              Una empresa de {site.holding.name} →
            </a>
            {/* Aviso del Libro de Reclamaciones: debe ser visible y enlazar al libro (art. 9, D.S. 011-2011-PCM) */}
            <Link
              href="/libro-de-reclamaciones"
              className="mt-8 flex max-w-xs items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-indigo-400/40 hover:bg-white/[0.06]"
            >
              <BookIcon />
              <span>
                <span className="block text-sm font-semibold text-white">Libro de Reclamaciones</span>
                <span className="block text-xs text-gray-400">Registra aquí tu queja o reclamo</span>
              </span>
            </Link>
          </div>
          <Column title="Navegación">
            {nav.map((l) => (
              <FooterLink key={l.href} href={l.href}>{l.label}</FooterLink>
            ))}
          </Column>
          <Column title="Servicios">
            {services.map((s) => (
              <FooterLink key={s.slug} href="/#servicios">{s.title.split(' y ')[0].split(',')[0]}</FooterLink>
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
        <div className="hairline flex flex-col justify-between gap-3 py-6 text-sm text-gray-500 md:flex-row">
          <span>
            © 2026 <Value v={company.legalName} /> · RUC <Value v={company.ruc} />
          </span>
          <span>{site.name} · {site.holding.name}</span>
        </div>
      </div>
      <p
        className="text-outline pointer-events-none select-none text-center text-[34vw] font-semibold leading-[0.75] tracking-[-0.07em]"
        aria-hidden="true"
      >
        GIA
      </p>
    </footer>
  )
}

function Column({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-gray-500">{title}</p>
      <ul className="space-y-2.5">{children}</ul>
    </div>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-gray-300 transition-colors hover:text-white">
        {children}
      </Link>
    </li>
  )
}

function BookIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true" className="shrink-0">
      <rect width="40" height="40" rx="10" fill="url(#lr)" />
      <path d="M12 12.5c2.8-.9 5.6-.6 8 1v15c-2.4-1.6-5.2-1.9-8-1v-15Zm16 0c-2.8-.9-5.6-.6-8 1v15c2.4-1.6 5.2-1.9 8-1v-15Z" stroke="white" strokeWidth="1.6" strokeLinejoin="round" />
      <defs>
        <linearGradient id="lr" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6366f1" />
          <stop offset="1" stopColor="#22d3ee" />
        </linearGradient>
      </defs>
    </svg>
  )
}
