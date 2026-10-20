# Restaurante El Gato (Chipiona)

Web informativa de **Restaurante El Gato**, restaurante, bar y cafetería en la **C. Pez Espada, 9 · 11550 Chipiona** (Cádiz). Astro, Tailwind y DaisyUI, como el resto de webs del monorepo.

> No confundir con `apps/restaurante-el-gato`, que es otro local del mismo nombre en Cartagena.

## Datos

- Verificado en la ficha pública de Google Maps (octubre de 2026): nombre, dirección,
  teléfono (664 87 71 25), categorías (restaurante, bar y cafetería), horario, accesibilidad,
  valoración (4,0 con 920 reseñas), coordenadas y plus code.
- La descripción de la casa sale del texto que publica el propio titular en su ficha
  (`merchantdescription`): más de medio siglo, guisos de la zona, pescados, jamón de bellota,
  desayunos de cachito y vino de barril, además del museo fotográfico.
- No se publica carta ni precios: la ficha no los ofrece.
- Fotos: 10 imágenes descargadas de la galería con
  `node scripts/fetch-maps-photos.mjs restaurante-el-gato-chipiona` y reducidas con
  `node scripts/optimize-source-images.mjs --max=1600 restaurante-el-gato-chipiona`.
- `siteUrl` (`https://restaurante-el-gato-chipiona.vercel.app`) es provisional.

## Comandos

```bash
bunx turbo run build --filter=restaurante-el-gato-chipiona
bun run typecheck   # dentro de apps/restaurante-el-gato-chipiona
node scripts/check-site-content.mjs restaurante-el-gato-chipiona
```

## Crédito

El pie incluye «Creado por Sur Digital» con enlace a <https://sur-digital.vercel.app/>.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo).
2. Confirmar con el titular horario y festivos, y la visita al museo.
3. Revisar las fotos publicadas y concretar sus `alt` si el titular aporta descripciones.
