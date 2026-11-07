# CMS del repo vs Strapi

Comparación directa entre el panel de `apps/cms` y **Strapi 5**, sin pasar por
WordPress ni Shopify. La pregunta no es «cuál es mejor», sino **en qué se
diferencian** y qué implica cada modelo para este repositorio: 638 landings
Astro con `src/data/site.ts`, 364 de ellas ya con piezas en
`src/data/secciones.json`, repartidas en 781 apps Astro.

Fecha de los datos: **7 de noviembre de 2026**. Precios y planes de Strapi
cambian; al final están las fuentes.

---

## Resumen en una línea

| | Qué es | Dónde vive el contenido | Cómo se publica |
|---|---|---|---|
| **CMS del repo** | Herramienta interna local (SolidJS + Bun) para editar ficheros del monorepo | En Git, dentro de cada app | Build de Astro y deploy aparte (Vercel/Netlify) |
| **Strapi** | CMS headless open source (Node) con panel, base de datos y API | En una base de datos (Postgres, MySQL o MariaDB) | Se guarda y publica en el panel; el frontend lo consume por API |

No son la misma categoría de producto. El panel del repo **escribe código**;
Strapi **sirve contenido**. Casi todas las diferencias de abajo salen de esa
frase.

---

## Ficha técnica

| | CMS del repo | Strapi 5 |
|---|---|---|
| Stack | SolidJS + Vite (cliente), Bun (API), TypeScript | Node.js, React (admin), TypeScript |
| Base de datos | Ninguna: árbol de trabajo de Git | Postgres, MySQL o MariaDB (SQLite en local) |
| Despliegue | Solo `127.0.0.1`; no se publica | Autoalojado (Node) o Strapi Cloud |
| Licencia | Privada, interna | MIT en el núcleo (Community); Growth y Enterprise de pago |
| Coste | 0 € (solo el repo) | Community gratis; Growth 45 $/mes; Cloud desde 35 $/mes por proyecto |
| Alcance | 638 webs en un solo panel | Un proyecto por instancia (multi-sitio, a modelar) |
| Frontend | Astro estático, dentro del mismo repo | Libre: Next, Astro, móvil, otro backend |
| API | REST interna, sin tokens, solo loopback | REST y GraphQL autogeneradas, con API tokens |
| Extensión | Editando `apps/cms`, sin plugins | Plugins, custom fields, controladores y políticas |

---

## Tabla comparativa

### Modelo de contenido

| Aspecto | CMS del repo | Strapi 5 |
|---|---|---|
| Dónde se define el modelo | Código: interfaces y validadores escritos a mano en `lib/*.ts` | Content-Type Builder: collection types, single types, componentes y dynamic zones |
| Dónde vive el esquema | En el propio código, con el resto del repo | En ficheros `schema.json` versionados en el proyecto |
| Dónde vive el contenido | `site.ts`, `secciones.json`, `tienda.json` y plantillas `.astro` | Base de datos |
| Campos editables por web | 9 (`name`, `tagline`, `phone`, `street`, `postalCode`, `city`, `siteUrl`, `lat`, `lng`) | Los que defina cada content-type |
| Arrays y repetibles | Sí desde la pestaña Secciones: 10 tipos de pieza, hasta 20 piezas, 12 fotos, 40 platos por grupo… | Componentes y dynamic zones, sin límites prácticos |
| Relaciones entre contenidos | No existen: cada web es independiente | Relaciones, enlaces y contenido compartido entre entradas |
| Validación | Reglas propias: longitudes, ids únicos, URLs con esquema permitido, imágenes existentes, rechazo de `<script>` y `on*` | Tipos de campo, campos obligatorios, mínimos/máximos y validaciones de plugin |
| Cambiar el modelo | Editar `lib/sections.ts` o `lib/sites.ts` y desplegar el panel | Crear o editar el content-type en el panel; el esquema se versiona y se despliega |
| Migraciones de datos | No hacen falta: el contenido ya está en el formato nuevo o se rompe el build | Migraciones de base de datos al cambiar tipos y relaciones |
| Contenido reutilizable entre webs | Copiar el JSON de una web a otra | Una entrada relacionada o un componente compartido |
| Idiomas | No: una carpeta por locale y una web por idioma | i18n nativo: documentos con versión por locale |

