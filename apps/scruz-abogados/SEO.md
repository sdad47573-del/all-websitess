# 🎯 SEO — Documento único de trabajo · Scruz Abogados

> **Última verificación: 5 oct 2026.** Este es el **único documento SEO del repo**: sustituye a
> los 9 documentos anteriores (`SEO-SUMMARY`, `SEO-IMPROVEMENTS`, `SEO-ROADMAP-2026`, `SEO-ANALISIS-GSC-SEP-2026`,
> `SEO-COMPETENCIA-CLICKS-SEP-2026`, `SEO-CONTENT-STRATEGY`, `CALENDARIO-CONTENIDO`, `CHECKLIST-LANZAMIENTO-SEO`,
> `Untitled-1`), que se borraron por contener afirmaciones ya falsas. Todos son recuperables con
> `git log --diff-filter=D --name-only` si hace falta el detalle de una sesión concreta.
>
> **Fuente de datos crudos:** `google_search/*.csv` (exporte de Search Console del **5 oct 2026**, período **últimos 16 meses: 20 oct 2025 – 3 oct 2026**).
> Ojo al leerlo: `Consultas.csv` y `Páginas.csv` cubren **todo el periodo** (13.410 impresiones, 102 clics), pero las
> **posiciones de ese exporte son la media de 16 meses** y mezclan los rankings de hace un año con los de hoy.
> Para decidir hay que recortar con `Gráfico.csv`, que sí va día a día: **los últimos 30 días (4 sep – 3 oct) son 6.114 impresiones y 63 clics (CTR 1,03 %)**.
> Los SERPs de competencia citados se capturaron en vivo el **9 sep 2026** y no se han vuelto a medir: tómalos como foto de esa fecha.

---

## 0. Estado del sitio (verificado hoy)

| Qué | Valor |
|---|---|
| Dominio | `https://sergiocruzchacon.vercel.app` — **URL principal y única** |
| Páginas construidas | **286 HTML** en el build, de las que 7 son herramientas con datos verificados (ver §9). Las **landings de ciudad** son **33**, todas con contenido propio: 29 en `src/data/cities/` (una por archivo) + 4 escritas a mano (Lucena, Málaga, Rute y Aracena). Hasta sep 2026, 25 las generaba una única plantilla y se retiraron por duplicación (ver §8) |
| Artículos de blog | **236** (`src/data/BLOG_POSTS.ts`: 71 manuales + 165 de `SEO_ARTICLES_*.ts`) |
| Indexabilidad | 98/98 con `robots: index, follow`, canonical absoluta y autorreferente, **0 páginas huérfanas** (mínimo 3 enlaces internos entrantes por página) · verificado en cada `bun run qa` por `scripts/check-link-graph.mjs` |
| QA | `bun run qa` → 0 enlaces rotos · 286 bloques JSON-LD válidos (ninguno oculto) · 0 kickers desalineados de su categoría · grafo de enlaces sin huérfanas, sin rutas no canónicas y con profundidad ≤2 · titles/descriptions únicos · **Jaccard entre plazas ≤ 0,75** |
| Verificación de Google | `public/googleb66e6f1e77552479.html` (sirve en el build) |
| Crawlers de IA | Permitidos en `robots.txt` + `/llms.txt` y `/llms-full.txt` generados en el build |

### Dónde vive cada cosa (una sola fuente de verdad)

| Dato | Fichero | De ahí sale |
|---|---|---|
| Dominio | `src/data/site.ts` → `SITE_URL` | canonical, sitemap, schema, OG, `llms.txt` y el aviso legal |
| title/description/keywords por ruta | `src/data/seo.ts` → `ROUTE_DEFAULTS` | `<head>` de cada página |
| NAP, schema base, logo, horarios, reseñas | `src/data/seo.ts` | JSON-LD `@graph` |
| Catálogo de servicios | `src/data/SERVICES.ts` | `/servicios/`, home, buscador, `OfferCatalog` |
| Blog (índice + home) | `src/data/BLOG_POSTS.ts` | índice del blog y sección de la home |
| Categorías del blog (hubs) | `src/data/BLOG_CATEGORIES.ts` | `/blog/categoria/<área>/`, chips del índice y enlace desde cada artículo |
| Prioridades del sitemap | `astro.config.mjs` | `sitemap-0.xml` |
| Sitemap declarado | `public/robots.txt` | descubrimiento por crawlers |

### Al añadir o cambiar una página

1. La página `.astro` (props exactas de title/description).
2. `ROUTE_DEFAULTS` en `src/data/seo.ts`.
3. `SERVICES.ts` si es un servicio (catálogo, home, buscador).
4. `BLOG_POSTS.ts` si es un artículo (índice + home). Su categoría mantiene los hubs de `/blog/categoria/` al día sola; para que una categoría estrene hub necesita 3 guías **y** su copy en `BLOG_CATEGORIES.ts`. El kicker visible del artículo (el `<p>` que abre el `<article>`) debe empezar por el nombre exacto de su categoría y, si se quiere, añadir después el matiz local (`Derecho Laboral · Despidos · Lucena`): `bun run qa` falla si no coinciden.
5. `astro.config.mjs` solo si necesita prioridad propia en el sitemap.
6. Enlazarla desde el contenido de otras páginas (su hub + 2-3 contextos reales): `bun run qa` falla si queda huérfana, si la profundidad de clic pasa de 2 o si el catálogo de `SERVICES.ts` deja de estar enlazado desde `/servicios/`.
7. Verificar: `bun run qa` (enlaces, grafo interno, JSON-LD visible, titles) y `bun run check` (tipos y lint).

---

## 1. Indexación: qué falta para aparecer en Google

El sitio **ya es indexable** (verificado en §0). Lo que falta es operativo, no de código.

### Google (la vía que importa)

```sh
# 1) subir el sitemap (necesita OAuth: ver más abajo)
bun run search-console:sitemaps -- submit --feed https://sergiocruzchacon.vercel.app/sitemap-index.xml

# 2) pedir indexación de URLs concretas y ver su estado
bun run search-console:inspect -- https://sergiocruzchacon.vercel.app/consumo/
bun run search-console:inspect-new      # las 24 URLs nuevas del ciclo (clústeres, hubs y oportunidades del §3)

# 3) qué páginas reciben impresiones y cuáles siguen sin indexarse
bun run search-console:performance -- --days 28 --dimension page
```

- **No existe un ping genérico para Google** (el endpoint de ping de sitemaps se retiró en 2023). El sitemap ya está declarado en `robots.txt`; la palanca real es Search Console.
- La **solicitud de indexación** de una URL concreta solo se puede hacer en la UI de GSC (la API no la expone): Inspección de URL → «Solicitar indexación», máximo ~10/día.
- **OAuth (una sola vez):** Google Cloud → habilitar Search Console API → cliente OAuth de tipo *Desktop app* con callback `http://127.0.0.1:43117/oauth2callback` → `.env` con `GOOGLE_SEARCH_CONSOLE_CLIENT_ID` y `GOOGLE_SEARCH_CONSOLE_CLIENT_SECRET` → `bun run search-console:auth`. El token se guarda fuera del repo.
- La propiedad del despacho es `https://sergiocruzchacon.vercel.app/` (se puede fijar con `GOOGLE_SEARCH_CONSOLE_PROPERTY`).

### Bing, Yandex, Seznam y Naver (IndexNow)

```sh
bun run indexnow:dry   # previsualiza las 106 URLs
bun run indexnow       # las envía
```

- **Google no participa en IndexNow.** Es un canal complementario.
- La clave vive en `public/<clave>.txt` (debe ser accesible en `https://<host>/<clave>.txt`): ese fichero es la única fuente de verdad y el script la autodetecta.
- **Ejecutar después de desplegar, no antes:** IndexNow actualiza Bing/Yandex con los cambios recientes (nuevos titles/description incluidos).
- **Automatizado con `--if-live`:** `bun run notify` (build + envío) comprueba antes que la clave se descarga del host y, si no, sale con código 0 sin enviar nada. Así `.github/workflows/indexnow.yml` puede dispararse en cuanto Vercel termina el deploy sin posibilidad de romper el build.

### Plan de indexación día a día (106 URLs · 10 días)

> **Actualización 21 sep 2026:** el ciclo de abajo sigue siendo el orden correcto para el resto del sitio, pero
> las 20 URLs nuevas (`empresas/constitucion-sociedades/`, las 6 guías del clúster de Empresas (con mutualidades),
> las 3 de Urbanismo (con legalización), bajas laborales, okupas, responsabilidad patrimonial, daños y perjuicios,
> resolución de contratos, silencio administrativo, prórroga del TIE, multas penales, medidas paterno-filiales,
> procedimiento sancionador y los 4 hubs de categoría nuevos — urbanismo, recursos-administrativos, extranjería
> y derecho-penal) van **primero**: están en el sitemap y en `inspect-new`, y no tienen ni una impresión todavía.

Las 97 URLs del sitemap, repartidas en 10 días a ~10/día (el máximo práctico de la UI de GSC). El orden
no es alfabético: primero lo que **ya recibe impresiones** (Google lo conoce y solo hay que empujarlo),
después las landings de servicio, después el blog y al final las legales.

- **Volumen** = impresiones de esa URL en GSC (12 meses) **+** impresiones de las consultas que ataca en ese mismo exporte.
  Entre paréntesis, la parte que viene de las consultas (el resto es lo que GSC atribuye ya a esa URL).
- **`—`** = esa URL no ha recibido **ni una impresión en 12 meses**. Son 83 de 94, y son justo las que más
  justifican la petición: desde fuera no hay forma de saber si Google las ha rastreado.

#### Día 1 — las que ya rankean

| URL | Volumen | Consultas que ataca |
|---|---|---|
| `/` | **7.080** · 39 clics | home, marca y toda la cola larga local |
| `/derecho-civil/` | **1.008** (143 propias) | abogado civil lucena (385) · responsabilidad civil lucena (303) · contratos lucena (121+18) |
| `/abogados-en-lucena/` | 550 | abogado lucena (154) · abogado en lucena (89) · abogados en lucena (82) · abogada lucena (77) |
| `/recursos-administrativos/` | 367 | urbanismo lucena (172) · resp. patrimonial (84) · sancionador (63) · recursos adm. (48) |
| `/divorcios-separaciones/` | 366 (126 propias) | abogados divorcios lucena (122) · familia lucena (79) · abogado divorcio lucena (32) |
| `/seguros-agrarios/` | 253 | abogado seguros en lucena (220) · seguros agrarios lucena (27) |
| `/herencias-testamentos/` | 236 (9 propias) | herencias lucena (149) · testamentos lucena (35) · abogado testamentos (20) |
| `/consumo/` | 221 | abogado consumo lucena (221) |
| `/indemnizaciones-trafico/` | 173 | accidentes tráfico lucena (168) |
| `/derecho-penal/` | 164 (74 propias) | penalista lucena (76) · penal en lucena (13) |

#### Día 2 — resto de landings de servicio

| URL | Volumen | Consultas que ataca |
|---|---|---|
| `/violencia-genero/` | 152 (51 propias) | violencia de género lucena (97) · mujeres maltratadas Córdoba (3) |
| `/blog/sergio-cruz-chacon-abogado/` | 139 | **marca**: abogado (43) · sergio abogado (26) · cruz chacon (3) · sergio chacon (1)… (hoy las comparte con la home) |
| `/guarda-custodia/` | 109 | guarda y custodia (46) · medidas paterno filiales (28) · custodia hijos (18) · visitas (17) |
| `/empresas/` | 95 | abogado empresa lucena (82) · mercantil lucena (11) |
| `/despidos/` | 41 | despidos en lucena (24) · laboralista lucena (4) · acoso laboral (5) |
| `/cobro-deudas-impagos/` | 32 | reclamación de pensión (22) · reclamaciones de cantidad (9) |
| `/liquidacion-gananciales/` | 26 | liquidación de gananciales lucena (26) |
| `/compraventas-empresas/` | 25 (14 propias) | compraventa de empresas (7+2+2) · en liquidación (2) |
| `/nacionalidad-extranjeria/` | 17 | sin consulta asignable: son impresiones directas de la URL |
| `/incapacidad-permanente/` | 13 | incapacidad en baena (11) · discapacidad (2) |
| `/urbanismo/` | — (**nueva**) | **abogado urbanismo lucena** (172 imp en 12 meses: la consulta que motivó la landing) |

#### Día 3 — hubs, marca y colas menores

| URL | Volumen |
|---|---|
| `/servicios/` · `/quienes-somos/` · `/trayectoria/` · `/faq/` · `/blog/` | — (hubs: reparten autoridad, no compiten) |
| 10 hubs de categoría: `/blog/categoria/seguridad-social/`, `/derecho-laboral/`, `/derecho-de-familia/`, `/derecho-civil/`, `/herencias/`, `/consumo-y-banca/`, `/accidentes-de-trafico/`, `/empresas/`, `/seguros/`, `/violencia-de-genero/` | — (agrupan las guías por área; salen de `BLOG_CATEGORIES.ts`) |
| `/ubicaciones/` | 3 |
| `/abogados-en-malaga/` | 3 (desahucio málaga 2) |
| `/reclamaciones-bancarias/` | 2 (reclamación al banco 1) |
| `/abogados-en-rute/` | 1 (abogado en rute) |
| `/accidente-laboral/` | 1 |

#### Días 4 a 8 — el blog (43 URLs)

Ninguna de estas URLs ha recibido una sola impresión en 12 meses (volumen `—` en todas). El orden es por
intención comercial, no por fecha.

- **Día 4 · laboral y familia** — `/blog/despido-improcedente/`, `/blog/cuanto-cuesta-un-divorcio/`,
  `/blog/custodia-compartida-cordoba/`, `/blog/regimen-de-visitas/`, `/blog/pension-de-alimentos/`,
  `/blog/divorcio-mutuo-acuerdo/`, `/blog/incapacidad-permanente/`, `/blog/jornada-375-horas/`,
  `/blog/novedades-laborales-2026/`, `/blog/accidente-laboral-cordoba/`
- **Día 5 · civil, sucesiones y tráfico** — `/blog/herencia-sin-testamento/`, `/blog/herencias-entre-hermanos/`,
  `/blog/impuesto-sucesiones-andalucia/`, `/blog/testamento-online-cordoba/`, `/blog/indemnizacion-accidente-trafico/`,
  `/blog/baremo-lesiones-2026/`, `/blog/errores-accidente-trafico/`, `/blog/contratos-lucena/`,
  `/blog/desahucio-por-impago-lucena/`, `/blog/zonas-tensionadas-alquiler/`
- **Día 6 · consumo, banca, seguros y urbanismo** — `/blog/tarjetas-revolving-usura/`, `/blog/clausula-suelo-irph/`,
  `/blog/reclamacion-deudas-monitorio/`, `/blog/reclamaciones-consumo-lucena/`, `/blog/reclamaciones-seguro-hogar/`,
  `/blog/reforma-ley-consumidores/`, `/blog/seguro-cultivos-agroseguro/`, `/blog/reclamar-agroseguro/`,
  `/blog/recurso-administrativo-guia/`, `/blog/licencia-obra-menor-declaracion-responsable/`,
  `/blog/crear-empresa-andalucia/`
