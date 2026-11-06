# CMS del repo vs WordPress, Shopify y Strapi

Comparación del panel de `apps/cms` con tres CMS de referencia. No es una pelea
entre iguales: el panel del repo es una **herramienta interna** para editar un
monorepo de webs estáticas; los otros tres son **productos** para publicar
contenido o vender. La tabla sirve para decidir qué encaja en cada caso y qué
habría que añadir si el panel tuviera que cubrir más.

Fecha de los datos: **6 de noviembre de 2026**. Precios y cuotas de mercado
cambian; al final están las fuentes.

---

## Resumen en una línea

| | Qué es | Para quién |
|---|---|---|
| **CMS del repo** (`apps/cms`) | Panel local SolidJS + Bun que edita ficheros de ~638 webs Astro del monorepo | Quien mantiene este repositorio y sus landings |
| **WordPress** | CMS PHP + MySQL, open source, con ecosistema de plugins y temas | Cualquier web de contenido, blog o negocio que quiera autonomía |
| **Shopify** | Plataforma SaaS de comercio: tienda, pagos, inventario y logística | Negocios que venden productos |
| **Strapi** | CMS headless open source (Node) que expone el contenido por API | Equipos con frontend propio que quieren un backend de contenido |

---

## Tabla comparativa

### Producto y modelo de contenido

| Feature | CMS del repo | WordPress | Shopify | Strapi |
|---|---|---|---|---|
| Tipo | Panel interno a medida, local | CMS autoalojado o gestionado | SaaS propietario | CMS headless, open source |
| Dónde vive el contenido | `src/data/site.ts` y plantillas del repo | Tablas MySQL/MariaDB | Infraestructura de Shopify | Base de datos (SQLite, Postgres, MySQL) |
| Modelo de contenido | Código: un objeto `BUSINESS` por web | Entradas, páginas, taxonomías y post meta | Productos, variantes, colecciones, páginas | Content-types definidos en el panel |
| Unidad de publicación | La web entera (build de Astro) | Entrada o página | Producto o página | Entrada |
| Nº de sitios por instancia | ~638 webs en un solo panel | 1 (o red multisite) | 1 tienda por suscripción | 1 proyecto por instancia |
| Frontend | Astro estático, prerenderizado | PHP renderizado en servidor | Tema Liquid o headless (Hydrogen) | Libre: Next, Astro, móvil… |
| Idiomas | No: una web por locale | Plugins (WPML, Polylang) | Translate & Adapt | i18n nativo |
| Comercio | Catálogo, carrito y pedido por WhatsApp; sin pagos | WooCommerce | Núcleo del producto | No |
| Licencia | Privada, interna | GPLv2 | Propietaria | Open source; edición Community gratuita |

### Edición y experiencia de autor

| Feature | CMS del repo | WordPress | Shopify | Strapi |
|---|---|---|---|---|
| Interfaz | SolidJS, 6 pestañas por web | `wp-admin` + editor de bloques | Admin de Shopify | Admin React + editor de bloques |
| Edición de datos de negocio | Formulario para 9 campos de `BUSINESS` | Campos personalizados | Metafields | Content-type builder |
| Editor de código en el panel | Sí: `.astro`, `.ts`, `.css`, `.md`, `.json` | Sí, editor de temas/plugins con permisos | Solo editando el tema, fuera del admin | No: se edita en el proyecto |
| Edición de arrays (FAQ, menú, horario) | No: solo en la pestaña de código | Sí, con bloques o plugins | Sí, con metafields/bloques | Sí, componentes y campos repetibles |
| Vista previa | iframe del `dist/` real, desktop/tablet/móvil | Vista previa en el editor | Vista previa del tema | Live preview |
| Historial de cambios | 20 versiones por fichero en `.history` | Revisiones por entrada | Historial limitado | Versiones + borradores |
| Deshacer / comparar | Diff por líneas, ver y restaurar | Comparar revisiones | No comparable | Restaurar versión |
| Acciones en bloque | Regenerar miniaturas OG de varias webs | Actualizaciones y edición en lote | Edición masiva de productos | No en la UI |
| Búsqueda y filtros | Por nombre, slug, ciudad, calle; legales y fotos | Búsqueda nativa + plugins | Búsqueda de admin | Filtros por campo |

### Publicación y operación