### Edición y experiencia de autor

| Aspecto | CMS del repo | Strapi 5 |
|---|---|---|
| Interfaz | Panel a medida, 8 pestañas por web | Admin estándar de Strapi, común a todos los proyectos |
| Edición visual de la portada | Sí: piezas ordenables, duplicables y ocultables, con vista previa al lado | Sí: componentes y dynamic zones con previsualización de campos |
| Edición de código | Sí: `.astro`, `.ts`, `.css`, `.md`, `.json`, con guardado y Ctrl/⌘+S | No desde el admin; se edita en el proyecto |
| Edición de datos de negocio | Formulario sobre 9 campos de `BUSINESS` | Formulario generado desde el content-type |
| Edición de arrays (FAQ, menú, horario) | Sí en Secciones (FAQ, carta, galería, destacados…); el resto, en código | Sí, con componentes; es su modelo natural |
| Vista previa | iframe del `dist/` real, con ancho de escritorio, tablet y móvil | Preview en Community; Live Preview con borradores en Growth |
| La vista previa refleja lo no guardado | No: es el último build | Sí con Live Preview (Growth) |
| Historial | 20 versiones por fichero en `.history`, con diff por líneas y restauración | Content History: 14 días en Growth, 30–90 en Enterprise |
| Autor del cambio en el historial | No se registra | Sí, con usuario y fecha |
| Búsqueda y filtros | Por nombre, slug, ciudad, calle; legales pendientes; webs sin fotos | Filtros por campo y estado, más búsqueda del admin |
| Acciones en bloque | Regenerar miniaturas OG de varias webs | Acciones en bloque del Content Manager y Releases (Growth) |
| Flujo editorial | No hay borradores ni aprobación | Draft & Publish, Review Workflows (Enterprise) y Releases (Growth) |
| Programar publicación | No | Sí, con Releases (Growth) |

### Publicación y operación

| Aspecto | CMS del repo | Strapi 5 |
|---|---|---|
| Guardar | Escribe el fichero en el árbol de trabajo | Escribe en la base de datos |
| Publicar | **No publica**: deja cambios sin commit; build y deploy son aparte | Publica la entrada en el panel; queda disponible por API |
| Relación con el build | El cambio no se ve hasta compilar la web | El cambio no se ve en una web estática hasta que esa web se reconstruye |
| Build integrado | No | No: hay que dispararlo con un webhook o un pipeline |
| Commit / revisión | El contenido se revisa en un pull request, como el código | El contenido no pasa por Git; se revisa en el panel |
| Revertir | `git checkout`, restaurar del historial o del `.history` | Despublicar, restaurar una versión (Growth) o restaurar la base de datos |
| Copias de seguridad | Git + `.history` + `.og-history` local | Copias de la base de datos; en Cloud, semanales o diarias según plan |
| Webhooks | No | Sí, por evento (crear, publicar, despublicar…) |
| API pública | No: escucha en `127.0.0.1` | Sí, REST y GraphQL, con tokens y permisos |
| Despliegue del CMS | No aplica: es local | Servidor Node, base de datos, proxy, TLS y actualizaciones |
| Coste de operación | Cero marginal; añadir una web es una carpeta | Hosting + base de datos + copias + actualizaciones, o Cloud desde 35 $/mes |

### Personas, permisos y seguridad

| Aspecto | CMS del repo | Strapi 5 |
|---|---|---|
| Usuarios | Hasta 50, en `.auth/users.json` | Sin límite práctico; usuarios del admin |
| Roles | 2 globales: `admin` y `editor` | Roles ilimitados, por content-type, campo y locale |
| Permisos por web | No: los roles son globales | Sí, si se modela cada web como contenido y se usan roles por content-type |
| Contraseñas | argon2id; mínimo 8 caracteres | Gestión de Strapi (hash + políticas de contraseña) |
| Sesión | Cookie HttpOnly, SameSite=Strict, HMAC, 7 días | Sesión del admin de Strapi |
| Recuperación de contraseña | No: la restablece un admin | Email configurable |
| Límite de intentos | 5 fallos en 10 minutos por usuario | Rate limiting configurable en el servidor |
| Superficie expuesta | Loopback + comprobación de `Origin`; sin datos de clientes | API y admin públicos; el equipo asume hardening, WAF y parches |
| Auditoría por persona | No: el historial no guarda quién | Content History (Growth) y Audit Logs (Enterprise) |
| RGPD | Solo datos de negocio; audita el enlace legal | Herramientas de la plataforma; el cumplimiento sigue siendo del responsable |

