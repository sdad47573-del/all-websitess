# Diseño: web de Vulcanizado Teatinos

**Fecha:** 2026-09-30  
**Estado:** Aprobado para implementación por el usuario.

## Objetivo y alcance

Crear una landing estática, rápida y responsive en Astro para Vulcanizado Teatinos, como app independiente `apps/vulcanizado-teatinos/`. Mantener sin cambios las aplicaciones de Wayu Garden y Hermanos Palomo. La página debe ayudar al visitante a llamar, identificar la ubicación y abrir indicaciones en Google Maps.

## Datos publicados

- Nombre: Vulcanizado Teatinos.
- Dirección: Av. de Carlos Haya, 169, 29010 Málaga, España.
- Teléfono: +34 646 65 48 37, enlazado con `tel:+34646654837`.
- Coordenadas: 36.7256508, -4.4601228, desde el enlace de Google Maps proporcionado.
- Fotografía principal: la imagen `gps-cs-s` enlazada por el usuario dentro de la ficha de Google Maps. La página la presenta como foto del perfil/ficha y enlaza a Maps para la galería completa. La URL externa puede cambiar o caducar; el README debe avisar que se revise antes de publicación. No se descargarán ni añadirán otras fotos de usuarios.
- No publicar horarios, valoraciones, recuento de reseñas, precios ni promesas de servicios no verificados. La actividad se describirá genéricamente como taller/vulcanizado de automoción, conforme al nombre del negocio.
- Dominio provisional: `https://vulcanizado-teatinos.vercel.app`; cambiarlo antes de publicar si se conoce el dominio final.

## Experiencia visual

- Dirección: taller contemporáneo, claro y técnico; papel técnico cálido, azul petróleo/grafito y acento lima/seguridad. Tipografía display condensada para titulares y sans legible para lectura.
- Motivo identificativo: dibujo lineal/geométrico de banda de rodadura que alude al vulcanizado, sin simular otra foto del taller.
- Estructura: cabecera con navegación/contacto; portada con H1 local, texto breve, foto principal de Maps y CTAs de llamada e indicaciones; franja NAP; sección de dirección, teléfono, mapa Google embebido y enlace a la ficha; pie consistente.
- Móvil: adaptación de una columna, CTA de llamada accesible y controles táctiles. Accesibilidad por teclado, enlace para saltar al contenido, mapa con título y movimiento reducido respetado.

## SEO y arquitectura técnica

- Astro estático, una ruta, CSS local y sin JavaScript de cliente ni dependencias extra.
- HTML en español, título/meta description naturales, canonical y Open Graph/Twitter con URL provisional, NAP idéntico y una jerarquía clara de encabezados.
- JSON-LD `AutoRepair` con nombre, teléfono, dirección, geo, URL provisional y foto indicada. Excluir `openingHours`, `aggregateRating`, reseñas y datos no verificados.
- Sitemap mediante la configuración compartida Astro del monorepo y `robots.txt` con URL provisional reemplazable.

## Verificación

- Pruebas unitarias de datos públicos, enlaces de teléfono/mapa y exclusión de horario/valoración del schema.
- Ejecutar scripts disponibles para `astro check`, typecheck y `astro build`.
- Revisar el HTML emitido (metadatos, un H1, JSON-LD, enlaces, alt y NAP consistente) y confirmar responsive en estilos.

## Pendiente antes de publicar

Confirmar dominio definitivo, horario y servicios directamente con el titular. Verificar que la foto de Google Maps sigue disponible y que se permite reutilizarla en el sitio; sustituirla por una imagen entregada/autorizada si no.
