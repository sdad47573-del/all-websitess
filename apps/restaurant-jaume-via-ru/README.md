# Restaurant Jaume Via Ru · Vilobí del Penedès · Barcelona

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**Restaurant Jaume Via Ru** publica en su ficha de Google Maps (consultada el
18 de octubre de 2026).

## Datos de la ficha

- **Nombre:** Restaurant Jaume Via Ru · **Categorías:** Restaurante + Bar
- **Dirección:** Plaça de la Vila, s/n · 08735 Vilobí del Penedès (Barcelona)
- **Plus code:** 9MR7+2M Vilobí del Penedès · **Coords:** 41.390005, 1.6642269
- **Ficha:** `0x12a4718857bc3ccd:0x77726b8e905d7249` · `/g/12qf6frmk` ·
  reseñas `ChIJzTy8V4hxpBIRSXJdkI5rcnc`
- **Teléfono:** 690 03 79 72 (`tel:+34690037972`)
- **Web propia:** `https://sites.google.com/view/restaurant-jaume-via-ru/inici`
  (botón principal de la web)
- **Reservas:** la ficha no muestra sistema de reservas de Google → CTA a su web
  y al teléfono
- **Valoración:** 4,2/5 con 796 reseñas; la vista consultada no incluye extractos
  destacados, así que no se reproduce ninguna cita
- **Horario:** lunes cerrado; mar–jue 8:30–21:00; vie–sáb 8:30–22:00;
  dom 8:30–21:30
- **Accesibilidad:** acceso, aparcamiento, aseo y asientos adaptados
- **Fotos:** 10 de la portada de la galería de la ficha (`fetch-maps-photos`),
  sin autor → sin atribución

Lo que la ficha no publica no se inventa: sin descripción del titular, carta,
precios ni datos de envío. Todo vive en `src/data/site.ts`.

## Comandos

```bash
cd apps/restaurant-jaume-via-ru
bun install
bun run dev      # desarrollo
bun run build    # build estático
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
