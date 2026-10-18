# Restaurante El Tapes de Valldoreix · Sant Cugat del Vallès · Barcelona

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**Restaurante El Tapes de Valldoreix** publica en su ficha de Google Maps
(consultada el 18 de octubre de 2026).

## Datos de la ficha

- **Nombre:** Restaurante El Tapes de Valldoreix · **Categorías:** Restaurante +
  mediterráneo + tapas
- **Dirección:** Rambla Mossèn Jacint Verdaguer, 55 · 08197 Sant Cugat del Vallès
  (Barcelona)
- **Plus code:** F356+7F Sant Cugat del Vallès · **Coords:** 41.4581961, 2.0612166
- **Ficha:** `0x12a490d6af23673f:0x99f299e432153bd6` · `/g/11c1wwkz1r` ·
  reseñas `ChIJP2cjr9aQpBIR1jsVMuSZ8pk`
- **Teléfono:** 936 75 20 40 (`tel:+34936752040`) · **Sin web propia**
- **Reservas:** la ficha muestra la acción «Reservar una mesa» →
  `https://www.google.com/maps/reserve/v/dine/c/mJF2A3MFV7k`
- **Valoración:** 4,2/5 con 393 reseñas; se reproducen literalmente dos de las
  reseñas destacadas, ambas de 4/5, sin nombre de autor (la vista previa solo
  publica el perfil)
- **Horario:** lunes a viernes 8:00–23:30; sábado y domingo cerrado
- **Accesibilidad:** acceso, aseo y asientos adaptados; sin dato de aparcamiento
- **Fotos:** 10 de la portada de la galería de la ficha (`fetch-maps-photos`),
  sin autor → sin atribución

Lo que la ficha no publica no se inventa: sin descripción del titular, carta,
precios ni datos de envío. Todo vive en `src/data/site.ts`.

## Comandos

```bash
cd apps/restaurante-el-tapes-de-valldoreix
bun install
bun run dev      # desarrollo
bun run build    # build estático
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
