# Restaurant Can Lluís · Sant Boi de Llobregat · Barcelona

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**Restaurant Can Lluís** publica en su ficha de Google Maps (consultada el
18 de octubre de 2026).

## Datos de la ficha

- **Nombre:** Restaurant Can Lluís · **Categorías:** Cocina catalana +
  mediterráneo + restaurante
- **Dirección:** Ronda de Sant Ramon, 179 · 08830 Sant Boi de Llobregat (Barcelona)
- **Plus code:** 82MR+QH Sant Boi de Llobregat · **Coords:** 41.3344281, 2.0414378
- **Ficha:** `0x12a49c718d6d058d:0xe64f05b04197f3d1` · `/g/1tdhwwmp` ·
  reseñas `ChIJjQVtjXGcpBIR0fOXQbAFT-Y`
- **Teléfono:** 632 80 34 56 (`tel:+34632803456`) · **Sin web propia**
- **Reservas:** la ficha no muestra sistema de reservas online → CTA de llamada
- **Valoración:** 4,2/5 con 533 reseñas; se reproducen literalmente tres de las
  reseñas destacadas, con puntuaciones de 5, 1 y 5/5, sin nombre de autor (la vista
  previa solo publica el perfil)
- **Horario:** lunes a sábado 8:00–22:00; domingo 8:00–20:00
- **Accesibilidad:** acceso, aparcamiento y asientos adaptados; sin dato de aseo
- **Fotos:** 10 de la portada de la galería de la ficha (`fetch-maps-photos`),
  sin autor → sin atribución

Lo que la ficha no publica no se inventa: sin descripción del titular, carta,
precios ni datos de envío. Todo vive en `src/data/site.ts`.

## Comandos

```bash
cd apps/restaurant-can-lluis
bun install
bun run dev      # desarrollo
bun run build    # build estático
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
