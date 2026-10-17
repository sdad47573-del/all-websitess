# Floristería Olivo Decoración Floral · Vicente Alanís · Sevilla

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**Floristería Olivo Decoración Floral** publica en su ficha de Google Maps (consultada el
17 de octubre de 2026).

## Datos de la ficha

- **Nombre:** Floristería Olivo Decoración Floral · **Categoría:** Floristería
- **Dirección:** Calle Vicente Alanís, entre Calle Arroyo y Tharsis (sin distrito
  publicado), 41008 Sevilla
- **Plus code:** 92XG+GJ Sevilla · **Coords:** 37.398837, -5.9734164
- **Ficha:** `ChIJmWGgBBZvEg0RoAbEryCcRdY` · `/g/11v9vddp0q`
- **Teléfono:** 955 34 67 03 (`tel:+34955346703`) · **Sin web propia**
- **Valoración:** 4,9/5 con 91 reseñas; destaca 3 extractos literales (5, 5 y 5/5),
  reproducidos tal cual y sin firma (el endpoint no trae el autor)
- **Horario:** dos turnos lun–vie (9:30–14:00 y 17:30–20:30); sáb 10:00–14:00;
  dom cerrado
- **Accesibilidad:** acceso para sillas de ruedas disponible (única entrada que publica
  la ficha)
- **Descripción literal (con sus erratas):** «Mi formación académica cómo decorador y escaparatista, así cómo en la ornamentación y exhorno floral cómo florista, avalan una trayectoria de más de treinta y dos años de trabajo. Aquí se pueden hacer realidad tus sueños. Gracias por confiar en Olivo Floristería»
- **Fotos:** 10 de la portada de la galería de la ficha (`fetch-maps-photos`), 4 apaisadas,
  2 vistas, 1 cuadrada y 3 verticales, sin autor → sin atribución

Lo que la ficha no publica no se inventa: sin catálogo ni precios. Todo vive en
`src/data/site.ts`.

## Comandos

```bash
cd apps/floristeria-olivo
bun install
bun run dev      # desarrollo
bun run build    # build estático
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
