# 🎯 SEO — Sur Digital (sur-digital.vercel.app)

> **Última verificación: 22 oct 2026.**
> **Fuente de datos:** `google_search/*.csv` (exporte Search Console del **22 oct 2026**,
> últimos 3 meses: 21 jul – 20 oct 2026).
> Totales: **4.514 impresiones, 5 clics, CTR 0,11 %**.
> El exporte anterior (16 meses) sirve de histórico: 14.224 impresiones y 7 clics.

## 1. Diagnóstico

### La marca colisiona con el periódico (no se arregla con código)

El ~90 % de las impresiones son búsquedas de Diario SUR, no de la agencia:

| Consulta | Impr. | Pos. | Clics | Intención real |
|---|---|---|---|---|
| `surdigital` | 2.464 | 5,4 | 2 | Periódico SUR digital |
| `sur digital` | 1.329 | 5,7 | 0 | Periódico |
| `sur digital malaga` | 19 | 11,9 | 0 | Periódico |
| `sur` / `el sur digital` / `sur web` / `sur digital marbella` | ~13 | 2-15 | 0 | Periódico/marca |

Posiciones 2-9 con CTR ~0 %: el que busca quiere el periódico y no hace clic.
**Decisión:** no perseguir esas consultas. El snippet ya dice
«Consultora web en Málaga | Landing gratis», que es lo único que filtra bien
(se ajustó el 22 oct: la posición de consultora define mejor el negocio que
«agencia», sin perder «diseño web» en la description).
El CTR global del sitio **siempre** parecerá bajo por este ruido; la métrica
que importa es el **CTR de las consultas comerciales**.

### Fugas comerciales reales (las que sí dan clientes)

| Página | Impr. | Pos. | Consulta que la delata |
|---|---|---|---|
| `/servicios/` | 26 | **4,3** | genérica servicios |
| `/blog/cuanto-cuesta-una-web-malaga-2026/` | 14 | **8,7** | `diseño web precios` (8 · 31,8) |
| `/blog/mantenimiento-web-20-euros-mes/` | 5 | **5,2** | `mantenimiento web malaga` (5 · 5,2) |
| `/blog/crear-pagina-web-malaga-2026/` → 301 a cuanto-cuesta | 8 | 13,1 | — (redirigido) |
| `/blog/kit-digital-que-cubre-y-que-no/` | 8 | 16,0 | `iva kit digital` (6 · 17,0) |
| `/blog/seo-local-malaga-negocios/` | 143 | 82,8 | `seo local` (92 · 24,1)¹ |
| `/blog/diseno-web-marbella/` | 59 | 74,6 | `diseño web marbella` (16 · 78,8) |
| `/blog/web-optica-malaga/` | 31 | 44,5 | `web para ópticas` |
| `/blog/web-clinica-dental-dentista-malaga/` | 29 | 30,3 | `dentista urgencia malaga` (5 · 17,6) |
| `/blog/web-abogados-conseguir-clientes/` | 22 | 54,9 | `desarrollo web abogados` (6 · 19,0) |
| `/precios/` | 22 | 31,6 | `diseño web precios` |
| `/web-para-gimnasios/` | 6 | 27,8 | `diseño web para gimnasios` (6 · 27,8) |
| `/web-para-inmobiliarias/` | 6 | **6,8** | `diseño web inmobiliarias` |

¹ `seo local` (pos 24) la sirve `/blog/category/seo-local/`
(120 imp · pos 24,4): el hub funciona, hay que subirlo a página 1 con enlaces
y reseñas, no con snippets.

### URLs fantasma /1/–/5/ (ya resuelto)

Rutas de una versión anterior, indexadas y dando 404
(`/2/`: 141 imp · pos 9,8; `/5/`: 234 imp · pos 69,5).
Ya redirigidas con 301 a `/` en `astro.config.mjs`. Google consolidará
solo; el exporte aún las muestra por inercia histórica.

## 2. Cambios aplicados (12 oct 2026)

**Causa raíz de la fuga:** el helper `pageTitle()` (`src/lib/blog.ts`) recorta
a 60 caracteres con «…», y **50 de 83 páginas** mostraban el title cortado
a media frase (el gancho —«precios reales», «guía 2026», «prueba gratis»—
quedaba fuera). Además había **9 descriptions > 162**.

