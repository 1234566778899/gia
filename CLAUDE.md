@AGENTS.md

# GIA Business & IT Consulting

Sitio de la empresa de tecnología de Grupo HEN (software, IA, BI, cloud, ciberseguridad, telecom/IoT,
marketplaces y hardware). Una sola página de portada más contacto, Libro de Reclamaciones y páginas legales.

- Repo: https://github.com/1234566778899/gia (público, rama `main`).
- Dominio previsto: `gia.grupohen.com` (definido en `site.url`, `lib/content.ts`). Aún no está en Vercel.
- Stack: Next.js 16 (App Router, Cache Components), Tailwind v4 y `motion`.
- Estilo (desde 2026-11-12): claro y sobrio, guiado por https://grupobusiness.it. Fondo blanco, paneles `bg-panel`
  (#f3f3f3), títulos `.section-title` (Exo, mayúsculas) con `.accent-bar`, texto en Montserrat, hero en carrusel
  a pantalla completa y pie gris con barra negra. Acento: índigo→cian del logo. Animación solo con `FadeIn`;
  el usuario pidió quitar lo recargado (texto gigante, cintas, tarjetas apiladas, scroll horizontal).
- **Nada de degradados** (el usuario los rechazó): colores planos, acento índigo `#3730a3` (`--color-brand`).
- Marca: logotipo «GIA» con el eslogan «BUSINESS & IT CONSULTING» debajo (`public/logo.png`), favicon con la G
  blanca sobre índigo y el ícono del Libro de Reclamaciones (`public/libro-reclamaciones.png`), todo generado con
  ChatGPT y limpiado con `sharp`. Las 4 propuestas originales están en `assets/logo-propuestas.png`.
  `<Logo />` (header): «GIA» (`public/logo-gia.png`) con el eslogan al lado en dos líneas como texto HTML, porque
  debajo y en imagen no se leía a ese tamaño;
  `<Logo variant="full" />` (con eslogan) va en el pie y en tamaños grandes.
- En el pie se mantiene el «GIA» gigante en contorno (al usuario le gustó). RUC y razón social no van en el pie;
  solo en la hoja del Libro de Reclamaciones y en las páginas legales, donde la ley los exige.

## Dónde está cada cosa

- Textos de la portada (carrusel, nosotros, soluciones) y SEO: `lib/content.ts`. Secciones: `components/home-sections.tsx`. Datos legales de la empresa: `lib/legal.ts`.
- Header, footer y aviso de cookies van en `app/layout.tsx` (compartidos por todas las páginas).
- Formularios: `app/actions.ts` (validación en el servidor) y `lib/delivery.ts` (envío, aún sin conectar).
- Imagen de redes: `app/opengraph-image.tsx` (usa `assets/`; rutas literales con `join(process.cwd(), 'assets', …)`
  para que Turbopack no empaquete todo el proyecto).

## Convenciones

- No inventar datos legales: lo que falte se escribe con `pending('…')` y el sitio lo muestra en ámbar.
- Las imágenes se generan con ChatGPT (modo Work, GPT-6 Astra) desde Claude in Chrome. ChatGPT bloquea
  peticiones a localhost: se descargan a `~/Downloads` y se mueven. En su caja de texto un salto de línea envía
  el mensaje, así que los prompts van en una sola línea.
- Capas con `-z-10` necesitan `isolate` en la sección, o quedan detrás del fondo del body.
- Un arreglo de elementos que pasa de un componente de servidor a uno de cliente necesita `key`.

## Pendiente antes de publicar

1. Datos legales en `lib/legal.ts`: razón social, RUC, domicilio fiscal, correo de contacto, correo para reclamos
   y datos personales, teléfono y código del banco de datos ante la ANPD.
2. Crear el proyecto en Vercel y, desde el Marketplace, instalar base de datos y correo para `lib/delivery.ts`.
   El Libro de Reclamaciones exige número correlativo, copia automática al correo del consumidor con fecha y hora
   (art. 4-B) y conservar las hojas 2 años (art. 12, D.S. 011-2011-PCM). Hasta entonces los formularios responden
   «el envío todavía no está activo».
3. Nombrar esos proveedores en la política de privacidad (sección «Destinatarios y transferencias»).
4. En Vercel, opcional: `NEXT_PUBLIC_GA_ID` (Analytics, solo si el visitante acepta cookies) y
   `GOOGLE_SITE_VERIFICATION` (Search Console).
5. DNS: el dominio `grupohen.com` ya usa los nameservers de Hosting SSD, así que el CNAME de `gia` se crea en el
   Zone Editor de su cPanel con el valor que indique Vercel.
6. Revisión de los textos legales por un abogado.
7. Redes sociales (`socials` en `lib/content.ts`): los perfiles aún no existen, `url: null` y el ícono no enlaza.
   Poner las URLs reales al crearlos y agregarlas como `sameAs` en `components/json-ld.tsx`.
8. Sedes (`offices` en `lib/content.ts`): Lima, Piura y Chiclayo son reales, pero las direcciones son inventadas
   (`provisional: true`) a pedido del usuario. Reemplazarlas; mientras sean provisionales no van a json-ld.
9. Clientes y testimonios (`clients` en `lib/content.ts`, sección `components/clients.tsx`, como la de
   grupobusiness.it): son DE EJEMPLO a pedido del usuario. Empresas y personas ficticias (Andesur, Puerto Brío,
   Agronorte, Vértice Salud, Cumbre Capital, Altiplano Minerals) con logos generados con ChatGPT en
   `public/clients/` (la imagen original está en `assets/clientes-ejemplo.png`). No publicar así: testimonios
   inventados presentados como reales pueden ser publicidad engañosa. Reemplazar por clientes que autoricen su
   nombre, logo y testimonio.
