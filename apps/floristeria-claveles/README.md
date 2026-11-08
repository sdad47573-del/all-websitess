# Floristeria Claveles · Amor de Dios · Sevilla

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**Floristeria Claveles** publica en su ficha de Google Maps (consultada el 17 de octubre
de 2026).

## Datos de la ficha

- **Nombre:** Floristeria Claveles (tal como lo publica la ficha, sin tilde en
  «Floristeria») · **Categoría:** Floristería
- **Dirección:** Calle Amor de Dios, 2, Casco Antiguo, 41002 Sevilla
- **Plus code:** 92V4+F4 Sevilla · **Coords:** 37.3936854, -5.9947004
- **Ficha:** `ChIJB8m4nQ9sEg0RzoXea5ysnSU` · `/g/1tfx64j0`
- **Teléfono:** 955 89 40 12 (`tel:+34955894012`) · **Sin web propia**
- **Valoración:** 4,7/5 con 65 reseñas; destaca 3 extractos literales (5, 5 y 5/5),
  reproducidos tal cual y sin firma (el endpoint no trae el autor)
- **Horario:** dos turnos lun–vie (10:00–14:00 y 17:30–20:30); sáb 10:00–14:00;
  dom cerrado
- **Accesibilidad:** acceso para sillas de ruedas disponible (única entrada que publica
  la ficha)
- **Descripción literal:** «Floristería con reparto a domicilio / Arreglo florales para eventos /Ramos de novias / Coronas fúnebres / centros florales»
- **Fotos:** 10 de la portada de la galería de la ficha (`fetch-maps-photos`), 6 apaisadas
  y 4 verticales, sin autor → sin atribución

Lo que la ficha no publica no se inventa: sin catálogo ni precios. Todo vive en
`src/data/site.ts`.

## Comandos

```bash
cd apps/floristeria-claveles
bun install
bun run dev      # desarrollo
bun run build    # build estático
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
