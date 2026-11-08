# La Florería de Carmen · Arroyo de San Lorenzo · Córdoba

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**La Florería de Carmen** publica en su ficha de Google Maps (consultada el 17 de octubre
de 2026).

## Datos de la ficha

- **Nombre:** La Florería de Carmen · **Categoría:** Floristería
- **Dirección:** Calle Arroyo de San Lorenzo, 1, Local, Centro, 14002 Córdoba
- **Plus code:** V6QJ+68 Córdoba · **Coords:** 37.8880404, -4.7692192
- **Ficha:** `ChIJt9Nf6UbfbA0RMQgOI0d-atM` · `/g/11xp230wt4`
- **Teléfono:** 664 35 45 40 (`tel:+34664354540`) · **Sin web propia**
- **Valoración:** 5/5 con 1 reseña (sin extractos literales en el endpoint)
- **Horario:** dos turnos lun–vie (10:30–14:00 y 17:30–20:30); sáb 10:30–14:00;
  dom cerrado
- **Accesibilidad:** la ficha no publica ningún dato
- **Descripción literal:** «En La Florería de Carmen realizamos todo tipo de decoración floral tanto en flor cortada como preservada. Servicio a domicilio»
- **Fotos:** 10 de la portada de la galería de la ficha (`fetch-maps-photos`), 1 apaisada
  y 9 verticales, sin autor → sin atribución

Lo que la ficha no publica no se inventa: sin catálogo ni precios. Todo vive en
`src/data/site.ts`.

## Comandos

```bash
cd apps/la-floreria-de-carmen
bun install
bun run dev      # desarrollo
bun run build    # build estático
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