**Receta:** titles base ≤ 44 caracteres (frontmatter del blog y `sectors*.ts`;
el H1 sale del mismo campo, así que sigue sonando natural) para que
`title + " | Sur Digital"` quepa sin recorte; descriptions a 127-162.

- **8 artículos con impresiones**: cuanto-cuesta-web (title con «precios 2026»,
  desc recortada de 163), mantenimiento (+«en Málaga», la consulta exacta),
  kit-cubre, seo-local-guía, abogados («Diseño web… consigue clientes»),
  dentistas (+gancho urgencias en la description: `dentista urgencia malaga`
  estaba en pos 17,6 sin clic), cuanto-cuesta-seo, kit-fraude.
- **27 artículos sin impresiones aún**: mismo tratamiento anti-truncado para
  no estrenar fugas cuando empiecen a rankear.
- **`/servicios/`** (pos 4,4, 0 clics): description de 166 → 133 con gancho.
- **21 páginas de sector** (`web-para-*`): titles de 64-81 → 29-43 caracteres
  (el H1 usa `h1Prefix`/`h1Accent`, no se toca); el schema `Service`+`FAQPage`
  ya existía.
- **`/especialidades/`**: description de 451 (listaba los 20 sectores) → ~150.
- **Oferta caducada**: `lanzamos-sur-digital-oferta` anunciaba «hasta el
  5 de octubre» en title y description; neutralizado sin fecha.

**Verificado en `dist/` tras `bun run build`: 0 titles con «…», 0 descriptions
> 162, 0 titles duplicados, 0 descriptions duplicadas.**

## 4. Artículos nuevos (12 oct 2026, segunda tanda)

Dos huecos del exporte sin página que los cubra:

- `/blog/salir-en-google-maps-malaga-marbella/` (SEO local): ataca `como salir
en google maps marbella` (7 imp), `aparecer en google málaga` (6) y
`posicionamiento google marbella` (6). Ángulo pack local + Marbella/inglés,
distinto de la guía general y de la ficha paso a paso (enlazadas dentro).
- `/blog/cuanto-cuesta-marketing-digital-malaga/` (Precios): presupuesto por
piezas con las cifras ya publicadas del sitio (web 0–1.200 €, SEO 50–400,
Ads gestión+presupuesto, mantenimiento 20 €), sin inventar números nuevos.
Ataca el clúster `agencia digital malaga` (400+ imp) desde el ángulo precio,
distinto de `elegir-agencia-marketing-malaga` (checklist, enlazado dentro).

Ambos con titles ≤ 44 (render ≤ 60 sin recorte), descriptions 127-162,
enlaces internos verificados y hueco en RSS/sitemap automático.
Re-verificado en `dist/`: el barrido sigue en 0/0/0/0.

## 5. Artículos nuevos (12 oct 2026, tercera tanda)

Resto de huecos del exporte (143 consultas) sin página que los cubra:

- `/blog/kit-digital-merece-la-pena/` (Precios): veredicto «¿compensa?» para
`kit digital merece la pena` (4 imp · pos 27,3) y `merece la pena el kit
digital` (2 · 25,0). Compara el desembolso real del bono (~780 €/año con
IVA y hosting, cifras ya publicadas del sitio) contra 339 € pagando la web,
sin inventar importes del programa. Enlaza los otros 3 artículos del
clúster Kit Digital.
- `/blog/cuanto-cuesta-tienda-online-malaga/` (Precios): ecommerce para
`presupuesto tienda online malaga` (4 imp · pos **2,0**, 0 clics) y
`web corporativa precio` (2 · 6,5). Mercado desde 900 € + 299 € propios,
costes ocultos y cuándo NO montar tienda. Enlaza cuanto-cuesta-web,
precios, mantenimiento y WhatsApp.

Build en 87 páginas; barrido total otra vez en 0/0/0/0.

## 6. Apuesta Marbella: ES + EN (12 oct 2026, cuarta tanda)

`posicionamiento google marbella` (6 imp · pos 84) y `como salir en google
maps marbella` (7 · 76,9) no tenían página dedicada:

