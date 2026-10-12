// Sectores añadidos después de la primera tanda. Viven aquí para no reescribir
// el array original de `sectors.ts`: al final de ese fichero se fusionan
// (`export const SECTORS = [...SECTORS_BASE, ...SECTORS_EXTRA]`), así que todo
// lo que lee SECTORS (menú, home, /especialidades/, footer y las OG) los ve
// sin cambiar nada.
//
// `import type` es solo un tipo: se borra al compilar, así que no hay ciclo de
// importación real entre los dos ficheros.

import type { SectorPage } from "./sectors";

export const SECTORS_EXTRA: SectorPage[] = [
  {
    slug: "talleres",
    name: "Talleres mecánicos",
    emoji: "🚗",
    navLabel: "Web para talleres",
    tagline: "Citas, presupuestos y confianza",
    title:
      "Web para talleres: citas y presupuestos",
    description:
      "Webs para talleres mecánicos y de chapa en Málaga: cita previa por servicio, presupuesto sin compromiso, pre-ITV y recambios. Desde 0€, en menos de 7 días.",
    h1Prefix: "Tu taller",
    h1Accent: "con la agenda llena",
    intro:
      "Cuando se enciende una luz en el cuadro, el conductor busca «taller cerca de mí» y llama al primero que le da cita. Si tu web no enseña servicios, horario y cómo pedir cita, ese coche acaba en el taller de al lado.",
    pains: [
      "Te llegan llamadas para preguntar precios que no puedes dar sin ver el coche",
      "Las citas se apuntan en un papel y alguna se pierde entre llamadas",
      "No apareces buscando «taller de chapa» o «cambio de aceite» en tu zona",
      "Tu web es una foto de la fachada de 2012 y sin teléfono visible en el móvil",
    ],
    features: [
      {
        title: "Cita previa por servicio",
        text: "El cliente elige qué necesita (revisión, distribución, neumáticos, chapa) y deja sus datos: tú organizas el taller antes de abrir.",
      },
      {
        title: "Presupuesto sin compromiso",
        text: "Formulario con matrícula, modelo y avería para pedir presupuesto: filtras las consultas de precio y captas a quien ya quiere arreglar.",
      },
      {
        title: "Búsquedas de taller concreto",
        text: "Páginas para la pre-ITV, el cambio de aceite o los neumáticos, con las palabras exactas que escribe la gente de tu barrio.",
      },
      {
        title: "Confianza y reseñas",
        text: "Fotos del taller, del equipo y tus reseñas de Google: quien deja el coche necesita confiar, y eso se gana antes de venir.",
      },
    ],
    blogPost: "/blog/web-taller-mecanico-malaga/",
    faq: [
      {
        q: "¿Puedo cambiar precios y servicios yo mismo?",
        a: "Sí, el listado de servicios se actualiza desde un panel sencillo o pidiéndonoslo por LinkedIn. Los cambios de tarifas están incluidos.",
      },
      {
        q: "¿La cita online distingue mecánica, chapa y pintura?",
        a: "Sí: el cliente elige el área y el servicio, y tú recibes la solicitud con el vehículo y el motivo, lista para encajar en el planning del taller.",
      },
      {
        q: "¿Sirve para un taller con varias sedes o unidad móvil?",
        a: "Sí, cada sede o unidad móvil con su horario y su mapa, y una página conjunta con todos los servicios del grupo.",
      },
    ],
  },
  {
    slug: "estetica",
    name: "Centros de estética",
    emoji: "💅",
    navLabel: "Web para centros de estética",
    tagline: "Servicios, bonos y cita online",
    title:
      "Web para estética: cita online",
    description:
      "Webs para centros de estética y belleza en Málaga: servicios con precios, bonos, antes y después y cita online. Desde 0€, entrega en menos de 7 días.",
    h1Prefix: "Tu centro de estética",
    h1Accent: "con la agenda completa",
    intro:
      "Quien busca «centro de estética cerca de mí» compara precios, resultados y, sobre todo, cómo de fácil es pedir cita. Si eso solo se resuelve por teléfono en horario comercial, la cita se va a otro centro.",
    pains: [
      "Los precios no están en ningún sitio y contestas lo mismo mil veces por mensaje",
      "Las fotos de antes y después viven escondidas en redes sociales",
      "Se te cuelan citas para servicios que no ofreces o que no te interesan",
      "No apareces buscando «depilación láser» o «higiene facial» en tu zona",
    ],
    features: [
      {
        title: "Carta de servicios con precios",
        text: "Cada tratamiento con su duración y su precio, agrupado por categoría: facial, corporal, depilación, uñas. Menos preguntas y más reservas.",
      },
      {
        title: "Cita online con servicio",
        text: "La clienta elige tratamiento y día, y tú recibes la solicitud al momento: colocas la cita sin llamadas cruzadas.",
      },
      {
        title: "Antes y después",
        text: "Galería de resultados con fotos reales y permiso de tus clientas: demuestra lo que haces y vende el tratamiento solo.",
      },
      {
        title: "Bonos y packs",
        text: "Sesiones sueltas o bonos de 5 y 10 con su precio: sube el ticket medio y fideliza a quien ya confía en ti.",
      },
    ],
    blogPost: "/blog/web-centro-estetica-malaga/",
    faq: [
      {
        q: "¿Puedo actualizar precios y tratamientos yo misma?",
        a: "Sí: cambias el precio de un servicio o añades uno nuevo y queda publicado. Los cambios de tarifas están incluidos.",
      },
      {
        q: "¿Sirve para peluquería, uñas o estética avanzada?",
        a: "Sí, la estructura vale para cualquier centro de cuidado personal: agrupas los servicios por categoría y cada uno con su precio y su duración.",
      },
      {
        q: "¿Puedo gestionar bonos y sesiones?",
        a: "La web muestra los bonos y permite reservar sesiones sueltas. El control interno de sesiones lo llevas con tu software actual y lo enlazamos desde el botón de cita.",
      },
    ],
  },
  {
    slug: "asesorias",
    name: "Gestorías y asesorías",
    emoji: "📊",
    navLabel: "Web para gestorías",
    tagline: "Servicios fiscales y cita previa",
    title:
      "Web para asesorías: cita previa",
    description:
      "Webs para gestorías, asesorías y despachos contables en Málaga: áreas fiscal, laboral y contable, cuota mensual clara y cita previa. Desde 0€.",
    h1Prefix: "Tu asesoría",
    h1Accent: "que transmite rigor",
    intro:
      "Nadie confía sus impuestos al primero que aparece. Antes de llamar, el autónomo compara qué llevas, cuánto cobras y si pareces ordenado. Tu web es esa primera reunión.",
    pains: [
      "Te llaman para preguntar el precio de una nómina y acabas haciendo consultoría gratis",
      "No se te distingue de la gestoría de al lado: todas parecen lo mismo",
      "Pierdes clientes porque no explicas qué incluye tu cuota mensual",
      "No apareces buscando «asesoría para autónomos» o «cambio de gestoría» en tu ciudad",
    ],
    features: [
      {
        title: "Qué llevas y qué incluye",
        text: "Una página por área (fiscal, laboral, contable, subvenciones) que explica el servicio y filtra a quien no encaja contigo.",
      },
      {
        title: "Cuota mensual clara",
        text: "Planes con lo que incluye cada uno y para quién: se acaban las llamadas de «¿y esto cuánto me cuesta?».",
      },
      {
        title: "Cita previa con el trámite",
        text: "Formulario de cita con el trámite y la situación del cliente: llegas a la reunión con todo lo necesario.",
      },
      {
        title: "Cambio de gestoría en 3 pasos",
        text: "Sección específica para quien viene de otra asesoría, con lo que tiene que pedir: la búsqueda con más intención de tu sector.",
      },
    ],
    blogPost: "/blog/web-gestoria-asesoria-malaga/",
    faq: [
      {
        q: "¿Puedo explicar mis tarifas por escrito?",
        a: "Sí, y es lo más rentable: una tabla con la cuota mensual por tipo de cliente (autónomo, sociedad, particular) reduce llamadas y filtra mejor.",
      },
      {
        q: "¿Es válido para despachos con varios asesores?",
        a: "Sí: ficha por asesor con su especialidad, como se hace con los equipos de las clínicas, y páginas por área de servicio.",
      },
      {
        q: "¿Cumple la normativa de publicidad?",
        a: "Sí: web informativa, sin promesas de resultados ni lenguaje agresivo, y con el aviso legal y de privacidad que exige la LSSI.",
      },
    ],
  },
  {
    slug: "opticas",
    name: "Ópticas",
    emoji: "👓",
    navLabel: "Web para ópticas",
    tagline: "Revisión, catálogo y cita previa",
    title:
      "Web para ópticas: revisión y cita",
    description:
      "Webs para ópticas en Málaga: revisión de la vista con cita previa, catálogo de gafas y lentes, taller propio y ficha de Google Maps optimizada. Desde 0€.",
    h1Prefix: "Tu óptica",
    h1Accent: "con cita todos los días",
    intro:
      "Quien necesita gafas nuevas busca «óptica cerca de mí» y elige por dos motivos: que le den cita pronto y que parezca que entienden de lo suyo. Si tu web no dice ni cuándo abres, no hay cita.",
    pains: [
      "La gente pregunta por la revisión gratuita y no la tienes anunciada en ningún sitio",
      "No se sabe si haces lentes de contacto, taller propio o gafas infantiles",
      "El catálogo de monturas solo se ve entrando al local",
      "Aparece la óptica de tu calle en Google y tú no",
    ],
    features: [
      {
        title: "Revisión y cita online",
        text: "Bloque de revisión de la vista con cita previa clara: el motivo principal por el que alguien entra en la web de una óptica.",
      },
      {
        title: "Servicios explicados uno a uno",
        text: "Lentes de contacto, progresivos, gafas infantiles, taller de reparación y adaptación: cada servicio con su página y su búsqueda.",
      },
      {
        title: "Catálogo de monturas",
        text: "Tus marcas y modelos destacados con precios orientativos: lo que no se ve, no se prueba.",
      },
      {
        title: "Google Maps y reseñas",
        text: "Ficha optimizada y reseñas reales para ganar las búsquedas de «óptica en [tu barrio]», que es de donde viene el cliente que entra.",
      },
    ],
    blogPost: "/blog/web-optica-malaga/",
    faq: [
      {
        q: "¿Puedo destacar la revisión gratuita?",
        a: "Sí, se diseña como lo primero que ve el visitante, con su propio bloque y botón de cita: es el servicio que más convierte en una óptica.",
      },
      {
        q: "¿Puedo mostrar mi catálogo de monturas?",
        a: "Sí, con fotos y precios orientativos agrupados por marca o tipo. Si tu proveedor te da un catálogo digital, se puede enlazar o integrar.",
      },
      {
        q: "¿Sirve para ópticas con taller propio?",
        a: "Sí: se añade la sección de taller, plazos de entrega y reparaciones, que además capta las búsquedas de arreglos urgentes.",
      },
    ],
  },
  {
    slug: "reformas",
    name: "Empresas de reformas",
    emoji: "🔨",
    navLabel: "Web para empresas de reformas",
    tagline: "Presupuestos, obras y confianza",
    title:
      "Web para reformas: presupuestos",
    description:
      "Webs para empresas de reformas y construcción en Málaga: servicios por estancia, galería de obras reales y solicitud de presupuesto. Desde 0€, en menos de 7 días.",
    h1Prefix: "Tu empresa de reformas",
    h1Accent: "con presupuestos que cierran",
    intro:
      "Una reforma es la compra más cara que hace una familia en años. Antes de llamar, compara webs: quiere ver obras reales, plazos y una forma seria de pedir presupuesto. Quien no la tiene, no entra en la comparación.",
    pains: [
      "Te llegan presupuestos para curiosear que te cuestan el domingo entero",
      "No tienes dónde enseñar tus obras y cada cliente te pide fotos por WhatsApp",
      "Compites con empresas que sí tienen web y transmiten más confianza que tú",
      "No apareces buscando «reforma de baño» o «reforma integral» en tu zona",
    ],
    features: [
      {
        title: "Servicios por estancia",
        text: "Cocinas, baños, reformas integrales y locales comerciales: cada tipo de obra con su página, porque cada uno tiene su búsqueda y su presupuesto.",
      },
      {
        title: "Galería de obras reales",
        text: "Antes y después de trabajos tuyos, ordenados por tipo de reforma: es lo que decide entre tú y los otros tres presupuestos.",
      },
      {
        title: "Presupuesto cualificado",
        text: "Formulario con tipo de reforma, metros, localidad y plazo: filtras a quien solo estaba mirando precios y llegas a las visitas que importan.",
      },
      {
        title: "Confianza por escrito",
        text: "Plazos, forma de pago, licencias y garantías explicados: la letra pequeña que da miedo, resuelta antes de la primera visita.",
      },
    ],
    blogPost: "/blog/web-empresa-reformas-malaga/",
    faq: [
      {
        q: "¿La web sirve si solo trabajo presupuestos grandes?",
        a: "Justo por eso: cuanto más caro el proyecto, más mira el cliente. Una web con obras reales y un formulario serio filtra a quien no va a contratar.",
      },
      {
        q: "¿Puedo subir las obras yo mismo?",
        a: "Sí: añades fotos, tipo de reforma y localidad desde un panel sencillo, y la galería se actualiza sin tocar código.",
      },
      {
        q: "¿Funciona para reformas de locales comerciales?",
        a: "Sí, se separan las páginas de reforma residencial y de local, con sus plazos y sus particularidades de licencias.",
      },
    ],
  },
  {
    slug: "alojamientos",
    name: "Alojamientos turísticos",
    emoji: "🏨",
    navLabel: "Web para alojamientos",
    tagline: "Reservas directas sin comisión",
    title:
      "Web para apartamentos: reserva directa",
    description:
      "Webs para apartamentos turísticos, casas rurales y hoteles en Málaga: reserva directa sin comisión, galería, entorno y normas de la casa. Desde 0€.",
    h1Prefix: "Tu alojamiento",
    h1Accent: "con reservas sin comisión",
    intro:
      "El huésped que te ha visto en un portal vuelve a Google para buscarte por tu nombre: si no te encuentra, reserva por el portal y tú pagas la comisión. Una web propia captura esa reserva directa.",
    pains: [
      "Pagas entre un 15% y un 25% de comisión por cada reserva que podría ser directa",
      "El huésped te busca en Google por el nombre y no encuentra nada",
      "Cada consulta de disponibilidad es un mensaje que contestas de madrugada",
      "Las normas de la casa, la llegada y el aparcamiento se repiten en cada conversación",
    ],
    features: [
      {
        title: "Reserva directa",
        text: "Formulario de solicitud de reserva o botón a tu motor actual, con calendario y precios de temporada: la reserva llega a tu correo, no al portal.",
      },
      {
        title: "Galería que vende",
        text: "Fotos por estancia, exteriores y entorno, con las zonas y la playa a mano: es lo que más mira quien elige alojamiento.",
      },
      {
        title: "Información que evita mensajes",
        text: "Llegada, check-in, aparcamiento, normas, mascotas y accesibilidad en una página clara: menos conversaciones repetidas.",
      },
      {
        title: "SEO por zona y tipo",
        text: "Páginas de «apartamento en [barrio]» o «casa rural cerca de Málaga»: captas al huésped que todavía no te conoce.",
      },
    ],
    blogPost: "/blog/web-apartamentos-turisticos-malaga/",
    faq: [
      {
        q: "¿Se puede integrar mi motor de reservas actual?",
        a: "Sí: enlazamos el botón al motor que ya usas o añadimos un formulario de solicitud que llega directo a tu correo, sin intermediarios.",
      },
      {
        q: "¿Puedo mostrar disponibilidad y precios por temporada?",
        a: "Sí, con un calendario de disponibilidad y tarifas por temporada. Si el calendario vive en tu channel manager, se enlaza para no duplicar el trabajo.",
      },
      {
        q: "¿Funciona para varios apartamentos del mismo edificio?",
        a: "Sí: una web que agrupa el edificio y una ficha por apartamento con sus fotos, su capacidad y su precio.",
      },
    ],
  },
];
