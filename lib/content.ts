import type { StaticImageData } from 'next/image'
import imgHero from '@/assets/images/hero.jpg'
import imgIa from '@/assets/images/ia.jpg'
import imgBi from '@/assets/images/bi.jpg'
import imgCloud from '@/assets/images/cloud.jpg'
import imgCiberseguridad from '@/assets/images/ciberseguridad.jpg'
import imgConsultoria from '@/assets/images/consultoria.jpg'
import imgSoftware from '@/assets/images/software.jpg'
import imgMarketplaces from '@/assets/images/marketplaces.jpg'
import imgHardware from '@/assets/images/hardware.jpg'
import logoAndesur from '@/assets/clients/andesur.png'
import logoPuertoBrio from '@/assets/clients/puerto-brio.png'
import logoAgronorte from '@/assets/clients/agronorte.png'
import logoVerticeSalud from '@/assets/clients/vertice-salud.png'
import logoCumbreCapital from '@/assets/clients/cumbre-capital.png'
import logoAltiplano from '@/assets/clients/altiplano.png'

/** Textos del sitio. Las líneas de servicio vienen del objeto social de tecnología de Grupo HEN. */

export const site = {
  name: 'GIA Business & IT Consulting',
  short: 'GIA',
  url: 'https://gia.grupohen.com',
  holding: { name: 'Grupo HEN', url: 'https://grupohen.com' },
  contactUrl: '/contacto',
  title: 'GIA Business & IT Consulting | Software, IA, Cloud y Ciberseguridad',
  description:
    'Consultora tecnológica de Grupo HEN: software, inteligencia artificial, inteligencia de negocios, cloud, ciberseguridad, telecomunicaciones, marketplaces y hardware.',
  keywords: [
    'consultoría tecnológica', 'consultoría IT Perú', 'transformación digital', 'desarrollo de software a medida',
    'inteligencia artificial', 'IA generativa', 'agentes de IA', 'business intelligence', 'dashboards',
    'cloud computing', 'AWS', 'Azure', 'Google Cloud', 'ciberseguridad', 'pentesting', 'ISO 27001',
    'hosting', 'marketplaces', 'e-commerce', 'IoT', 'hardware', 'Grupo HEN', 'GIA',
  ],
}

export const nav = [
  { href: '/#nosotros', label: 'Nosotros' },
  { href: '/#soluciones', label: 'Soluciones' },
  { href: '/#metodo', label: 'Cómo trabajamos' },
  { href: '/contacto', label: 'Contacto' },
]

export const slides = [
  {
    image: imgHero,
    title: 'Tecnología que impulsa tu empresa.',
    text: 'Software, inteligencia artificial, datos, nube y ciberseguridad para transformar organizaciones públicas y privadas.',
    cta: { href: '/contacto', label: 'Conversemos' },
  },
  {
    image: imgIa,
    title: 'Inteligencia artificial aplicada a tu negocio.',
    text: 'Agentes, modelos y analítica que convierten tus datos en decisiones.',
    cta: { href: '#soluciones', label: 'Ver soluciones' },
  },
  {
    image: imgCiberseguridad,
    title: 'Infraestructura segura que no se detiene.',
    text: 'Cloud, data centers y ciberseguridad con monitoreo y respuesta ante incidentes.',
    cta: { href: '#soluciones', label: 'Ver soluciones' },
  },
]

export const about = {
  kicker: 'GIA Business & IT Consulting',
  title: 'Consultoría tecnológica integral',
  image: imgConsultoria,
  paragraphs: [
    'Somos la empresa de tecnología de **Grupo HEN**. Diseñamos, construimos, operamos y protegemos la tecnología de organizaciones públicas y privadas.',
    'Acompañamos cada proyecto **del primer diagnóstico a la plataforma en producción**: software a medida, inteligencia artificial, datos para decidir e infraestructura que no se detiene.',
    'Un mismo equipo responde por el resultado, con entregas medibles en cada etapa.',
  ],
}

