# Restaurante Puerta 14 · web (Astro)

One-page para **Restaurante Puerta 14**, cocina casera mediterránea en
C. Puerta de Murcia 14, 30201 Cartagena (Murcia).

- Coordenadas del enlace: 37.6022666, -0.9872786
- Tel: 968 50 25 33
- Horario (ficha pública 2026): 9:00–24:00, miércoles cerrado
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
bun run --filter restaurante-puerta-14 dev      # http://localhost:4321
bunx turbo run build --filter=restaurante-puerta-14
```

Componentes `@astro-components` (Seo, Topbar, Chips, About, Menu, Visit,
Faq, Footer). Hero y galería propios para no requerir `astro:assets`.

## Pendiente antes de publicar

- [ ] Sustituir `public/fotos/*.svg` por fotos propias.
- [ ] Dominio definitivo (astro.config, robots, canonical).
- [ ] NIF/CIF, razón social y email en `aviso-legal.astro`.
- [ ] Confirmar carta y horarios con el local.
