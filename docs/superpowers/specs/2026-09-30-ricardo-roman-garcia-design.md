# Diseño: web de Ricardo Román García

**Fecha:** 2026-09-30  
**Estado:** Aprobado para implementación por el usuario.

## Objetivo

Crear una landing informativa y estática con Astro en `apps/ricardo-roman-garcia/`, separada de las apps existentes. Facilitar llamada y cómo llegar al taller mecánico en Málaga.

## Datos y contenido

- Nombre de ficha: Ricardo Román García.
- Actividad identificada en directorios: taller mecánico.
- Dirección coincidente en directorios: Calle Los Millones, 7, 29010 Málaga, España.
- Teléfono publicado: +34 952 30 65 35.
- Coordenadas del enlace de Maps: 36.7246234, -4.4445532.
- El enlace del usuario apunta a la ficha general, no a una foto concreta. No incluir fotos incrustadas; enlazar de forma visible a la ficha/galería de Google Maps.
- Omitir servicios específicos, horario, reseñas y valoraciones no confirmadas.
- Dominio provisional: `https://ricardo-roman-garcia.vercel.app`; sustituir al conocer dominio definitivo.

## Experiencia visual

Dirección contemporánea y funcional para un taller: grafito, neutros metálicos y ámbar de seguridad, titular display contundente y sans legible. Motivos geométricos abstractos/diagramáticos, sin fingir fotografías del local.

Estructura de una página: cabecera con nombre/teléfono; portada con H1 "Taller mecánico en Málaga", breve texto y CTAs llamar/cómo llegar; bloque NAP; contacto/ubicación con dirección, teléfono, iframe de mapa y enlace a Maps; pie con datos consistentes. Responsive móvil con llamada siempre accesible, foco visible, enlace de salto y movimiento reducido respetado.

## SEO y arquitectura

- App Astro estática siguiendo otras apps del monorepo; no modificar proyectos existentes.
- `lang=es`, title y description de SEO local, canonical/OG con dominio provisional, HTML semántico y un H1.
- JSON-LD `AutoRepair` con nombre, URL, teléfono, dirección, coordenadas y link de Maps. Sin `openingHours`, `aggregateRating` ni servicios inventados.
- Mapa iframe con título descriptivo y carga lazy; `robots.txt` y sitemap con URL provisional.
- Sin JS de cliente, CMS ni nuevas dependencias.

## Verificación

Tests para NAP, teléfono, links, coordenadas y campos omitidos. Ejecutar Astro check, typecheck y build si los binarios están disponibles; revisar HTML, datos estructurados y estilos mobile.

## Antes de publicar

Confirmar los datos directamente con el propietario y cambiar al dominio definitivo. Incorporar fotos solo con enlace directo/archivos autorizados.
