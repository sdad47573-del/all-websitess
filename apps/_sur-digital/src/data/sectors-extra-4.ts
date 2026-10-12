// Cuarta tanda de sectores: oficios de urgencia, servicios del hogar y
// comercio de barrio con búsquedas locales fuertes en Málaga (farmacias,
// cerrajeros, mudanzas, fotógrafos, panaderías y catering para eventos).
// Igual que las tandas anteriores: viven en su propio fichero y `sectors.ts`
// los fusiona con un spread, así que todo lo que lee SECTORS (menú, home,
// /especialidades/, footer y las OG) los ve sin cambiar nada.
//
// `import type` es solo un tipo: se borra al compilar y no crea ciclo real.

import type { SectorPage } from "./sectors";

export const SECTORS_EXTRA_4: SectorPage[] = [
  {
    slug: "farmacias",
    name: "Farmacias y parafarmacias",
    emoji: "💊",
    navLabel: "Web para farmacias",
    tagline: "Guardias, encargos y parafarmacia",
    title: "Diseño Web para Farmacias en Málaga | Sur Digital",
    description:
      "Webs para farmacias en Málaga: turnos de guardia, encargos por WhatsApp, catálogo de parafarmacia y SEO local. Desde 0€, en menos de 7 días.",
    h1Prefix: "Tu farmacia",
    h1Accent: "siempre de guardia",
    intro:
      "El cliente busca «farmacia de guardia cerca de mí» a las 3 de la mañana y encarga la parafarmacia desde el sofá. Si tus guardias no se ven y no se puede encargar online, esa venta es de otra farmacia.",
    pains: [
      "Tus turnos de guardia solo están en el cartel de la puerta",
      "Los encargos llegan por teléfono y se pierden entre recetas",
      "No apareces buscando «farmacia cerca de mí» en tu barrio",
      "Tu parafarmacia no se vende fuera de tu horario",
    ],
    features: [
      {
        title: "Guardias siempre visibles",
        text: "Calendario de turnos de guardia actualizado y visible en el móvil: el cliente de urgencia te encuentra a la primera.",
      },
      {
        title: "Encargos por WhatsApp",
        text: "Botón con mensaje pre-rellenado para encargar medicamentos y parafarmacia sin llamar ni esperar.",
      },
      {
        title: "Catálogo de parafarmacia",
        text: "Dermocosmética, higiene y ortopedia con fotos y precios: se vende sola, dentro y fuera de horario.",
      },
      {
        title: "Google Maps y reseñas",
        text: "Ficha optimizada con guardias y servicios para ganar las búsquedas de tu zona.",
      },
    ],
    blogPost: "/blog/publicar-precios-en-la-web/",
    faq: [
      {
        q: "¿Puedo actualizar las guardias yo misma?",
        a: "Sí: cambias el calendario de guardias y queda publicado al momento. Los cambios del día a día están incluidos.",
      },
      {
        q: "¿Se puede vender parafarmacia online?",
        a: "Sí: catálogo con fotos y precios, encargo por WhatsApp o tienda completa si el volumen lo pide.",
      },
      {
        q: "¿Sirve para farmacias de barrio y de centro?",
        a: "Sí: la estructura vale para cualquier farmacia, con tus guardias, tus servicios y tus fotos.",
      },
    ],
  },
  {
    slug: "cerrajeros",
    name: "Cerrajeros y urgencias 24h",
    emoji: "🔑",
    navLabel: "Web para cerrajeros",
    tagline: "Urgencias 24h que llaman solas",
    title: "Diseño Web para Cerrajeros en Málaga | Sur Digital",
    description:
      "Webs para cerrajeros en Málaga: urgencias 24h visibles, botón de llamada, zonas de servicio y SEO local. Desde 0€, en menos de 7 días.",
    h1Prefix: "Tu teléfono",
    h1Accent: "sonando de noche",
    intro:
      "El que se queda fuera de casa no compara: llama al primero que ve con «cerrajero 24h Málaga» y teléfono grande. Si tu web tarda en cargar o esconde el número, ese aviso es de otro.",
    pains: [
      "Tu teléfono no se ve a la primera en el móvil",
      "No apareces buscando «cerrajero urgente» en tus zonas",
      "Los avisos te llegan sin dirección ni descripción",
      "Tu ficha de Maps está vacía y sin reseñas",
    ],
    features: [
      {
        title: "Llamada en un clic",
        text: "Botón de llamada gigante y siempre visible, también de noche: cada segundo cuenta en una urgencia.",
      },
      {
        title: "Zonas de servicio claras",
        text: "Barrios y municipios que cubres, con tiempos orientativos: filtra avisos fuera de zona.",
      },
      {
        title: "Avisos con datos",
        text: "Formulario que pide zona, tipo de puerta y foto: llegas sabiendo qué te vas a encontrar.",
      },
      {
        title: "Google Maps y reseñas",
        text: "Ficha optimizada para urgencias con estrategia de reseñas: es lo que decide entre dos cerrajeros.",
      },
    ],
    blogPost: "/blog/ficha-google-business-optimizada/",
    faq: [
      {
        q: "¿La web sirve para urgencias y para trabajos programados?",
        a: "Sí: la urgencia va al botón de llamada y los trabajos programados (cerraduras, puertas) al formulario con datos.",
      },
      {
        q: "¿Puedo poner precios orientativos?",
        a: "Sí, y filtra: «apertura desde X€» evita llamadas de curiosos y atrae avisos serios.",
      },
      {
        q: "¿Cubre varias zonas de Málaga?",
        a: "Sí: la web declara cada barrio y municipio que trabajas para posicionar en todos ellos.",
      },
    ],
  },
  {
    slug: "mudanzas",
    name: "Mudanzas y guardamuebles",
    emoji: "📦",
    navLabel: "Web para mudanzas",
    tagline: "Presupuestos que entran solos",
    title: "Diseño Web para Mudanzas en Málaga | Sur Digital",
    description:
      "Webs para mudanzas en Málaga: presupuesto online, zonas y servicios, fotos de trabajos y SEO local. Desde 0€, en menos de 7 días.",
    h1Prefix: "Tus camiones",
    h1Accent: "siempre cargados",
    intro:
      "El que se muda pide 3 presupuestos por el móvil y elige al que responde antes con números claros. Si tu web no presupuesta online, compites solo por teléfono contra los que sí.",
    pains: [
      "Das presupuestos por teléfono y pierdes horas en visitas",
      "Tu web no dice qué zonas cubres ni qué servicios haces",
      "No apareces buscando «mudanzas Málaga» ni «guardamuebles»",
      "No tienes fotos de trabajos reales que den confianza",
    ],
    features: [
      {
        title: "Presupuesto online",
        text: "Formulario con origen, destino, volumen y fecha: recibes solicitudes clasificadas y respondes con número.",
      },
      {
        title: "Servicios por tipo",
        text: "Mudanza local, nacional, oficinas y guardamuebles, cada uno con su página y su precio orientativo.",
      },
      {
        title: "Fotos que dan confianza",
        text: "Galería de mudanzas reales, equipo y camiones: el cliente confía sus muebles a quien enseña los suyos.",
      },
      {
        title: "Google Maps y reseñas",
        text: "Ficha optimizada por zonas con reseñas de mudanzas terminadas: es el sector donde más pesan.",
      },
    ],
    blogPost: "/blog/whatsapp-en-tu-web/",
    faq: [
      {
        q: "¿El presupuesto online compromete un precio?",
        a: "No: recoge los datos y tú respondes con precio cerrado. Filtra curiosos y acelera los serios.",
      },
      {
        q: "¿Puedo separar mudanzas y guardamuebles?",
        a: "Sí: cada servicio tiene su página, su precio orientativo y su formulario.",
      },
      {
        q: "¿Sirve si trabajo en toda la Costa del Sol?",
        a: "Sí: la web declara cada municipio que cubres para posicionar en todos ellos.",
      },
    ],
  },
  {
    slug: "fotografos",
    name: "Fotógrafos de bodas y sesiones",
    emoji: "📸",
    navLabel: "Web para fotógrafos",
    tagline: "Portfolio que reserva fechas",
    title: "Diseño Web para Fotógrafos en Málaga | Sur Digital",
    description:
      "Webs para fotógrafos en Málaga: portfolio por tipo de sesión, packs con precios, reservas de fecha y SEO local. Desde 0€, en menos de 7 días.",
    h1Prefix: "Tus fotos",
    h1Accent: "vendiendo solas",
    intro:
      "La novia elige fotógrafo por el portfolio en el móvil y reserva al que transmite confianza con packs claros. Si tus fotos están en Instagram y tus precios por mensaje privado, pierdes reservas cada semana.",
    pains: [
      "Tus fotos viven en Instagram y no en una web que posicione",
      "Das precios por mensaje y pierdes novias por el camino",
      "No apareces buscando «fotógrafo bodas Málaga»",
      "Tus fechas disponibles solo existen en tu cabeza",
    ],
    features: [
      {
        title: "Portfolio por sesión",
        text: "Bodas, comuniones, parejas y retratos, cada galería con su estilo: la novia se ve en tus fotos.",
      },
      {
        title: "Packs con precios",
        text: "Qué incluye cada pack y cuánto cuesta: filtra curiosas y acelera reservas de las decididas.",
      },
      {
        title: "Reserva de fecha",
        text: "Formulario con fecha del evento y tipo de sesión: recibes solicitudes con los datos que importan.",
      },
      {
        title: "Google Maps y reseñas",
        text: "Ficha optimizada con fotos de bodas reales y reseñas de parejas: es lo que cierra la reserva.",
      },
    ],
    blogPost: "/blog/fotos-negocio-web/",
    faq: [
      {
        q: "¿Puedo actualizar el portfolio yo mismo?",
        a: "Sí: subes galerías nuevas cuando quieras. Los cambios del día a día están incluidos.",
      },
      {
        q: "¿Merece la pena publicar los precios de los packs?",
        a: "Sí: filtra y acelera. Quien ve el pack y escribe ya está medio decidida.",
      },
      {
        q: "¿Sirve para bodas, comuniones y sesiones?",
        a: "Sí: cada tipo de sesión tiene su galería, su pack y su formulario.",
      },
    ],
  },
  {
    slug: "panaderias",
    name: "Panaderías y pastelerías",
    emoji: "🥖",
    navLabel: "Web para panaderías",
    tagline: "Encargos sin llamar",
    title: "Diseño Web para Panaderías en Málaga | Sur Digital",
    description:
      "Webs para panaderías y pastelerías en Málaga: encargos por WhatsApp, obrador propio, tartas por encargo y SEO local. Desde 0€, en menos de 7 días.",
    h1Prefix: "Tu obrador",
    h1Accent: "vendiendo a diario",
    intro:
      "El pan de cada día se compra por cercanía, pero las tartas, los encargos y los desayunos se buscan en el móvil. Si no se puede encargar online, ese cumpleaños lo hace otra pastelería.",
    pains: [
      "Los encargos llegan por teléfono en plena hornada",
      "Tus tartas y tus desayunos no se ven en ningún sitio",
      "No apareces buscando «pastelería cerca de mí»",
      "Tu obrador propio no lo sabe nadie",
    ],
    features: [
      {
        title: "Encargos por WhatsApp",
        text: "Botón con mensaje pre-rellenado para tartas y encargos: fecha, tamaño y recogida sin llamadas.",
      },
      {
        title: "Catálogo que da hambre",
        text: "Tartas, panes especiales y desayunos con foto y precio: se vende solo.",
      },
      {
        title: "Obrador propio visible",
        text: "Sección de obrador y producto artesano: es lo que te separa del lineal del súper.",
      },
      {
        title: "Google Maps y reseñas",
        text: "Ficha optimizada con fotos de producto y estrategia de reseñas de barrio.",
      },
    ],
    blogPost: "/blog/whatsapp-en-tu-web/",
    faq: [
      {
        q: "¿Puedo cambiar la carta según temporada?",
        a: "Sí: torrijas, roscones y panettone entran y salen cuando tú digas. Los cambios están incluidos.",
      },
      {
        q: "¿Vale para encargos de bodas y comuniones?",
        a: "Sí: las tartas de evento tienen su sección con fotos, precios orientativos y formulario.",
      },
      {
        q: "¿Sirve para panaderías de barrio?",
        a: "Sí: la estructura vale para obradores pequeños, con tus productos y tus fotos.",
      },
    ],
  },
  {
    slug: "catering",
    name: "Catering y eventos",
    emoji: "🎉",
    navLabel: "Web para catering",
    tagline: "Bodas y eventos que entran solos",
    title: "Diseño Web para Catering en Málaga | Sur Digital",
    description:
      "Webs para catering en Málaga: menús por evento, galería de bodas, solicitud de presupuesto y SEO local. Desde 0€, en menos de 7 días.",
    h1Prefix: "Tus eventos",
    h1Accent: "reservados con meses",
    intro:
      "La pareja que se casa compara 4 caterings por el móvil: menús, fotos de bodas reales y precio por comensal. Si tu web no enseña eso, ni siquiera llegas a la degustación.",
    pains: [
      "Tus menús solo existen en un PDF que mandas por email",
      "No tienes galería de bodas y eventos reales",
      "No apareces buscando «catering bodas Málaga»",
      "Cada presupuesto empieza de cero por teléfono",
    ],
    features: [
      {
        title: "Menús por evento",
        text: "Bodas, comuniones, empresas: cada menú con su precio por comensal y sus fotos.",
      },
      {
        title: "Galería de eventos reales",
        text: "Bodas y montajes que ya hiciste: la pareja se imagina el suyo.",
      },
      {
        title: "Solicitud de presupuesto",
        text: "Formulario con fecha, comensales y tipo de evento: recibes solicitudes con los datos clave.",
      },
      {
        title: "Google Maps y reseñas",
        text: "Ficha optimizada con fotos de eventos y reseñas de clientes: es lo que decide la degustación.",
      },
    ],
    blogPost: "/blog/conseguir-reservas-restaurante-malaga/",
    faq: [
      {
        q: "¿Puedo cambiar los menús por temporada?",
        a: "Sí: actualizas menús y precios cuando quieras. Los cambios están incluidos.",
      },
      {
        q: "¿La solicitud de presupuesto compromete precio?",
        a: "No: recoge fecha, comensales y tipo de evento, y tú respondes con propuesta cerrada.",
      },
      {
        q: "¿Sirve para eventos de empresa?",
        a: "Sí: coffee breaks y eventos corporativos tienen su sección con menús y formulario propio.",
      },
    ],
  },
];