### Medios, SEO y rendimiento

| Aspecto | CMS del repo | Strapi 5 |
|---|---|---|
| Imágenes | Carpeta `src/assets/fotos`, subida y reemplazo con nombre normalizado, máximo 15 MB | Media Library con proveedor local o externo (S3, Cloudinary) |
| Borrado seguro | Bloqueado mientras alguna plantilla o pieza referencia la imagen | Alerta de relaciones, pero permite borrar y dejar referencias rotas |
| Formatos | jpg, png, webp, avif, gif y svg | Los que acepte el proveedor; conversión y transformaciones vía plugin/proveedor |
| SEO on-page | Auditoría de 11 comprobaciones sobre el `dist/index.html` construido | No hay auditoría nativa: campos propios, plugin o revisión externa |
| Datos estructurados | Comprueba que exista JSON-LD `LocalBusiness` | Se construyen en el frontend o con un plugin |
| Imagen al compartir | Genera `og.jpg` 1200×630 y guarda las 10 anteriores | Campo de imagen y transformaciones del proveedor; la tarjeta la monta el frontend |
| Sitemap y canonical | Los genera Astro en cada build | Los genera el frontend |
| Multiidioma SEO | No | i18n + campos por locale; el hreflang lo pone el frontend |
| Rendimiento de la web | HTML prerenderizado en CDN; cero consultas por visita | Depende del frontend; si es estático, se resuelve en build |
| Rendimiento del panel | Lee ficheros locales; caché por mtime | Consultas a base de datos y API |

---

## Las diferencias que importan

### 1. La verdad está en Git o en una base de datos

El CMS del repo **no tiene base de datos**. Guardar es reescribir un literal de
`site.ts`, un JSON de `secciones.json` o un fichero de plantilla; antes de cada
escritura se copia la versión anterior a `.history`, se escribe en un temporal y
se relee para verificar. Si el valor no queda como se esperaba, se restaura el
original.

Strapi guarda el contenido en una base de datos. El esquema sí vive en el
proyecto (`schema.json`), pero las entradas no: no hay diff de contenido en un
pull request ni un `git revert` que deshaga una edición.

**Consecuencia:** en el repo, contenido y código se revisan y despliegan juntos.
En Strapi, el contenido tiene su propio ciclo (borrador, publicación, historial)
y el código va por otro. Ninguno es mejor en abstracto: el primero encaja con un
equipo que ya trabaja en Git; el segundo, con alguien que no va a tocar Git
nunca.

### 2. El contenido es un fichero por web, no una entrada

Aquí cada web tiene una carpeta y un `site.ts` con un objeto `BUSINESS`. Las
piezas de portada son una lista ordenada en `secciones.json`, validada entera.
Ese formato es del repo: no hay que migrar nada para añadir un campo, pero
tampoco hay un editor de modelos.

En Strapi el modelo se define en el Content-Type Builder: un single type
«Sitio» para los datos de negocio, componentes para cada pieza y una dynamic
zone para ordenarlas. Cambiar el modelo es una operación de panel, y el esquema
resultante se versiona. A cambio, cada cambio de tipo puede necesitar migración
de datos y afecta a la API que consumen los frontends.

**Consecuencia:** el CMS del repo tiene un modelo fijo y barato; Strapi, un
modelo flexible y con coste de migración. Para 638 webs con la misma plantilla,
el modelo fijo es una ventaja, no una limitación.

### 3. Guardar no es publicar (en ninguno de los dos)

El README del CMS lo dice sin rodeos: no ejecuta el build ni despliega. Guardar
deja el cambio en el árbol de trabajo, sin commit. El deploy lo hacen Vercel y
Netlify con su `ignoreCommand`.

