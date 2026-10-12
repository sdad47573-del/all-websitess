# 🎯 SEO — Sur Digital (sur-digital.vercel.app)

> **Última verificación: 12 oct 2026.**
> **Fuente de datos:** `google_search/*.csv` (exporte Search Console del **12 oct 2026**,
> últimos 16 meses: 6 oct 2025 – 10 oct 2026).
> Totales: **14.224 impresiones, 7 clics, CTR 0,05 %**.
> Últimos 28 días: 977 imp, 1 clic (CTR 0,10 %).

## 1. Diagnóstico

### La marca colisiona con el periódico (no se arregla con código)

El ~90 % de las impresiones son búsquedas de Diario SUR, no de la agencia:

| Consulta | Impr. | Pos. | Clics | Intención real |
|---|---|---|---|---|
| `surdigital` | 7.852 | 6,1 | 3 | Periódico SUR digital |
| `sur digital` | 2.899 | 5,4 | 0 | Periódico |
| `sur digital malaga` | 1.300 | 5,3 | 0 | Periódico |
| `sur` / `digital` / `el sur digital` / `quiosco` / `diario sur malaga` | ~450 | 2-9 | 0 | Periódico/quiosco |

Posiciones 2-9 con CTR ~0 %: el que busca quiere el periódico y no hace clic.
**Decisión:** no perseguir esas consultas. El snippet ya dice
«Agencia de diseño web en Málaga», que es lo único que filtra bien.
El CTR global del sitio **siempre** parecerá bajo por este ruido; la métrica
que importa es el **CTR de las consultas comerciales**.

### Fugas comerciales reales (las que sí dan clientes)

| Página | Impr. | Pos. | Consulta que la delata |
|---|---|---|---|
| `/servicios/` | 14 | **4,4** | genérica servicios |
| `/blog/cuanto-cuesta-una-web-malaga-2026/` | 12 | **6,8** | `diseño web precios` (8 · 31,8) |
| `/blog/mantenimiento-web-20-euros-mes/` | 5 | **5,2** | `mantenimiento web malaga` (5 · 5,2) |
| `/blog/crear-pagina-web-malaga-2026/` → 301 a cuanto-cuesta | 7 | 13,6 | — (redirigido) |
| `/blog/kit-digital-que-cubre-y-que-no/` | 8 | 16,0 | `iva kit digital` (6 · 17,0) |
| `/blog/seo-local-malaga-negocios/` | 80 | 77,0 | `seo local` (92 · 24,1)¹ |
| `/blog/web-abogados-conseguir-clientes/` | 14 | 32,9 | `desarrollo web abogados` (6 · 19,0) |
| `/blog/web-clinica-dental-dentista-malaga/` | 29 | 30,3 | `dentista urgencia malaga` (5 · 17,6) |
| `/web-para-gimnasios/` | 6 | 27,8 | `diseño web para gimnasios` (6 · 27,8) |
| `/precios/` | 21 | 32,9 | `diseño web precios` |

¹ `seo local` (pos 24) la sirve probablemente `/blog/category/seo-local/`
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
siguen en español, la `og:image` es la genérica en español y no hay
hreflang (una sola página EN: no hace falta). Si el tráfico EN despega,
traducir chrome + OG propia.

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

## 3. Pendiente operativo (fuera del repo, por impacto)

1. **Desplegar** (nada de lo anterior existe en producción hasta entonces).
2. **Search Console**: las URLs fantasma /1/–/5/ ya devuelven 301; pedir
   indexación de `/servicios/`, `/precios/` y los 3 artículos en top 10.
3. **Google Business Profile** de la agencia (el pack local decide en
   «diseño web málaga» / «seo local málaga»); pedir reseñas a clientes.
4. **Medir a 30 días**: CTR de `/servicios/`, `cuanto-cuesta-una-web` y
   `mantenimiento` (pos ≤ 10 + 0 clics era fuga de snippet pura).
5. El siguiente escalón (`seo local`, `paginas web malaga`, `agencia digital
   malaga` en pos 24-88) es **autoridad y enlaces**, no snippets.
