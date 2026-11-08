# Floristeria Serrano des de 1971 · Carrer de Pablo Iglesias · Barcelona

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**Floristeria Serrano des de 1971** publica en su ficha de Google Maps (consultada el 18 de
octubre de 2026).

## Datos de la ficha

- **Nombre:** Floristeria Serrano des de 1971 · **Categoría:** Floristería
- **Dirección:** Carrer de Pablo Iglesias, 8, Nou Barris, 08016 Barcelona
- **Plus code:** C5RJ+W8 Barcelona · **Coords:** 41.442367, 2.1808611
- **Ficha:** `0x12a4bd1f171c09e7:0x8c36fc5721489950` · `/g/1tcwzp39`
- **Teléfono:** 933 54 44 30 (`tel:+34933544430`) · **Sin web propia**
- **Valoración:** 3,5/5 con 137 reseñas; destaca 3 extractos literales (5, 5 y 1/5),
  reproducidos tal cual y sin firma (el endpoint no trae el autor)
- **Horario:** la ficha no publica ninguno; la web lo dice tal cual y remite al teléfono
- **Accesibilidad:** la ficha solo publica una entrada: no hay aparcamiento adaptado
  para sillas de ruedas
- **Descripción del titular (literal):** «Floristería familiar creada en el año 1971»
- **Fotos:** 10 de la portada de la galería de la ficha (`fetch-maps-photos`), 6 apaisadas,
  3 verticales y 1 vista, sin autor → sin atribución

Lo que la ficha no publica no se inventa: sin horario, catálogo ni precios. Todo vive en
`src/data/site.ts`.

## Comandos

```bash
cd apps/floristeria-serrano
bun install
bun run dev      # desarrollo
bun run build    # build estático
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
