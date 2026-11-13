import type { Metadata, Viewport } from 'next'
import { Exo, Montserrat } from 'next/font/google'
import { CookieConsent } from '@/components/cookie-consent'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { site } from '@/lib/content'
import './globals.css'

// Como en la referencia: Exo en títulos y menú, Montserrat en el texto
const exo = Exo({ variable: '--font-exo', subsets: ['latin'], weight: ['500', '600'], style: ['normal', 'italic'] })
const montserrat = Montserrat({ variable: '--font-montserrat', subsets: ['latin'], weight: ['400', '500', '600'] })

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

export const viewport: Viewport = { themeColor: '#ffffff', colorScheme: 'light' }

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="es" className={`${exo.variable} ${montserrat.variable} antialiased`}>
      {/* suppressHydrationWarning: extensiones del navegador (p. ej. ColorZilla) agregan atributos al body */}
      <body className="font-sans" suppressHydrationWarning>
        <Header />
        {children}
        <Footer />
        <CookieConsent gaId={gaId} />
      </body>
    </html>
  )
}
