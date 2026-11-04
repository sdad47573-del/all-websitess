// Comparativa con competidores de Málaga por features y precios publicados.
// Fuente: COMPETENCIA-FEATURES.md (4 nov 2026). Solo se recoge lo que cada
// proveedor publica en su web; si no publica precio, se dice. La última
// columna resume la ventaja que le queda al competidor frente a Sur Digital.

export const MARKET_UPDATED = "4 de noviembre de 2026";

export interface MarketRow {
  provider: string;
  web: string;
  seo: string;
  ads: string;
  maintenance: string;
  edge: string;
  /** Fila propia, resaltada en la tabla. */
  us?: boolean;
}

export const MARKET_COMPARISON: MarketRow[] = [
  {
    provider: "Sur Digital",
    web: "Landing 0 € · portfolio 390 € · web 490 € · tienda 890 €; enterprise desde 2.500 €",
    seo: "SEO técnico incluido; SEO local 149 €/mes",
    ads: "Redes 145 €/mes; Google Ads 150 €/mes + inversión",
    maintenance: "39 €/mes; anual 750 € o 900 €",
    edge: "—",
    us: true,
  },
  {
    provider: "Zaliza Marketing",
    web: "Landing 400 €, informativa 800 €, restaurante 600 €, tienda 1.200 €, a medida; WordPress/WooCommerce/Shopify",
    seo: "SEO técnico, una página por servicio, datos estructurados, sitemap, Analytics",
    ads: "SEO desde 380 €/mes; campañas desde 320 €/mes; informe mensual",
    maintenance: "Sí, con formación al cliente",
    edge: "WordPress como CMS reconocido y casos publicados",
  },
  {
    provider: "Haleteo Studio",
    web: "Packs Basic / Advance / Premium; hasta 6 páginas; blog, galería, chat WhatsApp",
    seo: "SEO «turbo» en Premium, alta en Google Maps gratis",
    ads: "SEO mensual y Google Ads",
    maintenance: "Sí, tests de velocidad mensuales",
    edge: "Chat WhatsApp embebido, mapas de calor y test A/B (Premium)",
  },
  {
    provider: "WOM Marketing",
    web: "WordPress, WooCommerce, PrestaShop, Shopify y código a medida",
    seo: "SEO como servicio aparte",
    ads: "Community manager y publicidad online",
    maintenance: "Sí",
    edge: "Hosting a elección del cliente y multi-idioma en el paquete base",
  },
  {
    provider: "Potencia Redes",
    web: "Web 69 €/mes o 599 € pago único",
    seo: "—",
    ads: "Redes 145 €/mes; Meta Ads +99 €/mes",
    maintenance: "Incluido en la cuota",
    edge: "Chatbot IA 69 €/mes y devolución de 30 días",
  },
  {
    provider: "Wisea",
    web: "WordPress/WooCommerce y desarrollo propio; wireframes y prototipos",
    seo: "SEO y mantenimiento técnico",
    ads: "Marketing digital",
    maintenance: "Sí",
    edge: "Prototipado previo y mantenimiento de plugins de WordPress",
  },
  {
    provider: "PrecioPaginaWeb",
    web: "Landing, blog, portfolio, corporativa, tienda (WordPress)",
    seo: "SEO básico",
    ads: "✗",
    maintenance: "No publicado",
    edge: "—",
  },
  {
    provider: "Agencia de SEO Málaga",
    web: "Diseño web desde 499 €",
    seo: "SEO desde 199 €/mes; Google Business incluido",
    ads: "Google Ads desde 150 €/mes + inversión; redes sociales",
    maintenance: "No publicado",
    edge: "Vende la ficha de Google Business como producto suelto",
  },
  {
    provider: "Agentes Kit Digital (MLG Diseño y otros)",
    web: "Web corporativa + SEO on page + RGPD + responsive dentro del bono",
    seo: "SEO 12 meses incluido en el bono",
    ads: "Redes 12 meses (plan de contenidos y posts semanales)",
    maintenance: "Fuera del bono",
    edge: "Tramitación del bono y 12 meses de SEO y redes pagados",
  },
  {
    provider: "Malagalogo",
    web: "Sin catálogo cerrado; auditoría previa",
    seo: "Mantenimiento y SEO por horas",
    ads: "✗",
    maintenance: "Por horas, con parte mensual",
    edge: "Accesibilidad Ley 11/2023 y transparencia de coste anual",
  },
];

// Mercado nacional: proveedores que compiten en remoto. La columna de
// features resume su catálogo publicado; la última, lo que sigue siendo
// diferencial frente a Sur Digital (ver COMPETENCIA-FEATURES.md, sección 3).
export interface NationalRow {
  provider: string;
  features: string;
  edge: string;
}

export const NATIONAL_COMPARISON: NationalRow[] = [
  {
    provider: "WebCraftEstudio",
    features:
      "Landing 250 €, corporativa 550 €, tienda 850 €, portfolio 400 €, rediseño 450 €; entrega 7–15 días; incluye en todos: responsive, SEO local, WPO, SSL, panel autogestionable + formación, datos estructurados «para IA», soporte 24/7",
    edge: "Soporte 24/7 sin condiciones y casos publicados",
  },
  {
    provider: "WebAvanzada",
    features:
      "Planes desde 299 € + plan enterprise con consultoría técnica, integraciones, API y SLA",
    edge: "Nada de catálogo: el enterprise con SLA e integraciones ya existe desde 2.500 €",
  },
  {
    provider: "Dos Setenta (Madrid)",
    features:
      "Corporativas, ecommerce, landing, a medida; mantenimiento, migración a Shopify, maquetación, micrositios, hosting, API REST; precios 1.500–10.000 €",
    edge: "Hosting gestionado y migración a Shopify",
  },
  {
    provider: "TodoBravo (Madrid, opera Málaga)",
    features:
      "20 años, equipo multidisciplinar, consultoría de marketing, mantenimiento, dominios y hosting, logo y branding, formación, atención en ES/FR/EN",
    edge: "Branding, consultoría de marketing y equipo en tres idiomas",
  },
  {
    provider: "La Teva Web (Barcelona)",
    features: "20+ años, SEO y SEM, blog técnico, gestión de reseñas de Google",
    edge: "Contenido SEO continuo y gestión de reseñas como servicio",
  },
  {
    provider: "Freelance / consultor",
    features:
      "35–100 €/hora, 390 €/día de media en consultoría; trabajo por proyecto",
    edge: "Precio por hora para proyectos pequeños",
  },
];
