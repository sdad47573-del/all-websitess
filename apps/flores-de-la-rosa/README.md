# Flores de la Rosa

Web informativa de **Flores de la Rosa**, floristería en el Puente de Vallecas (28018 Madrid).

Astro 7 + `@astro-config`. Sin JavaScript de cliente: todo es HTML estático.

## Datos de origen

Todos los datos del negocio viven en `src/data/site.ts` y salen de su ficha pública de
Google Maps, consultada el 17 de octubre de 2026:

- Teléfono: 600 69 59 46
- Dirección de la ficha: Puente de Vallecas, 28018 Madrid (sin calle ni número publicados)
- Valoración: 4,1 sobre 5 con 15 reseñas
- Categoría: Floristería
- Plus code `98RW+V9 Madrid` y coordenadas `40.3921949, -3.6540397`
- Horario de los siete días, en los tramos que publica Google
- Descripción del titular, reproducida literalmente (con sus erratas)

La ficha no publica calle, número, web propia, catálogo, precios ni accesibilidad, así que
la web no inventa nada de eso. Tampoco reproduce textos de reseñas: la vista previa de la
ficha no los incluye.

## Fotos

Las **10** imágenes de `src/assets/fotos/` se descargaron de la galería de la ficha con
`scripts/fetch-maps-photos.mjs`. `.maps-manifest.json` guarda el id, las dimensiones y el
autor de cada una para no volver a bajarlas al repetir el script. La galería las recoge por
glob, así que una foto nueva en esa carpeta aparece sola.

## Comandos

```bash
bun install          # desde apps/flores-de-la-rosa
bun run dev
bun run build        # /, /aviso-legal y sitemap
bun run preview
bun run typecheck    # tsc -p tsconfig.json --noEmit
```

Comprobación de contenido desde la raíz del monorepo:

```bash
node scripts/check-site-content.mjs flores-de-la-rosa
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF y email de contacto). Mientras
  falten, el aviso legal muestra un bloque de advertencia y el script de contenido avisa.
- La ficha no publica la calle ni el número: confirmar el domicilio completo con el titular.
- Sustituir el dominio en `astro.config.mjs` y en `public/robots.txt` por el real.
- Confirmar con el titular que las fotos de Google Maps se pueden usar en su web.