- `/blog/diseno-web-marbella/` (Guías): precios, SEO bilingüe,
estacionalidad y checklist de contratación. Enlaza al artículo de Maps
y a la página inglesa.
- `/web-design-marbella/` (landing en inglés): para expats con negocio
que buscan en inglés. Requiere prop `lang` nueva en `Layout.astro`
(`<html lang="en">`), H1 propio, precios publicados, FAQ visible +
`FAQPage` con los mismos textos y CTA a LinkedIn.

Limitaciones v1 de la página EN (anotadas, no bloqueantes): Topbar/Footer
siguen en español y la `og:image` es la genérica en español. Si el tráfico
EN despega, traducir chrome + OG propia.

**hreflang (3 nov 2026).** `/web-design-marbella/` y
`/blog/diseno-web-marbella/` se declaran mutuamente como alternates de
idioma (`en-GB` ↔ `es-ES` + `x-default` al artículo español), con la
prop `translations` nueva en `Layout.astro`. Cada idioma conserva su
canonical: no hay canónicas cruzadas. Solo se emiten cuando la página
tiene equivalente real, así que el resto del blog (solo ES) sigue sin
hreflang.

Build en 89 páginas; barrido total en 0/0/0/0.

## 7. Profundizar lo que rankea (12 oct 2026, quinta tanda)

Ya no quedaban huecos sin página, así que el contenido nuevo va **dentro**
de las páginas con impresiones:

- `/servicios/` (14 imp · pos 4,4): sección FAQ visible de 6 preguntas
(plazos, titularidad, precio cerrado, SEO incluido, post-lanzamiento,
cobertura) + `FAQPage` generado de la misma fuente. Textos solo con
datos publicados (7 días, 30 días de ajustes, 100 €/mes SEO, 20 €/mes
mantenimiento, sin permanencia).
- `/blog/cuanto-cuesta-una-web-malaga-2026/` (12 imp · pos 6,8): bloque
«Preguntas frecuentes sobre precios» (dominio/hosting, coste anual,
cuándo vale la opción barata).
- `/blog/mantenimiento-web-20-euros-mes/` (5 imp · pos 5,2): bloque
«Preguntas frecuentes sobre mantenimiento» (hacerlo uno mismo, cambios
de texto, qué pasa si no se mantiene).

Barrido total tras el build: 0/0/0/0.

## 9. Clúster Anuncios: de 1 a 3 artículos (12 oct 2026, sexta tanda)

La categoría `Anuncios` tenía un solo post (el anuncio de lanzamiento).
El exporte muestra demanda SEM (`publicidad online malaga`, `agencia de
marketing digital sem malaga`, `empresa marketin digital malaga sem`)
que solo tocaba de refilón el artículo de precios y la comparativa:

- `/blog/google-ads-errores-negocios-locales/`: 5 errores clásicos
(conversiones, radio, estructura, landing, piloto automático).
- `/blog/google-ads-cuanto-tarda/`: fases de aprendizaje, primeras
llamadas y optimización; espejo del exitoso `seo-local-cuanto-tarda`
pero para Ads, sin solaparse.

Build en 91 páginas; barrido total en 0/0/0/0.

## 10. FAQ en el hub de especialidades (12 oct 2026, séptima tanda)

`/especialidades/` era el único hub comercial sin FAQ: 5 preguntas
visibles (precio por sector, sector fuera de lista, plazos, SEO incluido,
ejemplos) + `FAQPage` de la misma fuente, solo con datos publicados.
Con esto, home, servicios, precios y especialidades tienen FAQ.

## 11. FAQs en los 3 artículos top (12 oct 2026, octava tanda)

Bloques de preguntas frecuentes al cierre de `seo-local-malaga-negocios`
(80 imp), `web-clinica-dental-dentista-malaga` (29 imp, con gancho de
urgencias para `dentista urgencia malaga`) y `que-es-el-seo-local`
(puente entre clusters con enlaces a comparativa, precios y guía DIY).
Solo respuestas ya publicadas en el sitio + enlaces verificados.

## 8. Inicio: resumen de clientes + «ver más» (12 oct 2026)

