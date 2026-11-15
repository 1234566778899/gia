import Image from 'next/image'
import logoFull from '@/public/logo.png'
import logoGia from '@/public/logo-gia.png'

/**
 * Logotipo GIA (2026-11-13): «GIA» en letras cuadradas (G en #023e51, I y A en #0a8a9c) y debajo el eslogan
 * «BUSINESS & IA CONSULTING» en dos líneas, sin símbolo.
 * - `short` (header): la imagen del «GIA» y el eslogan como texto en Exo, porque en imagen a ese tamaño no se lee.
 * - `full` (pie): la imagen completa.
 */
export function Logo({ variant = 'short', className = '' }: { variant?: 'short' | 'full'; className?: string }) {
  if (variant === 'full') {
    return (
      <Image src={logoFull} alt="GIA Business & IA Consulting" width={172} height={96} className={`w-auto ${className || 'h-24'}`} />
    )
  }
  return (
    <span className={`flex w-fit flex-col ${className}`} aria-label="GIA Business & IA Consulting" role="img">
      <Image src={logoGia} alt="" width={101} height={32} preload className="h-8 w-auto" />
      <span className="mt-[5px] flex flex-col gap-[3px] font-display text-[9px] font-bold uppercase leading-none text-brand">
        <span className="flex justify-between" aria-hidden="true">
          {spread('Business &')}
        </span>
        <span className="flex justify-between" aria-hidden="true">
          {spread('IA Consulting')}
        </span>
      </span>
    </span>
  )
}

/** Reparte las letras a lo ancho del «GIA», como en el logo original (texto justificado). */
function spread(text: string) {
  return text.split('').map((ch, i) => (
    <span key={i}>{ch === ' ' ? ' ' : ch}</span>
  ))
}
