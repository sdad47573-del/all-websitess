# Ca l'Adán Restaurant · Sant Joan Despí · Barcelona

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**Ca l'Adán Restaurant** publica en su ficha de Google Maps (consultada el 18 de octubre
de 2026).

## Datos de la ficha

- **Nombre:** Ca l'Adán Restaurant · **Categorías:** Restaurante, catalana, familiar, mediterráneo, brasería, tapas
- **Dirección:** Carrer de Baltasar d'Espanya, 2, Local 1, 08970 Sant Joan Despí, Barcelona
- **Plus code:** 9373+MC Sant Joan Despí (completo 8FH49373+MC) · **Coords:** 41.3641835, 2.0536032
- **Ficha:** `ChIJEQjJL8ObpBIRFaCUC-S9CKU` · `/g/1vgn4wqw`
- **Teléfono:** 934 77 80 42 (`tel:+34934778042`) · **Sin web propia**
- **Valoración:** 4,5/5 con 708 reseñas; 3 extractos literales (5, 4 y 5/5), sin firma
- **Horario:** domingo cerrado; lun–jue 13:00–15:30; vie–sáb 13:00–15:30 y 20:30–23:00
- **Accesibilidad:** asientos y aseo adaptados disponibles; aparcamiento adaptado no disponible
- **Descripción:** brasería familiar con recetas caseras (literal de la ficha)
- **Fotos:** 10 de la portada de la galería (`fetch-maps-photos`), sin autor → sin atribución

Todo vive en `src/data/site.ts`.

## Comandos

```bash
cd apps/ca-l-adan-restaurant
bun install
bun run dev
bun run build
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
