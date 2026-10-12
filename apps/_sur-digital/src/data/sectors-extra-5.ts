// Quinta tanda de sectores: salud y bienestar (nutricionistas, entrenadores),
// comercio (tiendas de ropa) y servicios del hogar y mascotas (jardinería,
// peluquería canina). Nichos con búsquedas locales claras en Málaga capital
// y Costa del Sol que aún no tenían página propia.
// Igual que las tandas anteriores: viven en su propio fichero y `sectors.ts`
// los fusiona con un spread, así que todo lo que lee SECTORS (menú, home,
// /especialidades/, footer y las OG) los ve sin cambiar nada.
//
// `import type` es solo un tipo: se borra al compilar y no crea ciclo real.

import type { SectorPage } from "./sectors";

export const SECTORS_EXTRA_5: SectorPage[] = [
  {
    slug: "nutricionistas",
    name: "Nutricionistas y dietistas",
    emoji: "🥗",
    navLabel: "Web para nutricionistas",
    tagline: "Primera cita que entra sola",
    title: "Diseño Web para Nutricionistas en Málaga | Sur Digital",
    description:
      "Webs para nutricionistas en Málaga: servicios y planes con precios, primera cita online, modalidad presencial y online. Desde 0€, en menos de 7 días.",
    h1Prefix: "Tu consulta",
    h1Accent: "llena cada semana",
    intro:
      "Quien busca nutricionista compara enfoque, precio y cercanía en el móvil. Si tu web no enseña cómo trabajas ni deja pedir la primera cita, ese paciente elige a quien sí lo enseña.",
    pains: [
      "Tus planes y precios solo existen en la primera visita",
      "No se puede pedir cita sin llamar por teléfono",
      "No apareces buscando «nutricionista Málaga» ni «dietista»",
      "Tu enfoque (deportivo, digestivo, pérdida de peso) no se entiende",
    ],
    features: [
      {
        title: "Planes con precios claros",
        text: "Primera visita, bonos y seguimiento online: el paciente sabe qué compra antes de escribirte.",
      },
      {
        title: "Primera cita en un clic",
        text: "Formulario con motivo de consulta y modalidad (presencial u online): recibes pacientes clasificados.",
      },
      {
        title: "Enfoque por objetivo",
        text: "Deporte, digestivo, embarazo, pérdida de peso: cada línea con su página y su mensaje.",
      },
      {
        title: "Google Maps y reseñas",
        text: "Ficha optimizada con fotos de la consulta y reseñas de pacientes: es lo que decide entre dos profesionales.",
      },
    ],
    blogPost: "/blog/whatsapp-en-tu-web/",
    faq: [
      {
        q: "¿Puedo ofrecer consulta online y presencial?",
        a: "Sí: la web separa ambas modalidades con sus precios y su forma de reserva.",
      },
      {
        q: "¿Merece la pena publicar los precios de los planes?",
        a: "Sí: filtra curiosos y acelera decididos. Quien ve el bono y escribe ya viene convencido.",
      },
      {
        q: "¿Sirve si paso consulta en varios centros?",
        a: "Sí: la web declara cada ubicación y horario para posicionar en cada zona.",
      },
    ],
  },
  {
    slug: "entrenadores",
    name: "Entrenadores personales",
    emoji: "💪",
    navLabel: "Web para entrenadores",
    tagline: "Bonos y planes que se venden solos",
    title: "Diseño Web para Entrenadores en Málaga | Sur Digital",
    description:
      "Webs para entrenadores personales en Málaga: bonos y planes con precios, reserva de sesión, antes y después. Desde 0€, en menos de 7 días.",
    h1Prefix: "Tus sesiones",
    h1Accent: "vendidas por adelantado",
    intro:
      "El que quiere ponerse en forma compara entrenadores por Instagram y elige al que tiene planes claros y reserva fácil. Sin web con precios, compites solo por mensajes directos que se enfrían.",
    pains: [
      "Das precios por mensaje y pierdes clientes por el camino",
      "Tus bonos y planes no están en ningún sitio",
      "No apareces buscando «entrenador personal Málaga»",
      "Tus resultados (antes/después) no se ven fuera de Instagram",
    ],
    features: [
      {
        title: "Bonos con precios",
        text: "Sesión suelta, bonos de 10 y planes mensuales: el cliente elige y escribe decidido.",
      },
      {
        title: "Reserva de sesión",
        text: "Formulario con objetivo, horario y lugar (gimnasio, domicilio, online): llegas con el plan medio hecho.",
      },
      {
        title: "Resultados visibles",
        text: "Antes y después con permiso del cliente: es lo que vende entrenamiento.",
      },
      {
        title: "Google Maps y reseñas",
        text: "Ficha optimizada por zonas con reseñas de clientes: el empujón final para elegirte.",
      },
    ],
    blogPost: "/blog/publicar-precios-en-la-web/",
    faq: [
      {
        q: "¿Puedo separar presencial, domicilio y online?",
        a: "Sí: cada modalidad tiene su sección, su precio y su formulario.",
      },
      {
        q: "¿Los bonos se pueden comprar desde la web?",
        a: "Se reservan desde la web y se pagan como tú trabajes; si el volumen lo pide, montamos tienda.",
      },
      {
        q: "¿Sirve si entreno en varios gimnasios?",
        a: "Sí: la web declara cada zona y centro para posicionar en todas ellas.",
      },
    ],
  },
  {
    slug: "tiendas-ropa",
    name: "Tiendas de ropa y boutiques",
    emoji: "👗",
    navLabel: "Web para tiendas de ropa",
    tagline: "Catálogo que vende sin depender solo de Instagram",
    title: "Diseño Web para Tiendas de Ropa en Málaga | Sur Digital",
    description:
      "Webs para tiendas de ropa en Málaga: catálogo con fotos, novedades, tienda online y recogida en tienda. Desde 0€, en menos de 7 días.",
    h1Prefix: "Tu tienda",
    h1Accent: "abierta 24 horas",
    intro:
      "Tu clienta mira Instagram, pero compra donde ve precio, tallas y cómo conseguirlo. Sin web con catálogo, cada venta depende de un mensaje directo que puede no llegar nunca.",
    pains: [
      "Vendes por mensajes directos que se pierden y se enfrían",
      "Tus novedades solo existen en stories que caducan",
      "No apareces buscando «boutique Málaga» ni tu estilo",
      "No tienes forma de vender fuera de tu horario",
    ],
    features: [
      {
        title: "Catálogo con fotos reales",
        text: "Novedades y básicos con precio y tallas: la clienta elige antes de escribirte.",
      },
      {
        title: "Tienda online o encargo",
        text: "Venta completa con pagos o encargo por WhatsApp con recogida en tienda, según tu volumen.",
      },
      {
        title: "Novedades que posicionan",
        text: "Sección de novedades actualizable: cada colección nueva es contenido que Google indexa.",
      },
      {
        title: "Google Maps y reseñas",
        text: "Ficha optimizada con fotos de la tienda y reseñas de clientas: el tráfico de barrio entra solo.",
      },
    ],
    blogPost: "/blog/cuanto-cuesta-tienda-online-malaga/",
    faq: [
      {
        q: "¿Necesito tienda online completa desde el primer día?",
        a: "No: se empieza con catálogo y encargo por WhatsApp, y se sube a tienda con pagos cuando el volumen lo pide.",
      },
      {
        q: "¿Puedo actualizar las novedades yo misma?",
        a: "Sí: subes la colección nueva cuando quieras. Los cambios del día a día están incluidos.",
      },
      {
        q: "¿Sirve para tallas grandes, infantil o vintage?",
        a: "Sí: cada estilo tiene su sección con su mensaje y sus fotos.",
      },
    ],
  },
  {
    slug: "jardineria",
    name: "Jardinería y piscinas",
    emoji: "🌳",
    navLabel: "Web para jardinería",
    tagline: "Presupuestos por foto en tu zona",
    title: "Diseño Web para Jardinería en Málaga | Sur Digital",
    description:
      "Webs para jardinería y piscinas en Málaga: presupuesto por foto, mantenimiento por cuota, zonas de servicio y SEO local. Desde 0€, en menos de 7 días.",
    h1Prefix: "Tus jardines",
    h1Accent: "cuidados todo el año",
    intro:
      "El dueño de un chalet pide presupuesto de jardín por el móvil y elige al que responde antes con números. Si tu web no presupuesta ni declara zonas, compites a ciegas contra los que sí.",
    pains: [
      "Presupuestas a ciegas por teléfono sin ver el jardín",
      "Tus cuotas de mantenimiento no están en ningún sitio",
      "No apareces buscando «jardinero Málaga» ni «limpieza piscinas»",
      "No tienes fotos de jardines que ya mantienes",
    ],
    features: [
      {
        title: "Presupuesto por foto",
        text: "Formulario con zona, fotos del jardín y servicio: visitas solo lo que ya es serio.",
      },
      {
        title: "Cuotas de mantenimiento",
        text: "Jardín y piscina con cuota mensual clara: ingresos recurrentes sin perseguir pagos.",
      },
      {
        title: "Servicios por tipo",
        text: "Diseño, mantenimiento, poda, riego y piscinas: cada uno con su página y su precio orientativo.",
      },
      {
        title: "Google Maps y reseñas",
        text: "Ficha optimizada por municipios con fotos de trabajos: en este sector las fotos venden.",
      },
    ],
    blogPost: "/blog/seo-local-malaga-negocios/",
    faq: [
      {
        q: "¿El presupuesto por foto compromete un precio?",
        a: "No: recoge datos y fotos, y tú respondes con precio cerrado tras verlo o visitarlo.",
      },
      {
        q: "¿Puedo separar jardín y piscina?",
        a: "Sí: cada servicio tiene su página, su cuota y su formulario.",
      },
      {
        q: "¿Sirve si trabajo en varios municipios?",
        a: "Sí: la web declara cada zona que cubres para posicionar en todas ellas.",
      },
    ],
  },
  {
    slug: "peluqueria-canina",
    name: "Peluquería canina",
    emoji: "🐩",
    navLabel: "Web para peluquería canina",
    tagline: "Citas por tamaño y servicio",
    title: "Diseño Web Peluquería Canina Málaga | Sur Digital",
    description:
      "Webs para peluquería canina en Málaga: servicios por tamaño, precios claros, cita online y fotos de clientes. Desde 0€, en menos de 7 días.",
    h1Prefix: "Tus tijeras",
    h1Accent: "con agenda llena",
    intro:
      "El dueño busca «peluquería canina cerca de mí», compara precios por tamaño y reserva al que lo pone fácil. Sin web con cita online, suena tu teléfono en plena mesa de corte o, peor, no suena.",
    pains: [
      "Das precios por teléfono mientras tienes al perro en la mesa",
      "No se puede pedir cita sin llamar",
      "No apareces buscando «peluquería canina» en tu zona",
      "Tus cortes no se ven en ningún sitio",
    ],
    features: [
      {
        title: "Precios por tamaño",
        text: "Pequeño, mediano y grande con cada servicio: el dueño sabe lo que paga antes de llamar.",
      },
      {
        title: "Cita online",
        text: "Formulario con raza, tamaño y servicio: la agenda se llena sin interrumpir cortes.",
      },
      {
        title: "Galería de clientes",
        text: "Fotos de perros que ya pasan por tus manos: es lo que enamora al dueño.",
      },
      {
        title: "Google Maps y reseñas",
        text: "Ficha optimizada con fotos y reseñas de dueños: el sector donde más pesan las fotos.",
      },
    ],
    blogPost: "/blog/web-clinica-veterinaria-malaga/",
    faq: [
      {
        q: "¿La cita online bloquea mi agenda?",
        a: "Recoge la solicitud con los datos y tú confirmas el hueco: sin programas caros de por medio.",
      },
      {
        q: "¿Puedo separar corte, baño y deslanado?",
        a: "Sí: cada servicio tiene su precio por tamaño y su descripción.",
      },
      {
        q: "¿Sirve si también vendo pienso o accesorios?",
        a: "Sí: la tienda tiene su sección con catálogo y encargo.",
      },
    ],
  },
];
