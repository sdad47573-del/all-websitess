# Restaurant Rincón de la Tortilla · Gavà · Barcelona

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**Restaurant Rincón de la Tortilla** publica en su ficha de Google Maps
(consultada el 18 de octubre de 2026).

## Datos de la ficha

- **Nombre:** Restaurant Rincón de la Tortilla · **Categoría:** Restaurante de
  cocina española (única publicada)
- **Dirección:** Carrer d'Artur Costa, 51 · 08850 Gavà (Barcelona)
- **Plus code:** 8234+7C Gavà · **Coords:** 41.3032445, 2.0060296
- **Ficha:** `0x12a49d20712a2d4f:0x6af3749a71bf1f92` · `/g/1tnfv__t` ·
  reseñas `ChIJTy0qcSCdpBIRkh-_cZp082o`
- **Teléfono:** 635 73 52 77 (`tel:+34635735277`) · **Sin web propia**
- **Reservas:** la ficha no muestra sistema de reservas online → CTA de llamada
- **Valoración:** 4,3/5 con 160 reseñas; se reproducen literalmente dos de las
  reseñas destacadas, ambas de 4/5, sin nombre de autor (la vista previa solo
  publica el perfil)
- **Horario:** lunes a viernes 7:00–23:00; sábado y domingo 8:00–23:00
- **Accesibilidad:** aparcamiento adaptado; sin dato de acceso, aseo ni asientos
- **Fotos:** 10 de la portada de la galería de la ficha (`fetch-maps-photos`),
  sin autor → sin atribución

Lo que la ficha no publica no se inventa: sin descripción del titular, carta,
precios ni datos de envío. Todo vive en `src/data/site.ts`.

## Comandos

```bash
cd apps/restaurant-rincon-de-la-tortilla
bun install
bun run dev      # desarrollo
bun run build    # build estático
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
