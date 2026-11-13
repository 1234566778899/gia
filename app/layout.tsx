import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Instrument_Serif } from 'next/font/google'
import { CookieConsent } from '@/components/cookie-consent'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { SmoothScroll } from '@/components/motion-kit'
import { site } from '@/lib/content'
import './globals.css'

const geist = Geist({ variable: '--font-geist', subsets: ['latin'] })
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] })
const instrument = Instrument_Serif({
  variable: '--font-instrument',
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
})

// Google Analytics 4: solo en producción, si se define NEXT_PUBLIC_GA_ID en Vercel y si el visitante lo acepta.
const gaId = process.env.VERCEL_ENV === 'production' ? process.env.NEXT_PUBLIC_GA_ID : undefined

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: `%s | ${site.short}` },
  description: site.description,
  applicationName: site.name,
  keywords: site.keywords,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.holding.name,
  category: 'technology',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'es_PE',
    url: '/',
    siteName: site.name,
    title: site.title,
    description: site.description,
  },
  twitter: { card: 'summary_large_image', title: site.title, description: site.description },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },
  formatDetection: { telephone: false, email: false, address: false },
  // Código de Google Search Console (método «etiqueta HTML»), si se define en Vercel.
  verification: process.env.GOOGLE_SITE_VERIFICATION ? { google: process.env.GOOGLE_SITE_VERIFICATION } : undefined,
}

export const viewport: Viewport = { themeColor: '#05060a', colorScheme: 'dark' }

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="es" className={`${geist.variable} ${geistMono.variable} ${instrument.variable} antialiased`}>
      {/* suppressHydrationWarning: extensiones del navegador (p. ej. ColorZilla) agregan atributos al body */}
      <body className="font-sans text-gray-200" suppressHydrationWarning>
        <SmoothScroll />
        <Header />
        {children}
        <Footer />
        <CookieConsent gaId={gaId} />
      </body>
    </html>
  )
}