| Feature | CMS del repo | WordPress | Shopify | Strapi |
|---|---|---|---|---|
| Publicar | **No publica**: deja cambios sin commit; el build y el deploy son aparte | Al guardar | Al guardar | Según workflow (draft/publish) |
| Build | No compila: un error de sintaxis se ve al construir la web | No aplica | No aplica | No aplica |
| Programar publicación | No | Sí (plugins/nativo) | Sí | Sí (Growth) |
| API | REST propia, sin auth, solo `127.0.0.1` | REST + REST/GraphQL por plugin | GraphQL Admin + REST | REST y GraphQL autogeneradas |
| Webhooks / integraciones | No | Plugins y acciones | Apps y webhooks | Webhooks y plugins |
| Ecosistema | Ninguno: se extiende tocando el código | Decenas de miles de plugins y temas | Miles de apps y temas | Mercado y plugins locales |
| Hosting | Local; `bun run start` en `127.0.0.1` | Cualquier hosting PHP | Solo Shopify | Autoalojado o Strapi Cloud |
| Coste de licencia | 0 € | 0 € (más hosting y plugins) | 29–39 $/mes básico; Plus desde 2.300 $/mes | Community gratis; Growth 45 $/mes; Cloud 35–450 $/mes |
| Mantenimiento | Dependencias del monorepo; sin actualizaciones de CMS | Core, plugins y temas | Ninguno (SaaS) | Versiones mayores y parches |
| Copias de seguridad | Git + `.history` local | Plugins/hosting | Incluidas según plan | Cloud sí; autoalojado, por tu cuenta |

### Personas, SEO y seguridad

| Feature | CMS del repo | WordPress | Shopify | Strapi |
|---|---|---|---|---|
| Usuarios y login | Admin y editor con sesión por cookie; escucha solo en localhost | Roles nativos + plugins | Usuarios y permisos por plan | RBAC nativo (admin, editor, autor) |
| Workflow editorial | No | Plugins de flujo editorial | Básico | Draft & Publish + revisión (Growth) |
| SEO on-page | Auditoría de 11 comprobaciones sobre el `dist/` construido | Yoast/RankMath | Básico integrado + apps | Vía plugin o a mano |
| Datos estructurados | Comprueba que exista JSON-LD `LocalBusiness` | Plugin | Integrado para producto | A mano / plugin |
| Imagen al compartir | Genera `og.jpg` 1200×630 y guarda las 10 anteriores | Plugin / manual | Integrado | Campo + transformaciones |
| Sitemap y canonical | Los genera Astro en cada build | Plugin/nativo | Integrado | A mano en el front |
| Multiidioma SEO | No | Plugins | Translate & Adapt | i18n + campos por locale |
| Superficie de ataque | Mínima: local, sesión firmada HttpOnly, sin datos de clientes | Alta: objetivo habitual por plugins desactualizados | Gestionada por Shopify | Responsabilidad de quien aloja |
| RGPD | Datos de negocio; audita el enlace al aviso legal | Plugins/DIY | Herramientas integradas | DIY |

---

## Detalle de las diferencias que importan

### 1. Dónde vive la verdad

El CMS del repo **no tiene base de datos**: la verdad es el árbol de trabajo de
Git. Cada guardado reescribe un literal dentro de `BUSINESS`, escribe sobre un
temporal, relee y, si el valor no queda como se esperaba, restaura el original.
Eso da algo que los otros tres no tienen: el contenido se revisa en un *pull
request* y se despliega con el mismo pipeline que el código.

WordPress y Strapi guardan el contenido en una base de datos. La web se genera
al vuelo (WordPress) o se pide por API (Strapi). Shopify guarda todo en su
infraestructura y no exporta el modelo de datos: el contenido vive mientras
vivas en la plataforma.

**Consecuencia:** el panel del repo es el único de los cuatro en el que el
contenido y el código son lo mismo. También es el único en el que editar
contenido puede romper la compilación.

### 2. Quién puede editar

El panel escucha solo en `127.0.0.1` y pide usuario y contraseña. Hay dos roles:
`admin` (todo, incluido código y usuarios) y `editor` (datos, mapas, imágenes,
OG y SEO). La sesión es una cookie HttpOnly firmada con HMAC y las contraseñas
se guardan con argon2id.

Lo que sigue faltando es **auditoría por persona**: el historial guarda *qué*
cambió y *cuándo*, pero no *quién*. Tampoco hay registro público, recuperación
por email ni permisos por web: los roles son globales.

### 3. Publicar no es parte del panel

El CMS del repo termina en el árbol de trabajo. El README lo dice sin rodeos:
no ejecuta el build ni despliega, y tras editar layout conviene lanzar
`bun run build`. La publicación real la hacen Vercel y Netlify con su filtro de
`ignoreCommand`.

