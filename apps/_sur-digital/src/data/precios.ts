// Precios publicados del sitio: planes y extras.
//
// Viven en un módulo TS y no dentro de data.astro para que los tests puedan
// importarlos sin pasar por el compilador de Astro (ver
// tests/presupuesto-datos.test.ts). `data.astro` los expone dentro de DATA, que
// sigue siendo la única puerta de entrada para los componentes.

export interface Plan {
  name: string;
  price: number;
  tagline: string;
  features: string[];
  popular: boolean;
}

export interface Extra {
  name: string;
  /** Importe tal y como se publica: "60€", "desde 150€", "39€/mes". */
  price: string;
  /** Importe numérico que usan la calculadora y los esquemas de precio. */
  amount: number;
  /** true en las cuotas que se pagan todos los meses. */
  monthly?: boolean;
  note: string;
}

// Planes y precios: única fuente de verdad. De aquí beben el componente
// Pricing (home y /precios/), el teaser PricingLink y la calculadora de
// presupuesto. Si cambias un precio, cámbialo solo aquí.
export const PLANS: Plan[] = [
  {
    name: "Landing Gratis",
    price: 0,
    tagline: "Tu primera web, sin riesgo",
    features: [
      "1 página (landing) moderna y responsive",
      "Botón de contacto directo",
      "1 revisión incluida",
      "Entrega en menos de 7 días",
      "Certificado SSL incluido",
    ],
    popular: false,
  },
  {
    name: "Portfolio",
    price: 390,
    tagline: "Fotógrafos, arquitectos y marca personal",
    features: [
      "Galería de proyectos optimizada para cargar rápido",
      "Textos de presentación redactados contigo",
      "Contacto directo por WhatsApp y formulario",
      "Certificado SSL y SEO local incluidos",
      "Formación para que subas tus proyectos tú",
    ],
    popular: false,
  },
  {
    name: "Web Completa",
    price: 490,
    tagline: "Hasta 5 páginas con dominio",
    features: [
      "Hasta 5 páginas a tu medida",
      "Dominio propio + hosting 1 año",
      "SEO básico para Google",
      "Optimización para móviles",
      "Hasta 3 revisiones",
      "Certificado SSL incluido",
      "Formación de 30 min + guía de uso",
      "Monitorización 24/7 y respuesta en 2 h laborables",
    ],
    popular: true,
  },
  {
    name: "Pro + Tienda",
    price: 890,
    tagline: "Tienda online o web grande",
    features: [
      "Tienda online o web corporativa grande",
      "Pasarela de pago integrada",
      "Gestión de productos y emails",
      "SEO local (Google Maps)",
      "Mantenimiento opcional 39€/mes",
      "Certificado SSL incluido",
      "Formación de 30 min + guía de uso",
      "Monitorización 24/7 y respuesta en 2 h laborables",
    ],
    popular: false,
  },
];

// Extras añadibles a cualquier plan (página /precios/)
export const EXTRAS: Extra[] = [
  {
    // `amount` es el importe numérico que usa la calculadora de la home:
    // así el precio no vive duplicado en dos sitios.
    name: "Página adicional",
    price: "60€",
    amount: 60,
    note: "Por página extra en los planes Web Completa y Pro.",
  },
  {
    name: "Idioma adicional",
    price: "desde 150€",
    amount: 150,
    note: "Estructura y SEO del segundo idioma (traducción aparte).",
  },
  {
    name: "Logo e identidad básica",
    price: "desde 150€",
    amount: 150,
    note: "Logo en todos los formatos, paleta de colores y tipografías.",
  },
  {
    name: "Mantenimiento mensual",
    price: "39€/mes",
    amount: 39,
    monthly: true,
    note: "Actualizaciones, copias de seguridad y cambios de textos y fotos. Sin permanencia.",
  },
  {
    name: "Migración de web antigua",
    price: "90€",
    amount: 90,
    note: "Redirecciones del dominio anterior para no perder posiciones en Google.",
  },
];
