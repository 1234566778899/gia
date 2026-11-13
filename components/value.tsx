import { isPending, type Maybe } from '@/lib/legal'

/** Muestra un dato legal; si falta, lo marca en ámbar para que salte a la vista antes de publicar. */
export function Value({ v }: { v: Maybe }) {
  if (!isPending(v)) return <>{v}</>
  return (
    <span className="rounded-md border border-amber-400/40 bg-amber-400/10 px-1.5 py-0.5 font-mono text-[0.85em] text-amber-200">
      Pendiente: {v.pending}
    </span>
  )
}
