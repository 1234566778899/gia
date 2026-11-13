import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { site } from '@/lib/content'

export const alt = site.title
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const [geist, serif, bg, logo] = await Promise.all([
  readFile(join(process.cwd(), 'assets', 'fonts', 'Geist-SemiBold.ttf')),
  readFile(join(process.cwd(), 'assets', 'fonts', 'InstrumentSerif-Italic.ttf')),
  readFile(join(process.cwd(), 'assets', 'og-bg.jpg')),
  readFile(join(process.cwd(), 'assets', 'og-logo.png')),
])
const bgSrc = `data:image/jpeg;base64,${bg.toString('base64')}`
const logoSrc = `data:image/png;base64,${logo.toString('base64')}`

// Imagen para compartir en redes (WhatsApp, LinkedIn, X…): la misma portada del sitio.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', position: 'relative', background: '#05060a', fontFamily: 'Geist', color: 'white' }}>
        <img src={bgSrc} width={1200} height={675} alt="" style={{ position: 'absolute', top: -20, left: 120, width: 1200, height: 675, objectFit: 'cover', opacity: 0.9 }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', background: 'linear-gradient(90deg, #05060a 0%, rgba(5,6,10,0.85) 45%, rgba(5,6,10,0) 80%)' }} />
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '64px 72px', width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
                <img src={logoSrc} width={64} height={64} alt="" />
            <div style={{ display: 'flex', fontSize: 30, letterSpacing: '-0.02em' }}>
              GIA<span style={{ color: '#9ca3af', marginLeft: 12 }}>Business &amp; IT Consulting</span>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', fontSize: 96, lineHeight: 0.92, letterSpacing: '-0.05em' }}>
            <span>Tecnología que</span>
            <span style={{ display: 'flex' }}>
              <span style={{ fontFamily: 'Instrument Serif', letterSpacing: '-0.01em', color: '#67e8f9', marginRight: 22 }}>impulsa</span>
              tu empresa.
            </span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 22, color: '#a5b4fc' }}>
            <span>Software · IA · Datos · Cloud · Ciberseguridad</span>
            <span style={{ color: '#6b7280' }}>Una empresa de Grupo HEN</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Geist', data: geist, style: 'normal', weight: 600 },
        { name: 'Instrument Serif', data: serif, style: 'italic', weight: 400 },
      ],
    },
  )
}