- **Día 7 · empresa, penal y extranjería** — `/blog/responsabilidad-administradores-sl/`,
  `/blog/verifactu-facturacion-electronica/`, `/blog/transparencia-retributiva/`,
  `/blog/nueva-ley-prevencion-riesgos-laborales/`, `/blog/masc-negociacion-obligatoria/`, `/blog/denuncias-falsas/`,
  `/blog/derechos-del-detenido/`, `/blog/asistencia-violencia-genero/`, `/blog/orden-proteccion-medidas/`,
  `/blog/denuncia-violencia-genero/`, `/blog/nacionalidad-espana-examen/`
- **Día 8 · prestaciones y legales** — `/blog/sanidad-extranjeros-sin-residencia/`,
  `/blog/reforma-discapacidad-dependencia/`, `/blog/complemento-nacimiento-adopcion/`,
  `/complemento-paternidad-maternidad/`, `/blog/jubilacion-2027/`, `/blog/novedades-pensiones-2027/`,
  `/blog/alquilar-piso-malaga/`, `/blog/tramites-legales-rute/`, `/aviso-legal/`, `/politica-de-privacidad/`,
  `/declaracion-de-accesibilidad/`

#### Antes y después

1. **IndexNow primero**: envía las 97 de golpe (`bun run indexnow`), no tiene cuota. Cubre Bing/Yandex, no Google.
2. **Los 9 días de GSC** son solo las peticiones manuales de indexación (UI → Inspección de URL → Solicitar indexación).
3. **A los 30 días, medir** qué cambió: `bun run search-console:performance -- --days 30 --dimension page`.
   El resultado esperado no son clics, sino pasar de 11 a ~40-50 URLs con impresiones.

> ✅ **Hueco de contenido cubierto (sep 2026):** `abogado urbanismo lucena` tenía **172 impresiones**
y la mejor posición de la web era 20,3 porque **no existía página de urbanismo**: la cubrían de refilón
`/derecho-civil/` y `/recursos-administrativos/`. Ya está publicada la landing `/urbanismo/` (ver §5),
enlazada desde `/servicios/`, `/derecho-civil/`, `/recursos-administrativos/` y la guía de recursos
administrativos. Lo que queda es operativo: pedir su indexación y medir el efecto a 30 días.

---

## 2. Pendientes operativos (fuera del repo) — por orden de impacto

Ninguno se resuelve con código. El cuello de botella es **autoridad y señales locales**, no on-page.

- [ ] **1. Desplegar el build actual a Vercel** — incluye los titles/descriptions reescritos y la og:image 1200×630 (sep 2026); nada de lo construido existe en producción hasta entonces.
- [ ] **2. Google Search Console**: verificar la propiedad (el fichero de verificación ya está en el build), subir el sitemap y **solicitar indexación** siguiendo el plan de 8 días de §1.
- [ ] **3. Google Business Profile al 100 %** — **el mayor multiplicador de clics**: el pack local captura un 30–50 % de los clics de «abogado lucena» *antes* que el orgánico.
  - [ ] **Aceptar la invitación de colaborador pendiente** (sin eso no se puede gestionar el perfil)
  - [ ] Categoría principal **Abogado** + secundarias (familia, penalista, laboralista)
  - [ ] NAP exacto: Sergio Cruz Chacón · C. El Agua, 19, 1º Izq. · 14900 Lucena · 666 329 155
  - [ ] Horarios reales (L-V 9:00-18:00) + atributo de urgencias · 10+ fotos · servicios publicados
  - [ ] Web: `https://sergiocruzchacon.vercel.app` · Reservas: `https://wa.me/34666329155`
  - [ ] **Publicación semanal** · responder a TODAS las reseñas
- [ ] **4. Reseñas en Google: de 1 a 10-15** (objetivo 60 días: media ≥ 4,8). Con 1 reseña no se activa el rich snippet de estrellas.
  - **Estado verificado in situ (21 sep 2026):** la ficha existe y está activa — *Abogado Sergio Cruz Chacón*, C. el Agua 19, 14900 Lucena · 666 32 91 55 · «Abierto 24 horas» · **5,0 ★★★★★** · web enlazada a sergiocruzchacon.vercel.app. La lista de reseñas no es visible sin sesión iniciada (vista limitada de Maps), así que los textos solo se pueden copiar desde la sesión de Sergio. La única reseña publicada («elizabeth blu», 5★) ya está en `REVIEWS.ts`.
  - **Enlace directo para pedir reseña** (derivado del CID de la ficha): `https://g.page/r/10222328501326924913/review` — al abrirlo con sesión de Google muestra la ficha con el diálogo de estrellas. Verificar una vez desde el GBP (botón «Compartir») y usar siempre ese. Alternativa con Place ID: `https://search.google.com/local/writereview?placeid=<PLACE_ID>`.
  - Plantilla WhatsApp: *«Hola [nombre], nos alegra haber resuelto tu caso. Si quieres ayudarnos, déjanos una reseña en Google: es un minuto y nos ayuda muchísimo a llegar a más gente de Lucena. ¡Gracias! [enlace]»*
  - Pedirla en el momento de mayor satisfacción (cierre exitoso del caso), nunca a cambio de nada: reseñas incentivadas violan las políticas de Google.
  - **Dónde añadirlas**: `src/data/REVIEWS.ts` (texto exacto de Google, autor, estrellas y, si se conoce, la fecha). De esa única lista salen las tarjetas de portada **y** el `aggregateRating`/`review` del JSON-LD: la media y el total se recalculan en cada build, así que no hay que tocar el schema a mano.
  - Hasta la 2ª reseña la portada muestra todas como tarjetas; a partir de la 3ª, subir `VISIBLE_REVIEWS` en el mismo archivo implica revisar el layout de la sección (`GoogleReviews.astro`).
  - **A las 3 reseñas**: comprobar en GSC (Aspecto → Datos estructurados) que las estrellas salen en los resultados y que el JSON-LD no da errores.
  - ⚠️ Nunca inventar reseñas: Google penaliza el rating manipulado y elimina el pack local.
- [ ] **5. Fichas de directorio donde Sergio ya aparece** (elabogado.com, melendos.es, lexgoapp, icalucena): foto, especialidades, teléfono y **enlace a la web**.
  - Motivo medido: **Sergio ya rankea #1 en «abogados derecho civil lucena» a través de su ficha de elabogado.com**, no de la web propia. Completar esas fichas convierte más de esos clics en contacto real.
- [ ] **6. Backlinks locales** (el colegio de abogados, ayuntamiento de Lucena, Cámara de Comercio, prensa local, Páginas Amarillas/Infoisinfo/Yelp). 5-10 enlaces locales de calidad valen más que 100 de granjas.
- [ ] **7. Dominio propio** — paso **futuro**; hoy todo está configurado para el vercel.app. Ver §6.

---

## 3. Datos de partida (GSC, exporte del 5 oct 2026)

**Hay que leer el exporte en dos tramos.** Las posiciones de `Consultas.csv` son la media de 16 meses;
el día a día de `Gráfico.csv` es lo que dice cómo va la web ahora.

| Métrica | Últimos 30 días (4 sep – 3 oct) | Mes de septiembre | 16 meses |
|---|---|---|---|
| Impresiones | **6.114** | 4.781 | 13.410 |
| Clics | **63** | 57 | 102 |
| CTR | **1,03 %** | 1,19 % | 0,76 % |

**El deploy del 21 de septiembre hizo lo que se esperaba de él: multiplicó las impresiones.** Los 30 días
anteriores (5 ago – 3 sep) fueron **666 impresiones y 3 clics (0,45 %)**; los 30 siguientes (4 sep – 3 oct),
**6.114 impresiones y 63 clics (1,03 %)**: ×9 en impresiones y ×21 en clics. La serie mensual de clics es
1 (jun) → 5 (jul) → 3 (ago) → **57 (sep)** → 6 en los tres primeros días de octubre. El CTR se multiplicó
por 2,3 mientras el volumen se multiplicaba por 9: eso solo pasa cuando los titles/descriptions del 21 sep
funcionan.

**Pero el crecimiento es de cobertura, no de ranking, y las dos cosas se ven juntas en el gráfico.** Del 15
al 24 de septiembre la media diaria era de ~180 impresiones con posición media 12-15 y CTR 1,4-1,9 %; del 28
de septiembre al 3 de octubre sube a **~500 impresiones diarias**, pero la posición media se va a 23-29 y el
CTR cae al 0,8-1 %. No es un retroceso: es el efecto de que las 22 guías y las 25 plazas nuevas (21 y 24 de
sep) empiecen a aparecer en el índice **en posiciones 20-90**, que suman impresiones y hunden la media. La
lectura correcta: **el sitio ya no compite solo con 17 URLs — hay 128 URLs con impresiones** (contra 11 en el
exporte de mediados de septiembre), y las que asoman lo hacen muy abajo.

**El cuello sigue siendo el CTR de lo que ya rankea, no el ranking.** En el exporte completo hay **3.860
impresiones en consultas con cero clics**, 48 de ellas con 15 o más impresiones (tabla de abajo). El caso más
claro sigue siendo `abogado testamentos lucena`: **35 impresiones con una media de posición 1,71 y ningún
clic**. Un puesto 1-2 sin un solo clic es un problema de snippet o de pack local, no de posicionamiento.

**Móvil y ordenador cuentan historias distintas.** Móvil: 4.205 impresiones, 51 clics, CTR 1,21 % y posición
media **8,27**. Ordenador: 9.143 impresiones, 50 clics, CTR 0,55 % y posición media **26,79**. La web rankea
muchísimo mejor en móvil que en escritorio (mitad de impresiones, los mismos clics), que es lo contrario de
lo habitual y apunta a que en escritorio los SERPs locales están copados por directorios y portales, donde
una web de despacho necesita una autoridad que hoy no tiene. Se mide; no se arregla con código.

**Reparto de las impresiones que se quedan sin clic** (las 19 consultas de más volumen con 0 clics en 16 meses):

| Consulta | Impr. | Pos. | Página que debe posicionar |
|---|---|---|---|
| `abogado civil lucena` | 399 | 17,8 | `/derecho-civil/` |
| `abogado responsabilidad civil lucena` | 307 | 32,6 | `/responsabilidad-civil/` |
| `abogado seguros en lucena` | 241 | 29,9 | `/reclamaciones-seguros/` |
| `abogado consumo lucena` | 231 | 31,7 | `/consumo/` |
| `agroseguro` | 173 | 15,7 | `/blog/seguro-cultivos-agroseguro/` + `/seguros-agrarios/` |
| `abogado urbanismo lucena` | 172 | 20,3 | `/urbanismo/` |
| `abogado accidentes tráfico lucena` | 168 | 28,6 | `/indemnizaciones-trafico/` |
| `abogado lucena` | 157 | 14,7 | `/abogados-en-lucena/` + home |
| `abogado herencias lucena` | 149 | 15,4 | `/herencias-testamentos/` |
| `abogado contratos lucena` (+ redacción y revisión) | 124 (+18) | 49,1 | `/contratos-comerciales/` |
| `abogado divorcios lucena` | 122 | 21,5 | `/divorcios-separaciones/` |
| `abogado asesoría jurídica general lucena` | 113 | 30,7 | `/servicios/` |
| `abogado violencia de género lucena` | 111 | 48,7 | `/violencia-genero/` |
| `abogada lucena` (+ `abogada en lucena`) | 96 | 23,8 / 13,7 | `/abogados-en-lucena/` |
| `abogado responsabilidad patrimonial lucena` | 91 | 77,4 | `/recursos-administrativos/` |
| `abogados en lucena` | 89 | 15,0 | `/abogados-en-lucena/` |
| `abogado empresa lucena` | 82 | 26,5 | `/empresas/` |
| `abogado familia lucena` | 79 | 19,2 | `/divorcios-separaciones/` |
| `abogado penalista lucena` | 76 | 20,1 | `/derecho-penal/` |

La familia «abogado X lucena» suma ~1.500 impresiones. **Aviso importante:** en casi todas, Google está
eligiendo la **home**, no la landing de servicio (`abogado testamentos lucena` sale a 1,71 desde la home
mientras `/herencias-testamentos/` está en el 33; `abogado civil lucena` a 17,8 desde la home mientras
`/derecho-civil/` está en el 59). Los titles de esas landings **sí contienen su término principal**, así que
**no es un problema de snippet sino de asignación**: la home se lleva las consultas de cabecera porque tiene
más autoridad. Corregirlo es trabajo de **enlazado interno** (anchor text exacto hacia la landing) y está
**aplazado a después del 21 de octubre** a propósito: tocarlo ahora mezclaría dos variables y no sabríamos
cuál de las dos movió los números.

### Lote del 5 de octubre de 2026 (y por qué no contamina la medición del 21)

El exporte del 5 oct añade un hecho nuevo al diagnóstico: de las **128 URLs con impresiones**, solo **17 son
páginas de servicio**; el resto es el blog y la home. Casi todas las landings del **lote genérico de
`SeoLegalPage`** (`/responsabilidad-civil/`, `/reclamaciones-seguros/`, `/contratos-comerciales/`,
`/pension-de-alimentos/`, `/reclamacion-pensiones/`, `/desahucio-por-impago/`, `/reconocimiento-paternidad/`,
`/reclamacion-jubilacion/`…) tienen **ni una impresión en 16 meses**, mientras las consultas que atacan suman
cientos de impresiones sin clic. Sus titles eran del tipo *«Abogados para contratos comerciales»*: sin
Lucena, sin marca, sin teléfono y sin el término comercial exacto de la consulta.

**Reescritos el 5 oct 2026** (title y description, con el patrón que ya funciona en el resto del sitio:
`Abogado de <especialidad> en Lucena | <gancho>` + description con Lucena/Córdoba, consulta gratuita y
666 329 155):

| Página | Consulta objetivo (impresiones · posición media 16 meses) |
|---|---|
| `/responsabilidad-civil/` | `abogado responsabilidad civil lucena` (307 · 32,6) |
| `/reclamaciones-seguros/` | `abogado seguros en lucena` (241 · 29,9); `/seguros-agrarios/` se queda con `agroseguro` (173 · 15,7) |
| `/contratos-comerciales/` | `abogado contratos lucena` (124+18 · 49,1) |
| `/pension-de-alimentos/` | `pensión de alimentos córdoba` (20 · 10,2) y `pensión de alimentos` (17 · 9,4) |
| `/reclamacion-pensiones/` | `abogado reclamación de pensión lucena` (30 · 67,9) |
| `/desahucio-por-impago/` | `desahucio por impago lucena` (5 · 7,2) |
| `/reconocimiento-paternidad/` | `reconocimiento paternidad` (17 · 21,0) |
| `/reclamacion-jubilacion/` | `reclamar pensión jubilación` (12 · 9,8) |
| `/servicios/` | `abogado asesoría jurídica general lucena` (113 · 30,7) + `asesoría legal en lucena` (14 · 18,6) |
| `/abogados-en-lucena/` | `despacho de abogados en lucena` (29 · 17,7) + `abogada lucena` (77 · 23,8) |

