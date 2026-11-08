# Floristería La Plata · Carrer de Ramon Turró · Barcelona

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**Floristería La Plata** publica en su ficha de Google Maps (consultada el 18 de octubre
de 2026).

## Datos de la ficha

- **Nombre:** Floristería La Plata · **Categoría:** Floristería
- **Dirección:** Carrer de Ramon Turró, 160, Sant Martí, 08005 Barcelona
- **Plus code:** 95WX+WW Barcelona · **Coords:** 41.3972513, 2.1997662
- **Ficha:** `0x12a4a31431c299ed:0xbb5e03890c7ac472` · `/g/11b73sg4ts`
- **Teléfono:** 600 59 28 72 (`tel:+34600592872`) · **Sin web propia**
- **Valoración:** 4,6/5 con 90 reseñas; destaca 3 extractos literales (5, 5 y 5/5),
  reproducidos tal cual y sin firma (el endpoint no trae el autor)
- **Horario:** mar–vie 11:00–20:00; sáb 11:00–14:00; dom 10:00–14:00; lun cerrado
- **Accesibilidad:** la ficha solo publica una entrada: no hay aparcamiento adaptado
  para sillas de ruedas
- **Descripción del titular:** la ficha no publica ninguna
- **Fotos:** 10 de la portada de la galería de la ficha (`fetch-maps-photos`), 2 panorámicas,
  4 apaisadas y 4 verticales, sin autor → sin atribución

Lo que la ficha no publica no se inventa: sin catálogo ni precios. Todo vive en
`src/data/site.ts`.

## Comandos

```bash
cd apps/floristeria-la-plata
bun install
bun run dev      # desarrollo
bun run build    # build estático
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
