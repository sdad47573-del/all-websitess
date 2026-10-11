# Restaurante San Isidro

Web informativa no oficial de **Restaurante San Isidro**, cocina vasca en
**Mungialde Etorbidea, 25 · 48160 Derio (Bizkaia)**, teléfono 944 54 07 98.

- Astro 7 (`@astro-config`) y hoja de estilos propia en `src/styles/global.css`.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto).
- Datos en `src/data/site.ts`: ficha, contacto, valoración agregada, preguntas y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Fuentes públicas consultadas el **11 de octubre de 2026**:

| Dato                 | Valor                                          |
| -------------------- | ---------------------------------------------- |
| Nombre               | Restaurante San Isidro                         |
| Dirección            | Mungialde Etorbidea, 25 · 48160 Derio          |
| Teléfono             | +34 944 54 07 98                               |
| Coordenadas          | 43.2988835, -2.8859173                         |
| Valoración agregada  | 4,6 sobre 5 con unas 763 reseñas               |
| Cocina               | Vasca (menú y carta, precio medio ~30 €)       |
| Ficha Google Maps    | `0xd4e4588b803882f:0xbc876fcbdaffafea`         |

El horario semanal completo no figura en abierto, así que **no se inventa**:
la web indica que hay que confirmar por teléfono.

## Fotos: por qué no son de Google

Las fotos de la ficha de Google Maps pertenecen a sus autores y las
condiciones de Google prohíben descargarlas y republicarlas. Por eso esta web
usa **6 fotos de archivo (Unsplash)** en `src/assets/galeria/` y 3 en `src/assets/hero/`.

Para poner fotos reales del local:

1. Haz tus propias fotos (o pide permiso escrito al autor).
2. Guárdalas como `public/fotos/san-isidro-01.svg` … `san-isidro-06.svg`
   (o `.jpg` actualizando `src/pages/index.astro`).
3. Reconstruye: `bun run build`.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs restaurante-san-isidro
```

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo).
2. Confirmar el horario con el titular y añadir la tabla semanal si procede.
3. Sustituir las ilustraciones por fotos propias con permiso.
4. Si el dominio final cambia, actualizarlo en `src/data/site.ts`, `astro.config.mjs`,
   `public/robots.txt` y los canonical/OG de las dos páginas.

Fotos de portada: Unsplash, licencia de uso gratuita (https://unsplash.com/license). Son fotografías de archivo, no del local.
