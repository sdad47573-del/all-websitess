# Restaurant Cantallops · Cantallops · Barcelona

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**Restaurant Cantallops** publica en su ficha de Google Maps (consultada el
18 de octubre de 2026).

## Datos de la ficha

- **Nombre:** Restaurant Cantallops · **Categoría:** Restaurante de cocina catalana (única publicada)
- **Dirección:** Carrer Sta. Margarida, 34 · 08793 Cantallops (Barcelona)
- **Plus code:** 9Q9X+6F Cantallops (completo 8FH39Q9X+6F) ·
  **Coords:** 41.3680512, 1.7987402
- **Ficha:** `0x12a47d2b48f7a669:0xff0894098a886854` · `/g/11h5t64r04` ·
  reseñas `ChIJaab3SCt9pBIRVGiIigmUCP8`
- **Teléfono:** 938 97 01 85 (`tel:+34938970185`) · **Sin web propia**
- **Reservas:** la ficha no muestra ningún sistema de reservas online → llamar por teléfono
- **Descripción del titular:** a pie de la nacional 340, rodeado de viñedos; grupos y familias
  (copiada literalmente en la portada)
- **Distintivo:** «Brunch»
- **Valoración:** 4,3/5 con 488 reseñas; se reproducen literalmente tres de las
  reseñas destacadas (4, 5 y 5/5), sin nombre de autor (la vista previa solo publica el perfil)
- **Horario:** lunes cerrado; mar–dom 9:00–20:00
- **Accesibilidad:** acceso, aseo y asientos adaptados; sin dato de aparcamiento
- **Fotos:** 10 de la portada de la galería de la ficha (`fetch-maps-photos`),
  sin autor → sin atribución

Lo que la ficha no publica no se inventa: sin carta, precios ni datos de envío.
Todo vive en `src/data/site.ts`.

## Comandos

```bash
cd apps/restaurant-cantallops
bun install
bun run dev      # desarrollo
bun run build    # build estático
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
