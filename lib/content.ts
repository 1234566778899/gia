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
  { href: '/#servicios', label: 'Servicios' },
  { href: '/#metodo', label: 'Método' },
  { href: '/#capacidades', label: 'Capacidades' },
  { href: '/contacto', label: 'Contacto' },
]

export const marquee = [
  ['Inteligencia artificial', 'Cloud computing', 'Ciberseguridad', 'Business intelligence', 'Arquitectura web', 'Big data'],
  ['SaaS', 'LLMs', 'AWS', 'Azure', 'Google Cloud', 'ISO 27001', 'IoT', 'Marketplaces', 'RPA', 'Microservicios'],
]

export const manifesto =
  'Diseñamos, construimos, operamos y protegemos la tecnología de las organizaciones: del primer diagnóstico a la plataforma en producción, con datos que sirven para decidir y una infraestructura que no se detiene.'

export type Service = {
  n: string
  slug: string
  title: string
  kicker: string
  text: string
  tags: string[]
  image: string
  alt: string
}

export const services: Service[] = [
  {
    n: '01', slug: 'software', image: '/images/software.jpg',
    alt: 'Cubos modulares de vidrio y titanio que representan software y microservicios',
    title: 'Ingeniería de software y plataformas cloud',
    kicker: 'SaaS · PaaS · IaaS · Apps móviles',
    text: 'Software a medida, plataformas SaaS, PaaS e IaaS, aplicaciones móviles nativas e híbridas, y sistemas ERP, CRM, SCM y BPM para la transformación digital de organizaciones públicas y privadas.',
    tags: ['Arquitectura web avanzada', 'iOS y Android', 'ERP · CRM · SCM · BPM', 'RPA', 'No-code / low-code', 'APIs y microservicios', 'Serverless'],
  },
  {
    n: '02', slug: 'ia', image: '/images/ia.jpg',
    alt: 'Esfera de red neuronal con núcleo de luz cian que representa la inteligencia artificial',
    title: 'Inteligencia artificial generativa y ciencia de datos',
    kicker: 'LLMs · Agentes · Machine learning',
    text: 'Creamos, entrenamos, ajustamos y desplegamos soluciones de IA generativa, modelos de lenguaje y agentes autónomos, junto con ingeniería de datos y analítica predictiva sobre grandes volúmenes de información.',
    tags: ['Fine-tuning', 'Agentes de IA', 'Deep learning', 'Visión artificial', 'NLP', 'Big data', 'Data lakes'],
  },
  {
    n: '03', slug: 'bi', image: '/images/bi.jpg',
    alt: 'Monolitos de vidrio atravesados por un flujo de datos que representan la analítica de negocio',
    title: 'Inteligencia de negocios y analítica empresarial',
    kicker: 'Data warehousing · Dashboards · KPIs',
    text: 'Almacenes de datos, procesos ETL/ELT y modelado dimensional para tableros ejecutivos y reportes automáticos en tiempo real: analítica financiera, comercial y operativa para decidir con datos.',
    tags: ['Data warehousing', 'ETL / ELT', 'Modelado dimensional', 'Dashboards ejecutivos', 'Reportería en tiempo real', 'KPIs'],
  },
  {
    n: '04', slug: 'cloud', image: '/images/cloud.jpg',
    alt: 'Plataformas de vidrio apiladas que representan la infraestructura cloud',
    title: 'Infraestructura digital, cloud y hosting',
    kicker: 'AWS · Azure · Google Cloud · Data centers',
    text: 'Operamos servidores físicos y virtuales, centros de datos y nube híbrida y multi-cloud, con hosting, reventa de hosting, servidores dedicados y VPS, dominios y redes de distribución de contenido.',
    tags: ['Multi-cloud', 'Nube híbrida', 'Data centers', 'Web hosting', 'VPS y dedicados', 'Dominios', 'CDN'],
  },
  {
    n: '05', slug: 'ciberseguridad', image: '/images/ciberseguridad.jpg',
    alt: 'Núcleo de luz protegido dentro de esferas de cristal que representa la ciberseguridad',
    title: 'Ciberseguridad integral y protección de datos',
    kicker: 'Pentesting · SOC · Cumplimiento',
    text: 'Hacking ético, pruebas de penetración, análisis de vulnerabilidades, centros de operaciones de seguridad y respuesta ante incidentes, con gestión de identidades, criptografía y continuidad del negocio.',
    tags: ['Pentesting', 'SOC', 'Respuesta a incidentes', 'IAM', 'ISO 27001', 'GDPR · SOC 2', 'BCP · DRP'],
  },
  {
    n: '06', slug: 'consultoria', image: '/images/consultoria.jpg',
    alt: 'Escalones de metal unidos por una ruta de luz hacia un prisma que representan la estrategia tecnológica',
    title: 'Consultoría IT, telecomunicaciones y tecnologías emergentes',
    kicker: 'Gobierno de TI · PMO · IoT · VR/AR',
    text: 'Transformación digital, auditoría de sistemas, gobierno de TI y gestión de proyectos tecnológicos, con redes, fibra óptica, Internet de las Cosas, automatización industrial, realidad virtual y aumentada.',
    tags: ['Transformación digital', 'Auditoría de sistemas', 'PMO', 'Arquitectura empresarial', 'Fibra óptica', 'IoT', 'VR · AR'],
  },
  {
    n: '07', slug: 'marketplaces', image: '/images/marketplaces.jpg',
    alt: 'Globo de vidrio con rutas de luz que conectan tiendas flotantes y representan el comercio global',
    title: 'Ecosistemas digitales, e-commerce y marketplaces',
    kicker: 'B2B · B2C · C2C · Transfronterizo',
    text: 'Diseñamos, lanzamos y escalamos marketplaces multivendedor que conectan compradores y vendedores de todo el mundo, con pasarelas de pago, billeteras digitales, custodia (escrow) y recomendaciones inteligentes.',
    tags: ['Multivendedor', 'Pasarelas de pago', 'Billeteras digitales', 'Escrow', 'Recomendación', 'Operación global'],
  },
  {
    n: '08', slug: 'hardware', image: '/images/hardware.jpg',
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
