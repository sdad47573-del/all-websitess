// Sexta tanda de sectores: los dos verticales locales que la competencia
// malagueña trabaja con landing propia y aquí faltaban —estudios de
// arquitectura y concesionarios/compraventas—, siguiendo el mismo patrón que
// las tandas anteriores: fichero propio y `sectors.ts` los fusiona con un
// spread, así que menú, home, /especialidades/, footer, OG y sitemap los ven
// sin tocar nada más.
//
// `import type` es solo un tipo: se borra al compilar y no crea ciclo real.

import type { SectorPage } from "./sectors";

export const SECTORS_EXTRA_6: SectorPage[] = [
  {
    slug: "arquitectos",
    name: "Arquitectos",
    emoji: "📐",
    navLabel: "Web para arquitectos",
    tagline: "Obra publicada que genera encargos",
    title: "Web para arquitectos en Málaga desde 0€: portfolio",
    description: "Webs para estudios de arquitectura en Málaga: portfolio de proyectos, servicios por tipo de encargo y formulario de brief. Desde 0€ en menos de 7 días.",
    h1Prefix: "Tu estudio",
    h1Accent: "con la obra a la vista",
    intro:
      "Quien encarga una vivienda o una reforma compara estudios por lo que ve publicado. Si tus proyectos solo existen en un PDF o en Instagram, compites con el boca a boca contra estudios que sí enseñan su obra.",
    pains: [
      "Tu portfolio es un PDF de 40 MB que nadie abre en el móvil",
      "No apareces buscando «arquitecto en Málaga» ni «proyecto de reforma»",
      "El cliente no distingue si haces proyecto, licencia o dirección de obra",
      "Dependes del colegio y de Instagram para que te encuentren",
    ],
    features: [
      {
        title: "Portfolio que se recorre",
        text: "Cada proyecto con ficha, fotos y memoria: el visitante entiende cómo trabajas antes de la primera llamada.",
      },
      {
        title: "Servicios separados",
        text: "Proyecto, dirección de obra, licencias, interiorismo o eficiencia energética: cada servicio con su página y su búsqueda.",
      },
      {
        title: "Brief desde la web",
        text: "Formulario con tipo de proyecto, metros, ubicación y presupuesto orientativo: llegas a la reunión con medio encargo definido.",
      },
      {
        title: "SEO local por zona",
        text: "Páginas por municipio y tipo de obra (Málaga, Marbella, Rincón…) para las búsquedas de tu área real de trabajo.",
      },
    ],
    blogPost: "/blog/fotos-negocio-web/",
    faq: [
      {
        q: "¿Puedo publicar los planos de mis proyectos?",
        a: "Sí, con las imágenes y la autoría que decidas. Si el cliente no autoriza planos, se muestran solo las fotos de la obra terminada.",
      },
      {
        q: "¿Sirve si trabajo solo o en un estudio pequeño?",
        a: "Sí: la web prioriza portfolio y servicios, y el formulario filtra el tipo de encargo antes de la primera reunión.",
      },
      {
        q: "¿Se puede separar obra nueva de reforma?",
        a: "Sí: cada línea tiene su página, con su mensaje, sus proyectos y su propio formulario.",
      },
    ],
  },
  {
    slug: "concesionarios",
    name: "Concesionarios",
    emoji: "🚗",
    navLabel: "Web para concesionarios",
    tagline: "Stock propio sin pagar por cada contacto",
    title: "Web para concesionarios en Málaga desde 0€: stock",
    description: "Webs para concesionarios y compraventas en Málaga: stock con filtros, financiación y cita de taller. Desde 0€ en menos de 7 días.",
    h1Prefix: "Tu stock",
    h1Accent: "sin pagar por cada contacto",
    intro:
      "Quien busca coche filtra por precio, kilómetros y año desde el móvil. Si tu stock vive solo en portales que cobran por lead, pagas por cada persona que ya te habría encontrado igual.",
    pains: [
      "Pagas por cada contacto de los portales y el cliente no es tuyo",
      "Tu stock está desactualizado y aparecen coches ya vendidos",
      "No se puede pedir cita de taller ni consultar financiación online",
      "No apareces buscando «concesionario Málaga» ni «coches de segunda mano»",
    ],
    features: [
      {
        title: "Stock propio con filtros",
        text: "Fichas con fotos, kilómetros, año y precio, con filtros por marca, combustible y cambio: el escaparate que no cobra por lead.",
      },
      {
        title: "Financiación y reserva",
        text: "Simulador o formulario de financiación y reserva del vehículo con señal: el cliente avanza sin pisar el concesionario.",
      },
      {
        title: "Cita de taller",
        text: "Formulario con matrícula, servicio y fecha preferida: recepción organiza el día antes de abrir.",
      },
      {
        title: "SEO local y de marca",
        text: "Páginas por marca y por tipo (ocasión, km 0, industrial) más ficha de Google con reseñas para captar búsquedas de tu zona.",
      },
    ],
    blogPost: "/blog/publicar-precios-en-la-web/",
    faq: [
      {
        q: "¿La web sustituye a los portales?",
        a: "No tienen por qué competir: los portales traen demanda y tu web capta marca, financiación y taller sin pagar por cada contacto.",
      },
      {
        q: "¿Puedo actualizar el stock yo mismo?",
        a: "Sí: das de alta el coche con fotos y datos, cambias el precio o lo retiras cuando se vende, sin depender de nadie.",
      },
      {
        q: "¿Se conecta con mi programa de gestión?",
        a: "Si tu programa exporta un feed (XML o similar), sincronizamos el stock automáticamente para no subirlo dos veces.",
      },
    ],
  },
];
