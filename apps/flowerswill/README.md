# Flowerswill · Carrer de Laforja · Barcelona

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**Flowerswill** publica en su ficha de Google Maps (consultada el 18 de octubre
de 2026).

## Datos de la ficha

- **Nombre:** Flowerswill · **Categoría:** Floristería
- **Dirección:** Carrer de Laforja, 25, Sarrià-Sant Gervasi, 08006 Barcelona
- **Plus code:** 94XX+FM Barcelona · **Coords:** 41.3986631, 2.1492232
- **Ficha:** `0x12a4a29ed871bd6b:0xc87f0259df01dbfa` · `/g/11bwnd18vt`
- **Teléfono:** 655 47 63 69 (`tel:+34655476369`)
- **Web propia:** http://www.flowerswill.com/ (se enlaza como web oficial)
- **Valoración:** 4,4/5 con 53 reseñas; destaca 3 extractos literales (5, 5 y 5/5),
  reproducidos tal cual y sin firma (el endpoint no trae el autor)
- **Horario:** la ficha no publica ninguno; la web lo dice tal cual y remite al teléfono
- **Accesibilidad:** la ficha solo publica una entrada: no hay aparcamiento adaptado
  para sillas de ruedas
- **Descripción del titular (literal, en inglés):** «Sending flowers from far and wide to
  the nice people of Barcelona City… projects@flowerswill.com»
- **Fotos:** 10 de la portada de la galería de la ficha (`fetch-maps-photos`), 6 verticales
  y 4 apaisadas, sin autor → sin atribución

Lo que la ficha no publica no se inventa: sin horario, catálogo ni precios. Todo vive en
`src/data/site.ts`.

## Comandos

```bash
cd apps/flowerswill
bun install
bun run dev      # desarrollo
bun run build    # build estático
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
