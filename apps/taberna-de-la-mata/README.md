# Taberna de la Mata

Landing estática en Astro para Taberna de la Mata, en Huelin (Málaga).

## Desarrollo

```bash
bun install
bun run dev
bun run check
bun run typecheck
bun run build
```

## Contenido y datos

- Dirección y coordenadas: ficha de Google Maps facilitada para el proyecto; Calle Orfila, 8, 29002 Málaga.
- Teléfono y referencias a platos: ficha pública de Restaurant Guru (`https://es.restaurantguru.com/Taberna-de-la-Mata-Malaga`). Los platos se presentan como sugerencias mencionadas por visitantes, no como carta oficial ni disponibilidad garantizada.
- Fotos: la sesión de Google Maps usada para el desarrollo quedó bloqueada por el consentimiento y no permitió extraer las fotos. Por eso la web enlaza a la ficha original para ver sus fotos y no reutiliza fotos de otro restaurante o de una fuente distinta. El arte gráfico de la portada es una ilustración CSS, no una foto del local.
- No se publica un horario porque no se pudo verificar en una fuente oficial.

## Antes de publicar

1. Sustituir `https://taberna-de-la-mata.vercel.app` en `astro.config.mjs`, canonical, Open Graph, JSON-LD y `public/robots.txt` por el dominio definitivo.
2. Confirmar con el establecimiento la dirección, el teléfono, el horario y los platos destacados.
3. Si se desean fotos de Maps incrustadas en la galería, obtenerlas desde la ficha y comprobar que se pueden reutilizar; actualizar `src/pages/index.astro` y añadir `alt` descriptivos.
