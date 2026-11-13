import { FadeIn } from './motion-kit'

/** Título centrado en mayúsculas con barra de acento debajo, como en la referencia. */
export function SectionTitle({
  kicker,
  title,
  as: Tag = 'h2',
  align = 'center',
}: {
  kicker?: string
  title: string
  as?: 'h1' | 'h2'
  align?: 'center' | 'left'
}) {
  const center = align === 'center'
  return (
    <FadeIn className={center ? 'text-center' : ''}>
      {kicker && <p className="kicker mb-2">{kicker}</p>}
      <Tag className="section-title">{title}</Tag>
      <span className={`accent-bar mt-4 ${center ? 'mx-auto' : ''}`} />
    </FadeIn>
  )
}
