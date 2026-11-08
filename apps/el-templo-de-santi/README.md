# El Templo de Santi

Landing page estática en Astro para el bar cafetería El Templo de Santi, en Teatinos (Málaga).

## Desarrollo

Desde la raíz del monorepo:

```bash
bun install
cd apps/el-templo-de-santi
bun run dev
bun run check
bun run typecheck
bun run build
```

## SEO y contenido

- Metadatos locales, canonical provisional, Open Graph/Twitter, sitemap y `robots.txt`.
- Datos estructurados JSON-LD `Restaurant` con dirección, teléfono, coordenadas, Instagram y ficha de Google Maps.
- La información pública disponible describe comida casera y saludable, desayunos, menús y un espacio pet friendly; la web evita inventar precios, horarios o carta vigente.
- Hay información pública contradictoria sobre el estado y horario actual, por lo que se pide confirmar antes de desplazarse.
- Google Maps redirigió al consentimiento en el entorno de desarrollo y no permitió recuperar su galería. La página enlaza a las fotos originales; las ilustraciones CSS están identificadas claramente y no se presentan como fotografías del establecimiento.

## Antes de publicar

1. Cambiar `https://el-templo-de-santi.vercel.app` por el dominio definitivo en `astro.config.mjs`, canonical, JSON-LD, Open Graph y `public/robots.txt`.
2. Confirmar directamente con el local el estado, horario, carta y disponibilidad actual.
3. Para mostrar fotos de Maps dentro de la web, proporcionar archivos autorizados o acceso a fotos descargables; añadirlas optimizadas con textos `alt` descriptivos y reemplazar las ilustraciones.
