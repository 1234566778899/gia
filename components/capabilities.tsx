'use client'

import { useRef } from 'react'
import { capabilities } from '@/lib/content'
import { FadeIn, SplitLines } from './motion-kit'

/** Cuadrícula con el efecto "spotlight" de la plantilla Open: un halo sigue al cursor sobre los bordes. */
export function Capabilities() {
  const grid = useRef<HTMLDivElement>(null)

  const onMove = (e: React.PointerEvent) => {
    grid.current?.querySelectorAll<HTMLElement>('[data-spot]').forEach((el) => {
      const r = el.getBoundingClientRect()
      el.style.setProperty('--mouse-x', `${e.clientX - r.left}px`)
      el.style.setProperty('--mouse-y', `${e.clientY - r.top}px`)
    })
  }

  return (
    <section id="capacidades" className="relative py-24 md:py-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-14 max-w-4xl md:mb-20">
          <FadeIn>
            <p className="eyebrow mb-6">Capacidades</p>
          </FadeIn>
          <SplitLines
            className="text-[clamp(2.5rem,6.5vw,6rem)] font-semibold leading-[0.92] tracking-[-0.05em] text-white"
            lines={[
              'Plataformas y normas',
              <>
                con las que <span className="font-serif font-normal italic tracking-[-0.02em] text-accent">trabajamos.</span>
              </>,
            ]}
          />
        </div>

        <div ref={grid} onPointerMove={onMove} className="group grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c, i) => (
            <FadeIn key={c.title} delay={i * 0.06}>
              <div
                data-spot
                className="relative h-full overflow-hidden rounded-3xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-48 before:-top-48 before:z-10 before:size-96 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-400/70 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-64 after:-top-64 after:z-30 after:size-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-cyan-300 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 group-hover:before:opacity-100 hover:after:opacity-15"
              >
                <div className="relative z-20 flex h-full flex-col justify-between gap-12 rounded-[inherit] bg-gray-950 p-7 md:p-9">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">{c.title}</h3>
                    <span className="font-mono text-xs text-gray-600">0{i + 1}</span>
                  </div>
                  <ul className="space-y-2.5">
                    {c.items.map((it) => (
                      <li key={it} className="flex items-center gap-3 text-lg text-gray-300">
                        <span className="size-1.5 rotate-45 bg-indigo-400" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
