# GIA Business & IT Consulting

Sitio de la empresa de tecnología de Grupo HEN (subdominio previsto: `gia.grupohen.com`).

- Next.js 16 (App Router) + Tailwind CSS v4
- Animaciones: `motion` (apariciones suaves y carrusel del inicio)
- Estilo claro y sobrio guiado por https://grupobusiness.it, sin degradados.
- Imágenes generadas con ChatGPT (`public/images/*.jpg`).

## Desarrollo

```bash
npm run dev
```

## Contenido

Todos los textos están en `lib/content.ts`. El botón de contacto lleva al formulario de grupohen.com hasta que GIA tenga correo propio.

## Logo e íconos

- `public/logo.png`: logotipo «GIA» con el eslogan «Business & IT Consulting» debajo, en colores planos, generado con ChatGPT y limpiado con `sharp`.
- `app/favicon.ico` (16, 32, 48 px), `app/icon.png`, `app/apple-icon.png`, `public/icon-192.png` y `public/icon-512.png`: la G blanca sobre índigo.
- `public/libro-reclamaciones.png`: ícono del Libro de Reclamaciones.
- `assets/logo-propuestas.png`: las 4 propuestas originales de ChatGPT.

## SEO

- Metadatos completos en `app/layout.tsx` (título, descripción, palabras clave, canonical, Open Graph, Twitter y robots).
- Imagen para redes generada en `app/opengraph-image.tsx` (1200×630).
- `robots.txt`, `sitemap.xml` (con imágenes) y `manifest.webmanifest`.
- Datos estructurados schema.org (Organization + ProfessionalService con los 8 servicios, y WebSite) en `components/json-ld.tsx`.

Variables opcionales en Vercel (Production):

| Variable | Para qué |
|---|---|
| `NEXT_PUBLIC_GA_ID` | ID de Google Analytics 4 (`G-…`). Sin ella no se carga Analytics. |
| `GOOGLE_SITE_VERIFICATION` | Código de verificación de Google Search Console (método «etiqueta HTML»). |

Si el subdominio final no es `gia.grupohen.com`, cambia `site.url` en `lib/content.ts`.

## Páginas

| Ruta | Contenido |
|---|---|
| `/` | Portada |
| `/contacto` | Formulario de contacto y datos de la empresa |
| `/libro-de-reclamaciones` | Hoja de Reclamación virtual (D.S. 011-2011-PCM, mod. D.S. 101-2022-PCM) |
| `/politica-de-privacidad` | Ley 29733 de Protección de Datos Personales |
| `/terminos-y-condiciones` | Condiciones de uso del sitio |
| `/politica-de-cookies` | Cookies y su configuración (aviso de consentimiento en todo el sitio) |

## Pendiente antes de publicar

1. **Datos legales** en `lib/legal.ts`: razón social, RUC, domicilio fiscal, correo de contacto, correo para reclamos y datos personales, teléfono y código del banco de datos ante la ANPD. Mientras falten se ven resaltados en ámbar en el sitio.
2. **Envío de formularios** en `lib/delivery.ts`: al crear el proyecto en Vercel, instalar desde el Marketplace una base de datos (numeración correlativa y conservación 2 años de las hojas de reclamación) y un proveedor de correo (copia automática al consumidor y aviso a GIA). Hasta entonces los formularios validan, pero avisan que el envío no está activo.
3. Nombrar a esos proveedores en la política de privacidad (sección «Destinatarios y transferencias»).
4. Revisión de los textos legales por un abogado.
