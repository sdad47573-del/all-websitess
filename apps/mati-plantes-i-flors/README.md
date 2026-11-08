# Mati, Plantes i Flors · Av. de Martí Pujol · Badalona

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**Mati, Plantes i Flors** publica en su ficha de Google Maps (consultada el 18 de octubre
de 2026).

## Datos de la ficha

- **Nombre:** Mati, Plantes i Flors · **Categoría:** Floristería
- **Dirección:** Av. de Martí Pujol, 619, 08917 Badalona (Barcelona)
- **Plus code:** F66Q+5P Badalona · **Coords:** 41.4604614, 2.2393589
- **Ficha:** `0x12a4bb9e1152a171:0xb5fb5e8b10161717` · `/g/11bwkbrtgn`
- **Teléfono:** 930 10 72 67 (`tel:+34930107267`) · **Sin web propia**
- **Valoración:** 4,7/5 con 95 reseñas; destaca 3 extractos literales (5, 5 y 5/5),
  reproducidos tal cual y sin firma (el endpoint no trae el autor)
- **Horario:** dos turnos mar–vie (9:00–13:30 y 17:00–20:00); sáb 9:00–13:30;
  dom 9:30–13:30; lun cerrado
- **Accesibilidad:** la ficha solo publica una entrada: no hay aparcamiento adaptado
  para sillas de ruedas
- **Descripción del titular:** la ficha no publica ninguna
- **Fotos:** 10 de la portada de la galería de la ficha (`fetch-maps-photos`), 6 apaisadas
  y 4 verticales, sin autor → sin atribución

Lo que la ficha no publica no se inventa: sin catálogo ni precios. Todo vive en
`src/data/site.ts`.

## Comandos

```bash
cd apps/mati-plantes-i-flors
bun install
bun run dev      # desarrollo
bun run build    # build estático
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
