# Floristeria Mis Magallón · Mercat de la Concepció · Barcelona

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**Floristeria Mis Magallón** publica en su ficha de Google Maps (consultada el 18 de octubre
de 2026).

## Datos de la ficha

- **Nombre:** Floristeria Mis Magallón · **Categoría:** Floristería
- **Dirección:** Mercat de la Concepció, Carrer d'Aragó, 2E, 313-317, Eixample, 08009 Barcelona
- **Plus code:** 95W9+C7 Barcelona · **Coords:** 41.3961205, 2.1681448
- **Ficha:** `ChIJo3RIic6jpBIRGsyhlGMQkjQ` · `/g/11qb0yby9j`
- **Teléfono:** 934 58 75 67 (`tel:+34934587567`) · **Sin web propia**
- **Valoración:** 4,1/5 con 65 reseñas; destaca 3 extractos literales (5, 5 y 4/5),
  reproducidos tal cual y sin firma (el endpoint no trae el autor)
- **Horario:** abierta las 24 horas, todos los días
- **Accesibilidad:** acceso disponible; sin aparcamiento adaptado
- **Descripción del titular:** la ficha no publica ninguna
- **Fotos:** 10 de la portada de la galería de la ficha (`fetch-maps-photos`), sin autor → sin atribución

Lo que la ficha no publica no se inventa: sin catálogo ni precios. Todo vive en
`src/data/site.ts`.

## Comandos

```bash
cd apps/floristeria-mis-magallon
bun install
bun run dev      # desarrollo
bun run build    # build estático
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
