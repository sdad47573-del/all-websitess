// Contenido SEO de las páginas de aterrizaje por sector.
// .ts (no .astro) para poder importarlo también desde src/pages/og/[...route].ts.

export interface SectorPage {
  slug: string;
  name: string;
  emoji: string;
  navLabel: string;
  tagline: string;
  title: string;
  description: string;
  h1Prefix: string;
  h1Accent: string;
  intro: string;
  pains: string[];
  features: { title: string; text: string }[];
  blogPost: string; // artículo del blog del cluster SEO de este sector
  faq: { q: string; a: string }[];
}

export const SECTORS: SectorPage[] = [
  {
    slug: "restaurantes",
    name: "Restaurantes",
    emoji: "🍽️",
    navLabel: "Web para restaurantes",
    tagline: "Carta QR, reservas y Google Maps",
    title: "Diseño Web para Restaurantes en Málaga | Carta QR y Reservas | Sur Digital",
    description:
      "Webs para restaurantes en Málaga: carta digital con QR, reservas online y posicionamiento en Google Maps. Desde 0€, entrega en menos de 7 días.",
    h1Prefix: "Tu restaurante",
    h1Accent: "en la mesa de Google",
    intro:
      "El 90% de los comensales mira tu restaurante en el móvil antes de reservar. Si tu carta es un PDF ilegible y tu web no existe, la reserva se la lleva otro.",
    pains: [
      "Tu carta es un PDF que nadie puede leer en el móvil",
      "No apareces en Google Maps cuando buscan \"dónde comer\" cerca",
      "Las reservas te llegan dispersas: teléfono, Instagram, WhatsApp…",
      "Fotos del menú borrosas colgadas de una red social",
    ],
    features: [
      {
        title: "Carta digital con QR",
        text: "Carta online actualizable al instante: cambias un plato de precio y el QR de las mesas sigue funcionando.",
      },
      {
        title: "Reservas sin comisión",
        text: "Formulario o botón de WhatsApp directo a tu móvil. Sin pagar porcentaje a plataformas intermediarias.",
      },
      {
        title: "Google Maps y reseñas",
        text: "Perfil de Google Business optimizado para salir en búsquedas de \"dónde comer\" en tu zona.",
      },
      {
        title: "Fotos que abren el apetito",
        text: "Galería rápida y cuidada de tus platos y del local, pensada para decidir la reserva en segundos.",
      },
    ],
    blogPost: "/blog/conseguir-reservas-restaurante-malaga/",
    faq: [
      {
        q: "¿Puedo actualizar la carta yo mismo?",
        a: "Sí. La carta digital se actualiza desde un panel sencillo o pidiéndonoslo por WhatsApp. Los cambios de precios y platos del día están incluidos.",
      },
      {
        q: "¿Las reservas tienen comisión?",
        a: "No. Las reservas llegan directo a tu WhatsApp o email, sin intermediarios ni porcentajes por cubierto.",
      },
      {
        q: "¿Incluye el código QR para las mesas?",
        a: "Sí. Entregamos los códigos QR listos para imprimir e instalar en mesas, barras y entrada.",
      },
    ],
  },
  {
    slug: "gimnasios",
    name: "Gimnasios",
    emoji: "🏋️",
    navLabel: "Web para gimnasios",
    tagline: "Horarios, planes y prueba gratis",
    title: "Diseño Web para Gimnasios en Málaga | Clases y Prueba Gratis | Sur Digital",
    description:
      "Webs para gimnasios en Málaga: horarios y clases, planes de precios, inscripción online y captación de socios con prueba gratuita. Desde 0€.",
    h1Prefix: "Llena tu gimnasio",
    h1Accent: "desde Google",
    intro:
      "Quien busca \"gimnasio cerca de mí\" compara en 2 minutos: precios, clases y cómo apuntarse. Si tu web (o tu Instagram suelto) no lo responde, se apunta en el de al lado.",
    pains: [
      "Los horarios de clases viven en una foto de Instagram de hace meses",
      "Los precios no están claros y generan preguntas sin fin por DM",
      "Pierdes socios porque la inscripción exige ir en persona",
      "Tu web actual parece de una cadena, no de tu barrio",
    ],
    features: [
      {
        title: "Horarios y clases siempre al día",
        text: "Cuadro de horarios claro y actualizable, con aviso de cambios de temporada sin tocar código.",
      },
      {
        title: "Planes de precios claros",
        text: "Tarifas comparables en una tabla: mensual, trimestral, anual. Menos DMs, más altas.",
      },
      {
        title: "Inscripción y prueba gratis",
        text: "Formulario de alta online y cupón de clase de prueba: convierte curiosos en socios mientras duermes.",
      },
      {
        title: "SEO local por barrio",
        text: "Posicionamiento en tu zona (Teatinos, Centro, Carretera de Cádiz…) para dominar tu área de captación.",
      },
    ],
    blogPost: "/blog/captar-socios-gimnasio-web/",
    faq: [
      {
        q: "¿Puedo cambiar los horarios yo?",
        a: "Sí, el cuadro de horarios se actualiza desde un panel sencillo o nos escribes y lo cambiamos por ti.",
      },
      {
        q: "¿La prueba gratuita se gestiona en la web?",
        a: "Sí: el visitante deja su nombre y teléfono, tú recibes el lead al momento por email y Telegram, y cierras en el centro.",
      },
      {
        q: "¿Funciona para box de crossfit o estudios de pilates?",
        a: "Totalmente: la estructura sirve para cualquier centro deportivo, con tus colores, tus clases y tus planes.",
      },
    ],
  },
  {
    slug: "abogados",
    name: "Abogados",
    emoji: "⚖️",
    navLabel: "Web para abogados",
    tagline: "Áreas de práctica y cita previa",
    title: "Diseño Web para Abogados en Málaga | Áreas de Práctica y Citas | Sur Digital",
    description:
      "Webs para abogados y despachos en Málaga: áreas de práctica, primera consulta, blog jurídico con SEO local y cita previa online. Imagen sobria y de confianza.",
    h1Prefix: "Un despacho",
    h1Accent: "que transmite confianza",
    intro:
      "Nadie contrata a un abogado desde un flyer. Antes de llamar, el cliente busca tu nombre, revisa tu web y decide en minutos si pareces el profesional que necesita.",
    pains: [
      "Tu web (si existe) no refleja tu especialidad ni tu seriedad",
      "Recibes llamadas de casos que no quieres, y pocas de los que sí",
      "No apareces cuando buscan \"abogado laboral Málaga\"",
      "Dependes 100% del boca a boca para conseguir casos nuevos",
    ],
    features: [
      {
        title: "Áreas de práctica claras",
        text: "Una página por especialidad (laboral, civil, penal…) que posiciona en Google y filtra los casos que quieres.",
      },
      {
        title: "Primera consulta gestionada",
        text: "Formulario de caso con área, descripción y contacto: agendas solo las consultas que encajan con tu despacho.",
      },
      {
        title: "Sobriedad que convierte",
        text: "Diseño serio, tipografía cuidada y cero adornos: la web al nivel de tu colegiación.",
      },
      {
        title: "Blog jurídico con SEO",
        text: "Artículos sobre tus especialidades que atraen búsquedas locales y demuestran tu experiencia real.",
      },
    ],
    blogPost: "/blog/web-abogados-conseguir-clientes/",
    faq: [
      {
        q: "¿Puedo escribir yo los artículos del blog?",
        a: "Sí, nos pasas el texto y lo publicamos con formato profesional. También podemos redactarlos nosotros con tu revisión.",
      },
      {
        q: "¿Se distingue el despacho de la marca?",
        a: "El diseño es sobrio y a medida, con tu identidad: no hay plantilla genérica que delate una web hecha en serie.",
      },
      {
        q: "¿Cumple la normativa de publicidad de abogados?",
        a: "Sí: sin resultados garantizados ni lenguaje promocional exagerado. Informativa, sobria y conforme a la deontología.",
      },
    ],
  },
  {
    slug: "peluquerias",
    name: "Peluquerías",
    emoji: "💇",
    navLabel: "Web para peluquerías",
    tagline: "Servicios, precios y cita online",
    title: "Diseño Web para Peluquerías en Málaga | Cita Online y Precios | Sur Digital",
    description:
      "Webs para peluquerías y barberías en Málaga: menú de servicios con precios, cita previa online y galería de trabajos. Desde 0€, entrega en menos de 7 días.",
    h1Prefix: "Tu peluquería",
    h1Accent: "con la agenda llena",
    intro:
      "Cuando alguien busca \"peluquería cerca de mí\" compara trabajos, precios y sobre todo: cómo se pide cita. Si lo resuelves por WhatsApp a las 23h, pierdes la cita.",
    pains: [
      "La lista de precios vive en una pizarra y nadie la ve fuera del local",
      "Reservas por WhatsApp que se pierden entre mensajes y audios",
      "Tu Instagram tiene seguidores pero Google no sabe que existes",
      "Los clientes nuevos no encuentran tu horario ni tu dirección",
    ],
    features: [
      {
        title: "Menú de servicios y precios",
        text: "Cortes, color, barba, tratamientos… con precios claros que puedes actualizar cuando quieras.",
      },
      {
        title: "Cita online 24/7",
        text: "Formulario de cita con servicio y preferencia de día/hora que llega directo a tu móvil, incluso de madrugada.",
      },
      {
        title: "Galería de trabajos",
        text: "Tus mejores cortes y colores en una galería rápida: el antes/después que convierte seguidores en clientas.",
      },
      {
        title: "SEO local por barrio",
        text: "Que te encuentren buscando \"peluquería en [tu barrio]\" con perfil de Google Business optimizado.",
      },
    ],
    blogPost: "/blog/peluqueria-mas-clientes-web-cita-online/",
    faq: [
      {
        q: "¿Puedo cambiar precios y servicios yo mismo?",
        a: "Sí, el menú de servicios se actualiza desde un panel sencillo o pidiéndonoslo por WhatsApp. Los cambios de temporada están incluidos.",
      },
      {
        q: "¿La cita online se conecta con mi agenda actual?",
        a: "Las citas te llegan por email y Telegram al momento. Si usas un software de reservas, enlazamos el botón directo a él.",
      },
      {
        q: "¿Sirve para barberías y centros de estética?",
        a: "Totalmente: la estructura vale para cualquier negocio de cuidado personal, con tus servicios, tus precios y tu estilo.",
      },
    ],
  },
  {
    slug: "veterinarias",
    name: "Veterinarias",
    emoji: "🐾",
    navLabel: "Web para veterinarias",
    tagline: "Servicios, urgencias y cita previa",
    title: "Diseño Web para Clínicas Veterinarias en Málaga | Cita Online | Sur Digital",
    description:
      "Webs para clínicas veterinarias en Málaga: servicios y tarifas, contacto de urgencias 24h, cita previa online y ficha de Google Maps optimizada. Desde 0€.",
    h1Prefix: "Tu clínica",
    h1Accent: "en el primer mapa de Google",
    intro:
      "Cuando el perro está malo, el dueño busca \"veterinario cerca de mí\" y llama al primero que ve con urgencias y teléfono visible. Si tu web no lo pone en 5 segundos, la visita se va a otro.",
    pains: [
      "El teléfono y el horario de urgencias no se ven en el móvil",
      "No apareces en Google Maps cuando buscan \"veterinario 24h\"",
      "Las tarifas generan llamadas de precios antes de venir",
      "Dependes solo del paseo del barrio para captar clientes nuevos",
    ],
    features: [
      {
        title: "Urgencias siempre visibles",
        text: "Teléfono de urgencias fijo en pantalla en móvil y escritorio: quien necesita urgencia no debe buscarlo.",
      },
      {
        title: "Servicios y tarifas claras",
        text: "Consulta, vacunas, cirugía, peluquería animal… con precios orientativos que reducen llamadas de dudas.",
      },
      {
        title: "Cita previa online",
        text: "Formulario con motivo de visita y mascota: organizas la agenda del día antes de abrir.",
      },
      {
        title: "Ficha de Google optimizada",
        text: "Perfil de Google Business con servicios, fotos y reseñas para dominar las búsquedas \"veterinario cerca\".",
      },
    ],
    blogPost: "/blog/web-clinica-veterinaria-malaga/",
    faq: [
      {
        q: "¿Puedo destacar las urgencias 24h?",
        a: "Sí, es de lo primero que diseñamos: bloque de urgencias con teléfono clicable visible en todas las páginas, también en móvil.",
      },
      {
        q: "¿Puedo poner fichas de cada veterinario?",
        a: "Sí, sección de equipo con colegiado, especialidad y foto: transmite confianza y mejora el SEO local de la clínica.",
      },
      {
        q: "¿Funciona para clínicas con varias sedes?",
        a: "Sí, cada sede con su ficha, horario y mapa propios, y una página conjunta que agrupa toda la clínica.",
      },
    ],
  },
  {
    slug: "dentistas",
    name: "Dentistas",
    emoji: "🦷",
    navLabel: "Web para clínicas dentales",
    tagline: "Tratamientos, primera visita y reseñas",
    title: "Diseño Web para Clínicas Dentales en Málaga | Primera Visita | Sur Digital",
    description:
      "Webs para clínicas dentales en Málaga: tratamientos con precios orientativos, primera visita gratis, reseñas de pacientes y cita previa online. Desde 0€.",
    h1Prefix: "Tu clínica dental",
    h1Accent: "con la agenda completa",
    intro:
      "El paciente que busca \"dentista cerca de mí\" compara en 3 minutos: tratamientos, precios, reseñas y cómo de fácil es pedir cita. Si tu web no responde, reserva en la clínica de al lado.",
    pains: [
      "Buscas \"implantes Málaga\" y tu clínica no aparece",
      "Los tratamientos y precios no están en ningún sitio, solo por teléfono",
      "La primera consulta gratis no se comunica en ninguna parte",
      "Tienes excelentes reseñas en Google pero una web que no las muestra",
    ],
    features: [
      {
        title: "Tratamientos con su página",
        text: "Ortodoncia, implantes, limpieza, estética dental… cada tratamiento con su texto SEO que atrae búsquedas concretas.",
      },
      {
        title: "Primera visita destacada",
        text: "Si ofreces primera consulta gratis o revisión + radiografía de bienvenida, la web la vende en cada sección.",
      },
      {
        title: "Reseñas que venden solas",
        text: "Tus reseñas de Google integradas en la web: el paciente nuevo confía antes de cruzar la puerta.",
      },
      {
        title: "Cita previa online",
        text: "Formulario con tratamiento y disponibilidad que llega a recepción por email y Telegram al momento.",
      },
    ],
    blogPost: "/blog/web-clinica-dental-dentista-malaga/",
    faq: [
      {
        q: "¿Cada tratamiento puede tener su propia página?",
        a: "Sí, y es lo recomendable: una página por tratamiento (ortodoncia, implantes, blanqueamiento…) posiciona en Google para cada búsqueda y filtra pacientes mejor.",
      },
      {
        q: "¿Puedo mostrar las reseñas de Google en la web?",
        a: "Sí, integramos tus reseñas reales de Google en la home y en cada tratamiento: prueba social sin escribir nada tú.",
      },
      {
        q: "¿Se distingue de otras clínicas dentales?",
        a: "El diseño es a medida con tu identidad, tu equipo y tus fotos: nada de plantilla genérica de clínica.",
      },
    ],
  },
  {
    slug: "fisioterapeutas",
    name: "Fisioterapeutas",
    emoji: "💪",
    navLabel: "Web para fisioterapeutas",
    tagline: "Cita online, especialidades y bonos",
    title: "Diseño Web para Fisioterapeutas en Málaga | Cita Online | Sur Digital",
    description:
      "Webs para clínicas de fisioterapia en Málaga: especialidades, precios de sesión y bonos, cita online y reseñas de pacientes. Desde 0€, en menos de 7 días.",
    h1Prefix: "Tu clínica de fisioterapia",
    h1Accent: "sin depender del boca a boca",
    intro:
      "Quien tiene dolor de espalda busca «fisioterapeuta cerca de mí» y llama al primero que le da hueco. Si tu web no dice qué tratas, cuánto cuesta la sesión y cómo se pide cita, esa llamada se la lleva otro.",
    pains: [
      "Tu agenda depende del boca a boca y de los pacientes que te derivan",
      "No apareces buscando «fisioterapia deportiva» o «suelo pélvico» en tu zona",
      "Te preguntan el precio por WhatsApp uno a uno y muchos no llegan a reservar",
      "Cuando no estás en consulta, nadie puede pedir cita",
    ],
    features: [
      {
        title: "Cita online 24/7",
        text: "Formulario con el motivo de consulta y disponibilidad: rellenas la agenda del día antes de abrir, sin llamadas cruzadas.",
      },
      {
        title: "Una página por especialidad",
        text: "Deportiva, suelo pélvico, traumatológica, neurología… cada una con su texto y sus búsquedas: atraes al paciente que quieres, no a cualquiera.",
      },
      {
        title: "Precios y bonos a la vista",
        text: "Sesión suelta, bono de 5 o 10 y primera valoración con su precio: menos dudas por WhatsApp y más citas cerradas.",
      },
      {
        title: "Equipo y reseñas visibles",
        text: "Número de colegiado, especialidad y reseñas de Google en la ficha de cada fisio: la confianza que decide la primera visita.",
      },
    ],
    blogPost: "/blog/web-fisioterapia-mas-pacientes-malaga/",
    faq: [
      {
        q: "¿Merece la pena publicar los precios de sesión?",
        a: "Sí. Una tabla clara de sesión suelta y bonos reduce las consultas de precio antes de reservar y filtra a quien solo estaba curioseando.",
      },
      {
        q: "¿La cita online distingue entre tipos de sesión?",
        a: "Sí: el paciente elige el motivo (deportiva, suelo pélvico, valoración…) y tú recibes todo lo necesario para colocarlo en tu agenda sin llamadas.",
      },
      {
        q: "¿Sirve si trabajo a domicilio o en varios centros?",
        a: "Sí: se indican las zonas de servicio y los centros, con su mapa y sus horarios propios por día.",
      },
    ],
  },
  {
    slug: "academias",
    name: "Academias",
    emoji: "🎓",
    navLabel: "Web para academias",
    tagline: "Grupos, horarios y matrícula online",
    title: "Diseño Web para Academias en Málaga | Matrícula Online | Sur Digital",
    description:
      "Webs para academias y centros de clases en Málaga: grupos y horarios, temario por asignatura, matrícula online y captación de alumnos. Desde 0€.",
    h1Prefix: "Llena tus grupos",
    h1Accent: "antes de empezar el curso",
    intro:
      "Las plazas de una academia se deciden en dos semanas: cuando las familias comparan, la que enseña horarios, grupos y precios claros desde el móvil se queda con el alumno.",
    pains: [
      "Los horarios y grupos cambian cada trimestre y viven en un PDF",
      "Preguntan precio y plazas libres por WhatsApp uno a uno",
      "Tu competencia aparece en Google y tú solo en el boca a boca",
      "Las matrículas se apuntan en un cuaderno y alguna se pierde",
    ],
    features: [
      {
        title: "Grupos y horarios al día",
        text: "Tabla de grupos por curso, asignatura y turno que actualizas cada trimestre sin tocar código.",
      },
      {
        title: "Matrícula y reserva de plaza",
        text: "Formulario con asignatura, curso y horario preferido: la reserva te llega al móvil al momento, también fuera de horario.",
      },
      {
        title: "Profesorado y resultados",
        text: "Ficha de cada profesor, temario por asignatura y resultados reales: justo lo que mira una familia antes de decidir.",
      },
      {
        title: "SEO por asignatura y barrio",
        text: "Páginas de «clases de matemáticas en Teatinos» o «refuerzo de inglés» que captan la búsqueda exacta de tu zona.",
      },
    ],
    blogPost: "/blog/academia-mas-alumnos-web-malaga/",
    faq: [
      {
        q: "¿Puedo actualizar grupos y horarios yo mismo?",
        a: "Sí: cambias turno, aula o profesor y queda publicado. Nada de pedir un PDF nuevo cada trimestre.",
      },
      {
        q: "¿Sirve para academias de idiomas y de refuerzo?",
        a: "Sí, y también para escuelas de música, danza o tecnificación deportiva: la estructura se adapta a cualquier centro con grupos y horarios.",
      },
      {
        q: "¿Puedo avisar de las plazas que quedan?",
        a: "Sí: cada grupo puede marcar «últimas plazas» o «completo», que es justo lo que empuja a matricularse antes.",
      },
    ],
  },
  {
    slug: "inmobiliarias",
    name: "Inmobiliarias",
    emoji: "🏢",
    navLabel: "Web para inmobiliarias",
    tagline: "Escaparate de inmuebles y captación",
    title: "Diseño Web para Inmobiliarias en Málaga | Captar Propietarios | Sur Digital",
    description:
      "Webs para inmobiliarias y agentes en Málaga: escaparate de inmuebles, captación de propietarios, valoración gratuita y solicitud de visitas. Desde 0€.",
    h1Prefix: "Tu inmobiliaria",
    h1Accent: "captando propietarios",
    intro:
      "En una misma calle puede haber diez pisos en venta y tres inmobiliarias con el mismo cartel. El propietario elige a quien le demuestra en su web que sabe vender, no a quien promete más.",
    pains: [
      "Tus inmuebles solo existen en portales que te cobran por cada contacto",
      "Los propietarios no te encuentran y no saben por qué elegirte a ti",
      "Enseñas pisos a gente que no está cualificada ni financiada",
      "Tu marca no se distingue de las otras cinco de la misma calle",
    ],
    features: [
      {
        title: "Escaparate propio de inmuebles",
        text: "Tus propiedades con fotos, precio, metros y mapa: el escaparate permanente que un portal no te da, y sin comisión por lead.",
      },
      {
        title: "Valoración gratis como imán",
        text: "Formulario de «¿cuánto vale mi piso?» con dirección y características: captas propietarios antes de que llamen a la competencia.",
      },
      {
        title: "Visitas cualificadas",
        text: "Solicitud de visita con zona de interés y si ya tiene financiación: enseñas pisos a quien realmente puede comprarlos.",
      },
      {
        title: "Marca local fuerte",
        text: "Tu equipo, tus zonas (Centro, Teatinos, Este…) y tu histórico, con el SEO local que te hace el referente del barrio.",
      },
    ],
    blogPost: "/blog/web-inmobiliaria-captar-propietarios-malaga/",
    faq: [
      {
        q: "¿Puedo publicar y retirar inmuebles yo mismo?",
        a: "Sí: das de alta el inmueble con sus fotos y datos, lo actualizas si cambia el precio y lo retiras cuando se vende, sin depender de nadie.",
      },
      {
        q: "¿La web sustituye a los portales?",
        a: "No tienen por qué competir: los portales traen demanda y tu web capta propietarios y construye marca, sin pagar por cada contacto.",
      },
      {
        q: "¿Se integra con mi CRM inmobiliario?",
        a: "Si tu CRM exporta un feed (XML o similar), sincronizamos los inmuebles automáticamente para no duplicar el trabajo de subirlos dos veces.",
      },
    ],
  },
];
