import { OGImageRoute } from "astro-og-canvas";
import { getCollection } from "astro:content";
import { LOCALE_CONTENT, LOCALES } from "../../data/i18n";
import { SECTORS } from "../../data/sectors";

const posts = await getCollection("blog", ({ data }) => !data.draft);

// Clave = ruta de la imagen (/og/<clave>.png); valor = datos para el render
const pages: Record<string, { title: string; description: string }> = {
  // Imágenes genéricas para home y blog
  "default.png": {
    title: "Sur Digital",
    description: "Diseño web en Málaga. Tu primera landing page gratis.",
  },
  "blog.png": {
    title: "Blog Sur Digital",
    description: "Guías de diseño web y SEO local para negocios de Málaga.",
  },
  "precios.png": {
    title: "Precios de diseño web en Málaga",
    description:
      "Landing gratis, web completa 690€, tienda 1.290€ y mantenimiento 49€/mes. Precio cerrado por escrito.",
  },
  "servicios.png": {
    title: "Servicios de diseño web en Málaga",
    description:
      "Desarrollo web, SEO local, consultoría, identidad gráfica, UX y contenidos. Primera landing gratis.",
  },
  "glosario.png": {
    title: "Glosario web en cristiano",
    description:
      "Los términos que se usan al vender una web, explicados en una frase. Sin humo.",
  },
  "especialidades.png": {
    title: "Webs por sector en Málaga",
    // Derivado de SECTORS: la lista no se queda desfasada al añadir sectores
    description: `${SECTORS.map((sector) => sector.name.toLowerCase()).join(
      ", "
    )}: propuesta especializada para cada sector.`,
  },
  // Una imagen por idioma: el texto va en su idioma, no en español. Sale del
  // mismo diccionario que la página, así que no hay copy duplicado que se
  // quede atrás.
  ...Object.fromEntries(
    LOCALES.map((lang) => [
      `${lang}.png`,
      {
        title: `${LOCALE_CONTENT[lang].h1} ${LOCALE_CONTENT[lang].h1Accent}`,
        description: LOCALE_CONTENT[lang].description,
      },
    ])
  ),
  // Una imagen por artículo: /og/blog/<slug>.png
  ...Object.fromEntries(
    posts.map((post) => [
      `blog/${post.id}.png`,
      { title: post.data.title, description: post.data.description },
    ])
  ),
  // Una imagen por landing de sector: /og/web-para-<sector>.png
  ...Object.fromEntries(
    SECTORS.map((sector) => [
      `web-para-${sector.slug}.png`,
      {
        title: `Web para ${sector.name.toLowerCase()} en Málaga`,
        description: sector.description,
      },
    ])
  ),
};

export const { getStaticPaths, GET } = await OGImageRoute({
  pages,
  getImageOptions: (_path, page) => ({
    title: page.title,
    description: page.description,
    // Fondo degradado de marca: naranja secundario → azul primario
    bgGradient: [
      [249, 162, 63], // #F9A23F
      [0, 138, 249], // #008AF9
    ],
    padding: 70,
    font: {
      title: {
        size: 62,
        color: [255, 255, 255],
        weight: "Bold",
        lineHeight: 1.2,
      },
      description: {
        size: 28,
        color: [255, 255, 255],
        weight: "Normal",
        lineHeight: 1.4,
      },
      // 👆 Los pesos dependen de la fuente cargada en `fonts`
    },
    // Noto Sans COMPLETA (latina + cirílica) en un solo archivo. Los subsets
    // de Fontsource (latin-400, cyrillic-400…) se registran como una única
    // familia y solo se usa el primer archivo: la tarjeta rusa salía con
    // cuadros en lugar de letras. Con los TTF completos hay una sola familia
    // que cubre los seis idiomas, acentos incluidos.
    fonts: [
      "https://cdn.jsdelivr.net/gh/googlefonts/noto-fonts@main/hinted/ttf/NotoSans/NotoSans-Regular.ttf",
      "https://cdn.jsdelivr.net/gh/googlefonts/noto-fonts@main/hinted/ttf/NotoSans/NotoSans-Bold.ttf",
    ],
  }),
});
