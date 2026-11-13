import type { MetadataRoute } from 'next'
import { services, site, slides } from '@/lib/content'
import { legalNav } from '@/lib/legal'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      changeFrequency: 'monthly',
      priority: 1,
      // Imágenes de la portada para Google Imágenes
      images: [slides[0].image, ...services.map((s) => s.image)].map((img) => `${site.url}${img.src}`),
    },
    { url: `${site.url}/contacto`, changeFrequency: 'yearly', priority: 0.8 },
    ...legalNav.map((l) => ({ url: `${site.url}${l.href}`, changeFrequency: 'yearly' as const, priority: 0.3 })),
  ]
}