Strapi sí publica la entrada, pero **tampoco reconstruye la web**. En un frontend
estático como estas landings, el flujo real sería: editar en Strapi → publicar →
webhook → rebuild de la app → deploy. La diferencia es que en Strapi ese paso se
puede automatizar sin que nadie toque una terminal, y en el CMS del repo hoy no.

**Consecuencia:** ninguno de los dos es «guardar y verlo». Strapi tiene las
piezas para automatizarlo (webhooks, API); el CMS del repo tiene el build al
lado, pero fuera del panel.

### 4. API interna frente a API de producto

El CMS del repo expone un REST propio, sin tokens, que solo escucha en
`127.0.0.1` y comprueba el `Origin` de las escrituras. No está pensado para que
lo consuma nada más que su propio cliente Solid.

Strapi nace siendo API: REST y GraphQL autogeneradas, API tokens, permisos por
rol, paginación, filtros, población de relaciones, webhooks y Document Service
API. Cualquier frontend o app puede leer y escribir sin pasar por el panel.

**Consecuencia:** si mañana una app móvil o un partner tiene que leer el
contenido, el CMS del repo necesita una capa nueva; Strapi ya la trae.

### 5. Roles globales frente a permisos por contenido

El panel tiene dos roles: `admin` (todo) y `editor` (contenido, mapas, imágenes,
OG y SEO). Son globales: un editor puede tocar las 638 webs. El historial
guarda qué cambió y cuándo, pero no quién.

Strapi tiene RBAC con roles ilimitados y permisos por content-type, campo y
locale. Content History (Growth) añade autor y fecha por versión; Audit Logs
(Enterprise) registra la actividad del admin. Review Workflows (Enterprise)
añade aprobación por etapas.

**Consecuencia:** para un equipo pequeño y de confianza, dos roles bastan. En
cuanto haya clientes o varias personas editando webs distintas, la falta de
permisos por web y de autoría es el hueco más grande del panel.

### 6. Medios: carpeta con guardas frente a biblioteca

El CMS lista `src/assets/fotos`, normaliza nombres, limita a 15 MB y **bloquea
el borrado mientras haya una referencia**. Esa guarda es más estricta que la de
la mayoría de CMS.

Strapi tiene Media Library con proveedor local o externo (S3, Cloudinary),
transformaciones, metadatos y reutilización entre entradas. Es más potente y
más cómodo, y también más fácil de romper: borrar un asset referenciado deja la
referencia rota.

### 7. SEO: auditar el HTML real frente a rellenar campos

La pestaña SEO lee `dist/index.html`, no el código fuente, y comprueba título,
meta descripción, canonical, `og:image`, `twitter:card`, H1 único, `lang`,
`noindex`, enlace legal, JSON-LD y `alt` de las imágenes. Además genera la
tarjeta OG de 1200×630 desde el panel.

Strapi no trae auditoría SEO: se resuelve con campos propios, un plugin o
revisión manual, y el frontend monta las etiquetas. Es más libre y menos
guiado.

**Consecuencia:** en SEO, el CMS del repo hace más que Strapi de serie, porque
está pegado al HTML final. Strapi delega en el frontend, que es lo correcto para
un CMS headless, pero exige construirlo.

### 8. Idiomas

El repo no tiene i18n: hay una web por locale y una carpeta por web. Strapi
tiene i18n en el núcleo, con documentos y versiones independientes por locale.

**Consecuencia:** si el negocio necesita la misma web en varios idiomas con
contenido compartido, el repo duplica carpetas y Strapi lo modela de forma
nativa.

### 9. Escala: 638 webs en un panel frente a un proyecto por instancia

El panel lista las 638 webs con `site.ts` en una sola interfaz, con búsqueda,
filtros y acciones en bloque. No hay que aprovisionar nada por web.

Strapi es **un proyecto por instancia**. Para 638 webs hay dos caminos:

1. **Un proyecto con una colección «Web» de 638 entradas.** Es lo razonable:
   una sola instalación, un solo despliegue, roles y API compartidos. Exige
   modelar la relación web ↔ piezas y filtrar por web en cada build.
2. **Un proyecto por web.** 638 instalaciones, 638 bases de datos y 638
   despliegues: operativamente inviable para este caso.

