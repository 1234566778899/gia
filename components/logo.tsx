import Image from 'next/image'
import logoFull from '@/public/logo.png'
import logoGia from '@/public/logo-gia.png'

/**
 * Logotipo GIA (generado con ChatGPT, colores planos). Importación estática: URL con hash y caché permanente.
 * Se pasa el tamaño real de pantalla para que Next no genere ni precargue versiones enormes.
 * - `short`: «GIA» con el eslogan al lado en dos líneas, para la barra del header.
 * - `full`: «GIA» con el eslogan debajo, para tamaños grandes como el pie.
 */
export function Logo({ variant = 'short', className = '' }: { variant?: 'short' | 'full'; className?: string }) {
  if (variant === 'full') {
    return (
      <Image src={logoFull} alt="GIA Business & IT Consulting" width={213} height={90} className={`w-auto ${className || 'h-[90px]'}`} />
    )
  }
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <Image src={logoGia} alt="GIA" width={104} height={36} preload className="h-9 w-auto" />
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
