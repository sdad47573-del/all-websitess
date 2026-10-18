# Restaurant la Garnatxa · Avinyó Nou · Barcelona

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**Restaurant la Garnatxa** publica en su ficha de Google Maps (consultada el
18 de octubre de 2026).

## Datos de la ficha

- **Nombre:** Restaurant la Garnatxa · **Categorías:** Cocina catalana +
  mediterráneo
- **Dirección:** Carr. Barcelona, 49 · 08793 Avinyó Nou (Barcelona)
- **Plus code:** 9Q6G+G5 Avinyó Nou · **Coords:** 41.361317, 1.7753751
- **Ficha:** `0x12a4798cbd72d81d:0xa92bc1f41fd99c48` · `/g/1vl0bh3k` ·
  reseñas `ChIJHdhyvYx5pBIRSJzZH_TBK6k`
- **Teléfono:** 938 17 19 96 (`tel:+34938171996`) · **Sin web propia**
- **Reservas:** la ficha no muestra sistema de reservas online → CTA de llamada
- **Descripción del titular:** se reproduce literalmente en la portada (en catalán,
  tal como la publica el negocio)
- **Valoración:** 4,1/5 con 734 reseñas; se reproducen literalmente tres de las
  reseñas destacadas, con puntuaciones de 5, 4 y 1/5, sin nombre de autor (la vista
  previa solo publica el perfil)
- **Horario:** lunes cerrado; mar–jue 8:30–17:00; vie–sáb 8:30–23:30;
  dom 8:30–17:00
- **Accesibilidad:** acceso, aparcamiento, aseo y asientos adaptados
- **Fotos:** 10 de la portada de la galería de la ficha (`fetch-maps-photos`),
  sin autor → sin atribución

Lo que la ficha no publica no se inventa: sin carta, precios ni datos de envío.
Todo vive en `src/data/site.ts`.

## Comandos

```bash
cd apps/restaurant-la-garnatxa
bun install
bun run dev      # desarrollo
bun run build    # build estático
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