La home mostraba los 47 clientes de golpe. Ahora enseña 6 y el botón
«Ver todos los clientes (47)» amplía la lista (`Portfolio.astro`:
`data-visible-count="6"`, sin JS todo visible y sin botón).
Los filtros trabajan siempre sobre la lista completa.
Además «proyectos» → «clientes» en todo lo visible del inicio
(H2, filtros, hero, Topbar `/#clientes`, sección `id="clientes"`,
meta description): el lenguaje genérico de proceso («tu proyecto»)
no se toca. Identificadores de código (`Project`, `portafolio-grid`)
tampoco, para no romper nada.

## 12. Nav sin duplicar: fuera el desplegable «Sectores» (15 oct 2026)

El nav mostraba **dos veces lo mismo**: el desplegable «Sectores» (37 links
uno por landing) y el enlace «Especialidades» (`/especialidades/`), que lleva
al mismo hub con la misma lista. Se eliminó el desplegable en escritorio y el
acordeón «Sectores» del menú móvil (`Topbar.astro`); el nav queda en
Servicios · Especialidades · Clientes · Precios · FAQ · Blog.

Se conserva `/especialidades/` (indexada, con `CollectionPage`+`FAQPage` y
citada desde cada artículo, servicios, home y footer): solo se quitó el
cromo duplicado del nav, no la página. Efecto colateral bueno: 37 enlaces
sitewide menos en cada HTML (menos dilución del link equity). Las landings
siguen enlazadas desde el hub, la home (`SectorsGrid`), el footer y sus
artículos de blog.

Barrido tras el build: 0/0/0/0 y `Sectores` solo en textos de contenido.

## 13. Auditoría del exporte de 3 meses (22 oct 2026)

### Canibalización: dos pares de URLs competían entre sí

El exporte deja dos duplicados evidentes, ambos con la misma intención y
contenido solapado. Ninguna de las dos URLs entraba en el top 10:

- **Kit Digital**: `kit-digital-merece-la-pena` y `kit-digital-merece-la-pena-2026`
  (misma pregunta, mismo cálculo). Se conserva el slug limpio con el artículo
  del cálculo a 3 años, y el `-2026` pasa a **301**.
- **Marbella**: `diseno-web-marbella` (59 imp) y `diseno-web-marbella-costa-del-sol`
  (3 imp, creado 2 días después). Se conserva el slug con más historial, se le
  integran los precios actuales, el enfoque Costa del Sol y el checklist, y el
  otro pasa a **301**.

Los enlaces internos que apuntaban a los slugs retirados se han actualizado.
El sitemap solo anuncia las URLs supervivientes.

### `/blog/category/seo-local/`: de archivo vacío a hub

Es la URL que Google usa para `seo local` (120 imp, pos 24,4) y solo tenía
tarjetas. Ahora lleva intro, tres secciones (cómo decide Google, páginas por
servicio y zona, precios y plazos), 4 preguntas frecuentes visibles con
`FAQPage` y enlaces a la guía, la ficha de Google, precios y servicio. Es la
página con más margen de la banda 20-30.

### Snippets con la consulta real

- `mantenimiento-web-20-euros-mes`: title «Mantenimiento web en Málaga: 39 €/mes»
  (la consulta `mantenimiento web malaga` estaba en pos 5,2 sin clic).
- `kit-digital-iva`: title «Kit Digital e IVA: quién paga el 21 %» y enlaces
  desde el artículo de «qué cubre», que era el que capturaba `iva kit digital`.
- `checklist-lanzar-web-negocio`: title «Lista de comprobación para lanzar tu
  web», la frase exacta de la consulta en español (pos 20).

### Técnico y consistencia

- **30 artículos tenían dos `<h1>`**: el del template y un `#` al inicio del
  Markdown. Se eliminó el duplicado del cuerpo; ahora cada página tiene un solo
  H1, el mismo que el title.
- **Precios obsoletos**: la FAQ de `/servicios/` decía 20 €/mes (el sitio ya
  cobra 39), y la de `/especialidades/` y un artículo de marketing seguían
  anunciando 99/299 € cuando la web completa son 490 € y la tienda 890 €.
  Corregidos los tres.
- **Oferta caducada**: el artículo de lanzamiento seguía anunciando «hasta el
  5 de octubre» en el cuerpo. Se quitó la fecha y se mantuvo la oferta vigente
  (primera landing gratis) con plazas limitadas al mes.