Incluso en el camino 1, cada build de Astro tiene que pedir su contenido a la
API (o generarlo desde un snapshot), mientras que hoy lo lee de un fichero
local. Ese es el cambio arquitectónico real, más que el panel.

### 10. Coste y mantenimiento

- **CMS del repo:** 0 € de licencia, 0 € de infraestructura propia. Se mantiene
  con el monorepo y no tiene dependencias de terceros que actualizar. La
  superficie expuesta es prácticamente nula porque solo escucha en loopback.
- **Strapi Community:** 0 € de licencia, pero se paga en servidor, base de
  datos, copias, TLS, actualizaciones mayores y parches de seguridad. La API es
  pública y hay que endurecerla.
- **Strapi Growth:** 45 $/mes por proyecto, con 3 usuarios incluidos y +15 $ por
  usuario adicional. Añade Live Preview, Releases, Content History (14 días) y
  Strapi AI Growth.
- **Strapi Cloud:** 35 $/mes Starter (100k peticiones/mes, 50 GB, se duerme si
  está inactivo), 90 $ Pro, 450 $ Business. **El plan de hosting no incluye
  Growth**: sus funciones requieren una licencia de CMS aparte.

Para 638 webs, el coste de Strapi no escala por web si se usa un solo proyecto,
pero sí lo hace el trabajo de integración y la cuota de API si cada build
consulta el CMS.

### 11. Extensibilidad y dependencia

El CMS del repo no tiene plugins: se extiende editando `apps/cms`, que son unas
pocas funciones puras con tests. Es barato para quien es dueño del repo y un
muro para cualquier otro.

Strapi tiene mercado de plugins, custom fields, controladores y políticas. Se
extiende sin tocar el núcleo, y por eso arrastra la disciplina de actualizar
plugins y versiones.

### 12. Comercio

Ninguno de los dos vende por sí solo. El panel del repo tiene catálogo por web,
stock, carrito en el navegador y pedido por WhatsApp con el mensaje escrito; no
cobra, no calcula envíos ni guarda pedidos. Strapi no trae comercio: habría que
modelar productos y integrar una pasarela aparte.

---

## Cuándo encaja cada uno

| Necesidad | Elección razonable |
|---|---|
| Editar datos, piezas, imágenes, SEO y OG de las 638 landings desde un panel local | **CMS del repo** |
| Contenido versionado en Git y revisado en el mismo pull request que el código | **CMS del repo** |
| Cero coste de licencia e infraestructura, superficie expuesta mínima | **CMS del repo** |
| Auditar el SEO sobre el HTML construido y generar la tarjeta OG | **CMS del repo** |
| Que una persona no técnica publique sin compilar ni tocar Git | **Strapi** (con rebuild automático) |
| Permisos por web, por campo y por idioma, con autoría de cada cambio | **Strapi** (RBAC; autoría en Growth/Enterprise) |
| Frontend propio (Next, Astro, app móvil) consumiendo contenido por API | **Strapi** |
| Contenido multiidioma con documentos por locale | **Strapi** |
| Varias marcas o clientes con contenido aislado y API propia | **Strapi** |
| Vender con pagos, envíos e inventario | Ninguno: Shopify o una pasarela aparte |

---

## Qué le falta al CMS del repo para acercarse a Strapi

No es una lista de deseos: son los huecos que aparecen si el panel deja de ser
una herramienta local para el dueño del repo.

1. **Publicación integrada.** Botón de build y deploy (o webhook a Vercel y
   Netlify) y aviso de errores de sintaxis antes de guardar.
2. **Autoría y auditoría.** Guardar quién hizo cada cambio, no solo qué y
   cuándo; hoy el historial no lo registra.
3. **Permisos por web.** Los roles son globales; un cliente con una sola web
   debería ver solo esa.
4. **Vista previa del cambio, no del último build.** El iframe enseña `dist/`;
   un cambio no se ve hasta compilar.
5. **Workflow editorial.** Borradores, aprobación y publicación programada.
6. **i18n y multi-dominio** de verdad, no una carpeta por locale.
7. **API con tokens** para que otras herramientas lean y escriban sin el panel.
8. **Webhooks** para disparar rebuilds y avisos.

