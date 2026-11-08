# Casa de las Flores Zamora

Web informativa de **Casa de las Flores Zamora**, diseñador de flores en la Avenida de Oporto,
30 (Carabanchel, 28019 Madrid).

Astro 7 + `@astro-config`. Sin JavaScript de cliente: todo es HTML estático.

## Datos de origen

Todos los datos del negocio viven en `src/data/site.ts` y salen de su ficha pública de
Google Maps, consultada el 17 de octubre de 2026:

- Nombre: Casa de las Flores Zamora
- Dirección: Av. de Oporto, 30, Carabanchel, 28019 Madrid
- Teléfono: 616 95 75 51
- Categoría: Diseñador de flores
- Valoración: 4,4 sobre 5 con 20 reseñas
- Plus code `97PG+5Q Madrid` y coordenadas `40.3854726, -3.7230632`
- Horario: de lunes a viernes 9:30–20:30; sábados y domingos 9:30–14:30

La ficha no publica web propia, descripción del titular, catálogo, precios ni accesibilidad,
así que la web no inventa nada de eso. Tampoco reproduce textos de reseñas: la vista previa
de la ficha no los incluye.

## Fotos

Las **10** imágenes de `src/assets/fotos/` se descargaron de la galería de la ficha con
`scripts/fetch-maps-photos.mjs`. `.maps-manifest.json` guarda el id, las dimensiones y el
autor de cada una para no volver a bajarlas al repetir el script. Todas son verticales, así
que la galería usa una retícula de cinco columnas (dos en móvil) con recorte 3:4.

Los textos alternativos describen lo que se ve en cada foto (escaparate, interior, ramos,
hierba seca); la ficha no publica pies, así que no se atribuye autoría.

## Comandos

```bash
bun install          # desde apps/casa-de-las-flores-zamora
bun run dev
bun run build        # /, /aviso-legal y sitemap
bun run preview
bun run typecheck    # tsc -p tsconfig.json --noEmit
```

Comprobación de contenido desde la raíz del monorepo:

```bash
node scripts/check-site-content.mjs casa-de-las-flores-zamora
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF y email de contacto). Mientras
  falten, el aviso legal muestra un bloque de advertencia y el script de contenido avisa.
- Confirmar con el titular el horario y que las fotos de Google Maps se pueden usar en su web.
- Sustituir el dominio en `astro.config.mjs` y en `public/robots.txt` por el real si cambia.
