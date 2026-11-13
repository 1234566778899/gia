import Image from 'next/image'
import logoCube from '@/public/logo-cube.png'
import logoFull from '@/public/logo.png'
import logoGia from '@/public/logo-gia.png'

/**
 * Logotipo GIA: cubo isométrico + «GIA» + eslogan, azul marino plano (generado con ChatGPT).
 * - `short` (header): mismo diseño armado por partes, con el eslogan como texto para que se lea a ese tamaño.
 * - `full` (pie): la imagen completa.
 */
export function Logo({ variant = 'short', className = '' }: { variant?: 'short' | 'full'; className?: string }) {
  if (variant === 'full') {
    return (
      <Image src={logoFull} alt="GIA Business & IT Consulting" width={211} height={80} className={`w-auto ${className || 'h-20'}`} />
    )
  }
  return (
    <span className={`flex items-center gap-2 ${className}`} aria-label="GIA Business & IT Consulting" role="img">
      <Image src={logoCube} alt="" width={35} height={42} preload className="h-[42px] w-auto" />
      <span className="flex flex-col">
        <Image src={logoGia} alt="" width={62} height={26} preload className="h-[26px] w-auto self-start" />
        <span className="mt-0.5 whitespace-nowrap text-[9.5px] font-semibold uppercase leading-none tracking-[0.04em] text-[#4b5563]">
          Business &amp; IT Consulting
        </span>
      </span>
    </span>
  )
}
