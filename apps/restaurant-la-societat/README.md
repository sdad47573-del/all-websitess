# Restaurant la Societat · La Múnia · Barcelona

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**Restaurant la Societat** publica en su ficha de Google Maps (consultada el
18 de octubre de 2026).

## Datos de la ficha

- **Nombre:** Restaurant la Societat · **Categoría:** Restaurante (única publicada)
- **Dirección:** Av. de Catalunya, 16 · 08732 La Múnia (Barcelona)
- **Plus code:** 8JG9+H3 La Múnia · **Coords:** 41.3264453, 1.6177064
- **Ficha:** `0x12a476eb33c7814d:0x399fd2476f393249` · `/g/1w6043cx` ·
  reseñas `ChIJTYHHM-t2pBIRSTI5b0fSnzk`
- **Teléfono:** 938 91 83 95 (`tel:+34938918395`) · **Sin web propia**
- **Reservas:** la ficha no muestra sistema de reservas online → CTA de llamada
- **Valoración:** 3,9/5 con 628 reseñas; se reproducen literalmente tres de las
  reseñas destacadas, con puntuaciones de 5, 4 y 4/5, sin nombre de autor (la vista
  previa solo publica el perfil)
- **Horario:** lunes a miércoles 8:00–24:00; jueves y viernes 8:30–24:00;
  sábado y domingo 8:00–24:00
- **Accesibilidad:** acceso, aparcamiento, aseo y asientos adaptados
- **Fotos:** 10 de la portada de la galería de la ficha (`fetch-maps-photos`),
  sin autor → sin atribución

Lo que la ficha no publica no se inventa: sin descripción del titular, carta,
precios ni datos de envío. Todo vive en `src/data/site.ts`.

## Comandos

```bash
cd apps/restaurant-la-societat
bun install
bun run dev      # desarrollo
bun run build    # build estático
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
