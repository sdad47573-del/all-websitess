# Colom Restaurant · Ciutat Vella · Barcelona

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**Colom Restaurant** publica en su ficha de Google Maps (consultada el
17 de octubre de 2026).

## Datos de la ficha

- **Nombre:** Colom Restaurant · **Categorías:** Restaurante mediterráneo, marisquería,
  restaurante de cocina española y restaurante especializado en tapas
- **Dirección:** Carrer dels Escudellers, 33 · 08002 Barcelona (distrito de Ciutat Vella)
- **Plus code:** 95HG+WJ Barcelona (completo 8FH495HG+WJ) · **Coords:** 41.3798528, 2.1765
- **Ficha:** `0x12a4a257ced5616f:0x6146064f21d2deb1` · `/g/11cfjclkz` ·
  reseñas `ChIJb2HVzleipBIRsd7SIU8GRmE`
- **Teléfono:** 933 01 85 29 (`tel:+34933018529`) · **Sin web propia**
- **Resumen editorial de Google:** «Restaurante sencillo de cocina tradicional»
- **Valoración:** 4,7/5 con 37.554 reseñas; se reproducen literalmente tres de las
  reseñas destacadas, sin nombre de autor (la vista previa solo publica el perfil)
- **Horario:** todos los días de 12:30 a 24:00
- **Accesibilidad:** acceso, aseo y asientos adaptados disponibles; aparcamiento
  adaptado no disponible
- **Fotos:** 10 de la portada de la galería de la ficha (`fetch-maps-photos`),
  7 apaisadas y 3 verticales, sin autor → sin atribución

Lo que la ficha no publica no se inventa: sin descripción del titular, carta, precios
ni reservas. Todo vive en `src/data/site.ts`.

## Comandos

```bash
cd apps/colom-restaurant
bun install
bun run dev      # desarrollo
bun run build    # build estático
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
