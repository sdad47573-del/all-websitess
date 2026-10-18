# Floristería Rosgaly Sant Antoni · Comte Borrell · Barcelona

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**Floristería Rosgaly Sant Antoni** publica en su ficha de Google Maps (consultada el 18 de octubre
de 2026).

## Datos de la ficha

- **Nombre:** Floristería Rosgaly Sant Antoni · **Categoría:** Floristería
- **Dirección:** Carrer del Comte Borrell, 32, Eixample, 08015 Barcelona
- **Plus code:** 95G7+PF Barcelona · **Coords:** 41.3768473, 2.1636647
- **Ficha:** `ChIJAS9ifgejpBIR6haBAg1h9fI` · `/g/11yf7qb_xn`
- **Teléfono:** 604 87 29 87 (`tel:+34604872987`) · **Web propia:** https://rosgaly.es/
- **Valoración:** 4,8/5 con 94 reseñas; destaca 3 extractos literales (5, 5 y 5/5),
  reproducidos tal cual y sin firma (el endpoint no trae el autor)
- **Horario:** todos los días en dos turnos, mañana (12:00–16:00, lunes desde las 10:00)
  y tarde de 17:00 a 21:00
- **Accesibilidad:** la ficha no publica ningún dato
- **Descripción del titular:** la ficha no publica ninguna
- **Fotos:** 10 de la portada de la galería de la ficha (`fetch-maps-photos`), sin autor → sin atribución

Lo que la ficha no publica no se inventa: sin catálogo ni precios. Todo vive en
`src/data/site.ts`.

## Comandos

```bash
cd apps/floristeria-rosgaly-sant-antoni
bun install
bun run dev      # desarrollo
bun run build    # build estático
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