Lo que no conviene copiar: un mercado de plugins y un constructor visual. Eso
convierte una herramienta de unas decenas de ficheros con tests en un producto
que hay que mantener, que es exactamente lo que Strapi ya hace.

---

## Si hubiera que migrar a Strapi

Mapa de equivalencias para este repositorio:

| Hoy | En Strapi 5 |
|---|---|
| `src/data/site.ts` (`BUSINESS`) | Single type «Sitio» con campos de negocio y un componente `geo` |
| `src/data/secciones.json` | Dynamic zone «Secciones» con un componente por tipo (`hero`, `about`, `galeria`, `menu`…) |
| Validación de `lib/sections.ts` | Campos obligatorios, longitudes y validaciones del content-type + validación en el frontend |
| `src/data/tienda.json` | Collection type «Producto» relacionado con «Sitio», más un single type «Tienda» |
| `src/assets/fotos` | Media Library con proveedor local o S3/Cloudinary |
| Login y roles propios | Usuarios, roles y RBAC de Strapi |
| Historial de 20 versiones por fichero | Content History (Growth) o copias de la base de datos |
| Auditoría SEO sobre `dist/index.html` | Se mantiene en el frontend o se sustituye por un plugin; no viene en Strapi |
| Generación de `og.jpg` | Campo de imagen + transformación, o se mantiene el script |
| `apps/<slug>/dist` | Build de Astro que consulta la API con un token en tiempo de build |
| `vercel-ignore-build.mjs` | Igual, más un webhook de Strapi que dispare el rebuild de la web afectada |

Dos avisos sobre esa migración:

- **El contenido deja de estar en el repo.** Se gana autonomía del editor y se
  pierde la revisión por pull request y el `git revert` del contenido.
- **El build pasa a depender de la red.** Hoy `astro build` lee ficheros
  locales; con Strapi, cada build necesita la API disponible y un token válido.
  Si la API cae, la web no se puede reconstruir. La solución es cachear el
  contenido en el pipeline, que es complejidad nueva.

---

## Conclusión

El CMS del repo y Strapi resuelven problemas distintos. El primero es **una
herramienta de edición para un monorepo**: convierte 638 landings en formularios,
valida antes de escribir, guarda historial, audita el HTML construido y genera
tarjetas OG, todo sin base de datos y sin exponer nada. Strapi es **un backend
de contenido**: modelo editable, API pública, roles finos, i18n y flujo
editorial, a cambio de una base de datos, un servidor y un coste mensual.

Para este repositorio, el panel sigue siendo la opción correcta: el contenido
es código, el build es el mismo y el coste marginal es cero. Strapi tendría
sentido si el producto dejara de ser 638 webs casi iguales y pasara a ser un
contenido compartido entre canales, con editores que no tocan Git y permisos
distintos por cliente. En ese escenario no habría que «mejorar» el panel hasta
parecerse a Strapi: habría que migrar el contenido a Strapi y dejar que el panel
se quede con lo que hace mejor, que es el SEO, las imágenes y la miniatura OG.

---

## Fuentes

- `apps/cms/README.md`, `apps/cms/server.ts` y `apps/cms/lib/*` (estado real del
  panel: pestañas, roles, guardas, historial, SEO, OG y tienda).
- Recuento del repositorio: 638 `src/data/site.ts`, 364
  `src/data/secciones.json`, 781 apps Astro.
- [Strapi 5 — Features and plans](https://docs.strapi.io/cms/features),
  consultado el 7 de noviembre de 2026: Community, Growth y Enterprise; qué
  incluye cada plan; Content History, Releases, SSO, Audit Logs y Review
  Workflows.
- [Strapi — CMS pricing](https://strapi.io/pricing-cms), consultado el 7 de
  noviembre de 2026: Community gratis, Growth 45 $/mes con 3 usuarios y
  +15 $/usuario, Enterprise a consultar.
- [Strapi — Cloud pricing](https://strapi.io/pricing-cloud), consultado el 7 de
  noviembre de 2026: Starter 35 $/mes por proyecto, Pro 90 $, Business 450 $;
  el hosting no incluye las funciones de Growth.
- [Strapi 5 — Draft & Publish](https://docs.strapi.io/cms/features/draft-and-publish)
  y [Content History](https://docs.strapi.io/cms/features/content-history).
