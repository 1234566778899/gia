import Image from 'next/image'

/** Logotipo GIA con el eslogan «Business & IT Consulting» debajo (generado con ChatGPT, colores planos). */
export function Logo({ className = 'h-12' }: { className?: string }) {
  return (
    <Image
      src="/logo.png"
      alt="GIA Business & IT Consulting"
      width={900}
      height={381}
      priority
      className={`w-auto ${className}`}
    />
  )
}
