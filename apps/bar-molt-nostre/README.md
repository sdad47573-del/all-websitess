# Bar Molt Nostre (Bar a la Societat de Castellví) · Castellví de la Marca · Barcelona

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**Bar Molt Nostre** publica en su ficha de Google Maps (consultada el 18 de octubre
de 2026).

## Datos de la ficha

- **Nombre:** Bar Molt Nostre (Bar a la Societat de Castellví) · **Categoría:** Bar restaurante
- **Dirección:** Barri Masets Cosins, 17, 08732 Castellví de la Marca, Barcelona
- **Plus code:** 8HMV+7F Castellví de la Marca (completo 8FH38HMV+7F) · **Coords:** 41.3331413, 1.5936786
- **Ficha:** `ChIJgbw7_Et1pBIRinu7rr_XHsE` · `/g/11thkv_80q`
- **Teléfono:** 640 53 20 25 (`tel:+34640532025`, reservas por whatsapp) · **Sin web propia**
- **Valoración:** 4,6/5 con 185 reseñas; 3 extractos literales (5, 4 y 5/5), sin firma
- **Horario:** lun–jue cerrado; vie–sáb 9:00–22:00; dom 9:00–17:00
- **Accesibilidad:** aparcamiento, aseo y asientos adaptados disponibles
- **Descripción:** comida casera catalana y uruguaya, terraza, llevar y menús de grupo (literal)
- **Fotos:** 10 de la portada de la galería (`fetch-maps-photos`), sin autor → sin atribución

Todo vive en `src/data/site.ts`.

## Comandos

```bash
cd apps/bar-molt-nostre
bun install
bun run dev
bun run build
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
