// Tercera tanda de sectores: hostelería de barrio y comercio de alimentación,
// los nichos con más clientes nuevos en el portfolio (bares, tabernas,
// cafeterías, hamburgueserías y carnicerías). Igual que las tandas anteriores:
// viven en su propio fichero y `sectors.ts` los fusiona con un spread, así que
// todo lo que lee SECTORS (menú, home, /especialidades/, footer y las OG) los
// ve sin cambiar nada.
//
// `import type` es solo un tipo: se borra al compilar y no crea ciclo real.

import type { SectorPage } from "./sectors";

export const SECTORS_EXTRA_3: SectorPage[] = [
  {
    slug: "bares",
    name: "Bares y tabernas",
    emoji: "🍺",
    navLabel: "Web para bares y tabernas",
    tagline: "Carta QR, tapa del día y reservas",
    title: "Web para bares en Málaga desde 0€: carta QR",
    description: "Webs para bares y tabernas en Málaga: carta QR con la tapa del día, reservas por WhatsApp y SEO local. Desde 0€ y online en menos de 7 días.",
    h1Prefix: "Tu bar",
    h1Accent: "con la barra llena",
    intro:
      "El que sale a tapear mira el móvil antes que la calle: compara tapas, nota y distancia en dos minutos. Si tu carta no se lee y tu ficha de Maps está vacía, esa ronda se la toma en otro bar.",
    pains: [
      "Tu carta es un PDF borroso que nadie puede leer sin hacer zoom",
      "La tapa del día solo existe en la pizarra de dentro del local",
      "No apareces buscando «bar de tapas cerca de mí» en tu barrio",
      "Las reservas te llegan por llamadas en plena hora punta",
    ],
    features: [
      {
        title: "Carta digital con QR",
        text: "Carta online legible en el móvil y actualizable al instante: cambias un precio y el QR de las mesas sigue funcionando.",
      },
      {
        title: "Tapa del día destacada",
        text: "Bloque propio para la tapa o el plato del día con foto: es lo que más se busca y lo que decide la visita.",
      },
      {
        title: "Reservas por WhatsApp",
        text: "Botón con mensaje pre-rellenado directo a tu móvil: menos teléfono sonando y más mesas llenas.",
      },
      {
        title: "Google Maps y reseñas",
        text: "Ficha optimizada con fotos de tus tapas y estrategia de reseñas para ganar las búsquedas de tu zona.",
      },
    ],
    blogPost: "/blog/web-bar-taberna-malaga/",
    faq: [
      {
        q: "¿Puedo cambiar la tapa del día yo mismo?",
        a: "Sí: cambias la tapa, el precio o la foto y queda publicado al momento. Los cambios del día a día están incluidos.",
      },
      {
        q: "¿La carta digital sustituye a la de papel?",
        a: "No tiene por qué: conviven. El QR de las mesas apunta a la misma dirección siempre, así que nunca queda desactualizado aunque cambies precios.",
      },
      {
        q: "¿Sirve para tabernas, tascas y bares de barrio?",
        a: "Sí: la estructura vale para cualquier bar, con tu carta, tu tapa del día y tus fotos. Nada de plantilla genérica.",
      },
    ],
  },
  {
    slug: "cafeterias",
    name: "Cafeterías",
    emoji: "☕",
    navLabel: "Web para cafeterías",
    tagline: "Carta de desayunos y clientes de barrio",
    title: "Web para cafeterías en Málaga desde 0€: carta",
    description: "Webs para cafeterías en Málaga: carta de desayunos online, el desayuno estrella destacado y encargos por WhatsApp. Desde 0€ en 7 días.",
    h1Prefix: "Tu cafetería",
    h1Accent: "con la barra de las 8 llena",
    intro:
      "Quien se muda al barrio o cambia de ruta prueba primero la cafetería que le convence en el móvil. Si tu carta de desayunos no se ve en ningún sitio, ese cliente de cada mañana se lo queda otro.",
    pains: [
      "Tu carta de desayunos solo existe en la pizarra y en fotos viejas",
      "No apareces buscando «cafetería cerca de mí» a la hora del desayuno",
      "Los encargos (tartas, desayunos de oficina) llegan por mensajes sueltos",
      "Nadie sabe si tienes terraza, opciones sin gluten o sitio para aparcar",
    ],
    features: [
      {
        title: "Carta de desayunos online",
        text: "Pitufos, molletes, tostadas y bollería con precios y fotos: legible sin zoom y actualizable cuando cambie algo.",
      },
      {
        title: "Desayuno estrella destacado",
        text: "Tu completo de la casa o tu mollete con su foto propia: el argumento de venta que te diferencia del bar de al lado.",
      },
      {
        title: "Encargos por WhatsApp",
        text: "Botón con mensaje pre-rellenado para tartas y desayunos de empresa: el encargo llega completo, sin llamadas cruzadas.",
      },
      {
        title: "SEO de barrio",
        text: "Ficha de Google optimizada para dominar las búsquedas de desayuno en tu zona, con reseñas de tus clientes de la barra.",
      },
    ],
    blogPost: "/blog/web-cafeteria-malaga/",
    faq: [
      {
        q: "¿Puedo actualizar precios y productos yo misma?",
        a: "Sí: cambias un precio o añades un producto y queda publicado. Los cambios de carta están incluidos.",
      },
      {
        q: "¿Se pueden pedir tartas o encargos desde la web?",
        a: "Sí: bloque de encargos con antelación mínima y botón de WhatsApp con el mensaje ya escrito, para que no se pierda ningún detalle.",
      },
      {
        q: "¿Sirve para churrerías y panaderías con cafetería?",
        a: "Sí: la estructura se adapta a cualquier local de desayunos y meriendas, con tu carta y tus horarios.",
      },
    ],
  },
  {
    slug: "hamburgueserias",
    name: "Hamburgueserías",
    emoji: "🍔",
    navLabel: "Web para hamburgueserías",
    tagline: "Carta visual y pedido directo",
    title: "Web para hamburgueserías en Málaga desde 0€: pedidos",
    description: "Webs para hamburgueserías en Málaga: carta visual, pedido directo sin comisiones y Google Maps. Desde 0€ en menos de 7 días.",
    h1Prefix: "Tu hamburguesería",
    h1Accent: "vendiendo sin comisiones",
    intro:
      "A las 21:00 el cliente compara cartas con fotos y pide donde le entra por los ojos. Si tu carta vive en capturas de Instagram y cada pedido pasa por una plataforma que se lleva el 30%, pierdes dos veces cada noche.",
    pains: [
      "Tu carta son capturas de pantalla que no se leen en el móvil",
      "Las plataformas de delivery se llevan hasta un 30% de cada pedido",
      "No apareces buscando «smash burger cerca de mí» en tu zona",
      "Tu burger insignia no tiene ni una foto decente en internet",
    ],
    features: [
      {
        title: "Carta visual que vende",
        text: "Cada burger con su foto real, sus ingredientes y su precio: legible en 10 segundos, que es lo que tarda en decidirse un pedido.",
      },
      {
        title: "Pedido directo sin comisión",
        text: "Botón de pedido por WhatsApp con mensaje pre-rellenado o enlace a tu sistema: recuperas el margen desde la primera semana.",
      },
      {
        title: "Burger insignia destacada",
        text: "Tu smash de la casa o tu premiada con bloque propio y foto grande: el plato que te diferencia merece su escenario.",
      },
      {
        title: "Google Maps que convierte",
        text: "Ficha con fotos de cada burger y estrategia de reseñas con foto: justo lo que mira quien tiene hambre ya.",
      },
    ],
    blogPost: "/blog/web-hamburgueseria-malaga/",
    faq: [
      {
        q: "¿Tengo que salir de las plataformas de delivery?",
        a: "No: conviven. Tu web ofrece el camino directo (más margen para ti) y las plataformas siguen trayendo demanda. Tú decides qué empujar.",
      },
      {
        q: "¿Puedo cambiar la carta y los precios yo mismo?",
        a: "Sí: añades la burger del mes, cambias un precio o marcas un agotado y queda publicado al momento.",
      },
      {
        q: "¿Sirve para food trucks y locales de delivery?",
        a: "Sí: la estructura vale para local, truck o cocina fantasma, con tus zonas de reparto y tus horarios de cena bien visibles.",
      },
    ],
  },
  {
    slug: "carnicerias",
    name: "Carnicerías",
    emoji: "🥩",
    navLabel: "Web para carnicerías",
    tagline: "Catálogo, encargos y barrio",
    title: "Web para carnicerías en Málaga desde 0€: encargos",
    description: "Webs para carnicerías en Málaga: catálogo de producto, encargos por WhatsApp y SEO de barrio. Desde 0€ y online en menos de 7 días.",
    h1Prefix: "Tu carnicería",
    h1Accent: "con encargos cada semana",
    intro:
      "Quien compra carne quiere saber de dónde viene y quién la corta. Cuando el vecino nuevo busca «carnicería cerca de mí» y compara en dos minutos, la tienda que enseña su género se lleva el cliente.",
    pains: [
      "Tu género no se ve en ningún sitio: para el cliente nuevo eres «una tienda más»",
      "Los encargos del sábado se pierden entre mensajes y llamadas",
      "No apareces buscando «carnicería cerca de mí» en tu barrio",
      "El súper te come terreno porque él sí anuncia su producto",
    ],
    features: [
      {
        title: "Catálogo de producto",
        text: "Ternera, ibéricos, pollo de campo y elaborados caseros con fotos reales del mostrador: lo que se ve, se compra.",
      },
      {
        title: "Encargos por WhatsApp",
        text: "Botón con mensaje pre-rellenado y bloque de qué se puede encargar y con cuánta antelación: ni un encargo perdido.",
      },
      {
        title: "Tu diferencia por escrito",
        text: "El adobo de la casa, las hamburguesas caseras, el lechazo de encargo: tu argumento frente al súper, con su foto y su historia.",
      },
      {
        title: "SEO de barrio",
        text: "Ficha de Google optimizada para dominar las búsquedas de carnicería en tu zona, con reseñas de tus clientes de siempre.",
      },
    ],
    blogPost: "/blog/web-carniceria-malaga/",
    faq: [
      {
        q: "¿Merece la pena publicar precios por kilo?",
        a: "Sí: los precios orientativos quitan el miedo a entrar «a preguntar» y filtran a quien solo curiosea. Se actualizan cuando cambia la tarifa.",
      },
      {
        q: "¿Se pueden encargar productos de temporada?",
        a: "Sí: cada temporada (cordero en Navidad, barbacoa en verano) tiene su bloque destacable, que además posiciona en Google antes que el súper.",
      },
      {
        q: "¿Sirve para charcuterías y tiendas de alimentación?",
        a: "Sí: la estructura vale para cualquier comercio de alimentación, con tu catálogo, tus elaborados y tus encargos.",
      },
    ],
  },
];