- Verificado en `dist/`: **116 páginas, 0 títulos/descripciones duplicados,
  0 titles > 60, 0 descriptions > 162, 0 páginas con más de un H1, 0 enlaces
  internos rotos**. Los dos 301 están en `.vercel/output/config.json`; las
  variantes con barra final (las canónicas indexadas) tienen fallback estático
  en `public/blog/…` con `noindex, follow` y canonical al destino.

## 14. Posicionamiento de consultora y clúster abogados (22 oct 2026)

La web se presentaba como «agencia de diseño web», pero el negocio es una
consultoría: el valor está en decidir qué necesita el cliente antes de
construir. Se ajustó el mensaje sin abandonar las keywords que traen
búsquedas:

- **Home**: title «Consultora web en Málaga | Landing gratis», description con
  diseño web, SEO local, tiendas y precios. El H1 sigue orientado al resultado
  («una web que traiga clientes»), no al sustantivo.
- **`/servicios/`**: title «Consultoría y diseño web Málaga desde 0€» y bloque
  nuevo «Consultoría web: decidir antes de construir», con enlace a precios.
- **`/quienes-somos`**: «No somos una consultora con comerciales…», coherente
  con el posicionamiento.
- **Schema `ProfessionalService`**: `founder` (Jose Aguilar), `slogan` y seis
  materias en `knowsAbout` (consultoría, diseño, desarrollo, SEO local, GBP y
  tiendas). Refuerza entidad y E-E-A-T sin inventar reseñas.

### Tercer duplicado: abogados

Había tres URLs para «web para abogados»: la landing de sector, una guía con
22 impresiones y otra con 0. Se conserva
`/blog/web-abogados-conseguir-clientes/`, se le añade la sección de precio
(490 € + 60 €/área + 39 €/mes) de la otra y la tercera pasa a **301** con
fallback estático para la variante con barra.

También se alineó `cuanto-cuesta-tienda-online-malaga` con la consulta real
`presupuesto tienda online malaga` (17 imp · pos 68,7): el title pasa a
«Presupuesto de tienda online en Málaga».

Verificado en `dist/`: **115 páginas, 113 indexables, 0 títulos/descripciones
 duplicados, 0 titles > 60, 0 descriptions > 162, 0 páginas con más de un H1,
 0 enlaces internos rotos y 3 stubs `noindex` de redirección**.

## 15. Sexta tanda de guías: problemas que ya están pasando (3 nov 2026)

El blog tenía mucha guía de «cómo montar» y poca de «me está pasando esto»,
que es donde está la urgencia y la conversión. Seis artículos nuevos, todos
enlazados desde guías ya publicadas (no quedan huérfanos en el índice):

- `/blog/perfil-google-business-suspendido/` (SEO local): suspensión de la
  ficha, pruebas para apelar y qué no hacer (crear ficha nueva). Enlazado
  desde `ficha-google-business-optimizada`.
- `/blog/aparecer-en-chatgpt-busquedas-ia/` (SEO local): cómo se citan los
  negocios locales en asistentes, sin prometer aparición. Enlazado desde
  `que-es-el-seo-local`.
- `/blog/resenas-negativas-google-como-responder/` (SEO local): plantillas
  por tipo de reseña, cuándo reportar y por qué no se ofrecen descuentos.
  Enlazado desde `conseguir-resenas-google`.
- `/blog/cambiar-de-agencia-web-sin-perder-google/` (Guías): traspaso de
  dominio, DNS, correo y cuentas de Google. Enlazado desde
  `elegir-agencia-marketing-malaga`.
- `/blog/dominio-caducado-o-perdido/` (Guías): fases gracia/redención/
  liberación y recuperación. Enlazado desde `dominio-hosting-negocios-guia`.
- `/blog/web-bilingue-negocio-costa-del-sol/` (Precios): cuándo compensa el
  inglés y qué cuesta (150 € el idioma adicional, cifra ya publicada).
  Enlazado desde `diseno-web-marbella`.

Ninguno inventa cifras: precios del sitio (490 €, 890 €, 39 €/mes, 150 €) y
procesos públicos de Google, registradores y OEPM. Las imágenes OG salen
solas del `og/[...route].ts` a partir de la colección.

## 16. Glosario propio y cuatro guías de mantenimiento (3 nov 2026)

`Glosario.astro` existía pero **no se importaba en ninguna página**: 20 términos
con enlaces internos escritos para nada. En vez de borrarlo, se convierte en
contenido:

