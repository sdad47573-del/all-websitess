# PITXÓN Restaurante Bar · web (Astro)

One-page para **PITXÓN Restaurante Bar**, gastrobar con terraza junto al
Parque de los Juncos: C. Juan Fernández 34, 30204 Cartagena (Murcia).

- Coordenadas del enlace: 37.6105707, -0.9876871
- Tel: 605 45 76 34
- Horario (ficha pública 2026): lun–jue y dom 08:30–23:00, vie–sáb 08:30–24:00
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
bun run --filter pitxon-restaurante-bar dev      # http://localhost:4321
bunx turbo run build --filter=pitxon-restaurante-bar
```

Componentes `@astro-components` (Seo, Topbar, Chips, About, Menu, Visit,
Faq, Footer). Hero y galería propios para no requerir `astro:assets`.

## Pendiente antes de publicar

- [ ] Sustituir `public/fotos/*.svg` por fotos propias.
- [ ] Dominio definitivo (astro.config, robots, canonical).
- [ ] NIF/CIF, razón social y email en `aviso-legal.astro`.
- [ ] Confirmar carta y horarios con el local.
