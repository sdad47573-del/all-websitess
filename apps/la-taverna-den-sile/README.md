# La taverna d'en Silè · Sant Pere de Riudebitlles · Barcelona

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**La taverna d'en Silè** publica en su ficha de Google Maps (consultada el
18 de octubre de 2026).

## Datos de la ficha

- **Nombre:** La taverna d'en Silè · **Categorías:** Restaurante, Restaurante mediterráneo
- **Dirección:** Carrer de l'Hospital, 10 · 08776 Sant Pere de Riudebitlles (Barcelona)
- **Plus code:** FP32+GR Sant Pere de Riudebitlles (completo 8FH3FP32+GR) ·
  **Coords:** 41.4538192, 1.7020927
- **Ficha:** `0x12a46511331796bd:0xe8c246f702e50178` · `/g/11bv3xwlb7` ·
  reseñas `ChIJvZYXMxFlpBIReAHlAvdGwug`
- **Teléfono:** 653 30 90 00 (`tel:+34653309000`) · **Sin web propia**
- **Reservas:** la ficha no muestra ningún sistema de reservas online → llamar por teléfono
- **Valoración:** 4,7/5 con 529 reseñas; se reproducen literalmente tres de las
  reseñas destacadas (5, 5 y 5/5), sin nombre de autor (la vista previa solo publica el perfil)
- **Horario:** domingo y lunes cerrado; mar–jue 13:00–15:15;
  vie 13:00–15:15 y 20:30–22:30; sáb 13:30–15:30 y 20:30–22:30
- **Accesibilidad:** acceso, aseo y asientos adaptados; sin dato de aparcamiento
- **Fotos:** 10 de la portada de la galería de la ficha (`fetch-maps-photos`),
  sin autor → sin atribución

Lo que la ficha no publica no se inventa: sin descripción del titular, carta,
precios ni datos de envío. Todo vive en `src/data/site.ts`.

## Comandos

```bash
cd apps/la-taverna-den-sile
bun install
bun run dev      # desarrollo
bun run build    # build estático
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