export type Service = {
  n: string
  slug: string
  title: string
  short: string
  kicker: string
  text: string
  tags: string[]
  image: StaticImageData
  alt: string
}

export const services: Service[] = [
  {
    n: '01', slug: 'software', image: imgSoftware, short: 'Software y plataformas cloud',
    alt: 'Cubos modulares de vidrio y titanio que representan software y microservicios',
    title: 'Ingeniería de software y plataformas cloud',
    kicker: 'SaaS · PaaS · IaaS · Apps móviles',
    text: 'Software a medida, plataformas SaaS, PaaS e IaaS, aplicaciones móviles nativas e híbridas, y sistemas ERP, CRM, SCM y BPM para la transformación digital de organizaciones públicas y privadas.',
    tags: ['Arquitectura web avanzada', 'iOS y Android', 'ERP · CRM · SCM · BPM', 'RPA', 'No-code / low-code', 'APIs y microservicios', 'Serverless'],
  },
  {
    n: '02', slug: 'ia', image: imgIa, short: 'Inteligencia artificial y datos',
    alt: 'Esfera de red neuronal con núcleo de luz cian que representa la inteligencia artificial',
    title: 'Inteligencia artificial generativa y ciencia de datos',
    kicker: 'LLMs · Agentes · Machine learning',
    text: 'Creamos, entrenamos, ajustamos y desplegamos soluciones de IA generativa, modelos de lenguaje y agentes autónomos, junto con ingeniería de datos y analítica predictiva sobre grandes volúmenes de información.',
    tags: ['Fine-tuning', 'Agentes de IA', 'Deep learning', 'Visión artificial', 'NLP', 'Big data', 'Data lakes'],
  },
  {
    n: '03', slug: 'bi', image: imgBi, short: 'Inteligencia de negocios',
    alt: 'Monolitos de vidrio atravesados por un flujo de datos que representan la analítica de negocio',
    title: 'Inteligencia de negocios y analítica empresarial',
    kicker: 'Data warehousing · Dashboards · KPIs',
    text: 'Almacenes de datos, procesos ETL/ELT y modelado dimensional para tableros ejecutivos y reportes automáticos en tiempo real: analítica financiera, comercial y operativa para decidir con datos.',
    tags: ['Data warehousing', 'ETL / ELT', 'Modelado dimensional', 'Dashboards ejecutivos', 'Reportería en tiempo real', 'KPIs'],
  },
  {
    n: '04', slug: 'cloud', image: imgCloud, short: 'Infraestructura, cloud y hosting',
    alt: 'Plataformas de vidrio apiladas que representan la infraestructura cloud',
    title: 'Infraestructura digital, cloud y hosting',
    kicker: 'AWS · Azure · Google Cloud · Data centers',
    text: 'Operamos servidores físicos y virtuales, centros de datos y nube híbrida y multi-cloud, con hosting, reventa de hosting, servidores dedicados y VPS, dominios y redes de distribución de contenido.',
    tags: ['Multi-cloud', 'Nube híbrida', 'Data centers', 'Web hosting', 'VPS y dedicados', 'Dominios', 'CDN'],
  },
  {
    n: '05', slug: 'ciberseguridad', image: imgCiberseguridad, short: 'Ciberseguridad',
    alt: 'Núcleo de luz protegido dentro de esferas de cristal que representa la ciberseguridad',
    title: 'Ciberseguridad integral y protección de datos',
    kicker: 'Pentesting · SOC · Cumplimiento',
    text: 'Hacking ético, pruebas de penetración, análisis de vulnerabilidades, centros de operaciones de seguridad y respuesta ante incidentes, con gestión de identidades, criptografía y continuidad del negocio.',
    tags: ['Pentesting', 'SOC', 'Respuesta a incidentes', 'IAM', 'ISO 27001', 'GDPR · SOC 2', 'BCP · DRP'],
  },
  {
    n: '06', slug: 'consultoria', image: imgConsultoria, short: 'Consultoría IT y telecom',
    alt: 'Escalones de metal unidos por una ruta de luz hacia un prisma que representan la estrategia tecnológica',
    title: 'Consultoría IT, telecomunicaciones y tecnologías emergentes',
    kicker: 'Gobierno de TI · PMO · IoT · VR/AR',
    text: 'Transformación digital, auditoría de sistemas, gobierno de TI y gestión de proyectos tecnológicos, con redes, fibra óptica, Internet de las Cosas, automatización industrial, realidad virtual y aumentada.',
    tags: ['Transformación digital', 'Auditoría de sistemas', 'PMO', 'Arquitectura empresarial', 'Fibra óptica', 'IoT', 'VR · AR'],
  },
  {
    n: '07', slug: 'marketplaces', image: imgMarketplaces, short: 'Marketplaces y e-commerce',
    alt: 'Globo de vidrio con rutas de luz que conectan tiendas flotantes y representan el comercio global',
    title: 'Ecosistemas digitales, e-commerce y marketplaces',
    kicker: 'B2B · B2C · C2C · Transfronterizo',
    text: 'Diseñamos, lanzamos y escalamos marketplaces multivendedor que conectan compradores y vendedores de todo el mundo, con pasarelas de pago, billeteras digitales, custodia (escrow) y recomendaciones inteligentes.',
    tags: ['Multivendedor', 'Pasarelas de pago', 'Billeteras digitales', 'Escrow', 'Recomendación', 'Operación global'],
  },
  {
    n: '08', slug: 'hardware', image: imgHardware, short: 'Hardware y equipos',
    alt: 'Servidor rack, tarjeta gráfica y procesador iluminados en índigo y cian',
    title: 'Hardware y equipos tecnológicos',
    kicker: 'Venta · Importación · Leasing · Soporte',
    text: 'Compra, venta, importación, exportación, arrendamiento y soporte técnico de servidores, estaciones de trabajo, laptops, GPUs, equipos de red, videovigilancia, drones y periféricos.',
    tags: ['Servidores', 'Workstations', 'GPU y CPU', 'Redes y firewalls', 'Videovigilancia', 'Leasing tecnológico', 'Soporte técnico'],
  },
]

