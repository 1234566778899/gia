import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { site } from '@/lib/content'

export const alt = site.title
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const [semibold, regular, photo, logo] = await Promise.all([
  readFile(join(process.cwd(), 'assets', 'fonts', 'Montserrat-SemiBold.ttf')),
  readFile(join(process.cwd(), 'assets', 'fonts', 'Montserrat-Regular.ttf')),
  readFile(join(process.cwd(), 'assets', 'og-image.jpg')),
  readFile(join(process.cwd(), 'assets', 'og-logo.png')),
])
const photoSrc = `data:image/jpeg;base64,${photo.toString('base64')}`
const logoSrc = `data:image/png;base64,${logo.toString('base64')}`

// Imagen para compartir en redes: misma línea clara del sitio, colores planos.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', background: '#ffffff', fontFamily: 'Montserrat' }}>
        <div style={{ width: 640, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '64px 64px 56px' }}>
          <img src={logoSrc} width={260} height={110} alt="" />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 54, fontWeight: 600, lineHeight: 1.1, color: '#1d1d1f' }}>Tecnología que impulsa tu empresa.</div>
            <div style={{ width: 88, height: 5, background: '#3730a3', marginTop: 28 }} />
          </div>
          <div style={{ fontSize: 22, fontWeight: 400, color: '#5f6368' }}>Software · IA · Datos · Cloud · Ciberseguridad</div>
        </div>
        <img src={photoSrc} width={560} height={630} alt="" style={{ objectFit: 'cover' }} />
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Montserrat', data: semibold, style: 'normal', weight: 600 },
        { name: 'Montserrat', data: regular, style: 'normal', weight: 400 },
      ],
    },
  )
}
