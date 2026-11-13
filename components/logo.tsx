import Image from 'next/image'

/**
 * Logotipo GIA (generado con ChatGPT, colores planos).
 * - `short`: «GIA» con el eslogan al lado en dos líneas, para la barra del header (horizontal y legible).
 * - `full`: «GIA» con el eslogan debajo, para tamaños grandes como el pie.
 */
export function Logo({ variant = 'short', className = '' }: { variant?: 'short' | 'full'; className?: string }) {
  if (variant === 'full') {
    return <Image src="/logo.png" alt="GIA Business & IT Consulting" width={900} height={381} className={`w-auto ${className || 'h-[90px]'}`} />
  }
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <Image src="/logo-gia.png" alt="GIA" width={888} height={309} priority className="h-9 w-auto" />
      <span
        className="border-l border-[#4b5563]/30 pl-3 font-display text-[11px] font-semibold uppercase leading-[1.35] tracking-[0.14em] text-[#4b5563]"
        aria-label="Business & IT Consulting"
      >
        Business &amp; IT
        <br />
        Consulting
      </span>
    </span>
  )
}
