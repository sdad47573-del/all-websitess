# Floristería Sorigarden · Virgen de Fátima · Los Rosales

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**Floristería Sorigarden** publica en su ficha de Google Maps (consultada el
17 de octubre de 2026).

## Datos de la ficha

- **Nombre:** Floristería Sorigarden · **Categoría:** Floristería
- **Dirección:** Calle Virgen de Fátima, 1d (sin distrito publicado),
  41330 Los Rosales (Sevilla)
- **Plus code:** H7Q9+XV Los Rosales (completo 8C9PH7Q9+XV) · **Coords:** 37.5898899, -5.73036
- **Ficha:** `ChIJd7OfVRhZEg0RmTKVYylUpws` · `/g/11m6kc07cg`
- **Teléfono:** 652 56 51 20 (`tel:+34652565120`) · **Sin web propia**
- **Valoración:** 5/5 con 1 reseña; la vista previa no incluía el texto,
  así que no se reproduce ningún extracto (solo la nota con el recuento y el enlace)
- **Horario:** dos turnos lun–vie (10:00–14:00 y 17:30–20:00); sáb 10:00–14:00;
  dom cerrado
- **Accesibilidad:** la ficha no publica datos de accesibilidad
- **Descripción:** la ficha no publica descripción del titular.
- **Fotos:** 10 de la portada de la galería de la ficha (`fetch-maps-photos`), 1 apaisada
  y 9 verticales, sin autor → sin atribución

Lo que la ficha no publica no se inventa: sin extractos, descripción, catálogo ni precios.
Todo vive en `src/data/site.ts`.

## Comandos

```bash
cd apps/sorigarden
bun install
bun run dev      # desarrollo
bun run build    # build estático
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
