# Diseño: web de Talleres Caldado

**Fecha:** 2026-09-30  
**Estado:** Aprobado para implementación por el usuario.

## Objetivo

Crear una landing estática en Astro para Talleres Caldado, en una aplicación separada `apps/talleres-caldado/`, siguiendo el patrón de las apps de negocio ya presentes. Mantener intactas las webs de Wayu Garden, Hermanos Palomo y Vulcanizado Teatinos. Priorizar las acciones de llamada, correo y cómo llegar.

## Datos publicados

- Nombre: Talleres Caldado.
- Dirección: Avda. Carlos Haya, 163, 29010, Málaga, España.
- Teléfono publicado por EuroTaller: +34 952 30 68 10.
- Correo publicado por EuroTaller: tallerescaldado@eurotaller.com.
- Coordenadas del enlace de Maps: 36.7250617, -4.4583111.
- Foto principal: URL de Google Maps incluida por el usuario (`gps-cs-s`) que se atribuye como foto de la ficha y se enlaza a la ficha/galería. No se añadirán otras fotos. Revisar vigencia de URL y autorización para reutilizarla antes de publicación.
- Por preferencia del usuario, omitir horario y servicios. También omitir calificación/reseñas y afirmaciones no confirmadas.
- Dominio provisional `https://talleres-caldado.vercel.app`, a actualizar cuando se conozca el definitivo.

## Experiencia visual

Identidad visual de chapa/taller: grafito, crema y naranja de señalización, tipografía display condensada para títulos y sans legible para textos. Un motivo de panelado/chapa dará carácter sin fingir fotos adicionales.

Estructura: cabecera con teléfono, portada con H1 local y foto Maps, botones de llamada/cómo llegar, tira con NAP, sección de contacto (teléfono, email, dirección), mapa de carga diferida, enlaces de indicaciones/ficha de Google Maps y pie consistente. Diseño móvil de una columna con botón fijo de llamada, foco de teclado y soporte para movimiento reducido.

## SEO y arquitectura

- App Astro estática, una ruta, CSS propio, sin scripts de cliente ni dependencias nuevas.
- HTML en español, título/meta description y Open Graph/Twitter locales; canonical basada en dominio provisional.
- JSON-LD `AutoRepair` con nombre, URL provisional, teléfono, email, dirección, geo, foto y enlace de Maps; sin horarios, aggregateRating ni lista de servicios.
- Sitemap de la integración Astro compartida y robots.txt actualizado al dominio final antes de publicar.

## Verificación

Pruebas de datos NAP, enlaces de teléfono/mapa/foto y exclusión de horario/ratings del schema. Ejecutar Astro check, typecheck y build si están disponibles; revisar HTML semántico, alt, un H1 y respuesta móvil.

## Pendientes previos a publicación

Reemplazar dominio provisional, confirmar autorización para reutilizar la foto vinculada de Google Maps y comprobar que su URL sigue operativa.
