# Floristeria Rehoboth · Carrer de Balmes · Barcelona

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**Floristeria Rehoboth. 利沛伯花艺店** publica en su ficha de Google Maps (consultada el 18 de
octubre de 2026).

## Datos de la ficha

- **Nombre:** Floristeria Rehoboth. 利沛伯花艺店 · **Categoría:** Floristería
- **Dirección:** Carrer de Balmes, 292, Sarrià-Sant Gervasi, 08006 Barcelona
- **Plus code:** C42W+QH Barcelona · **Coords:** 41.401953, 2.1464567
- **Ficha:** `0x12a4a2a03cc44e87:0x998aec6962fb63fc` · `/g/11t28cb7fs`
- **Teléfono:** 665 26 53 58 (`tel:+34665265358`) · **Sin web propia**
- **Valoración:** 4,8/5 con 33 reseñas; destaca 3 extractos literales (5, 5 y 5/5),
  reproducidos tal cual y sin firma (el endpoint no trae el autor)
- **Horario:** dom–vie 10:00–21:30; sáb 9:00–21:30 (abre todos los días)
- **Accesibilidad:** acceso para sillas de ruedas disponible; sin aparcamiento adaptado
- **Descripción del titular:** la ficha no publica ninguna
- **Fotos:** 10 de la portada de la galería de la ficha (`fetch-maps-photos`), 9 verticales
  y 1 apaisada, sin autor → sin atribución

Lo que la ficha no publica no se inventa: sin catálogo ni precios. Todo vive en
`src/data/site.ts`.

## Comandos

```bash
cd apps/floristeria-rehoboth
bun install
bun run dev      # desarrollo
bun run build    # build estático
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
