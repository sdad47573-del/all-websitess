# Restaurant Casa Font de l'Alzina · Sant Llorenç d'Hortons · Barcelona

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**Restaurant Casa Font de l'Alzina** publica en su ficha de Google Maps (consultada el
18 de octubre de 2026).

## Datos de la ficha

- **Nombre:** Restaurant Casa Font de l'Alzina · **Categorías:** Restaurante de cocina catalana,
  Restaurante mediterráneo
- **Dirección:** Carrer Mestre Cugat, 17 · 08791 Sant Llorenç d'Hortons (Barcelona)
- **Plus code:** FR8G+22 Sant Llorenç d'Hortons (completo 8FH3FR8G+22) ·
  **Coords:** 41.4650307, 1.8250682
- **Ficha:** `0x12a462870f0a800b:0xf14c28d4e21f4d18` · `/g/1tg97tj5` ·
  reseñas `ChIJC4AKD4dipBIRGE0f4tQoTPE`
- **Teléfono:** 937 71 61 73 (`tel:+34937716173`) · **Sin web propia**
- **Reservas:** la ficha no muestra ningún sistema de reservas online → llamar por teléfono
- **Descripción del titular:** desayunos, brasa, menús entre semana, cenas de fin de semana,
  terraza y «Take away» (copiada literalmente en la portada)
- **Distintivo:** «Brunch»
- **Valoración:** 4,2/5 con 411 reseñas; se reproducen literalmente tres de las
  reseñas destacadas (4, 1 y 5/5), sin nombre de autor (la vista previa solo publica el perfil)
- **Horario:** lunes cerrado; mar–jue y dom 9:00–16:30; vie–sáb 9:00–16:30 y 20:30–23:00
- **Accesibilidad:** acceso, aparcamiento, aseo y asientos adaptados
- **Fotos:** 10 de la portada de la galería de la ficha (`fetch-maps-photos`),
  sin autor → sin atribución

Lo que la ficha no publica no se inventa: sin carta, precios ni datos de envío.
Todo vive en `src/data/site.ts`.

## Comandos

```bash
cd apps/restaurant-casa-font-de-lalzina
bun install
bun run dev      # desarrollo
bun run build    # build estático
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