En WordPress y Shopify, guardar es publicar. En Strapi, guardar publica o deja
borrador según el workflow. Esa inmediatez es la principal razón por la que un
cliente prefiere cualquiera de los tres: no necesita a nadie que compile.

### 4. SEO: auditar contra el HTML real

La pestaña SEO no lee el código fuente: lee `dist/index.html` y comprueba lo
que ven Google y los scrapers —título, meta descripción, canonical, `og:image`,
`twitter:card`, H1 único, `lang`, `noindex`, enlace legal, JSON-LD y `alt` de
las imágenes—. Si no hay build, avisa y enseña los datos de partida.

Eso es más honesto que un plugin que analiza el borrador, y bastante más
limitado: no hay sugerencias de palabras clave, ni enlaces internos, ni
puntuación, ni redirecciones 301, ni edición del `robots.txt` o del sitemap. En
WordPress eso lo cubre Yoast o RankMath; en Shopify viene lo básico y el resto
son apps; en Strapi, el SEO se construye a mano en el frontend.

### 5. Medios

El panel lista `src/assets/fotos`, dice en qué plantilla se usa cada imagen,
normaliza el nombre, limita a 15 MB y **bloquea el borrado mientras haya una
referencia**. Formatos: jpg, png, webp, avif, gif y svg.

WordPress tiene biblioteca de medios con tamaños derivados; Shopify sirve por
CDN con transformaciones y recorte; Strapi tiene Media Library con proveedores
externos (S3, Cloudinary). Ninguno de los tres obliga a comprobar referencias
antes de borrar, y por eso es más fácil dejar una imagen rota en ellos que aquí.

### 6. Extensibilidad

Este es el punto donde la comparación se rompe del todo:

- **CMS del repo:** no hay plugins. Se extiende editando `apps/cms`, que son
  unas pocas funciones puras con tests. Es un coste bajo para el equipo dueño
  del repo y un muro para cualquier otro.
- **WordPress:** el mayor ecosistema del mercado. Cualquier necesidad tiene un
  plugin, y por eso mismo cualquier web acumula plugins que hay que actualizar.
- **Shopify:** apps de pago que cubren logística, marketing, suscripciones,
  devoluciones. La personalización profunda se hace con funciones propias o
  headless.
- **Strapi:** content-types, políticas, controladores y plugins propios en
  Node. El punto medio entre “lo escribo yo” y “hay un mercado”.

### 7. Comercio

Solo Shopify lo trae de serie: catálogo, variantes, inventario, pagos, envíos,
impuestos, devoluciones y punto de venta. WordPress lo consigue con
WooCommerce, que es un plugin enorme con su propio mantenimiento.

El CMS del repo cubre la mitad barata: catálogo por web, stock, carrito en el
navegador y pedido por WhatsApp con el mensaje ya escrito. No cobra, no calcula
envíos ni impuestos y no guarda pedidos: eso sigue siendo trabajo de Shopify o
de una pasarela integrada aparte. Strapi tampoco vende nada por sí solo.

### 8. Rendimiento

El CMS del repo gana sin discusión: cada web es HTML prerenderizado servido
desde CDN. No hay PHP ni consultas por visita. WordPress puede llegar a cifras
parecidas con caché de página y CDN, pero es trabajo de configuración. Shopify
sirve sus tiendas por CDN propia. Strapi no renderiza: el rendimiento depende
del frontend que consuma su API.

### 9. Coste y escala

Tres economías distintas:

- **Panel del repo:** coste marginal cero. Añadir una web es crear una carpeta;
  el límite está en el tiempo de build (~638 webs) y en la revisión manual.
- **WordPress:** licencia gratis, pero se paga en hosting, plugins premium y
  horas de actualización y seguridad.
- **Shopify:** 29–39 $/mes en Basic, 79–105 $ en Grow, 299–399 $ en Advanced y
  desde 2.300 $ en Plus, más comisiones de pago y apps.
- **Strapi:** Community gratis autoalojada; Growth 45 $/mes por 3 asientos;
  Cloud desde 35 $/mes (29 $ anual) y hasta 450 $/mes. Strapi Cloud retiró el
  plan gratuito en 2026.

### 10. Riesgo y mantenimiento

- El panel del repo **no tiene dependencias de terceros que actualizar** más
  allá del monorepo, y su superficie expuesta es prácticamente nula.
