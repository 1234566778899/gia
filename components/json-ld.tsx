import { services, site } from '@/lib/content'

/** Datos estructurados (schema.org) para que Google entienda quién es GIA y qué ofrece. */
export function JsonLd() {
  const org = `${site.url}/#organization`
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Organization', 'ProfessionalService'],
        '@id': org,
        name: site.name,
        alternateName: site.short,
        url: site.url,
        logo: `${site.url}/logo.png`,
        image: `${site.url}/opengraph-image`,
        description: site.description,
        areaServed: [{ '@type': 'Country', name: 'Perú' }, 'Worldwide'],
        knowsAbout: site.keywords,
        parentOrganization: { '@type': 'Organization', name: site.holding.name, url: site.holding.url },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Servicios de tecnología',
          itemListElement: services.map((s) => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: s.title, description: s.text, provider: { '@id': org } },
          })),
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${site.url}/#website`,
        url: site.url,
        name: site.name,
        inLanguage: 'es',
        publisher: { '@id': org },
      },
    ],
  }
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />
  )
}
