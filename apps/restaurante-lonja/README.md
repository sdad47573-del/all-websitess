# Restaurante Lonja · web (Astro)

One-page para **Restaurante Lonja**, comida casera en 30392 Cartagena.

- Coordenadas del enlace: 37.6277509, -0.961471
- Tel: 678 28 68 02
- Nota pública: 9,4/10 en Google (25 opiniones, agregadores)
- Ficha Google Maps: ver `mapsUrl` en `src/pages/index.astro`

## ⚠️ Fotos de Google Maps — NO descargadas a propósito

Las fotos de la ficha pertenecen a sus autores y las condiciones de Google
Maps no permiten extraerlas automáticamente. La web usa **ilustraciones
placeholder propias** en `public/fotos/*.svg`: sustitúyelas por fotos
**propias** (mismo nombre) y reconstruye. Hay aviso en `#fotos` + botón a
«Ver fotos reales en Google Maps».

## Desarrollo

```bash
bun install
bun run --filter restaurante-lonja dev      # http://localhost:4321
bunx turbo run build --filter=restaurante-lonja
```

Componentes `@astro-components` (Seo, Topbar, Chips, About, Menu, Visit,
Faq, Footer). Hero y galería propios para no requerir `astro:assets`.

## Pendiente antes de publicar (importante: datos escasos)

- [ ] Confirmar con el local: calle exacta, horarios y carta.
- [ ] Sustituir `public/fotos/*.svg` por fotos propias.
- [ ] Dominio definitivo (astro.config, robots, canonical).
- [ ] NIF/CIF, razón social y email en `aviso-legal.astro`.