- `src/data/glosario.ts` pasa a ser la única fuente (`TERMINOS_BASE` +
  `TERMINOS_EXTRA` + `TERMINOS`), y `Glosario.astro` la consume. Antes la lista
  base vivía dentro del componente y no se podía reutilizar.
- Nueva página `/glosario/` (29 términos): orden A-Z, ancla por término
  (`/glosario/#core-web-vitals`), índice de letras, `DefinedTermSet` +
  `BreadcrumbList`, OG propia y enlace desde el pie de las 126 páginas.
- Cuatro guías nuevas que cubren huecos reales, no variaciones de lo ya escrito:
  `/blog/web-hackeada-que-hacer/` (Guías), `/blog/spam-formularios-web-como-evitarlo/`
  (Guías), `/blog/accesibilidad-web-negocios-locales/` (Guías) y
  `/blog/cuanto-cuesta-un-logo/` (Precios, con el precio publicado: desde 150 €).

Se eligieron temas que el blog no tocaba —intrusión, spam de formularios,
accesibilidad y logo— en lugar de otra tanda de «web para X»: de esas ya hay
27. Sin cifras inventadas; la normativa de accesibilidad se cita de forma
prudente (Directiva 2019/882 para comercio electrónico).

Verificado en `dist/`: **126 páginas indexables, 0 títulos > 60, 0
descripciones > 162, 0 títulos duplicados, un solo H1 por página y 0 enlaces
internos rotos**.

## 17. Pendiente operativo (fuera del repo, por impacto)

1. **Desplegar** (nada de lo anterior existe en producción hasta entonces).
2. **Search Console**: pedir indexación de `/blog/category/seo-local/`, los tres
   slugs consolidados y los snippets nuevos; comprobar que los 301 de
   `kit-digital-merece-la-pena-2026`, `diseno-web-marbella-costa-del-sol` y
   `pagina-web-para-abogados-malaga` se leen como transferencia de señales y no
   como error.
3. **Google Business Profile** de la agencia (el pack local decide en
   «diseño web málaga» / «seo local málaga»); pedir reseñas a clientes.
4. **Medir a 30 días**: CTR de `/servicios/` (26 imp, pos 4,3),
   `mantenimiento` (pos 5,2), `cuanto-cuesta-una-web` (pos 8,7) y la categoría
   de SEO local (120 imp, pos 24,4).
5. El siguiente escalón (`seo local`, `paginas web malaga`, `agencia digital
   malaga`, clúster Marbella en pos 68-98) es **autoridad y enlaces**, no
   snippets: GBP, reseñas, directorios y menciones locales.

## 18. Contenido nuevo: el candado y la medición (3 nov 2026)

Dos huecos reales, no otra variación de «web para X»:

- `/blog/web-no-segura-https/` (Guías): el aviso de «sitio no seguro» es la
  primera impresión de la web y no había ningún artículo que lo cubriera.
  Explica las cuatro causas (certificado caducado, sin certificado, contenido
  mixto y certificado de otro dominio), cómo comprobarlo en móvil, qué cuesta
  (el certificado no se paga; hosting incluido el primer año y 60–90 €/año
  después, cifras ya publicadas) y una checklist de cierre.
- `/blog/que-medir-en-tu-web/` (Guías): la home presume de «medición» pero el
  blog solo hablaba de herramientas sueltas. Fija las cinco cifras que importan
  (impresiones y clics, consultas en posiciones 4-20, contactos, velocidad
  móvil y coste por cliente con anuncios), cómo montarlo gratis con Search
  Console y Analytics, y qué métricas ignorar.

Ninguno de los dos queda huérfano: se enlazan desde
`web-hackeada-que-hacer`, `dominio-hosting-negocios-guia`,
`mantenimiento-web-20-euros-mes`, `seo-local-malaga-negocios` y
`google-ads-errores-negocios-locales`, además del índice y la categoría.

Verificado en `dist/` tras `bun run build`: **128 páginas**, 0 enlaces internos
rotos, 0 titles > 60 y 0 descriptions > 162 entre las indexables, un solo H1
por página. Los cuatro stubs `noindex` de los 301 y los dos ficheros de
verificación de Google quedan fuera del recuento, como siempre.

