# Restaurant la Cantineta · Sant Feliu de Llobregat · Barcelona

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**Restaurant la Cantineta** publica en su ficha de Google Maps (consultada el 18 de octubre
de 2026).

## Datos de la ficha

- **Nombre:** Restaurant la Cantineta · **Categoría:** Restaurante de cocina española
- **Dirección:** Carrer de Laureà Miró, 271, 08980 Sant Feliu de Llobregat, Barcelona
- **Plus code:** 92MR+5V Sant Feliu de Llobregat (completo 8FH392MR+5V) · **Coords:** 41.3829752, 2.0422233
- **Ficha:** `ChIJ6wKiqrSbpBIR7dHwF-RC_gM` · `/g/1tr2jn_z`
- **Teléfono:** 936 32 57 23 (`tel:+34936325723`) · **Sin web propia**
- **Valoración:** 4,6/5 con 187 reseñas; 2 extractos literales (4 y 5/5), sin firma
- **Horario:** sábado y domingo cerrado; lun–vie 7:00–16:30
- **Accesibilidad:** aseo y asientos adaptados disponibles; aparcamiento no disponible
- **Fotos:** 10 de la portada de la galería (`fetch-maps-photos`), sin autor → sin atribución

Todo vive en `src/data/site.ts`.

## Comandos

```bash
cd apps/restaurant-la-cantineta
bun install
bun run dev
bun run build
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