Y las **13 restantes del mismo lote genérico**, con el mismo patrón:

| Página | Consulta objetivo |
|---|---|
| `/incumplimiento-contrato/` | `incumplimiento de contrato` (5 · 26,4) · `resolución de contrato por incumplimiento` (3 · 15,7) |
| `/modificacion-medidas-paterno-filiales/` | `abogado medidas paterno filiales lucena` (35 · 72,2) · `medidas paterno filiales` (10 · 33,4) |
| `/reclamacion-comisiones-laborales/` | `como reclamar comisiones laborales` (9 · 3,6) · `reclamar comisiones` (4 · 3) |
| `/disputas-herencias/` | `partición de herencia en córdoba` (5 · **3,4**) · `testamentos y herencias córdoba` (13 · 36) · `herencias con testamento córdoba` (9 · 45,6) |
| `/licencias-de-actividad/` | `licencias de bar` (4 · 9) · `licencias de actividades` (3 · 12,7) |
| `/contratos-laborales/` | revisión de contratos, cambios de condiciones e impagos |
| `/jubilacion-parcial/` | `jubilación parcial con contrato relevo a partir de 2027` (1 · 13) |
| `/reclamacion-dividendos/` | dividendos y derechos económicos del socio (sin consultas aún) |
| `/modificacion-estatutos-sociedad/` | objeto, capital y administradores (sin consultas aún) |
| `/nulidad-contrato/` | nulidad de contrato y de cláusulas (sin consultas aún) |
| `/tutela-legal/` | tutela de menores y de adultos (sin consultas aún) |
| `/impugnacion-sanciones-administrativas/` | `abogado sanciones administrativas` (1 · 27) · `expediente sancionador` (1 · 44) — **no** `abogado procedimiento sancionador lucena`, que es de la guía del blog |
| `/alquiler-viviendas/` | `abogados para problemas de alquiler` (1 · 15) — ángulo fianza/obras/daños, sin pisar el desahucio de `/desahucio-por-impago/` |

**Y un tercer cambio, este sí sobre una página que ya rankea.** `/blog/jubilacion-2027/` (318 impresiones,
6 clics, posición media 9,6) es el dueño natural de la familia `tabla de jubilación por años cotizados`:
**~60 impresiones entre las posiciones 8 y 25 con cero clics** (26 · 14,7 y 6 · 22,5, más catorce variantes
de «tabla de edad de jubilación»). La tabla ya estaba en la página —el problema era el snippet—: el H2 pasa
a *«Tabla de jubilación por años cotizados (la oficial)»* y la description arranca con esa misma frase. **El
title no se toca.**

También se han corregido cuatro erratas preexistentes en páginas de este lote, dos de ellas dentro del
`FAQPage` que Google lee: «lacka» → «carece» (`/nulidad-contrato/`), «budgetary» → «presupuesto»
(`/jubilacion-parcial/`), «se ha produjo» → «se ha producido» (`/modificacion-medidas-paterno-filiales/`) y
«disposonga» → «disponga» (`/disputas-herencias/`).

Ninguna de las diez primeras tiene una sola impresión en el exporte, así que **no hay variable que mezclar**: la
medición del 21 de octubre sigue siendo la de la home, `/derecho-civil/`, `/divorcios-separaciones/`,
`/derecho-penal/` y el resto del lote del 21 de septiembre, que **no se han vuelto a tocar**.

**La única excepción es el artículo de testamentos.** `/blog/testamento-online-cordoba/` (160 impresiones,
0 clics, posición media 29,2) se ha ampliado el 5 oct con la comparativa de tipos de testamento (abierto ante
notario, cerrado y ológrafo), el aviso de que el **mancomunado no cabe en Andalucía** y el detalle del notario
y del precio en Córdoba, más un `dateModified` nuevo. Motivo: alrededor de esa guía hay **~120 impresiones
repartidas en posiciones 6-34 sin un clic** (`testamento online córdoba` 21 · 21,5; `testamento cerrado
córdoba` 19 · 19,1; `notario para testamentos en córdoba` 14 · 25,7; `testamento notaría córdoba` 11 · 19,8;
`testamento notarial` 11 · 27,1; `precio testamento córdoba` 10 · 33,8; `testamento mancomunado córdoba`
9 · 34,4; `examen nacionalidad española` aparte; `testamento ológrafo córdoba` 8 · 6,5) y **no había ni una
página que nombrara el testamento cerrado o el mancomunado**. Es contenido nuevo sobre una página existente,
no un cambio de title de una página en medición, pero conviene saberlo al leer el próximo exporte.

**Y el mismo día, profundidad de contenido en las 21 landings.** Un title nuevo sobre cuatro párrafos
genéricos no compite para nada: las 21 landings del lote genérico pasan de **4 a 7 secciones** y de **4 a 5
preguntas frecuentes** cada una. No es una plantilla repetida: cada página recibe tres bloques propios de su
materia (en `/responsabilidad-civil/`: cuantificación del daño, plazos y casos típicos de la comarca; en
`/reclamaciones-seguros/`: reclamación paso a paso, peritaje contradictorio y el artículo 20 de la LCS; en
`/desahucio-por-impago/`: requerimiento previo, monitorio de rentas frente a desahucio y defensa del
inquilino; en `/tutela-legal/`: cuándo se necesita tutor, el procedimiento y el control de la tutela…).
Reglas respetadas en las **63 secciones y 21 FAQs nuevas**: ninguna cifra, cuantía, plazo exacto ni artículo
legal que no estuviera ya en el sitio (los plazos se describen de forma cualitativa) y ningún párrafo
reciclado entre páginas — comprobado con un barrido de similitud sobre el texto generado (**0 frases de más
de 55 caracteres repetidas** entre las 21 páginas).

> Efecto en la medición: estas 21 páginas siguen teniendo **0 impresiones**, así que la comparación del 21 de
> octubre no se ve afectada. Lo único que cambia en el build es el `FAQPage` de cada una (de 4 a 5 preguntas,
> todas visibles en la página, que es lo que valida `scripts/check-links.mjs`).
> Se han corregido además 6 defectos preexistentes detectados de paso: «firparse», una FAQ sin «¿» y «extingciones»,
> «puede judicial» (sin «ser»), «la prestación posteriormente» y una FAQ ininteligible sobre «socios no
> conectados» (`/reclamacion-dividendos/`), más dos `related` que apuntaban a la propia página o repetían la
> misma URL (`/contratos-laborales/` y `/reclamacion-comisiones-laborales/`).

### Pasada de CTR: que el clic lo gane el snippet (5 oct 2026)

El `<head>` ya emite todo lo que Google usa **alrededor** del snippet: breadcrumbs (`BreadcrumbList`), fecha
(`article:published_time` / `article:modified_time`), `max-image-preview:large`, `max-snippet:-1`, sitelinks
searchbox (`WebSite` + `SearchAction` sobre `/buscar/`) y el `og:site_name` del nombre del despacho. Lo único
que quedaba por mejorar era **el texto del snippet**, que es lo que decide el clic.

Criterio: no se ha tocado la home ni las landings de servicio "por si acaso", sino las páginas donde la
posición **ya** es buena y el CTR no la acompaña. Todas las descripciones quedan entre 129 y 152 caracteres
(por debajo del corte de Google) y todos los titles entre 43 y 60.

| Página | Impr. 16 m | CTR | Pos. media | Qué se cambia | CTR objetivo |
|---|---|---|---|---|---|
| `/` | 7.283 | 0,66 % | 22,7 | El title pasa a llevar **Testamentos** (la consulta en la que está en el puesto 1,71 con 0 clics) y deja el nombre del letrado a Scruz | 1 % |
| `/blog/zonas-tensionadas-alquiler/` | 680 | **1,03 %** | **6,3** | Title con la consulta exacta + description corta que arranca con el gancho («Andalucía no ha declarado ninguna») | 4 % |
| `/blog/novedades-pensiones-2027/` | 717 | 1,67 % | 13,3 | Title con «cuánto suben y desde cuándo» (la familia «cuánto subirán las pensiones») y las cifras del IPC en el snippet | 3 % |
| `/blog/seguro-cultivos-agroseguro/` | 394 | **0,25 %** | 12,8 | Description corta (el title ya coincidía con `agroseguro`) | 2 % |
| `/blog/jubilacion-2027/` | 318 | 1,89 % | 9,6 | Title = `Tabla de jubilación 2027: edad según los años cotizados` (la frase que se busca, ~60 clics de demanda sin capturar) | 4 % |
| `/derecho-civil/` | 208 | 0 % | 56,7 | Title con «Contratos y Responsabilidad Civil» (307 + 142 impresiones de consulta que hoy se van a otro sitio) | 1 % |
| `/blog/reclamacion-pension-seguridad-social/` | 164 | 1,83 % | 14,2 | Title corto (60 → 59 quitando la marca) y description con plazos y atrasos | 3 % |
| `/blog/nacionalidad-espana-examen/` | 107 | 0 % | 25,1 | Description con la consulta completa y CTA (el title ya coincidía) | 1,5 % |
| `/blog/crear-empresa-andalucia/` | 97 | 0 % | **12,1** | Title con «cuánto cuesta», que es la demanda real (`cuanto cuesta montar una sl`) | 3 % |
| `/blog/traspaso-de-bar-paso-a-paso/` | 74 | 0 % | 15,5 | Title de 74 → 51 caracteres (dejaba de verse entero en el SERP) | 3 % |

**Expectativa honesta:** unos **+4-6 clics/mes** si se cumple la tabla. El volumen grande del sitio está en la
familia «abogado X lucena», con posiciones medias de 15 a 50: ahí el snippet no decide nada (nadie llega a la
página 4) y el trabajo es de ranking, autoridad y pack local. Reescribir el title de esas landings **no** las va
a subir.

> ⚠️ Esto **rompe la lectura limpia del 21 de octubre** para estas diez URLs: la home y `/derecho-civil/`
> entran en el experimento del 21 de septiembre y ahora también cambian. Se hace porque el propietario pidió
> explícitamente trabajar el CTR, y queda anotado aquí para que la comparación se lea con eso en cuenta: si el
> CTR sube, es del snippet; si la posición se mueve, no se puede atribuir a una sola de las dos cosas.

### Segunda pasada de CTR: blogs en página 1 sin un solo clic (5 oct 2026)

El exporte dibuja un patrón muy claro: **51 páginas con impresiones y 0 clics en posición < 16** — 948
impresiones «sin capturar». Que una página esté en el puesto 6-12 y no reciba ni un clic es un problema de
**snippet**, no de ranking. Esta pasada reescribe los 20 snippets con más impresiones de esa lista.

Reglas aplicadas: title ≤ 62 (la mayoría entre 51 y 61), description entre 127 y 162 caracteres, la consulta al
principio, un gancho o una cifra en el texto y CTA con teléfono donde cabe. Los cuatro artículos que genera
`[slug].astro` conservan el sufijo `| Scruz Abogados` (17 car.), así que su title base se dejó ≤ 45.

| Página | Impr. | Pos. | Cambio (title / description) |
|---|---|---|---|
| `/blog/multas-penales-suspension-condenas/` | 59 | 8,9 | «Multa penal: cuánto se paga y cómo suspender la condena» |
| `/blog/reclamar-agroseguro/` | 58 | 8,0 | Empieza por «Agroseguro» (la consulta), fuera «Lucena» del title |
| `/blog/novedades-laborales-2026/` | 53 | 6,9 | «despido nulo, registro y permisos» |
| `/blog/silencio-administrativo-positivo-negativo/` | 46 | 15,0 | «positivo o negativo y qué hacer» |
| `/blog/okupas-ley-y-bulos/` | 44 | 8,5 | «qué se puede hacer de verdad y en cuánto tiempo» |
| `/blog/procedimiento-sancionador/` | 41 | 8,4 | «cómo defenderse» + «las 3 fases» |
| `/blog/derechos-del-detenido/` | 38 | 12,0 | «qué hacer en comisaría paso a paso» |
| `/blog/suelo-rustico-cordoba/` | 36 | 7,6 | «qué se puede y qué no» |
| `/blog/denuncia-violencia-genero/` | 36 | 10,2 | «Denunciar violencia de género: pasos, juez» |
| `/blog/verifactu-facturacion-electronica/` | 36 | 12,5 | «quién está obligado y cómo evitar multas» |
| `/blog/herencias-entre-hermanos/` | 27 | 14,1 | «cómo repartir sin conflictos» |
| `/blog/transparencia-retributiva/` | 25 | 6,2 | «cómo reclamar tu salario» |
| `/blog/errores-accidente-trafico/` | 22 | 6,1 | «Los 7 errores que bajan tu indemnización» |
| `/blog/pactos-de-socios-sl/` | 22 | 15,2 | «qué cláusulas no pueden faltar» |
| `/blog/pension-de-alimentos/` | 17 | 9,4 | «cuánto se paga y hasta cuándo» |
| `/nacionalidad-extranjeria/` | 17 | 11,8 | Title de 64 → 57 («Nacionalidad y arraigo») |
| `/blog/reclamar-desempleo-contribuciones/` * | 24 | 14,5 | Title base 68 → 45 |
| `/blog/denuncia-publicidad-enganosa/` * | 17 | 11,4 | Title base 56 → 45 y description base recortada |
| `/blog/reclamar-dividendos-sociedad/` * | 12 | — | Title base 59 → 44 y description base recortada |
| `/blog/reclamar-veinte-por-ciento-iva/` * | 8 | — | Title base 62 → 44 |

\* Artículos generados desde `src/data/SEO_ARTICLES_*.ts` vía `[slug].astro` (no tienen `.astro` propio).
OJO: en `SEO_ARTICLES_EXTRA.ts` el helper `makeArticle` **añade** « Incluye pasos, pruebas, plazos y errores que
conviene evitar.» a la description (+62 car.), por lo que su base debe quedar ≤ 100 para no pasar de 162.

> ⚠️ Estas 20 URLs se suman a las diez de la pasada anterior y también quedan contaminadas para la lectura
> limpia del 21 de octubre. La métrica a vigilar aquí es el **CTR por página**, no los clics absolutos.

**El techo real no es el snippet.** De las 82 guías del blog, ninguna incluye una imagen propia: no hay `<img>`
en el cuerpo y el `og:image` es siempre el de por defecto, así que Google no puede mostrar una miniatura
distinta por artículo en móvil (donde el sitio rankea 8,3 frente al 26,8 de escritorio) — una miniatura propia
sube el CTR sin tocar la posición. Es el siguiente experimento, tras decidir las imágenes.

### Títulos truncados en el SERP: de 64 a 0 (5 oct 2026)