## 19. Tres guías de estructura y canales (3 nov 2026)

Huecos que ninguna de las 78 piezas tocaba:

- `/blog/cuantas-paginas-debe-tener-tu-web/` (Guías): la pregunta con la que
  empieza casi todo presupuesto, sin artículo que la respondiera. Regla de una
  página por intención, los tres tamaños reales, qué función tiene cada página
  y cuándo una página de más solo añade relleno. Con las cifras publicadas
  (490 € con 5 páginas, 60 € cada extra).
- `/blog/correo-profesional-con-tu-dominio/` (Guías): la web se vendía sin
  resolver el correo, que es lo que sostiene facturas, reservas y la
  recuperación de cuentas. Montaje por hosting o proveedor, SPF/DKIM/DMARC,
  migración sin perder buzones y checklist.
- `/blog/newsletter-para-negocios-locales/` (Guías): no había nada de email
  marketing. Cuándo compensa (cliente recurrente) y cuándo no, qué enviar,
  cada cuánto, consentimiento y doble confirmación, y qué medir.

Ninguno queda huérfano: se enlazan desde `cuanto-cuesta-una-web-malaga-2026`,
`dominio-hosting-negocios-guia` y `whatsapp-en-tu-web`, además del índice y la
categoría. Sin cifras nuevas: 490 €, 60 €/página y lo ya publicado sobre
dominio y hosting.

## 20. Texto, respuesta y varias sedes (3 nov 2026)

Tres huecos más, ninguno solapado con lo publicado:

- `/blog/que-texto-poner-en-tu-web/` (Guías): el blog enseñaba a estructurar
  páginas, pero no a escribirlas. Portada en cuatro respuestas, tabla de frases
  que no dicen nada con su versión útil, ejemplo antes y después, qué va en
  cada página y la entrevista de cinco preguntas.
- `/blog/que-hacer-cuando-llega-un-contacto/` (Guías): la conversión se contaba
  hasta el formulario. Ahora cubre el plazo de respuesta (menos de 24 h, el
  compromiso ya publicado), qué mirar en los primeros minutos, plantilla de
  primera respuesta, tres preguntas, seguimiento en día 2 y día 7 y qué
  registrar.
- `/blog/web-con-varias-sedes-o-franquicia/` (Guías): la FAQ de SEO local
  resolvía «varios locales» en una línea. Una web con páginas por sede frente a
  varias webs, NAP idéntico, horario y teléfono por sede, franquicia y sus
  cláusulas, y el coste con las cifras publicadas (490 € y 60 € por página).

Enlazados desde `cuantas-paginas-debe-tener-tu-web`, `whatsapp-en-tu-web` y
`seo-local-malaga-negocios`, además del índice y la categoría.

## 21. El idioma sale de la URL (5 nov 2026)

Las versiones en inglés, alemán, francés, portugués y ruso vivían en
`/en/`, `/de/`, `/fr/`, `/pt/` y `/ru/`. Ahora la URL es la misma para los seis
idiomas (`/precios/`, `/contacto/`, `/faq/`, `/glosario/` y `/`): el idioma se
guarda en la cookie `lang` y lo aplica Vercel con rewrites (español si no hay
cookie).

- Cada idioma se compila en `/i18n/<lang>/…`, una carpeta privada: no se
  enlaza, va excluida del sitemap y en `robots.txt`.
- Canonical y `og:url` apuntan siempre a la URL limpia. Se dejan de emitir los
  hreflang entre idiomas porque ya comparten URL; solo queda el par ES ↔ EN de
  `/web-design-marbella/` ↔ `/blog/diseno-web-marbella/`, que sí son URLs
  distintas.
- Las URLs antiguas con prefijo devuelven 301 a la limpia (conservan el
  enlazado y el historial). `/de/precios/` → `/precios/`.
- Googlebot no envía la cookie: indexa siempre la versión española, que es la
  que se posiciona. El contenido traducido queda para quien elige idioma.
- El selector de idioma ya no navega a otra ruta: escribe la cookie y recarga.
  Sin JS se queda en el idioma actual.

El build sigue siendo 100 % estático (sin funciones). En local, `astro dev`
resuelve las URLs limpias con `tools/clean-urls.ts`; `astro preview` no aplica
la cookie y sirve la versión española.
