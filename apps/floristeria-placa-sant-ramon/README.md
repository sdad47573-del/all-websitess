# Floristeria Plaça Sant Ramon · Plaça de Sant Ramon · Cerdanyola del Vallès

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**Floristeria Plaça Sant Ramon** publica en su ficha de Google Maps (consultada el 18 de octubre
de 2026).

## Datos de la ficha

- **Nombre:** Floristeria Plaça Sant Ramon · **Categoría:** Floristería
- **Dirección:** Plaça de Sant Ramon, 13, 08290 Cerdanyola del Vallès (Barcelona)
- **Plus code:** F4QP+MH Cerdanyola del Vallès · **Coords:** 41.4891572, 2.1364354
- **Ficha:** `0x12a4961a8ad721ed:0xf612aebe2a2c8219` · `/g/1xnz1w27`
- **Teléfono:** 936 92 79 71 (`tel:+34936927971`) · **Sin web propia**
- **Valoración:** 4,4/5 con 54 reseñas; destaca 3 extractos literales (5, 5 y 4/5),
  reproducidos tal cual y sin firma (el endpoint no trae el autor)
- **Horario:** dos turnos lun–vie (9:30–13:30 y 17:00–20:30); sáb 10:00–13:30;
  dom 10:00–14:00
- **Accesibilidad:** la ficha solo publica una entrada: no hay aparcamiento adaptado
  para sillas de ruedas
- **Descripción del titular:** la ficha no publica ninguna
- **Fotos:** 10 de la portada de la galería de la ficha (`fetch-maps-photos`), 2 cuadradas,
  1 apaisada y 7 verticales, sin autor → sin atribución

Lo que la ficha no publica no se inventa: sin catálogo ni precios. Todo vive en
`src/data/site.ts`.

## Comandos

```bash
cd apps/floristeria-placa-sant-ramon
bun install
bun run dev      # desarrollo
bun run build    # build estático
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
