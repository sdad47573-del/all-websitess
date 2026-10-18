# Restaurant El Barretet · Castellet · Barcelona

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**Restaurant El Barretet** publica en su ficha de Google Maps (consultada el
18 de octubre de 2026).

## Datos de la ficha

- **Nombre:** Restaurant El Barretet · **Categorías:** Restaurante, Restaurante mediterráneo
- **Dirección:** Carrer Nou, 17 · 08729 Castellet (Barcelona)
- **Plus code:** 7J6M+XH Castellet (completo 8FH37J6M+XH) ·
  **Coords:** 41.2624941, 1.6339087
- **Ficha:** `0x12a389d3ba163c41:0x49c1297948b2ae83` · `/g/11c3w062sz` ·
  reseñas `ChIJQTwWutOJoxIRg66ySHkpwUk`
- **Teléfono:** 931 02 22 69 (`tel:+34931022269`) · **Sin web propia**
- **Reservas:** la ficha no muestra ningún sistema de reservas online → llamar por teléfono
- **Distintivo:** «Brunch»
- **Valoración:** 4,0/5 con 3130 reseñas; se reproducen literalmente tres de las
  reseñas destacadas (4, 2 y 2/5), sin nombre de autor (la vista previa solo publica el perfil)
- **Horario:** lunes cerrado; mar–jue y dom 10:00–17:00; vie–sáb 10:00–22:00
- **Accesibilidad:** acceso, aparcamiento, aseo y asientos adaptados
- **Fotos:** 10 de la portada de la galería de la ficha (`fetch-maps-photos`),
  sin autor → sin atribución

Lo que la ficha no publica no se inventa: sin descripción del titular, carta,
precios ni datos de envío. Todo vive en `src/data/site.ts`.

## Comandos

```bash
cd apps/restaurant-el-barretet
bun install
bun run dev      # desarrollo
bun run build    # build estático
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