`check-titles.mjs` **no falla** con títulos largos, solo los reporta, así que el problema llevaba tiempo
invisible: **64 de las 245 páginas del blog tenían el `<title>` por encima de 62 caracteres** (hasta 89), que es
donde Google corta. Un título cortado a media palabra es una fuga directa de clics.

Causa raíz: casi todas las páginas que genera `[slug].astro` añadían el sufijo ` | Scruz Abogados` (17 car.) a un
`article.title` que ya era largo, y 13 páginas con `.astro` propio llevaban la marca dentro del literal.

Receta aplicada:
- `[slug].astro` deja de añadir el sufijo (Google muestra ya el nombre del sitio): **51 páginas** de golpe.
- **15** `article.title` de `SEO_ARTICLES_*.ts` recortados de 63-72 a 48-58 caracteres.
- **14** literales/`const title` de páginas con `.astro` sin la marca (y 2 `const` recortados).
- Los **9** espejos de `src/data/seo.ts` con marca, sincronizados.

Resultado medido en `dist/`: **0 títulos > 62** (antes 64), **0 duplicados**, el más corto 39 caracteres.

> `article.title` se usa además como `<h1>` y breadcrumb del artículo, así que estos recortes también acortan el
> H1: se mantienen siempre la consulta y el gancho.

### Barrido global de truncado: títulos ≤ 62 y descripciones ≤ 162 (5 oct 2026)

El chequeo de títulos anterior solo miró `dist/blog/*/index.html`; ampliado a **todo** `dist` aparecían **45
títulos fuera de rango** más (páginas de ciudad, hubs de categoría, páginas de servicio e institucionales) y, sobre
todo, **108 descripciones > 162 caracteres (hasta 253)**. Google corta ambas: un title truncado pierde la parte
descriptiva y una description larga pierde el CTA final.

Receta aplicada:
- **Títulos: 45 → 0.** Páginas de ciudad (`src/data/cities/*.ts`, 29 archivos) reescritas a `Abogado en <Ciudad> |
  <un descriptor>`; sufijo `| Scruz Abogados` eliminado de los 14 hubs (`BLOG_CATEGORIES.ts`), de 3 páginas de
  servicio y de 5 institucionales (blog, faq, sobre nosotros, trayectoria, juzgado).
- **Descripciones: 108 → 0.** Recortadas a 140-160. Causa raíz del bloque mayor: el helper `makeArticle`
  (`SEO_ARTICLES_EXTRA.ts`) añadía « Incluye pasos, pruebas, plazos y errores que conviene evitar.» a **cada**
  descripción (+62 car.), lo que además las volvía casi idénticas entre 28 artículos; se ha eliminado el añadido.
  4 descripciones quedaron cortas al quitarlo y se reescribieron a 151-159.

Resultado medido en `dist/`: **0 títulos > 62**, **0 descripciones > 162**, 0 duplicados (títulos y
descripciones) y `check-city-similarity` por debajo del umbral 0,75.

> `src/data/seo.ts` conserva entradas para muchas de estas rutas, pero **no es la fuente** de su `<title>` /
> description (las páginas las pasan como props), así que un desajuste del espejo no afecta al HTML. Las 3 páginas
> de servicio que sí caían en `routeDefaults` se corrigieron en `seo.ts`.

**El mercado visible reparte ~125-135 clics/mes** entre las 36 consultas principales, y **el 75 % va a 4 directorios + el colegio oficial**. De los despachos reales, solo 4-6 capturan ~25 clics/mes, y lo hacen con una fórmula repetible: **landing local por especialidad + dirección + teléfono + reseñas**.

### Competidores (suma estimada, 36 consultas, 9 sep 2026)

| # | Competidor | Tipo | Clics/mes est. | Observación |
|---|---|---|---|---|
| 1 | elabogado.com | Directorio | ~30 | **Sergio tiene ficha** y ya rankea #1 con ella en una consulta |
| 2 | lexgoapp.com | Directorio | ~30 | Ficha de Sergio visible |
| 3 | melendos.es | Directorio | ~17 | Sergio aparece en 5+ listas |
| 4 | icalucena.com | Colegio oficial | ~10 | No compite por clientes (turno de oficio) |
| 5 | **arcostrujillo.com** | Despacho (Rute/Lucena) | ~7 | **El competidor real a batir** |
| 6 | abogadoslucena.com | Despacho | ~6,5 | Fuerte en familia/laboral |
| 7 | lucenaabogadosbufete.com | Despacho | ~4 | Landings por especialidad |
| 8 | perezpachecoabogados.es | Despacho | ~3,7 | Landings por especialidad |
| 9 | galandemora.es | Despacho | ~3,6 | 1.733 reseñas; landings por ciudad en toda la provincia |
| 10 | jolaabogados.es | Despacho | ~3,3 | Multidisciplinar |
| 11 | alonsoespinoabogados.com | Despacho (Córdoba→Lucena) | ~3,2 | **El que más landings por consulta+ciudad tiene: modelo a replicar** |
| — | Beato / BCA Abogados | Solo redes sociales | ~0,5 | Capturan clics **sin web propia**, vía Facebook/Instagram → señal del peso del pack local y las reseñas |

### Consultas con página dedicada y potencial

| Consulta | Página | Pos. (12 meses) | Clics/mes si top 3 | Si top 1 |
|---|---|---|---|---|
| abogado civil lucena | `/derecho-civil/` | 17,7 | ~3,4 | ~8,7 |
| abogado responsabilidad civil lucena | `/derecho-civil/` | 32,4 | ~3,7 | ~9,5 |
| abogado contratos lucena | `/derecho-civil/` | 48,8 | ~2,3 | ~6,0 |
| abogado responsabilidad patrimonial lucena | `/recursos-administrativos/` | 78,3 | ~2,7 | ~7,0 |
| abogado recursos administrativos lucena | `/recursos-administrativos/` | 70,4 | ~1,4 | ~3,6 |
| abogado guarda y custodia lucena | `/guarda-custodia/` | 66,2 | ~0,7 | ~1,9 |
| abogado medidas paterno filiales lucena | `/guarda-custodia/` | 71,1 | ~0,8 | ~2,0 |
| abogado reclamación seguros agrarios lucena | `/seguros-agrarios/` | 69,8 | ~0,7 | ~1,8 |
| abogado herencias lucena | `/herencias-testamentos/` | 15,4 | ~0,4 | ~0,9 |
| abogado testamentos | `/herencias-testamentos/` | **1,7** (nº 2) | ~0,7 | ~1,7 |
| abogado violencia de género lucena | `/violencia-genero/` | 51,5 | ~1,1 | ~2,9 |
| abogado accidentes tráfico lucena | `/indemnizaciones-trafico/` | 28,6 | ~0,7 | ~1,8 |
| abogado en lucena | `/abogados-en-lucena/` | **9,5** | ~1,1 | ~2,9 |
| abogado consumo lucena | `/consumo/` | 30,1 | ~0,7 | ~1,9 |
| abogado seguros en lucena | `/seguros-agrarios/` | 30,9 | — | — |
| abogado urbanismo lucena | `/urbanismo/` (**nueva**, sep 2026) | 20,3 | — | — |
| **Total (16 consultas con página)** | | | **~21/mes** | **~54/mes** |

> Posiciones del exporte de 3 meses (21 sep 2026). En este período `abogado civil` aparece en la posición **3,5**
> y `abogado` en **6,25**, ambos **sin un solo clic**: es un problema de CTR, no de ranking. Los titles y
> descriptions de esas páginas se reescribieron el 21 sep 2026 (§3).

**Objetivo realista:** capturar la mitad de esa tabla (top 5, no top 3) → **+10-15 clics/mes** en 6-8 semanas.

### Oportunidades concretas detectadas

| Oportunidad | Detalle | Acción |
|---|---|---|
| `abogado civil lucena` (17,7) | La más cerca de página 1 de toda la cartera; arriba hay un directorio, ruido de Barcelona y el colegio | Empujón de autoridad + ficha de directorio |
| `abogado responsabilidad patrimonial lucena` | Página 1 la ocupan Facebook y directorios; casi nadie tiene landing dedicada | `/recursos-administrativos/` + **guía de responsabilidad patrimonial publicada** (21 sep 2026) |
| `abogado contratos lucena` | **La posición 1 es un perfil de Facebook** | `/derecho-civil/` + **guía de daños y perjuicios publicada** (21 sep 2026) |
| `abogado reclamación seguros agrarios lucena` | **El SERP más desatendido**: solo un despacho nacional con landing de Agroseguro | `/seguros-agrarios/` → candidata a referencia en Andalucía |
| `testamento online córdoba` | Sin dueño para abogados: notarías y servicios online (codice-abogados vende a 100 €) | Artículo desde `/herencias-testamentos/` |
| `abogado reclamaciones seguro de hogar lucena` | **SERP 100 % ruido de EEUU** | `/blog/reclamaciones-seguro-hogar/` ya publicado |
| `abogado urbanismo lucena` (20,3 · 172 imp) | **Sin página dedicada** hasta sep 2026: la cubrían de refilón `/derecho-civil/` y `/recursos-administrativos/` | `/urbanismo/` **ya publicada**: pedir indexación y medir a 30 días |
| `asistencia legal mujeres maltratadas córdoba` | **SERP 100 % Argentina/EEUU** (lo gana la Junta de Andalucía) | `/violencia-genero/` — palanca de autoridad y RSC |
| `abogado en rute` | Solo arcostrujillo tiene web propia; Sergio ya aparece vía melendos | `/abogados-en-rute/` ya publicada |
| Consultas de marca y genéricas (`abogado civil` 3,5 · `abogado` 6,25 · `abogado testamentos` 6,8) | **Top 10 sin un clic: el problema es el CTR, no el ranking** | titles/descriptions reescritos el 21 sep (§3) |

> El detalle por consulta de los 36 SERPs (competidor, posición y clics estimados uno a uno) estaba en el
> documento borrado `SEO-COMPETENCIA-CLICKS-SEP-2026.md`; recuperable desde el historial de git.

---

## 4. Objetivos y validación

| Horizonte | Objetivo | Condición |
|---|---|---|
| 6-8 semanas | **+10-15 clics/mes** orgánicos | Deploy + indexación + GBP + 5-10 reseñas |
| 2-3 meses | `abogado civil` y `sergio abogado` en **#1** | Backlinks + reseñas + contenido ya publicado |
| 6 meses | Top 3 en las 16 consultas con página → **~21 clics/mes** | Autoridad acumulada + 2-4 artículos/mes |

**Qué medir a 30 días (GSC):**
- [ ] **URLs con impresiones: de 11 a ~40-50** — el KPI real del plan de indexación de §1
- [ ] `abogado civil lucena` y `abogado responsabilidad civil lucena` en top 15 (hoy 17,7 / 32,4)
- [ ] Clics de marca (`sergio abogado` + `abogado civil` + `abogado testamentos`) > 1/semana
- [ ] CTR del grupo «abogado X lucena» > 3 % cuando la posición media baje de 15
- [ ] Pack local visible en incógnito para «abogado lucena» con 10+ reseñas

### Línea base del ciclo (21 sep 2026) → re-medición el 21 de octubre

Período de referencia: exporte de GSC del 21 sep (21 jun – 20 sep 2026, `google_search/Consultas.csv`).
El deploy con las 16 URLs nuevas es la condición: nada de esto se mueve hasta que Google rastree.

| Consulta objetivo | Pos. base | Impresiones base (90 días) | Página que debe posicionar |
|---|---|---|---|
| `abogado civil lucena` | 25,7 | 91 | `/derecho-civil/` |
| `abogado responsabilidad civil lucena` | 42,1 | 97 | `/derecho-civil/` |
| `abogado contratos lucena` | 54,8 | 60 | `/derecho-civil/` |
| `abogado responsabilidad patrimonial lucena` | 78,3 | 86 | `/recursos-administrativos/` + guía publicada |
| `abogado testamentos` | 6,8 | 27 | `/herencias-testamentos/` |
| `abogado en lucena` | 11,1 | 8 | `/abogados-en-lucena/` |
| `abogado civil` (marca) | 3,5 | 32 | `/` |

**Cómo medir el 21 oct (GSC, período: últimos 28 días, comparar contra este exporte):**

1. **Vía API (si hay OAuth):** `bun run search-console:performance -- --days 28 --dimension query` (y `--dimension page`).
2. **Vía UI (si no):** GSC → Rendimiento → filtro de consulta = cada objetivo → anotar pos. media, impresiones y CTR.
3. **Marcar en esta tabla** las posiciones nuevas y el Δ, y evaluar: top 15 en `abogado civil lucena` y
   `abogado responsabilidad civil lucena` (hoy 25,7/42,1) es el umbral del objetivo de 6-8 semanas.
4. **URLs con impresiones:** filtrar por página en GSC y contar cuántas del sitemap (113) recibieron ≥1 impresión
   en 28 días — el KPI del plan de indexación (base: 11 con impresiones en el exporte de sep).
5. **CTR de marca:** `abogado civil` (pos. 3,5, 0 clics) es el test directo de los titles reescritos: si con
   top 5 sigue en 0 clics, el problema no es el snippet y hay que mirar el pack local y los anuncios.

> **Expectativa realista a 30 días:** movimiento en posiciones de las landings ya indexadas (`/urbanismo/`,
> `/empresas/` y las de servicio en general), primeras impresiones en 30-50 % de las URLs nuevas, y poco o nada
> en las consultas de posición alta — esas se mueven a 8-12 semanas con autoridad y reseñas. No reescribir
> titles/descriptions antes del 21 oct por variaciones de un dígito: el contenido se publicó el 21 sep.

---

## 5. Contenido: publicado y planificado

### Publicado

**164 artículos.** Cinco lotes de octubre 2026 (§ más abajo) añadieron 40 guías a las 124 previas,
 todas elegidas con el exporte de GSC. El ciclo de septiembre 2026 añadió 22: los clústeres cerrados de **Empresas** (constitución + 6 guías)
y **Urbanismo** (4 guías + hub de categoría), bajas laborales, okupas, mutualidades al RETA, el par de oportunidades
del §3 (responsabilidad patrimonial y daños y perjuicios), resolución de contratos, silencio administrativo,
prórroga y renovación del TIE, multas penales, medidas paterno-filiales, procedimiento sancionador, liquidación de
gananciales y reclamación de pensión a la Seguridad Social. **Cinco
categorías estrenan o amplían hub de categoría**: Urbanismo, Recursos administrativos, Extranjería, Derecho Penal
y Derecho de Familia (hub existente, ahora con 6 guías).

Ciclos cerrados: calendario oct 2026 – mar 2027 (**14/14**), ciclo de actualidad junio 2027
(**6/6**: MASC, despido nulo con ayudas, reforma de consumidores, zonas tensionadas, pensiones 2027, transparencia retributiva),
ciclo julio 2027 (**5/5**: Verifactu, sanidad para extranjeros, reforma PRL, discapacidad y dependencia, jornada 37,5 h) y
ciclo octubre 2027 (**4/5**: jubilación 2027 a los 67 años, más bajas laborales, mutualidades al RETA y okupas —
publicadas en el ciclo de septiembre 2026 y verificadas contra el calendario borrado `CALENDARIO-CONTENIDO.md`.
Solo queda el backup de ayudas al alquiler, que espera a que el Plan Estatal se apruebe con números).