export const method = [
  { n: '01', title: 'Diagnóstico', text: 'Auditamos procesos, sistemas, datos y riesgos para saber dónde está el valor y qué se debe resolver primero.' },
  { n: '02', title: 'Arquitectura', text: 'Diseñamos la solución completa: software, datos, nube y seguridad, con un plan de proyecto medible.' },
  { n: '03', title: 'Construcción', text: 'Desarrollamos e integramos en ciclos cortos, con entregas visibles y pruebas desde el primer sprint.' },
  { n: '04', title: 'Operación', text: 'Desplegamos, monitoreamos y protegemos la plataforma, y la hacemos crecer con el negocio.' },
]

export const capabilities = [
  { title: 'Cloud', items: ['AWS', 'Microsoft Azure', 'Google Cloud', 'Nube propia'] },
  { title: 'Datos e IA', items: ['LLMs', 'Machine learning', 'Data lakes', 'ETL / ELT'] },
  { title: 'Seguridad', items: ['ISO 27001', 'GDPR', 'SOC 2', 'IAM'] },
  { title: 'Software', items: ['SaaS', 'Microservicios', 'Serverless', 'Apps móviles'] },
  { title: 'Redes', items: ['Fibra óptica', 'Inalámbricas', 'IoT', 'Domótica'] },
  { title: 'Negocio', items: ['ERP', 'CRM', 'BPM', 'RPA'] },
]

/**
 * Redes sociales. PROVISIONAL: los perfiles aún no existen, así que `url` es null y el ícono no enlaza a
 * ninguna parte (para no mandar a la gente a una cuenta ajena). Al crearlos, poner la URL de cada uno.
 */
