# Talleres Caldado

Landing estática en Astro para Talleres Caldado, en avenida Carlos Haya, Málaga.

## Desarrollo

Desde la raíz del monorepo:

```bash
bun install
cd apps/talleres-caldado
bun run dev
bun run test
bun run check
bun run typecheck
bun run build
```

## Datos y SEO local

- Nombre, dirección (Avda. Carlos Haya, 163, 29010 Málaga), teléfono (+34 952 30 68 10), correo y coordenadas se basan en la ficha pública de EuroTaller y el enlace de Google Maps.
- JSON-LD `AutoRepair` solo contiene los datos de negocio y ubicación; no añade horarios, reseñas, valoraciones ni lista de servicios.
- Dominio provisional: `https://talleres-caldado.vercel.app`. Actualizar `astro.config.mjs`, `src/lib/business.ts` y `public/robots.txt` al recibir el dominio definitivo.

## Imagen

La portada usa la URL `lh3.googleusercontent.com` de la fotografía enlazada por el usuario en Google Maps. Google puede cambiar o retirar esta URL; revisarla antes de publicar. Se enlaza a la ficha pública para ver el resto de las fotos. No se han copiado otras fotos de usuarios.

Además, la sección «Fotos de la ficha de Google Maps» sirve las fotos descargadas a `src/assets/fotos/` (el componente `Galeria.astro` las toma con un `import.meta.glob`, así que basta con añadir y quitar archivos de esa carpeta). Ahora mismo solo queda `talleres-caldado-apaisada-01.jpg`: la foto vertical que había (`talleres-caldado-vertical-02.jpg`) **se retiró porque mostraba una piscina**, no el taller. Su entrada sigue en `.maps-manifest.json` con una nota, para que `scripts/fetch-maps-photos.mjs` no la vuelva a descargar.

Confirmar con el titular permiso de reutilización de la fotografía antes de publicar.
