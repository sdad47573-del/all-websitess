# Floristería Camelía · Puebla del Río · Sevilla

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**Floristería Camelía** publica en su ficha de Google Maps (consultada el
17 de octubre de 2026).

## Datos de la ficha

- **Nombre:** Floristería Camelía · **Categoría:** Floristería
- **Dirección:** Calle la Puebla del Río, 62 (sin distrito publicado), 41006 Sevilla
- **Plus code:** 93G5+RG Sevilla (completo 8C9P93G5+RG) · **Coords:** 37.3771072, -5.941198
- **Ficha:** `ChIJe4a-COJuEg0RjC7nTrn2wnw` · `/g/12qfgmk9v`
- **Teléfono:** 645 30 94 14 (`tel:+34645309414`) · **Sin web propia**
- **Valoración:** 4,5/5 con 54 reseñas; destaca 3 extractos literales (5, 1 y 5/5),
  reproducidos tal cual y sin firma (el endpoint no trae el autor)
- **Horario:** dos turnos lun–vie (10:00–14:00 y 17:30–20:00); sáb 10:00–13:30;
  dom cerrado
- **Accesibilidad:** acceso para sillas de ruedas disponible (única entrada que publica
  la ficha)
- **Descripción literal (con sus erratas):** «Adornos florales para eventos, coches para
  bodas, ramos de novia, centros, plantas, flores artificiales, funerario. Trabajos
  personalizados, amplia experiencia.Sevicio a domicilio de 9 a 21 hora»
- **Fotos:** 10 de la portada de la galería de la ficha (`fetch-maps-photos`), 2 apaisadas,
  5 verticales, 1 cuadrada y 2 vistas, sin autor → sin atribución

Lo que la ficha no publica no se inventa: sin catálogo ni precios. Todo vive en
`src/data/site.ts`.

## Comandos

```bash
cd apps/camelia
bun install
bun run dev      # desarrollo
bun run build    # build estático
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
