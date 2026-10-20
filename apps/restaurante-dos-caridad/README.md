# Restaurante Dos Caridad

Web informativa de **Restaurante Dos Caridad**, en el **Cjón. Alto de las Cuevas, 2 · 11540 Sanlúcar de Barrameda** (Cádiz). Astro, Tailwind y DaisyUI, como el resto de webs del monorepo.

## Datos

- Verificado en la ficha pública de Google Maps (octubre de 2026): nombre, dirección,
  teléfono (651 56 08 35), categoría, horario, accesibilidad, valoración (3,9 con 196 reseñas),
  coordenadas y plus code.
- Especialidades tomadas de la descripción del propio titular: frituras, guisos de pescado,
  pescados de piedra a la pancha, retinto D.O., presa de bellota, hamburguesa de corvina y
  langostinos, albóndigas de choco y gambas.
- Horario: martes a sábado 11:30–16:30 y 19:30–23:30; domingo 11:30–16:30 y 20:00–24:00;
  lunes cerrado.
- No se publica carta ni precios: la ficha no los ofrece.
- Fotos: 10 imágenes descargadas de la galería con
  `node scripts/fetch-maps-photos.mjs restaurante-dos-caridad` y reducidas con
  `node scripts/optimize-source-images.mjs --max=1600 restaurante-dos-caridad`.
- `siteUrl` (`https://restaurante-dos-caridad.vercel.app`) es provisional.

## Comandos

```bash
bunx turbo run build --filter=restaurante-dos-caridad
bun run typecheck   # dentro de apps/restaurante-dos-caridad
node scripts/check-site-content.mjs restaurante-dos-caridad
```

## Crédito

El pie incluye «Creado por Sur Digital» con enlace a <https://sur-digital.vercel.app/>.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo).
2. Confirmar con el titular horario, festivos y disponibilidad de la carta.
3. Revisar las fotos publicadas y concretar sus `alt` si el titular aporta descripciones.