**Actualización de frescura (21 sep 2026):** «Seguro de cultivos» retitulada a *«Agroseguro: qué cubre el seguro
de cultivos y cómo reclamar»* para atacar la consulta suelta `agroseguro` (**52 imp., pos. 14,9** — la 5.ª consulta
con más impresiones del sitio sin dueño claro), con `dateModified` nuevo, FAQ de contratación/precio añadida y
enlazado reforzado con su hermana de reclamación y la landing `/seguros-agrarios/`.

> **Nota sobre el ciclo octubre 2027:** su regla es «revisar y actualizar cada 6 meses». Primera revisión de las
> 4 guías publicadas: **marzo 2027** (plazos, números y leyes de cada una antes de la campaña de búsquedas de
> oct 2027).

### Lote de contenido — 8 guías nuevas (6 oct 2026)

El plan anterior está agotado, así que este lote nace del propio exporte de GSC (§3): **consultas con impresiones
y sin página dedicada**, más el refuerzo de los clústeres ya cerrados. Se publican como `SeoArticle` en el nuevo
fichero `src/data/SEO_ARTICLES_NEW.ts` (van primero en `BLOG_POSTS`, que ahora suma **132 artículos** y 61 en
`SEO_ARTICLES`), cada una con sus tres `relatedServices` para el enlazado bidireccional de `blogInternalLinks.ts`.
Ninguna crea categoría nueva: todas entran en un hub que ya existía.

| Guía nueva | Keyword objetivo (consulta del exporte) | Enlaza a |
|---|---|---|
| `/blog/tipos-de-testamento/` | testamento cerrado / ológrafo / mancomunado córdoba (4 consultas, ~53 imp.) | `/herencias-testamentos/`, guía de testamento online, `/derecho-civil/` |
| `/blog/declaracion-de-herederos-sin-testamento/` | declaración de herederos sin testamento en córdoba (10 imp.), quién hereda sin testamento | `/herencias-testamentos/`, `/blog/herencia-sin-testamento/`, `/disputas-herencias/` |
| `/blog/divorcio-ante-notario/` | divorcio ante notario córdoba (11 imp. entre variantes) | `/divorcios-separaciones/`, guía de mutuo acuerdo, coste del divorcio |
| `/blog/pension-compensatoria/` | pensión compensatoria córdoba / málaga (7 imp.) | `/divorcios-separaciones/`, `/pension-de-alimentos/`, `/liquidacion-gananciales/` |
| `/blog/reclamar-financiacion-coche/` | reclamar financiación / préstamo de coche (23 imp. entre variantes) | `/consumo/`, `/reclamaciones-bancarias/`, `/derecho-civil/` |
| `/blog/indemnizacion-accidente-trafico-baja-laboral/` | indemnización por accidente de tráfico con baja laboral | `/indemnizaciones-trafico/`, `/accidente-laboral/`, `/blog/baremo-lesiones-2026/` |
| `/blog/reclamar-incapacidad-permanente/` | reclamar incapacidad permanente (9 imp.), recurso incapacidad (4 imp.) | `/incapacidad-permanente/`, `/reclamacion-pensiones/`, `/recursos-administrativos/` |
| `/blog/modificacion-convenio-regulador/` | modificación convenio regulador córdoba (5 imp.) | `/divorcios-separaciones/`, `/modificacion-medidas-paterno-filiales/`, `/guarda-custodia/` |

Se comprobó antes de redactar que ninguno de los temas estuviera ya cubierto (de haberse encontrado, `reclamar-horas-extra`
se descartó porque existía en `SEO_ARTICLES_LEGAL`, y `renunciar a la herencia` también estaba en
`aceptar-renunciar-herencia`). Cada guía respeta las reglas de forma del §0 (title ≤ 62, description ≤ 162, intro > 150)
y la QA de datos. **Pendiente: revisión del letrado y solicitud de indexación en GSC.**

### Segundo lote de contenido — 8 guías más (6 oct 2026)

Mismo criterio, aplicado a las consultas **informativas** del exporte que aún no tenían página dedicada y a los
clústeres con menos cobertura (seguros, empresa y seguridad social). Se añaden al mismo fichero
`src/data/SEO_ARTICLES_NEW.ts`, así que `BLOG_POSTS` pasa a **140 artículos** y `SEO_ARTICLES` a 69.
Comprobado antes de redactar que ninguno de los temas estuviera ya cubierto (`recuperar-coche-embargado`,
`extincion-contrato-arrendamiento` y `aceptar-renunciar-herencia` sí lo estaban y se descartaron).

| Guía nueva | Keyword objetivo (consulta del exporte) | Enlaza a |
|---|---|---|
| `/blog/capitulaciones-matrimoniales/` | capitulaciones matrimoniales en córdoba (5 imp.), precio (2) | `/divorcios-separaciones/`, `/liquidacion-gananciales/`, `/derecho-civil/` |
| `/blog/adopcion-expediente-idoneidad/` | expediente de adopción córdoba (4 imp.) | `/divorcios-separaciones/`, `/tutela-legal/`, `/guarda-custodia/` |
| `/blog/actos-societarios/` | actos societarios en córdoba (5 imp.) | `/empresas/`, `/modificacion-estatutos-sociedad/`, `/compraventas-empresas/` |
| `/blog/seguro-agrario-integral/` | seguro integral agricola (7 imp.), agroseguro corporativos (12 imp.) | `/seguros-agrarios/`, guía de cultivos, guía de reclamación |
| `/blog/reclamacion-previa-seguridad-social/` | reclamacion previa seguridad social (5 imp.), pagar atrasos (4) | `/reclamacion-pensiones/`, `/incapacidad-permanente/`, `/recursos-administrativos/` |
| `/blog/impugnacion-de-herencia/` | abogado impugnación herencia málaga (5 imp.), legítima córdoba (2) | `/disputas-herencias/`, `/herencias-testamentos/`, guía de sucesión sin testamento |
| `/blog/actualizacion-renta-alquiler/` | actualización de alquileres, subir alquiler tras 5 años | `/alquiler-viviendas/`, `/blog/zonas-tensionadas-alquiler/`, `/derecho-civil/` |
| `/blog/despido-colectivo-ere/` | ERE / despido colectivo, abogado erte empresas córdoba (2 imp.) | `/despidos/`, `/empresas/derecho-laboral/`, `/contratos-laborales/` |

Mismas reglas de forma del §0 y QA de datos que el primer lote. **Pendiente: revisión del letrado y solicitud
indexación en GSC.**

### Tercer lote de contenido — 8 guías más (6 oct 2026)

Cierra el hueco de **consultas informativas con impresiones y sin página propia** que quedaban en el exporte
(penal, familia, laboral y tráfico) y refuerza con una guía local la plaza de Málaga. Van al mismo fichero
`src/data/SEO_ARTICLES_NEW.ts`, así que `BLOG_POSTS` pasa a **148 artículos** y `SEO_ARTICLES` a 77.
Comprobado antes de redactar que ninguno de los temas estuviera ya cubierto (`reclamar-coche-embargado`,
`extincion-contrato-arrendamiento`, `reclamar-horas-extra` y `aceptar-renunciar-herencia` sí lo estaban).
Ninguna crea categoría nueva: todas entran en un hub existente.

| Guía nueva | Keyword objetivo (consulta del exporte) | Enlaza a |
|---|---|---|
| `/blog/vida-laboral-corregir-errores/` | informe de vida laboral, corregir errores de cotización | `/reclamacion-pensiones/`, `/recursos-administrativos/`, `/incapacidad-permanente/` |
| `/blog/cancelacion-antecedentes-penales/` | cancelar antecedentes penales | `/derecho-penal/`, guía de multas penales, guía de derechos del detenido |
| `/blog/acusacion-particular/` | acusación particular, personarse en un procedimiento | `/derecho-penal/`, guía de denuncias falsas, `/derecho-civil/` |
| `/blog/despido-por-traspaso-de-negocio/` | despido por traspaso de negocio (5 imp.) | `/despidos/`, `/empresas/derecho-laboral/`, guía de traspaso de bar |
| `/blog/internamiento-residencia-mayores/` | visitar una residencia antes del ingreso (3 imp.) | `/tutela-legal/`, `/guarda-custodia/`, `/derecho-civil/` |
| `/blog/reclamar-lesiones-sin-baremo/` | reclamar lesiones sin baremo, daños no tasados | `/indemnizaciones-trafico/`, guía del baremo, guía de indemnización de tráfico |
| `/blog/nacionalidad-por-residencia-malaga/` | nacionalidad por residencia málaga (7 imp.) | `/nacionalidad-extranjeria/`, guía del examen CCSE, `/abogados-en-malaga/` |
| `/blog/divorcio-contencioso/` | divorcio contencioso / con juicio málaga (7+2 imp.) | `/divorcios-separaciones/`, guía de mutuo acuerdo, `/guarda-custodia/` |

Mismas reglas de forma del §0 y QA de datos que los lotes anteriores. **Pendiente: revisión del letrado y
solicitud de indexación en GSC.**

### Cuarto lote de contenido — 8 guías más (6 oct 2026)

Cierra las consultas informativas de mayor volumen que seguían sin página (la **tabla de jubilación**, los
**recursos de alzada y reposición**, el **desahucio por impago**) y cubre huecos temáticos detectados en el
exporte (acoso laboral, últimas voluntades, parejas de hecho, deudas de una SL y despido nulo). Van al mismo
fichero `src/data/SEO_ARTICLES_NEW.ts`, así que `BLOG_POSTS` pasa a **156 artículos** y `SEO_ARTICLES` a 85.
Ninguna crea categoría nueva: todas entran en un hub existente.

| Guía nueva | Keyword objetivo (consulta del exporte) | Enlaza a |
|---|---|---|
| `/blog/tabla-de-jubilacion-por-anos-cotizados/` | tabla de jubilación por años cotizados (26 imp.), por edad y por año de nacimiento (varias) | `/reclamacion-jubilacion/`, `/reclamacion-pensiones/`, guía de la jubilación en 2027 |
| `/blog/recurso-de-alzada-y-reposicion/` | cómo hacer un recurso de alzada, recurso de reposición y sus plazos (varias) | `/recursos-administrativos/`, `/impugnacion-sanciones-administrativas/`, guía del recurso administrativo |
| `/blog/desahucio-por-falta-de-pago/` | desahucio por falta de pago, demanda de desahucio por impago y reclamación de rentas (varias) | `/desahucio-por-impago/`, `/alquiler-viviendas/`, el MASC antes de demandar |
| `/blog/acoso-laboral-mobbing/` | abogado acoso laboral lucena (5 imp.), mobbing | `/despidos/`, `/contratos-laborales/`, prevención de riesgos psicosociales |
| `/blog/certificado-de-ultimas-voluntades/` | certificado de últimas voluntades, cuánto tarda en emitirse (varias) | `/herencias-testamentos/`, `/impuestos-herencia/`, certificados para la herencia |
| `/blog/parejas-de-hecho/` | régimen económico de parejas de hecho en córdoba, separación sin estar casados | `/divorcios-separaciones/`, `/guarda-custodia/`, medidas paterno-filiales |
| `/blog/deudas-de-una-sociedad-limitada/` | quién responde de las deudas de una SL, responsabilidad del administrador (9 + 3 imp.) | `/empresas/`, `/empresas/constitucion-sociedades/`, responsabilidad de administradores |
| `/blog/despido-nulo/` | despido nulo, represalia por reclamar derechos | `/despidos/`, `/contratos-laborales/`, despido improcedente |

Mismas reglas de forma del §0 y QA de datos que los lotes anteriores. **Pendiente: revisión del letrado y
solicitud de indexación en GSC.**

### Quinto lote de contenido — 8 guías más (6 oct 2026)

El plan de consultas informativas está casi agotado, así que este lote profundiza los hubs con mejor rendimiento
en el exporte (jubilación, herencias, empresas) y cierra huecos temáticos que seguían sin página. Van al mismo
fichero `src/data/SEO_ARTICLES_NEW.ts`, así que `BLOG_POSTS` pasa a **164 artículos** y `SEO_ARTICLES` a 93.
Ninguna crea categoría nueva: todas entran en un hub existente.

| Guía nueva | Keyword objetivo (consulta del exporte) | Enlaza a |
|---|---|---|
| `/blog/tabla-de-jubilacion-anticipada/` | tabla de jubilación anticipada, coeficientes y edad (varias) | `/reclamacion-jubilacion/`, `/jubilacion-parcial/`, guía de la jubilación en 2027 |
| `/blog/despido-objetivo/` | despido objetivo, indemnización de 20 días (cluster de despidos) | `/despidos/`, `/contratos-laborales/`, despido improcedente |
| `/blog/legitima-y-desheredacion/` | legítima herencia córdoba (2 imp.), desheredación | `/herencias-testamentos/`, `/disputas-herencias/`, tipos de testamento |
| `/blog/arras-compraventa-vivienda/` | arras y señal en la compraventa de vivienda | `/incumplimiento-contrato/`, `/derecho-civil/`, reclamar un incumplimiento |
| `/blog/sl-o-autonomo/` | montar una sl o ser autónomo (4 imp.), cuánto cuesta constituir | `/empresas/`, `/empresas/constitucion-sociedades/`, cuánto cuesta constituir una SL |
| `/blog/reagrupacion-familiar/` | reagrupación familiar (cluster de extranjería) | `/nacionalidad-extranjeria/`, prórroga de estancia, nacionalidad por residencia |
| `/blog/segunda-oportunidad/` | cancelar deudas, ley de segunda oportunidad | `/consumo/`, `/cobro-deudas-impagos/`, `/reclamaciones-bancarias/` |
| `/blog/delito-leve/` | delito leve, denuncia (cluster penal) | `/derecho-penal/`, denuncias falsas, multas penales |

Mismas reglas de forma del §0 y QA de datos que los lotes anteriores. **Pendiente: revisión del letrado y
solicitud de indexación en GSC.**

### Sexto y séptimo lote de contenido — 16 guías más (6 oct 2026)

Mismo criterio de siempre, aplicado a las consultas **informativas con impresiones y sin página dedicada** que
quedaban en los clústeres ya existentes (herencias, civil, laboral, extranjería, penal, tráfico, consumo, empresa
y Seguridad Social). Van a un **fichero nuevo** `src/data/SEO_ARTICLES_SEO.ts` (lo importa `SEO_ARTICLES.ts`
tras `SEO_ARTICLES_NEW`), para no engordar más el fichero anterior. `BLOG_POSTS` pasa a **180 artículos** y
`SEO_ARTICLES` a **109**. Ninguna crea categoría nueva: todas entran en un hub que ya existe.

