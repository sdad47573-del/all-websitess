# El Patio de los Rosales · Av. de Sevilla · Los Rosales

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**El Patio de los Rosales** publica en su ficha de Google Maps (consultada el
17 de octubre de 2026).

## Datos de la ficha

- **Nombre:** El Patio de los Rosales · **Categoría:** Floristería
- **Dirección:** Avenida de Sevilla, 74 (sin distrito publicado),
  41330 Los Rosales (Sevilla)
- **Plus code:** H7R8+3R Los Rosales (completo 8C9PH7R8+3R) · **Coords:** 37.590248, -5.7329851
- **Ficha:** `ChIJh5Ln7lpZEg0RCH1VTZVlXL4` · `/g/11wps8n9td`
- **Teléfono:** 698 92 73 01 (`tel:+34698927301`) · **Sin web propia**
- **Valoración:** 5/5 con 13 reseñas; destaca 3 extractos literales (5, 5 y 5/5),
  reproducidos tal cual y sin firma (el endpoint no trae el autor)
- **Horario:** dos turnos lun–vie (10:00–14:00 y 18:00–20:00); sáb 10:00–14:00;
  dom cerrado
- **Accesibilidad:** acceso para sillas de ruedas disponible; aseo adaptado, asientos
  adaptados y bucle magnético asistencial no disponibles (las cuatro entradas que publica
  la ficha)
- **Descripción:** la ficha no publica descripción del titular.
- **Fotos:** 10 de la portada de la galería de la ficha (`fetch-maps-photos`), 9 verticales
  y 1 apaisada, sin autor → sin atribución

Lo que la ficha no publica no se inventa: sin descripción, catálogo ni precios. Todo vive en
`src/data/site.ts`.

## Comandos

```bash
cd apps/patio-rosales
bun install
bun run dev      # desarrollo
bun run build    # build estático
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
