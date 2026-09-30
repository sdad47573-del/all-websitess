# Diseño: web de Taller Finca la Palma

**Fecha:** 2026-09-30  
**Estado:** Aprobado para implementación por el usuario.

## Objetivo

Crear una landing estática Astro, independiente en `apps/taller-finca-la-palma/`, para facilitar llamadas, WhatsApp y cómo llegar a Taller Finca la Palma. No modificar ninguna otra aplicación Astro del monorepo.

## Datos y alcance de contenido

- Nombre: Taller Finca la Palma.
- Dirección: Calle Francisco Barbin, 11, Teatinos-Universidad, 29010 Málaga, España.
- Teléfono de contacto publicado: +34 952 28 55 40.
- WhatsApp publicado por Instagram del negocio: +34 647 00 45 77.
- Email listado en directorio local: tallerfincalapalma@hotmail.es.
- Coordenadas del enlace de Maps: 36.7212802, -4.4726736.
- Instagram del taller: https://www.instagram.com/talleresfincalapalma/.
- Servicios que el perfil oficial publica: chapa, pintura y mecánica. No prometer extras ni disponibilidad.
- El enlace Google Maps recibido abre ficha general y no aporta una imagen identificable en la URL. No incrustar fotos por ahora; ofrecer enlace directo a Maps para abrir las fotos de la ficha. Si el titular facilita URL concreta de foto/permiso, se podrá añadir luego.
- Omitir horarios, valoración y reseñas porque no se confirmaron en fuente oficial fiable.
- Dominio provisional `https://taller-finca-la-palma.vercel.app`, que debe sustituirse al conocer el dominio definitivo.

## Diseño visual y estructura

Una identidad de taller de chapa/pintura: azul grafito, crema y amarillo/naranja de señalización; tipografía display condensada en encabezados y sans legible para contenido. Motivos geométricos inspirados en líneas de carrocería/hoja de palmera, sin fotografía sustitutiva.

Página de una sola ruta: cabecera con marca y contacto; portada con H1 local, frase concisa y botones de llamada/WhatsApp; banda de datos; especialidades (chapa y pintura, mecánica); bloque de ubicación/contacto con teléfono, email, enlace de Instagram, mapa lazy y direcciones; pie con NAP repetido. Responsive móvil con CTAs accesibles, foco visible, enlace de salto y respeto de movimiento reducido.

## SEO y arquitectura

- Astro static, una página, CSS local, sin JavaScript de cliente ni nuevas dependencias.
- Idioma `es`, title/description naturales y OG/Twitter, un H1, headings semánticos, NAP consistente.
- Schema.org `AutoRepair` con datos disponibles (name, address, phone, email, geo, map, redes) y sin horario o rating.
- Sitemap de integración Astro compartida y robots con URL provisional.
- Mapa iframe con título accesible y carga diferida.

## Verificación

Pruebas de enlaces y datos del negocio, servicios incluidos, exclusión de horario y ratings. Ejecutar pruebas, Astro check/typecheck/build si los binarios están disponibles. Revisar HTML generado y layout móvil.

## Pendientes antes de publicar

Confirmar dominio definitivo; pedir permiso/foto directa si se desea incorporar una imagen de la galería; verificar teléfono, correo y WhatsApp con el titular antes de publicación.