| Guía nueva | Keyword objetivo | Enlaza a |
|---|---|---|
| `/blog/cuota-viudal-usufructuaria/` | usufructo del cónyuge viudo, cuota viudal usufructuaria | `/herencias-testamentos/`, `/disputas-herencias/`, `/derecho-civil/` |
| `/blog/impugnar-acuerdos-junta-propietarios/` | impugnar acuerdo de la junta de propietarios | `/derecho-civil/`, `/urbanismo/`, `/cobro-deudas-impagos/` |
| `/blog/vicios-ocultos-vivienda/` | vicios ocultos en la compraventa de vivienda | `/derecho-civil/`, `/incumplimiento-contrato/`, `/responsabilidad-civil/` |
| `/blog/reclamar-salarios-impagados/` | reclamar salarios impagados, FOGASA | `/despidos/`, `/contratos-laborales/`, `/cobro-deudas-impagos/` |
| `/blog/reduccion-jornada-guarda-legal/` | reducción de jornada por cuidado de hijo | `/contratos-laborales/`, `/despidos/`, `/empresas/derecho-laboral/` |
| `/blog/excedencia-laboral/` | excedencia laboral, reserva del puesto | `/contratos-laborales/`, `/despidos/`, `/empresas/derecho-laboral/` |
| `/blog/falso-autonomo/` | falso autónomo, reclamar la laboralidad | `/despidos/`, `/empresas/derecho-laboral/`, `/accidente-laboral/` |
| `/blog/arraigo-social-laboral-familiar/` | arraigo social, laboral y familiar | `/nacionalidad-extranjeria/`, `/recursos-administrativos/`, guía de prórroga y renovación |
| `/blog/alcoholemia-conduccion-delito/` | alcoholemia, delito contra la seguridad vial | `/derecho-penal/`, `/reclamacion-multas-trafico/`, guía de derechos del detenido |
| `/blog/violencia-domestica/` | violencia doméstica, diferencias con la de género | `/derecho-penal/`, `/violencia-genero/`, `/guarda-custodia/` |
| `/blog/indemnizacion-siniestro-total/` | siniestro total, valor venal del vehículo | `/indemnizaciones-trafico/`, guía de indemnización de tráfico, `/responsabilidad-civil/` |
| `/blog/accidente-animales-caza/` | accidente con animal de caza, Consorcio | `/indemnizaciones-trafico/`, `/responsabilidad-civil/`, `/derecho-civil/` |
| `/blog/reclamar-vuelo-cancelado/` | vuelo cancelado o retrasado, indemnización | `/consumo/`, `/reclamaciones-bancarias/`, `/derecho-civil/` |
| `/blog/contrato-de-franquicia/` | contrato de franquicia, qué revisar antes de firmar | `/empresas/`, `/empresas/contratos-mercantiles/`, `/compraventas-empresas/` |
| `/blog/registro-de-marca/` | registrar una marca, nombre comercial, OEPM | `/empresas/`, `/modificacion-estatutos-sociedad/`, `/empresas/proteccion-de-datos/` |
| `/blog/ingreso-minimo-vital/` | Ingreso Mínimo Vital, requisitos y reclamación | `/reclamacion-pensiones/`, `/recursos-administrativos/`, `/incapacidad-permanente/` |

Mismas reglas de forma del §0 y QA de datos que los lotes anteriores. Comprobado antes de redactar que ninguno de
los temas estuviera ya cubierto (se descartaron `reclamar-gastos-hipotecarios`, ya solapado con la guía de
cláusula suelo, y otros que ya tenían página). **Pendiente: revisión del letrado y solicitud de indexación en GSC.**

### Octavo lote de contenido — 8 guías más (6 oct 2026)

Último lote del ciclo, con el mismo criterio: consultas informativas del exporte sin página dedicada. Va a un
fichero propio `src/data/SEO_ARTICLES_OCT.ts` (importado por `SEO_ARTICLES.ts` tras `SEO_ARTICLES_SEO`),
así que `BLOG_POSTS` pasa a **188 artículos** y `SEO_ARTICLES` a **117**. Ninguna crea categoría nueva.

| Guía nueva | Keyword objetivo | Enlaza a |
|---|---|---|
| `/blog/delito-de-estafa/` | estafa, tipos de estafa, denuncia | `/derecho-penal/`, guía de denuncias falsas, `/derecho-civil/` |
| `/blog/mediacion-familiar/` | mediación familiar, cuándo es obligatoria | `/divorcios-separaciones/`, `/guarda-custodia/`, guía de modificación del convenio |
| `/blog/servidumbre-de-paso/` | servidumbre de paso, paso necesario, fincas rústicas | `/derecho-civil/`, `/incumplimiento-contrato/`, `/responsabilidad-civil/` |
| `/blog/responsabilidad-por-mascotas/` | daños causados por un perro, responsabilidad del dueño | `/responsabilidad-civil/`, `/derecho-civil/`, `/incumplimiento-contrato/` |
| `/blog/subsidio-mayores-de-52-anos/` | subsidio para mayores de 52 años, requisitos | `/reclamacion-pensiones/`, `/recursos-administrativos/`, `/incapacidad-permanente/` |
| `/blog/viviendas-de-uso-turistico/` | vivienda de uso turístico, licencia y registro | `/urbanismo/`, `/recursos-administrativos/`, `/derecho-civil/` |
| `/blog/preconcurso-de-acreedores/` | preconcurso de acreedores, negociar antes del concurso | `/empresas/`, `/cobro-deudas-impagos/`, guía de responsabilidad de administradores |
| `/blog/teletrabajo-y-gastos/` | teletrabajo, gastos y desconexión digital | `/contratos-laborales/`, `/empresas/derecho-laboral/`, `/despidos/` |

Mismas reglas de forma del §0 y QA de datos que los lotes anteriores. **Pendiente: revisión del letrado y
solicitud de indexación en GSC.**

### Noveno lote de contenido — 8 guías más (6 oct 2026)

Mismo criterio, con consultas informativas del exporte que seguían sin página. Va a `src/data/SEO_ARTICLES_OCT2.ts`
(importado por `SEO_ARTICLES.ts` tras `SEO_ARTICLES_OCT`), así que `BLOG_POSTS` pasa a **196 artículos** y
`SEO_ARTICLES` a **125**. Ninguna crea categoría nueva.

| Guía nueva | Keyword objetivo | Enlaza a |
|---|---|---|
| `/blog/delito-de-hurto-y-robo/` | hurto y robo, diferencias y penas | `/derecho-penal/`, guía de denuncias falsas, `/derecho-civil/` |
| `/blog/nulidad-matrimonial/` | nulidad matrimonial, causas y efectos | `/divorcios-separaciones/`, `/liquidacion-gananciales/`, `/guarda-custodia/` |
| `/blog/residencia-de-familiares-de-espanoles/` | residencia de familiares de españoles | `/nacionalidad-extranjeria/`, `/recursos-administrativos/`, guía de arraigo |
| `/blog/prestacion-por-hijo-a-cargo/` | prestación por hijo a cargo, requisitos | `/complemento-paternidad-maternidad/`, `/reclamacion-pensiones/`, `/recursos-administrativos/` |
| `/blog/acoso-sexual-en-el-trabajo/` | acoso sexual laboral, cómo denunciarlo | `/despidos/`, `/contratos-laborales/`, `/empresas/derecho-laboral/` |
| `/blog/contrato-de-agencia-y-distribucion/` | contrato de agencia y distribución | `/empresas/contratos-mercantiles/`, `/empresas/`, `/compraventas-empresas/` |
| `/blog/licencia-de-primera-ocupacion/` | licencia de primera ocupación | `/urbanismo/`, `/recursos-administrativos/`, `/derecho-civil/` |
| `/blog/indemnizacion-por-fallecimiento-accidente/` | indemnización por fallecimiento en accidente | `/indemnizaciones-trafico/`, `/responsabilidad-civil/`, `/derecho-civil/` |

Mismas reglas de forma del §0 y QA de datos que los lotes anteriores. **Pendiente: revisión del letrado y
solicitud de indexación en GSC.**

### Décimo lote de contenido — 8 guías más (6 oct 2026)

Último lote de la serie. Mismo criterio, con las consultas informativas que seguían sin página. Va a
`src/data/SEO_ARTICLES_OCT3.ts` (importado por `SEO_ARTICLES.ts` tras `SEO_ARTICLES_OCT2`), así que
`BLOG_POSTS` pasa a **204 artículos** y `SEO_ARTICLES` a **133**. Ninguna crea categoría nueva.

| Guía nueva | Keyword objetivo | Enlaza a |
|---|---|---|
| `/blog/delito-de-amenazas-y-coacciones/` | amenazas y coacciones, cuándo son delito | `/derecho-penal/`, guía de hurto y robo, denuncias falsas |
| `/blog/conduccion-sin-permiso/` | conducir sin carnet, delito de tráfico | `/derecho-penal/`, `/reclamacion-multas-trafico/`, guía de alcoholemia |
| `/blog/pension-alimentos-hijos-mayores/` | pensión de alimentos hijos mayores de edad | `/divorcios-separaciones/`, `/pension-de-alimentos/`, `/guarda-custodia/` |
| `/blog/modificacion-sustancial-de-condiciones/` | modificación sustancial de condiciones de trabajo | `/contratos-laborales/`, `/despidos/`, `/empresas/derecho-laboral/` |
| `/blog/prestamo-entre-particulares/` | préstamo entre particulares, reclamar el dinero | `/cobro-deudas-impagos/`, `/derecho-civil/`, `/incumplimiento-contrato/` |
| `/blog/vicios-de-la-construccion-loe/` | vicios de la construcción, LOE, seguro decenal | `/derecho-civil/`, `/urbanismo/`, `/responsabilidad-civil/` |
| `/blog/phishing-y-fraude-bancario/` | fraude bancario online, phishing, devolución | `/reclamaciones-bancarias/`, `/consumo/`, `/derecho-civil/` |
| `/blog/junta-general-de-socios/` | junta general de socios, convocatoria e impugnación | `/empresas/`, `/empresas/constitucion-sociedades/`, `/modificacion-estatutos-sociedad/` |

Mismas reglas de forma del §0 y QA de datos que los lotes anteriores. **Pendiente: revisión del letrado y
solicitud de indexación en GSC.**

### Undécimo lote de contenido — 8 guías más (6 oct 2026)

Mismo criterio. Va a `src/data/SEO_ARTICLES_OCT4.ts` (importado por `SEO_ARTICLES.ts` tras `SEO_ARTICLES_OCT3`),
así que `BLOG_POSTS` pasa a **212 artículos** y `SEO_ARTICLES` a **141**. Ninguna crea categoría nueva.

| Guía nueva | Keyword objetivo | Enlaza a |
|---|---|---|
| `/blog/usucapion-prescripcion-adquisitiva/` | usucapión, adquirir una finca por el uso | `/derecho-civil/`, `/incumplimiento-contrato/`, `/responsabilidad-civil/` |
| `/blog/atribucion-de-la-vivienda-familiar/` | atribución de la vivienda familiar tras el divorcio | `/divorcios-separaciones/`, `/guarda-custodia/`, `/liquidacion-gananciales/` |
| `/blog/delito-de-lesiones/` | delito de lesiones, grados y penas | `/derecho-penal/`, `/violencia-genero/`, `/derecho-civil/` |
| `/blog/apropiacion-indebida/` | apropiación indebida, diferencia con la estafa | `/derecho-penal/`, guía de estafa, `/derecho-civil/` |
| `/blog/contrato-a-tiempo-parcial/` | contrato a tiempo parcial y horas complementarias | `/contratos-laborales/`, `/despidos/`, `/empresas/derecho-laboral/` |
| `/blog/periodo-de-prueba/` | periodo de prueba, duración y resolución | `/contratos-laborales/`, `/despidos/`, `/empresas/derecho-laboral/` |
| `/blog/accidente-de-moto/` | accidente de moto, indemnización | `/indemnizaciones-trafico/`, guía del baremo, `/accidente-laboral/` |
| `/blog/viajes-combinados/` | viajes combinados, reclamación y cancelación | `/consumo/`, `/derecho-civil/`, `/reclamaciones-bancarias/` |

Mismas reglas de forma del §0 y QA de datos que los lotes anteriores. **Pendiente: revisión del letrado y
solicitud de indexación en GSC.**

### Duodécimo lote de contenido — 8 guías más (6 oct 2026)

Mismo criterio. Va a `src/data/SEO_ARTICLES_OCT5.ts` (importado por `SEO_ARTICLES.ts` tras `SEO_ARTICLES_OCT4`),
así que `BLOG_POSTS` pasa a **220 artículos** y `SEO_ARTICLES` a **149**. Ninguna crea categoría nueva.

| Guía nueva | Keyword objetivo | Enlaza a |
|---|---|---|
| `/blog/prision-provisional/` | prisión provisional, medidas cautelares | `/derecho-penal/`, guía de derechos del detenido, `/derecho-civil/` |
| `/blog/despido-disciplinario/` | despido disciplinario, causas e impugnación | `/despidos/`, `/contratos-laborales/`, `/empresas/derecho-laboral/` |
| `/blog/fraude-de-ley-contratos-temporales/` | fraude de ley en contratos temporales | `/contratos-laborales/`, `/despidos/`, `/empresas/derecho-laboral/` |
| `/blog/medianeria-y-lindes/` | medianería y lindes entre fincas | `/derecho-civil/`, `/responsabilidad-civil/`, `/incumplimiento-contrato/` |
| `/blog/arrendamiento-de-temporada/` | arrendamiento de temporada vs vivienda | `/derecho-civil/`, `/alquiler-viviendas/`, guía de zonas tensionadas |
| `/blog/prestacion-por-cuidado-de-menor-enfermo/` | prestación por cuidado de menor con enfermedad grave | `/reclamacion-pensiones/`, `/complemento-paternidad-maternidad/`, `/recursos-administrativos/` |
| `/blog/nacionalidad-de-hijos-nacidos-en-espana/` | nacionalidad de hijos nacidos en España | `/nacionalidad-extranjeria/`, `/recursos-administrativos/`, guía del examen CCSE |
| `/blog/seguro-de-decesos/` | seguro de decesos, cobertura y recobro | `/reclamaciones-seguros/`, `/consumo/`, `/derecho-civil/` |

Mismas reglas de forma del §0 y QA de datos que los lotes anteriores. **Pendiente: revisión del letrado y
solicitud de indexación en GSC.**

### Decimotercer lote de contenido — 8 guías más (6 oct 2026)

Mismo criterio. Va a `src/data/SEO_ARTICLES_OCT6.ts` (importado por `SEO_ARTICLES.ts` tras `SEO_ARTICLES_OCT5`),
así que `BLOG_POSTS` pasa a **228 artículos** y `SEO_ARTICLES` a **157**. Ninguna crea categoría nueva.

