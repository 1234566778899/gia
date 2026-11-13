import Image from 'next/image'

/** Isotipo de GIA (la G con un nodo de red, generado con ChatGPT) junto al nombre en texto. */
export function Logo({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Image src="/logo.png" alt="" width={30} height={30} priority className="size-[30px]" />
      <span className="text-[15px] font-semibold tracking-tight text-white">
        GIA<span className="ml-1.5 hidden font-normal text-gray-400 sm:inline">Business &amp; IT Consulting</span>
      </span>
    </span>
  )
}