export const socials: { name: 'LinkedIn' | 'Facebook' | 'Instagram' | 'X' | 'YouTube' | 'TikTok'; url: string | null }[] = [
  { name: 'LinkedIn', url: null },
  { name: 'Facebook', url: null },
  { name: 'Instagram', url: null },
  { name: 'X', url: null },
  { name: 'YouTube', url: null },
  { name: 'TikTok', url: null },
]

/**
 * Sedes. PROVISIONAL: las direcciones son de ejemplo (el usuario las cambiará). Por eso no se publican en los
 * datos estructurados de Google (components/json-ld.tsx).
 */
export const offices = [
  { city: 'Lima', address: 'Av. Javier Prado Este 1234, Of. 801, San Isidro, Lima', provisional: true },
  { city: 'Piura', address: 'Av. Grau 456, Of. 302, Piura', provisional: true },
  { city: 'Chiclayo', address: 'Av. José Balta 789, Of. 205, Chiclayo', provisional: true },
]

/**
 * Clientes y testimonios DE EJEMPLO (a pedido del usuario, que los reemplazará): las empresas y las personas son
 * ficticias y los logos se generaron con ChatGPT. No publicar así: publicar testimonios inventados como reales
 * puede ser publicidad engañosa. Usar solo clientes que autoricen su nombre, logo y testimonio.
 */
export const clients = {
  example: true,
  testimonials: [
    {
      year: '2026',
      title: 'Caso de éxito: comercio omnicanal',
      quote:
        'Con GIA unificamos el inventario de nuestras tiendas y del comercio electrónico en una sola plataforma en la nube. Hoy vemos el stock en tiempo real y atendemos mejor a nuestros clientes en todos los canales.',
      name: 'Lucía Paredes',
      role: 'Gerente de Tecnología',
      company: 'Andesur Retail',
      logo: logoAndesur,
    },
    {
      year: '2026',
      title: 'Caso de éxito: automatización de procesos',
      quote:
        'Automatizamos la facturación y el seguimiento de envíos con integraciones y robots de software. Nuestro equipo dejó de copiar datos a mano y ahora se dedica a atender a los clientes.',
      name: 'Jorge Salazar',
      role: 'Gerente de Operaciones',
      company: 'Puerto Brío Logística',
      logo: logoPuertoBrio,
    },
    {
      year: '2025',
      title: 'Caso de éxito: inteligencia de negocios',
      quote:
        'Los tableros que construyó GIA nos muestran la producción, los envíos y las ventas de cada campaña en un solo lugar. La gerencia ahora decide con datos y no con hojas de cálculo sueltas.',
      name: 'Carmen Ruiz',
      role: 'Directora Comercial',
      company: 'Agronorte Exportaciones',
      logo: logoAgronorte,
    },
    {
      year: '2025',
      title: 'Caso de éxito: ciberseguridad',
      quote:
        'GIA evaluó nuestra infraestructura, corrigió las vulnerabilidades críticas y hoy monitorea nuestros sistemas. Protegemos mejor la información de nuestros pacientes y cumplimos con la normativa.',
      name: 'Ricardo Mendoza',
      role: 'Director de Sistemas',
      company: 'Vértice Salud',
      logo: logoVerticeSalud,
    },
    {
      year: '2025',
      title: 'Caso de éxito: inteligencia artificial',
      quote:
        'Implementamos un asistente con inteligencia artificial que responde las consultas frecuentes de nuestros clientes a cualquier hora y deriva los casos complejos a un asesor.',
      name: 'Andrea Villanueva',
      role: 'Gerente de Experiencia del Cliente',
      company: 'Cumbre Capital',
      logo: logoCumbreCapital,
    },
    {
      year: '2024',
      title: 'Caso de éxito: cloud y continuidad',
      quote:
        'Migramos nuestros sistemas a una nube híbrida con un plan de recuperación ante desastres. Ganamos estabilidad en las operaciones de campo y tranquilidad para todo el equipo.',
      name: 'Miguel Torres',
      role: 'Jefe de Infraestructura TI',
      company: 'Altiplano Minerals',
      logo: logoAltiplano,
    },
  ],
}