| Guía nueva | Keyword objetivo | Enlaza a |
|---|---|---|
| `/blog/quebrantamiento-de-condena/` | quebrantamiento de condena, incumplir orden de alejamiento | `/derecho-penal/`, `/violencia-genero/`, guía de derechos del detenido |
| `/blog/acogimiento-familiar/` | acogimiento familiar, familia acogedora | `/guarda-custodia/`, `/tutela-legal/`, `/modificacion-medidas-paterno-filiales/` |
| `/blog/derecho-de-retracto-y-tanteo/` | tanteo y retracto, adquisición preferente | `/derecho-civil/`, `/herencias-testamentos/`, `/reparto-herencia/` |
| `/blog/inspeccion-de-trabajo/` | Inspección de Trabajo, acta de infracción | `/empresas/derecho-laboral/`, `/despidos/`, `/contratos-laborales/` |
| `/blog/visado-de-residencia-y-estancia/` | visado de residencia y estancia, denegación | `/nacionalidad-extranjeria/`, `/recursos-administrativos/`, guía de prórroga de estancia |
| `/blog/portabilidad-y-permanencia-en-la-telefonia/` | portabilidad, permanencia, telefonía | `/consumo/`, `/nulidad-contrato/`, `/incumplimiento-contrato/` |
| `/blog/prestamos-usurarios/` | préstamo usurario, intereses abusivos | `/nulidad-contrato/`, `/reclamaciones-bancarias/`, `/consumo/` |
| `/blog/incapacidad-temporal/` | incapacidad temporal, baja médica | `/reclamacion-pensiones/`, `/incapacidad-permanente/`, `/complemento-paternidad-maternidad/` |

Mismas reglas de forma del §0 y QA de datos que los lotes anteriores. **Pendiente: revisión del letrado y
solicitud de indexación en GSC.**

### Decimocuarto lote de contenido — 8 guías más (6 oct 2026)

Mismo criterio. Va a `src/data/SEO_ARTICLES_OCT7.ts` (importado por `SEO_ARTICLES.ts` tras `SEO_ARTICLES_OCT6`),
así que `BLOG_POSTS` pasa a **236 artículos** y `SEO_ARTICLES` a **165**. Ninguna crea categoría nueva.

| Guía nueva | Keyword objetivo | Enlaza a |
|---|---|---|
| `/blog/pacto-de-socios/` | pacto de socios, cláusulas societarias | `/empresas/constitucion-sociedades/`, `/empresas/contratos-mercantiles/`, `/compraventas-empresas/` |
| `/blog/disolucion-y-liquidacion-de-sociedad/` | disolución y liquidación de sociedad | `/empresas/`, `/empresas/constitucion-sociedades/`, `/cobro-deudas-impagos/` |
| `/blog/clausulas-abusivas-en-contratos/` | cláusulas abusivas, control de transparencia | `/consumo/`, `/nulidad-contrato/`, `/incumplimiento-contrato/` |
| `/blog/garantia-de-productos-y-devoluciones/` | garantía de productos, devoluciones | `/consumo/`, `/incumplimiento-contrato/`, `/nulidad-contrato/` |
| `/blog/fraude-fiscal-y-delito-contra-hacienda/` | fraude fiscal, delito contra la Hacienda Pública | `/derecho-penal/`, `/recursos-administrativos/`, `/empresas/` |
| `/blog/drogotest-positivo-y-sanciones/` | drogotest positivo, drogas al volante | `/reclamacion-multas-trafico/`, `/indemnizaciones-trafico/`, `/derecho-penal/` |
| `/blog/seguro-de-hogar-y-reclamacion/` | seguro de hogar, reclamar siniestro | `/reclamaciones-seguros/`, `/consumo/`, `/derecho-civil/` |
| `/blog/proteccion-internacional-asilo-y-refugio/` | asilo, refugio, protección internacional | `/nacionalidad-extranjeria/`, `/recursos-administrativos/`, `/tutela-legal/` |

Mismas reglas de forma del §0 y QA de datos que los lotes anteriores. **Pendiente: revisión del letrado y
solicitud de indexación en GSC.**

### Prioridad nº 1 de contenido — **cubierta** (sep 2026)

**Landing de urbanismo** (`/urbanismo/`). `abogado urbanismo lucena` acumulaba **172 impresiones en 12 meses
en el puesto 20,3 sin que existiera página**: la cubrían de refilón `/derecho-civil/` y `/recursos-administrativos/`.
Se publicó como **landing de servicio** y no como artículo, aplicando la regla 5 (la página de servicio existe
antes que el artículo). Fuente: exporte de GSC del 14 sep 2026.Con la landing publicada, el siguiente escalón de esa consulta es contenido de apoyo servido desde ella
(licencias de obra menor y declaración responsable, legalización de obras, suelo rústico), no una segunda landing.

### Clúster Empresas — **completo** (21 sep 2026): 1 hub + 4 fichas hijas + 7 guías

El segundo pilar temático del sitio (tras Familia) construido como clúster cerrado: un hub, cuatro fichas hijas
y siete guías que enlazan hacia arriba y entre sí. La QA garantiza que ninguna quede huérfana y que ninguna
pasa de profundidad 2.

**Estructura (de más a menos comercial):**

| Nivel | Página | Ataca |
|---|---|---|
| Hub | `/empresas/` | abogado empresas/autónomos Lucena, cuota mensual asesoría |
| Ficha hija | `/empresas/constitucion-sociedades/` | constitución SL, pactos, Ley Crea y Crece |
| Ficha hija | `/empresas/derecho-laboral/` | contratos y despidos desde la empresa |
| Ficha hija | `/empresas/contratos-mercantiles/` | contratos de negocio, local comercial |
| Ficha hija | `/empresas/proteccion-de-datos/` | RGPD, Verifactu, videovigilancia |
| Guía | `/blog/cuanto-cuesta-constituir-sl-2026/` | cuánto cuesta constituir una SL |
| Guía | `/blog/pactos-de-socios-sl/` | pacto de socios, salida de socio |
| Guía | `/blog/impagos-entre-empresas/` | impago facturas, monitorio, Ley 3/2004 |
| Guía | `/blog/alquilar-local-comercial-contrato/` | contrato local comercial, subrogación comprador |
| Guía | `/blog/traspaso-de-bar-paso-a-paso/` | traspaso bar, hostelería, ITP |
| Guía | `/blog/crear-empresa-andalucia/` | crear empresa Andalucía |
| Guía | `/blog/responsabilidad-administradores-sl/` | responsabilidad administradores SL |

**Mapa de enlazado (cada guía apunta arriba por su entrada en `blogInternalLinks.ts`, que además alimenta la
tarjeta «Guías relacionadas» de las fichas):**

- `cuanto-cuesta-constituir-sl-2026` → constitución-sociedades · `/empresas/` · proteccion-de-datos
- `pactos-de-socios-sl` → constitucion-sociedades · contratos-mercantiles · `/compraventas-empresas/` · responsabilidad-administradores-sl
- `impagos-entre-empresas` → `/cobro-deudas-impagos/` · contratos-mercantiles · masc-negociacion-obligatoria
- `alquilar-local-comercial-contrato` → contratos-mercantiles · `/urbanismo/` · `/compraventas-empresas/` · desahucio-por-impago-lucena
- `traspaso-de-bar-paso-a-paso` → `/compraventas-empresas/` · contratos-mercantiles · derecho-laboral · local-comercial · crear-empresa
- `crear-empresa-andalucia` → `/empresas/` · constitucion-sociedades · proteccion-de-datos · `/compraventas-empresas/` · `/recursos-administrativos/`

**Regla replicable a otros clústeres:** página de servicio primero, hub con sección «Empresa 360º» que reparte
autoridad a landings hermanas, guías de apoyo que solo atacan consultas informativas (cada una con su
keyword y su entrada en `blogInternalLinks`), y el CTA de cada guía lleva a la ficha que convierte.

**Clúster en espera:** Urbanismo (1 guía + landing), que seguirá este mismo patrón al llegar a 3 guías y hub reforzado.

### Clúster Urbanismo — **completo** (21 sep 2026): 1 landing + 3 guías + hub de categoría

Segundo clúster cerrado con el mismo patrón que Empresas. La landing `/urbanismo/` reparte autoridad con tarjetas
«Más info» hacia las guías (disciplina, suelo rústico, licencias) y el CTA final enlaza la guía de prescripción:

| Nivel | Página | Ataca |
|---|---|---|
| Landing | `/urbanismo/` | abogado urbanismo Lucena (172 imp. 12 meses) |
| Guía | `/blog/licencia-obra-menor-declaracion-responsable/` | licencia obra menor, declaración responsable |
| Guía | `/blog/obra-sin-licencia-prescripcion/` | prescripción obra ilegal, orden de demolición |
| Guía | `/blog/suelo-rustico-cordoba/` | construir en suelo rústico, vivienda vinculada |
| Hub categoría | `/blog/categoria/urbanismo/` | índice temático del blog (4 guías, umbral superado) |
| Guía | `/blog/legalizacion-obras/` | legalizar obra sin licencia, fuera de ordenación |

Enlazado: cada guía apunta a `/urbanismo/` y a `/recursos-administrativos/` por su entrada en `blogInternalLinks.ts`,
y se cruzan entre sí (suelo rústico ↔ obra sin licencia) y con herencias (división de fincas rústicas heredadas).
Siguiente escalón señalado en «Pendiente»: legalización de obras y más suelo rústico cuando GSC pida más.

### Pendiente

| Artículo | Keyword objetivo | Enlaza a |
|---|---|---|
> **El plan «Pendiente» está publicado al completo (21 sep 2026).** Solo queda el backup de ayudas al alquiler
> (se publica si el Plan Estatal se aprueba con números). El siguiente lote de contenido nace de GSC: consultas
> con impresiones sin página dedicada (§3) y la ampliación de los clústeres ya cerrados.

| Artículo | Keyword objetivo | Enlaza a |
|---|---|---|
| «Ayudas al alquiler del Plan Estatal 2026-2030» *(backup)* | ayudas alquiler jóvenes 2027 | `/derecho-civil/` |

### Reglas de oro

1. **Cada artículo → 1 página de servicio** (enlace interno arriba y en el CTA final): el artículo empuja la página que convierte.
2. Actualizar un artículo antiguo cada mes (señal de frescura): ampliar, añadir FAQ, revisar plazos y leyes.
3. **Revisión legal del letrado antes de publicar** (ningún contenido sale sin validar).
4. Los artículos nuevos entran en `BLOG_POSTS.ts` (aparecen solos en home e índice), en `seo.ts` (`ROUTE_DEFAULTS`) y en el sitemap.
5. Si un tema necesita página de servicio propia (como `/consumo/`), crearla **antes** que el artículo.

### Rutina mensual (~30 min/semana)

- [ ] Publicar 2-4 artículos según el plan
- [ ] Solicitar indexación de cada artículo nuevo en GSC
- [ ] Compartir el artículo en **LinkedIn** (perfil de Sergio) y publicarlo en el GBP
- [ ] Revisar GSC: qué artículo nuevo gana impresiones y qué SERP sin dueño queda

> **Redes sociales — decisión tomada:** Facebook e Instagram del despacho **no se trabajan** (estaban
> abandonados: Instagram con 3 publicaciones) y por eso ya no se enlazan ni se declaran en el schema.
> Lo único que se mantiene es el **LinkedIn de Sergio**, que es el único perfil con valor de entidad
> y autoría. El esfuerzo va al blog y al GBP, no a un plan de contenidos en redes.

---

## 6. Dominio propio (paso futuro)

Hoy **no hay que cambiar nada**: el sitio vive en `https://sergiocruzchacon.vercel.app` y todo está configurado para ese dominio.
Cuando se compre el dominio propio, el orden es:

1. Comprar el dominio y configurar el **301** desde el vercel.app (Vercel → Project → Settings → Domains).
2. Cambiar el dominio en el código — los sitios que lo fijan a mano:
   - `src/data/site.ts` → `SITE_URL` (**la fuente de verdad**; `src/data/seo.ts` solo la re-exporta). De ella salen canonical, sitemap, schema/OG, `llms.txt` y **el aviso legal**, que se actualizan solos.
   - `public/robots.txt` (5 menciones: cabecera, comentarios y la línea `Sitemap:`)
   - `public/humans.txt` (4 menciones)
   - `scripts/search-console-client.ts` → `DEFAULT_PROPERTY` y el texto de ayuda
   - `package.json` → URLs de `search-console:inspect-new`
   - `scripts/search-console.test.ts` → URL de ejemplo del test
   - ✅ `scripts/indexnow.mjs` **no se toca**: deduce el host del propio sitemap
3. Construir y desplegar; comprobar que la canonical y el aviso legal ya muestran el dominio nuevo.
4. GSC: añadir y verificar la nueva propiedad (mantener la antigua), reenviar el sitemap y re-ejecutar `bun run indexnow`.
5. Actualizar el NAP en todos los directorios y en el GBP.

> **Por qué merece la pena:** los directorios y la prensa enlazan mejor a un dominio propio, la confianza del usuario sube y los backlinks acumulados apuntan a un dominio que controlas.

---

## 7. Keywords objetivo

| Prioridad | Consultas |
|---|---|
| **Alta** (volumen alto, competencia media) | abogado divorcio Lucena · abogado herencias Córdoba · abogado despido Málaga · indemnización accidente tráfico Córdoba · abogado familia Lucena |
| **Media** (volumen medio, competencia baja) | divorcio express Lucena · testamento Córdoba precio · despido improcedente Lucena · accidente laboral Córdoba · crear empresa Lucena |
| **Long-tail** (volumen bajo, alta conversión) | «cuánto cuesta un divorcio en Lucena» · «abogado especialista en herencias Córdoba» · «reclamar despido improcedente Málaga» · «mejor abogado accidentes tráfico Córdoba» · «abogado 24 horas Lucena» |

---

## 8. Decisiones cerradas (para no volver a discutirlas)

