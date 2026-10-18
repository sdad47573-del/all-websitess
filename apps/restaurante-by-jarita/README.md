# Restaurante By Jarita | Cornellà de Llobregat · Cornellà · Barcelona

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**Restaurante By Jarita | Cornellà de Llobregat** publica en su ficha de Google Maps
(consultada el 18 de octubre de 2026).

## Datos de la ficha

- **Nombre:** Restaurante By Jarita | Cornellà de Llobregat · **Categorías:** Bar restaurante,
  Restaurante mediterráneo, Restaurante especializado en tapas
- **Dirección:** Carrer de la Miranda, 72 · 08940 Cornellà de Llobregat (Barcelona)
- **Plus code:** 935H+QW Cornellà de Llobregat (completo 8FH4935H+QW) ·
  **Coords:** 41.3594246, 2.0798435
- **Ficha:** `0x12a49943b4485e01:0x9617f05cda1a45bd` · `/g/11bc8dzbcr` ·
  reseñas `ChIJAV5ItEOZpBIRvUUa2lzwF5Y`
- **Teléfono:** 629 13 75 92 (`tel:+34629137592`) · **Sin web propia**
- **Reservas:** la ficha no muestra ningún sistema de reservas online → llamar por teléfono
- **Valoración:** 4,4/5 con 1001 reseñas; se reproducen literalmente tres de las
  reseñas destacadas (5, 5 y 4/5), sin nombre de autor (la vista previa solo publica el perfil)
- **Horario:** lunes cerrado; mar–jue y dom 13:00–16:00; vie–sáb 13:00–16:00 y 20:00–24:00
- **Accesibilidad:** acceso, aseo, asientos y aparcamiento adaptados
- **Fotos:** 10 de la portada de la galería de la ficha (`fetch-maps-photos`),
  sin autor → sin atribución

Lo que la ficha no publica no se inventa: sin descripción del titular, carta,
precios ni datos de envío. Todo vive en `src/data/site.ts`.

## Comandos

```bash
cd apps/restaurante-by-jarita
bun install
bun run dev      # desarrollo
bun run build    # build estático
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
