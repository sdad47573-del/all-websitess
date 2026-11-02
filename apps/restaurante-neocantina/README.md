# Restaurante Neocantina · Ciudad Real

Web informativa del Restaurante Neocantina, en la avenida de las Lagunas de
Ruidera, 8, 13004 Ciudad Real.

- **Ficha de origen:** Google Maps, `38.9796759,-3.9266019`, feature
  `0xd6bc3916748021f:0xb719ee99ce3f4854`, CID `13193838927716239444`.
- **Datos contrastados:** avenida de las Lagunas de Ruidera, 8, 13004 Ciudad Real
  y teléfono 926 22 26 94, que coinciden en la ficha y en los directorios del
  local. Instagram `@neocantina` y página de Facebook «Neocantina Ciudad Real».
- **Horario:** los directorios coinciden en lunes cerrado y en servicio de
  mediodía y noche, pero no en los minutos exactos (12:00–17:00 y 20:00–23:45 en
  unos, hasta medianoche en otros). La web publica ese marco y remite al
  teléfono; no fija una tabla que no puede sostener.
- **Sin precios ni valoración de Google:** no se publica ninguna carta con
  importes ni se cita nota o número de reseñas, porque no hay fuente estable para
  ello. Los platos que se nombran son los que aparecen en el perfil público de
  Google y en los directorios.
- **Fotos:** imágenes del perfil del local descargadas con
  `node scripts/fetch-maps-photos.mjs restaurante-neocantina` (manifiesto en
  `src/assets/fotos/.maps-manifest.json`).

## Comandos

```bash
bun run --filter restaurante-neocantina dev
bun run --filter restaurante-neocantina build
bun run --filter restaurante-neocantina typecheck
node scripts/check-site-content.mjs restaurante-neocantina
```

El dominio previsto es `https://restaurante-neocantina.vercel.app/`. El pie de
página acredita a Sur Digital → https://sur-digital.vercel.app/.
