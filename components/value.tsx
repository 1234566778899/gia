import { isPending, type Maybe } from '@/lib/legal'

/** Muestra un dato legal; si falta, lo marca en ámbar para que salte a la vista antes de publicar. */
export function Value({ v, tone = 'light' }: { v: Maybe; tone?: 'light' | 'dark' }) {
  if (!isPending(v)) return <>{v}</>
  const style =
    tone === 'dark' ? 'border-amber-300/50 bg-amber-300/15 text-amber-200' : 'border-amber-300 bg-amber-50 text-amber-800'
  return <span className={`rounded border px-1.5 py-0.5 font-mono text-[0.85em] ${style}`}>Pendiente: {v.pending}</span>
}