- **Redes sociales**: Facebook e Instagram fuera (sin actividad); solo LinkedIn de Sergio. Ver §5.
- **Landings de ciudad: el problema era la plantilla, no las plazas** (26 sep 2026). De las 32 páginas
  `/abogados-en-<ciudad>/`, **25 las generaba una única plantilla** (`abogados-en-[city].astro` +
  `LOCAL_LANDING_PAGES.ts`). La auditoría dio: **Jaccard 0,978-0,987** entre las páginas (prácticamente el mismo
  texto) y **0-6 palabras exclusivas** por página — `/abogados-en-baza/` tenía **cero**. Ese era el defecto
  real, medible **sobre el texto** e independiente de cómo rindieran después. Se borraron la plantilla, el
  generador y su test.
  **Las 25 plazas se han reescrito una por una** (26 sep 2026) en `src/data/cities/`, cada una con su
  comarca, su Tribunal de Instancia verificado, los municipios de su partido, la distancia real desde la
  oficina que la atiende y FAQs propias. Jaccard máximo actual: **0,707** (Baza / Huéscar, que comparten
  realidad ganadera), frente al 0,978-0,987 de la plantilla.
  **Y se corrigió un segundo caso que se había dado por bueno.** Se decía que las landings «escritas a mano»
  eran contenido real. Al medir sobre el HTML compilado, **Baena y Cabra estaban en 0,985**: eran la misma página
  con el nombre cambiado, montada con otro componente pero con el mismo problema. Montilla y Priego de Córdoba,
  en la misma situación. Las cuatro se han reescrito con su partido real, sus municipios y su economía (la DO del
  aceite en Baena, la quesería y La Valtieva en Cabra, el vino Montilla-Moriles en Montilla, el turismo de sierra
  en Priego). **Por eso el script mide el HTML y no el fichero de datos**: midiendo el dato salía 0,508 con las
  páginas ya bastante genéricas, porque lo que se publicaba era otra cosa.
  `scripts/check-city-similarity.mjs` mide ese Jaccard en cada `bun run qa` y **falla el build por encima de
  0,75**, para que la duplicación sea un error automático y no un juicio a posteriori.
  **Estructura de datos: un archivo por plaza** (`src/data/cities/<slug>.ts` + `cities/types.ts`, agregadas
  por `CITY_LANDINGS.ts`). La razón es práctica: un array de 25 entradas obliga a reescribir una región
  enorme para añadir una plaza, y cualquier error de edición afecta a todas. Con un archivo por plaza, una
  escritura nueva no puede tocar el contenido de otra ciudad. **La estructura se comparte; el texto no.**
  **Regla para las siguientes:** una plaza tiene página si hay una relación real con ella y contenido propio
  sobre su comarca y partido judicial — su tribunal, quién lo comparte, qué distancia de verdad hay desde la
  oficina, qué se consulta allí. Si no hay eso, la plaza se atiende desde el hub y no tiene página.

  > **Corrección de esta misma entrada (26 sep 2026).** La primera versión de este punto se apoyaba en que las 25
  > páginas tenían «ni una sola impresión en 16 meses». **Ese dato es falso y no puede usarse.** Las páginas se
  > crearon el **24 de septiembre de 2026 a las 14:47** (commit `a7fa929`) y estuvieron **en línea unos dos
  > días**. El export de Search Console que se usó como evidencia es anterior a su existencia, así que mide la
  > ausencia de las páginas, no su rendimiento. **No se puede afirmar nada sobre cómo habrían rindido** sin
  > esperar el rastreo, la indexación y la aparición en el export. Lo único defendible es lo medido sobre el
  > texto: la duplicación.
  >
  > Segunda corrección del mismo punto: se decía que las 25 plazas estaban «a 200 km de las dos oficinas».
  > **Es cierto para 6 de ellas** (Cádiz, Granada, Jaén) y **falso para 10**, que están en la provincia de
  > Málaga, donde sí hay oficina: Fuengirola a 20 min por la A-7, Torremolinos a 10, Benalmádena a 15,
  > Marbella a 50, Estepona a 80. Para esas diez la objeción de *doorway* no se sostenía con el argumento de
  > la distancia, solo con el de la duplicación. Hoy las páginas dicen la distancia real de cada una y
  > declaran de frente cuándo no hay oficina.
- **Aracena (Huelva): sí es una excepción, y por qué** (26 sep 2026). `/abogados-en-aracena/` es la única
  landing de la provincia de Huelva y **no contraviene la regla de arriba**: la consulta `abogado en aracena`
  trae **78 impresiones en la posición 24,3**, o sea demanda real que se perdía por no existir la página, y su
  contenido es verificable y propio — el **Tribunal de Instancia de Aracena** (Sección Civil e Instrucción, dos
  plazas, Avda. de Huelva s/n, CP 21200, según la Ley Orgánica 1/2025), la advertencia de que **la jurisdicción
  social está en Huelva capital y no en Aracena** (Sección de lo Social del Tribunal de Instancia de Huelva,
  plaza 3, c/ Vázquez López 19), y los **29 municipios** del Parque Natural declarado en 1989. **Declara de
  frente que no hay oficina en Aracena ni en Huelva** y que el circuito es videollamada + despachos bajo demanda:
  la distancia (más de 200 km) es el argumento a favor de decirlo, no a favor de disimularlo. Si algún día se abre
  oficina en Huelva, la página se actualiza y el texto local puede crecer.
- **Título de la home**: `Abogado en Lucena 24 h | Civil, Herencias, Familia y Penal | Scruz`. **La home es la
  URL que Google elige para las consultas de cabecera** (`abogado` 5,5 · `abogado civil` 3,5 · `abogado
  testamentos lucena` **1,71** · `sergio abogado` 6,25), no las landings de servicio, así que su title tiene que
  llevar los términos de esas consultas. Hasta sep 2026 ponía el nombre completo del letrado en lugar de
  «Herencias» y por eso mostraba un title sin la palabra *testamentos* en la consulta donde estaba en el puesto
  1,71, sin receber un clic. **La marca se queda abreviada («Scruz»), que es lo primero que Google recorta por
  la derecha**; el nombre del sitio ya se ve en el SERP y en la description. Ojo: `index.astro` define title y
  description **por su cuenta**, así que `ROUTE_DEFAULTS['/']` no manda sobre la home — hay que tocar los dos sitios.
- **aggregateRating: fuera** (retirado sep 2026). Google ignora las estrellas auto-declaradas en
  `LocalService`/`LocalBusiness` (su política de *self-serving reviews* solo admite las que trae la ficha de
  Google Business), así que no rendía nada en el SERP; con una única reseña publicada, el bloque solo daba una
  señal de baja confianza. **Se mantiene el marcado `review`** de las reseñas reales y visibles, que sí es
  honesto y válido. Si la ficha llega a 10+ reseñas, se puede declarar el `aggregateRating` sobre
  `Organization` (no sobre el `LegalService`) sin riesgo de penalización.
- **Texto corrupto en los artículos: no se publica nunca.** En sep 2026 se encontró que 15 artículos de
  `SEO_ARTICLES_ECONOMIC/LEGAL/EXTRA.ts` llevaban fragmentos de coreano y chino, palabras en inglés, frases
  duplicadas, comas sin espacio y un escape Unicode roto (`\uD83D`) — y eso se veía **en el `meta description`
  que muestra Google**, no solo en el cuerpo. Estaban en el sitemap y a punto de ser indexados. Causa: una
  generación por lotes que se coló sin revisar. **Regla:** tras cualquier ampliación masiva del blog, pasar un
  barrido de caracteres no latinos y de frases duplicadas sobre `src/data/` y `dist/` antes de desplegar
  (`grep -roP '[\x{AC00}-\x{D7AF}\x{4E00}-\x{9FFF}\x{FF00}-\x{FFEF}]' src dist`). Los 15 quedaron saneados el
  26 sep 2026, y los que reconstruyeron texto sustantivo llevan `TODO(revisión legal)` en el código.
- **Dominio**: el vercel.app es la URL principal y única hasta nuevo aviso. Ver §6.
- **Aviso legal**: declara el dominio tomándolo de `SITE_URL`, así que nunca puede desincronizarse del sitio real.
- **Schema**: `logo` es el logo de marca y `image` la foto del despacho (antes apuntaban al mismo archivo, con lo que el sitio declaraba una foto como su logotipo). El 24/7 se declara como disponibilidad del **teléfono de urgencias** (`ContactPoint.hoursAvailable`), no inflando el horario de la oficina, que sigue siendo L-V 9-18.
- **Nombres de ruta**: todos en minúsculas y sin acentos. `/FAQ/` se renombró a `/faq/` con un 301 en `vercel.json` (se hizo antes de completar la indexación, que es el momento barato). `scripts/check-link-graph.mjs` falla el build si aparece una ruta con mayúsculas o guion bajo.
- **FAQ visible**: el `FAQPage` del schema solo se declara si las preguntas están en la página. `/quienes-somos/` las tenía solo en el JSON-LD y ahora se renderizan con `EditorialFAQ`; `scripts/check-links.mjs` falla si vuelve a pasar.
- **Urbanismo**: se resolvió con una **landing de servicio** (`/urbanismo/`, sep 2026) y no con un artículo, por la regla 5: la consulta `abogado urbanismo lucena` tenía 172 impresiones y 0 páginas dedicadas. Va en el grupo «Derecho Administrativo» de `/servicios/` y en `SERVICES.ts`. El contenido de apoyo se sirve desde ella: la primera guía (licencia de obra menor y declaración responsable, sep 2026) ya enlaza a la landing en el texto y en el CTA, y estrena la categoría `Urbanismo` del blog, que necesitará 3 guías para tener hub propio.
- **Categorías del blog**: una categoría estrena página propia (`/blog/categoria/<área>/`) al llegar a **3 guías**; hasta entonces sus artículos se enlazan solo desde `/blog/`, para no publicar índices vacíos. La lista se deriva de `BLOG_POSTS` y el copy de cada hub vive en `BLOG_CATEGORIES.ts`. Violencia de género estrenó su hub con la tercera guía (sep 2026), porque ya tenía landing de servicio y era la candidata más clara de las categorías con dos artículos.
- **Sin categorías solapadas** (revisión de sep 2026): `Derecho bancario` → `Consumo y banca` (con `Consumo`), `Derecho de seguros` + `Seguros agrarios` → `Seguros`, `Prevención de riesgos laborales` → `Derecho Laboral` y `Actualidad legal` (cajón de sastre) → `Derecho Civil`. Cuatro categorías de 1-2 guías pasaron a tres hubs de 3-4 y dos categorías más pobladas. La etiqueta visible de cada artículo la escribe a mano el post, así que `scripts/check-links.mjs` compara su primer segmento con `BLOG_POSTS.category` y **falla el QA** si se desalinean.

## 9. Herramientas con datos verificados (sep 2026)

Siete páginas que no son contenido: son utilidades. Responden a las preguntas que aparecen **antes** de contratar a nadie y que ningún competidor del despacho resuelve, y por eso son las de mayor intención de búsqueda del sitio: quien las usa está a punto de contratar. Todas salen de un fichero de datos propio, no de texto escrito en la plantilla, y todas declaran su fuente.

| Ruta | Qué contesta | Fuente de los datos |
| :--- | :--- | :--- |
| `/que-juzgado-me-corresponde/` | El municipio → su partido judicial, su número y **dónde va el juicio social** (a la capital de provincia, no al partido) | `src/data/JUZGADOS.ts`: 48 partidos, 416 municipios, 5 provincias |
| `/partidos-judiciales/` | Qué se tramita en cada partido, qué plaza lo cubre y desde qué despacho se atiende | El mismo `JUZGADOS.ts` cruzado con `src/data/cities/` |
| `/calculadora-plazos/` | Fecha de vencimiento de 16 plazos, con la base de cómputo y el artículo | `src/data/PLAZOS.ts`: LPC, LJCA, Ley 40/2015, LEC, ET, RD 2/2015 |
| `/calculadora-tasa-judicial/` | Cuánto se paga de tasa judicial por tipo de proceso, y si te toca pagar | `src/data/TASA_JUDICIAL.ts`: art. 7.1 de la Ley 10/2012 + nota de la AEAT sobre la STC 140/2016 |
| `/impuestos-herencia/` | Plazo del ITPF, bonificación por presentar pronto y reducciones de Andalucía | LGT arts. 48 y 49 + Ley 5/2021 de Tributos Cedidos de Andalucía |
| `/reparto-herencia/` | Cuánto es la legítima y cómo se reparte entre cónyuge e hijos | Código Civil arts. 675, 806, 808, 809, 833, 834 y 835 |
| `/donde-atendemos/` | Qué plaza cubre qué materia, desde qué despacho y cuánto se tarda | `src/data/COBERTURA.ts`, leído del campo `matters` de `src/data/cities/` |

**Tres decisiones que conviene no deshacer:**

1. **La tasa judicial no se calcula por la cuantía, a propósito.** Se podría pedir el importe de lo que se reclama para que la página pareciera más potente, pero la cuota variable (art. 7.2) la anuló la STC 140/2016: el importe solo depende del tipo de proceso. Preguntarla sería engañar al visitante. Y lo primero que dice la herramienta es que **las personas físicas están exentas** (art. 4.2.a), que es la información que más despachos siguen cobrando.
2. **El ITPF no lleva la escala, y es a propósito.** La tarifa es de cada comunidad autónoma y Andalucía la bajó con la Ley 5/2021. Meter una tabla de porcentajes que cambia por provincia y por año es justo el dato que un día da un número falso. La página da lo que es igual en toda España (plazo de 6 meses, bonificaciones del 20 % y del 5 %, reducciones) y remite a la sede electrónica para el importe.
3. **El mapa de cobertura se lee, no se declara.** Las materias de cada plaza salen de una lectura por palabras clave del campo `matters` de su ficha, y **la página enseña ese texto debajo de cada tarjeta**. Declarar 29 plazas × 10 materias a mano son 290 datos que envejecen mal; esta forma cambia el mapa el día que cambia una ficha y deja la fuente a la vista.

**Lo que se arregló de paso (UX, no contenido):** el nav de escritorio pasa de `md` a `lg`, así que en tablet (768-1023 px) se sirve el menú desplegable completo en vez de una fila de enlaces que no caben y empujaban el botón de llamada contra el borde. Y el QR flotante de compartir era un botón de 24 px que solo crecía con `:hover`: en táctil no crecía y era un objetivo de 24 px, por debajo del mínimo de 44 px. Ahora es un `<details>` de 44 px que abre con un toque, con Enter o con el espacio, y en escritorio sigue abriéndose al pasar por encima.

**Por qué dos páginas judiciales y no una:** el buscador es de *dato rápido* (un municipio, una fila) y la guía es de *entender* (qué pasa en cada partido y por qué lo social va a otro sitio). Si un día dijeran lo mismo, serían dos URLs compitiendo y habría que borrar una. El criterio está escrito en la cabecera de `partidos-judiciales.astro` para que no se deshaga sin que nadie se entere.

**Regla de los plazos:** a `PLAZOS` solo se le añade una entrada con el artículo verificado en el texto consolidado del BOE. Hay sectores con plazos propios (Seguridad Social, Agencia Tributaria) que **no** están porque no se han verificado, y eso se dice en la propia página: es preferible un catálogo corto y cierto que uno largo y dudoso. La calculadora no aplica festivos (no sabe en qué provincia se tramita) y lo dice; el ajuste fino es lo que cobra la primera consulta, que es gratuita.

**Lo que estas páginas no van a hacer:** aparecer en Google por su contenido. No son consultas de búsqueda, son herramientas. Lo que sí interesa es el enlace interno y la tarea que resuelven. Para IndexNow (Bing) se han enviado las 240 URLs; para Google, lo que toca es Search Console, no IndexNow.

---

**Cómo mantener este documento:** actualiza la fecha de verificación de la cabecera cuando revises los datos y
**no añadas changelogs de sesión** — para eso está git. Si un dato deja de ser cierto, se corrige o se borra la fila;
no se deja "por si acaso".