- WordPress es el CMS más atacado de la web: el riesgo real son los plugins sin
  actualizar, no el núcleo.
- Shopify externaliza la seguridad y el mantenimiento, a cambio de no poder
  tocar nada por debajo del tema.
- Strapi autoalojado traslada al equipo las actualizaciones mayores, las copias
  y el endurecimiento del servidor.

---

## Cuándo encaja cada uno

| Necesidad | Elección razonable |
|---|---|
| Editar datos y plantillas de las 638 landings desde un solo sitio | **CMS del repo** |
| Que una persona no técnica publique sin compilar ni tocar Git | **WordPress** o **Shopify** |
| Vender productos con pagos, stock y envíos | **Shopify** |
| Catálogo y encargos sin cobrar online | **CMS del repo** |
| Web de contenido con blog, formularios y plugins ya hechos | **WordPress** |
| Frontend propio (Next, Astro, app) con contenido por API | **Strapi** |
| Contenido versionado en el mismo repo que el código | **CMS del repo** o Strapi + Git |
| Multiidioma real con variantes por mercado | **WordPress** (WPML) o **Strapi** |
| Varias personas editando con permisos distintos | **WordPress**, **Shopify** o **Strapi** |
| No depender de ningún proveedor ni pagar licencia | **CMS del repo** o WordPress/Strapi autoalojados |

---

## Qué le falta al CMS del repo para jugar en esa liga

No es una lista de deseos: son los huecos que aparecerían en cuanto el panel
saliera del `127.0.0.1` o lo usara alguien que no es el dueño del repo.

1. **Auditoría por persona.** Ya hay login y roles, pero el historial no anota
   quién hizo cada cambio y los permisos son globales, no por web.
2. **Publicación integrada.** Lanzar build y deploy desde el panel (y avisar del
   error de sintaxis antes de guardar) eliminaría el paso manual que hoy exige
   el README.
3. **Edición de arrays.** `FAQ`, `MENU` y `HORARIO` solo se tocan en código;
   son justo los campos que un cliente querría cambiar.
4. **Validación en vivo.** La vista previa es del último build, no del cambio
   que acabas de escribir: no se ve el efecto hasta compilar.
5. **Workflow editorial.** Borradores, programación y aprobación no existen.
6. **Multiidioma y multi-dominio** más allá de una carpeta por locale.
7. **API pública con auth** para que otras herramientas (o una app) lean y
   escriban sin pasar por la interfaz.

Lo que **no** conviene copiar: un mercado de plugins, comercio propio y un
constructor visual. Eso convertiría una herramienta de 30 ficheros con tests en
un producto que hay que mantener, y es exactamente el trabajo que hacen los
otros tres.

---

## Conclusión

El CMS del repo es el más rápido y barato para lo que hace —editar 638 webs
estáticas desde un panel único, con historial, SEO auditado y miniaturas sin
salir de localhost— y el menos adecuado para cualquier cosa que no sea eso: no
publica, no traduce, no vende y no se extiende sin tocar código.

WordPress es la opción por defecto cuando importa la autonomía del que edita;
Shopify, cuando el negocio es vender; Strapi, cuando hay un frontend propio y
se quiere un backend de contenido con API y roles. Los tres resuelven el
problema que el panel del repo no intenta resolver: que alguien que no programa
publique solo.

---

## Fuentes

- `apps/cms/README.md`, `apps/cms/server.ts` y `apps/cms/lib/*` (estado real del
  panel: pestañas, guardas, historial, SEO, OG, límites).
- [W3Techs — CMS overview](https://w3techs.com/technologies/overview/content_management),
  3 de noviembre de 2026: WordPress 39,5 % de todas las webs y 58,2 % del
  mercado de CMS; Shopify 5,3 % y 7,9 %.
- [Shopify — Pricing](https://www.shopify.com/pricing), consultado el 6 de
  noviembre de 2026: Basic 29 $/mes anual (39 $ mensual), Grow 79/105 $,
  Advanced 299/399 $, Plus desde 2.300 $.
- [Strapi — Pricing Cloud](https://strapi.io/pricing-cloud) y
  [billing de Strapi Cloud](https://docs.strapi.io/cloud/getting-started/usage-billing),
  consultados el 6 de noviembre de 2026: Starter 35 $/mes, Pro 90 $,
  Business 450 $; retirada del plan gratuito en 2026.
- [Strapi — planes autoalojados](https://strapi.io/pricing-cms): Community
  gratuita, Growth 45 $/mes por 3 asientos.
