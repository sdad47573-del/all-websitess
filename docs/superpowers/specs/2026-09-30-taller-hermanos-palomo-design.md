# Diseño: web de Taller Hermanos Palomo

**Fecha:** 2026-09-30  
**Estado:** Aprobado por el usuario para documentar; pendiente revisión del documento antes de planificar la implementación.

## Objetivo

Crear una web rápida, adaptable a móvil y optimizada para SEO local para Taller mecánica Hermanos Palomo, en una aplicación Astro independiente dentro de `apps/`. La aplicación Astro existente de Wayu Garden no se modifica.

La página debe facilitar las dos acciones principales de un visitante: llamar al taller y consultar cómo llegar. El contenido evitará afirmar horarios, reseñas, precios o especialidades no confirmadas.

## Datos confirmados y límites

- Nombre mostrado: **Taller mecánica Hermanos Palomo**.
- Dirección: **C/ Padre Martín, 23, 29010 Málaga, España**.
- Teléfono publicado en la ficha/directorios: **951 25 16 47** (`tel:+34951251647`).
- Coordenadas del enlace de Google Maps proporcionado: **36.7290797, -4.4507428**.
- El enlace de Maps proporcionado será la fuente de navegación y referencia de la ficha.
- No se mostrarán horarios, valoraciones, número de reseñas ni una lista de servicios hasta que el titular los confirme. La descripción se limitará a indicar que es un taller mecánico en Málaga.
- No se descargarán ni volverán a alojar fotografías aportadas por usuarios de Google Maps sin confirmar permiso de reutilización. Se incluirá un enlace claro a la ficha/galería de Maps y un mapa incrustado; se puede incorporar fotografía autorizada más adelante.
- No se ha facilitado dominio definitivo. El `site` de Astro y los metadatos de URL canónica/OG/schema serán provisionales y deberán cambiarse al publicar.

## Experiencia y dirección visual

Landing de una sola página en español. Estética de taller contemporáneo y fiable: grafito oscuro, tonos metálicos/neutros y acento ámbar; tipografía legible, jerarquía directa y controles táctiles amplios. Evitar imágenes decorativas que simulen fotografías reales del negocio.

Orden propuesto:

1. Cabecera con nombre del taller, navegación por anclas y teléfono.
2. Portada con H1 local (“Taller mecánico en Málaga”), breve presentación sin promesas no verificadas, CTA de llamada y CTA para abrir Google Maps.
3. Bloque breve de confianza con dirección y actividad genérica confirmada, sin valoraciones inventadas.
4. Sección de contacto y ubicación con dirección, teléfono enlazado, iframe de Google Maps de carga diferida y enlace externo a indicaciones/ficha.
5. Pie con NAP consistente, enlaces de contacto y nota de que horarios/servicios se confirman por teléfono.

En móvil, la llamada permanecerá especialmente accesible (incluido CTA fijo inferior si no tapa contenido). La navegación será accesible por teclado, incluirá enlace para saltar al contenido y respetará `prefers-reduced-motion`.

## SEO y datos estructurados

- HTML semántico en español, un solo H1 y encabezados jerárquicos.
- `title` y meta description naturales con nombre, actividad, Málaga y datos de contacto/localización; canonical y Open Graph con dominio provisional claramente identificable.
- Enlaces `tel:` y Google Maps, texto alternativo cuando existan imágenes autorizadas, iframe con título descriptivo y carga diferida.
- JSON-LD de `AutoRepair` (o tipo Schema.org equivalente apropiado), con únicamente nombre, URL provisional, teléfono, dirección y coordenadas confirmadas. No incluir `openingHours`, `aggregateRating`, reseñas, precios, servicios concretos ni perfiles sociales no confirmados.
- `robots.txt` permisivo y sitemap según las convenciones compartidas del monorepo/configuración Astro, con URL provisional reemplazable.
- No usar meta keywords como sustituto del contenido ni crear afirmaciones orientadas a SEO que no se hayan verificado.

## Arquitectura y límites técnicos

- Aplicación estática Astro independiente bajo `apps/taller-hermanos-palomo/`, siguiendo las convenciones y configuración compartida de apps Astro hermanas.
- Una ruta de inicio y estilos globales propios; sin CMS, JavaScript de cliente ni dependencias adicionales para una landing informativa.
- Mantener los datos del negocio en un bloque de configuración en la página para que sea sencillo corregirlos cuando el titular confirme información adicional.
- No cambiar apps existentes, paquetes globales ni configuración de despliegue/domain.

## Verificación prevista

- Ejecutar `astro check`/typecheck disponible en la app y `astro build`.
- Verificar manualmente en el HTML generado: título/descripción, H1, enlaces de teléfono y mapa, NAP coherente, JSON-LD válido y ausencia de horario/valoraciones no confirmados.
- Revisar en viewport móvil que las acciones principales y el mapa sean utilizables y que el CTA fijo no oculte contenido.

## Decisiones pendientes antes de publicar

El titular debe confirmar horario, servicios específicos y permiso/archivos de fotos si se quieren publicar. También hay que reemplazar el dominio provisional por el dominio definitivo. Estos datos quedan fuera de la primera versión hasta su confirmación.
