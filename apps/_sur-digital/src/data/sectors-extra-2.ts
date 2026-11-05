// Segunda tanda de sectores. Igual que `sectors-extra.ts`: viven en su propio
// fichero para no reescribir el array original, y `sectors.ts` los fusiona al
// final con un spread, así que todo lo que lee SECTORS (menú, home,
// /especialidades/, footer y las imágenes OG) los ve sin cambiar nada.
//
// `import type` es solo un tipo: se borra al compilar y no crea ciclo real.

import type { SectorPage } from "./sectors";

export const SECTORS_EXTRA_2: SectorPage[] = [
  {
    slug: "oficios",
    name: "Electricistas y fontaneros",
    emoji: "🔧",
    navLabel: "Web para oficios",
    tagline: "Avisos, presupuestos y zonas",
    title: "Web para electricistas y fontaneros en Málaga desde 0€",
    description: "Webs para electricistas y fontaneros en Málaga: avisos por servicio, presupuesto por foto y zonas de trabajo. Desde 0€ en 7 días.",
    h1Prefix: "Tu oficio",
    h1Accent: "con avisos cada semana",
    intro:
      "Cuando se va la luz o hay una fuga, el cliente busca «electricista urgente» o «fontanero cerca de mí» y llama al primero en el que confía. Si tu web es solo un número de teléfono, esa llamada se va a otro.",
    pains: [
      "Pierdes horas contestando presupuestos que nunca se cierran",
      "No queda claro qué zonas cubres ni si atiendes urgencias",
      "Te llaman por trabajos que no haces y no por los que sí",
      "Sales en Google Maps por debajo de empresas con menos años que tú",
    ],
    features: [
      {
        title: "Avisos por tipo de trabajo",
        text: "Cuadros eléctricos, boletines, fugas, desatascos, calderas o aire acondicionado: cada servicio con su página y su formulario de aviso.",
      },
      {
        title: "Presupuesto con fotos",
        text: "El cliente adjunta una foto del problema y su localidad: valoras en dos minutos y descartas lo que no te interesa antes de mover la furgoneta.",
      },
      {
        title: "Zonas de trabajo",
        text: "Qué municipios y barrios cubres y si hay recargo por desplazamiento, para que no te lleguen avisos de donde no llegas.",
      },
      {
        title: "Urgencias y horario",
        text: "Horario normal, guardias y servicio 24 horas bien visibles, con el teléfono clicable desde el móvil y botón de WhatsApp.",
      },
    ],
    blogPost: "/blog/web-electricistas-fontaneros-malaga/",
    faq: [
      {
        q: "¿Sirve si trabajo solo, sin plantilla?",
        a: "Sí, y es donde más se nota: la web atiende las llamadas de precio mientras tú estás de rodillas cambiando un termo. Recibes el aviso con foto, zona y descripción.",
      },
      {
        q: "¿Puedo explicar que cobro desplazamiento?",
        a: "Sí: cada zona con su recargo y el mínimo de trabajo explicados por escrito. Es la mejor forma de filtrar avisos de 20 euros a 40 minutos de casa.",
      },
      {
        q: "¿Se puede pedir cita para instalaciones, no solo urgencias?",
        a: "Sí: instalaciones de aire, revisión de la instalación eléctrica o mantenimiento de calderas con cita previa, separadas de los avisos urgentes.",
      },
    ],
  },
  {
    slug: "autoescuelas",
    name: "Autoescuelas",
    emoji: "🚦",
    navLabel: "Web para autoescuelas",
    tagline: "Matrículas, permisos y prácticas",
    title: "Web para autoescuelas en Málaga desde 0€: matrícula",
    description: "Webs para autoescuelas en Málaga: precios por permiso, matrícula online y horarios de teóricas y prácticas. Desde 0€ y online en 7 días.",
    h1Prefix: "Tu autoescuela",
    h1Accent: "con el aula llena",
    intro:
      "Quien quiere sacarse el carné compara precios y horarios en el móvil, y casi siempre con sus padres al lado. La autoescuela que enseña el precio claro y deja matricularse sin llamar se lleva el alumno.",
    pains: [
      "Todos los alumnos preguntan lo mismo: cuánto cuesta el carné completo",
      "Las matrículas se apuntan en libreta y se pierden entre el papeleo",
      "No se ven los horarios de teórica ni la disponibilidad de clases",
      "El competidor de la esquina tiene web con precios y tú no",
    ],
    features: [
      {
        title: "Precios por permiso",
        text: "B, A2, ciclomotor o mercancías, con lo que incluye cada uno y qué se paga aparte: menos preguntas repetidas y más matrículas decididas.",
      },
      {
        title: "Matrícula online",
        text: "Formulario con permiso elegido, turno de mañana o tarde y datos del alumno: llegas a la primera clase con todo preparado.",
      },
      {
        title: "Evaluación y simulacros",
        text: "Test de práctica para hacer desde casa y acceso al simulacro de examen: los alumnos llegan mejor preparados y aprueban antes.",
      },
      {
        title: "Duración y proceso",
        text: "Plazos de cada permiso (teórico, prácticas, examen) explicados paso a paso, con la tranquilidad de saber cuánto tarda de verdad.",
      },
    ],
    blogPost: "/blog/web-autoescuela-malaga/",
    faq: [
      {
        q: "¿Puedo publicar los precios de los permisos?",
        a: "Sí, se hace con una tabla donde quede claro qué incluye cada permiso y qué se paga aparte (tasas, clases extra). Los padres lo agradecen y te ahorra llamadas.",
      },
      {
        q: "¿Se pueden reservar clases prácticas?",
        a: "Sí: el alumno solicita clase o examen con su turno preferido y tú confirmas según los coches disponibles, sin cadenas de mensajes.",
      },
      {
        q: "¿Funciona para autoescuelas con varios profesores?",
        a: "Sí: ficha por profesor con su especialidad (turismo, moto, camión) y las prácticas asignadas a cada uno, para que el alumno elija con quien aprende mejor.",
      },
    ],
  },
  {
    slug: "psicologia",
    name: "Psicólogos",
    emoji: "🧠",
    navLabel: "Web para psicólogos",
    tagline: "Cita previa y confianza",
    title: "Web para psicólogos en Málaga desde 0€: cita online",
    description: "Webs para psicólogos en Málaga: áreas de terapia, primera cita, modalidad online y confidencialidad. Desde 0€ en menos de 7 días.",
    h1Prefix: "Tu consulta",
    h1Accent: "con la primera cita fácil",
    intro:
      "Pedir ayuda psicológica cuesta. Quien da ese paso por fin necesita encontrar rápido un teléfono, una forma de escribir o una cita, sin sensación de juicio. Una web clara y discreta quita el último obstáculo.",
    pains: [
      "Cada consulta empieza por «¿cuánto cuesta la sesión?» y no por lo que le pasa a la persona",
      "No queda claro si atiendes adultos, pareja, adolescentes o terapia online",
      "El formulario no transmite la discreción que la persona necesita",
      "Apareces mezclado con sitios de dudosa credibilidad al buscar «psicólogo Málaga»",
    ],
    features: [
      {
        title: "Áreas de terapia",
        text: "Ansiedad, estado de ánimo, duelo, terapia de pareja o infantil: una página por área con lo que trabajas y cómo, para que cada persona se reconozca.",
      },
      {
        title: "Cita discreta en un clic",
        text: "Formulario corto o botón de cita online, con aviso de confidencialidad bien visible: pedir ayuda no debería requerir tres llamadas.",
      },
      {
        title: "Modalidad presencial y online",
        text: "Sesiones en consulta u online con la misma seriedad explicada por escrito, con la plataforma y las condiciones claras.",
      },
      {
        title: "Credenciales a la vista",
        text: "Número de colegiada, formación y enfoque terapéutico: la confianza en salud mental se construye con transparencia, no con colores.",
      },
    ],
    blogPost: "/blog/web-psicologos-malaga/",
    faq: [
      {
        q: "¿Cómo trato la privacidad y el aviso legal?",
        a: "La web sale con aviso legal, política de privacidad y consentimiento en el formulario, conforme al RGPD. El texto que envías solo lo recibe quien tiene que leerlo.",
      },
      {
        q: "¿Puedo publicar tarifas?",
        a: "Si quieres, sí, con precios de sesión suelta y bonos. Si prefieres no ponerlos, la web te permite explicar las condiciones y que la persona pregunte sin compromiso.",
      },
      {
        q: "¿Sirve para varios profesionales en un centro?",
        a: "Sí: ficha por profesional con su especialidad y su agenda, una página de centro con las áreas comunes y la misma marca para todos.",
      },
    ],
  },
  {
    slug: "guarderias",
    name: "Escuelas infantiles",
    emoji: "🧸",
    navLabel: "Web para escuelas infantiles",
    tagline: "Plazas, ratios y matrícula",
    title: "Web para guarderías en Málaga desde 0€: plazas",
    description: "Webs para guarderías en Málaga: proyecto educativo, ratios por aula, precios y solicitud de plaza online. Desde 0€ en 7 días.",
    h1Prefix: "Tu escuela infantil",
    h1Accent: "con las plazas llenas",
    intro:
      "Una familia elige escuela infantil visitando tres o cuatro y comparando después en casa. Quien no encuentra tu proyecto educativo, tus ratios ni tus precios en el móvil se queda fuera de esa comparación final.",
    pains: [
      "Repites por teléfono la misma información sobre precios, horarios y ratios",
      "Las plazas se solicitan en persona y hay familias que no llegan a tiempo",
      "No se ve el proyecto educativo ni el equipo, así que pareces una guardería más",
      "El periodo de matrícula se te echa encima sin lista de espera ordenada",
    ],
    features: [
      {
        title: "Proyecto educativo por escrito",
        text: "Metodología, idiomas, rutinas y alimentación explicados con fotos reales: es lo primero que buscan las familias que comparan.",
      },
      {
        title: "Ratios, aulas y edades",
        text: "Cada aula con su edad, su ratio de educadoras y su horario, para que la familia vea de un vistazo si encaja con su hijo.",
      },
      {
        title: "Solicitud de plaza y lista de espera",
        text: "Formulario con la edad del peque, turno y fecha de entrada deseada: ordenas la lista de espera sin cuadernos.",
      },
      {
        title: "Jornada ampliada y comedor",
        text: "Horarios de entrada y recogida, comedor propio o catering, agosto y días no lectivos: las dudas que deciden la matrícula.",
      },
    ],
    blogPost: "/blog/web-escuela-infantil-malaga/",
    faq: [
      {
        q: "¿Puedo gestionar la lista de espera desde la web?",
        a: "Sí: cada solicitud llega con la edad del peque y la fecha deseada, así las ordenas por aula y prioridad sin tener que reconstruirlo desde el papel.",
      },
      {
        q: "¿Conviene publicar las cuotas?",
        a: "Sí: la cuota mensual, la matrícula y los servicios extra (comedor, ampliación) por escrito. Filtra a las familias que buscan algo que no ofreces y ahorra llamadas.",
      },
      {
        q: "¿Cómo mostramos las fotos de los niños?",
        a: "Solo con autorización firmada de las familias y preferiblemente fotos de espacios, materiales y actividades. Nunca identificamos menores sin permiso.",
      },
    ],
  },
  {
    slug: "yoga",
    name: "Estudios de yoga y pilates",
    emoji: "🧘",
    navLabel: "Web para yoga y pilates",
    tagline: "Horarios, bonos y clases",
    title: "Web para yoga y pilates en Málaga desde 0€",
    description: "Webs para estudios de yoga y pilates en Málaga: horarios por clase, bonos y cuotas y reserva de plaza. Desde 0€ en 7 días.",
    h1Prefix: "Tu estudio",
    h1Accent: "con las clases llenas",
    intro:
      "Quien busca «clases de pilates cerca de mí» quiere saber tres cosas antes de escribir: a qué hora, cuánto cuesta y si el nivel es el suyo. Si eso no está en la web, no da el paso.",
    pains: [
      "El horario solo existe en una foto de Instagram de enero",
      "No se sabe si las clases son de iniciación o para nivel avanzado",
      "Los bonos y cuotas se explican por mensaje directo, uno a uno",
      "Las plazas libres de cada clase son un misterio hasta llegar al estudio",
    ],
    features: [
      {
        title: "Horario vivo",
        text: "Todas las clases por día, hora, nivel y sala, con lo que se necesita (esterilla, calzado) y las sustituciones al día.",
      },
      {
        title: "Bonos y cuotas claros",
        text: "Clase suelta, bono de 10 o cuota mensual, con las condiciones escritas: menos negociaciones por WhatsApp y más plazas cubiertas.",
      },
      {
        title: "Reserva de plaza",
        text: "La alumna elige clase y reserva, y tú ves cuántas plazas quedan en cada franja: sin llamar a nadie para preguntar si hay hueco.",
      },
      {
        title: "Profesores y estilos",
        text: "Cada instructor con su formación y su estilo (Vinyasa, Hatha, Pilates suelo, máquinas) para que la gente encuentre la clase que le encaja.",
      },
    ],
    blogPost: "/blog/web-estudio-yoga-pilates-malaga/",
    faq: [
      {
        q: "¿Puedo mostrar la disponibilidad de cada clase?",
        a: "Sí: cada franja indica plazas libres y el botón de reserva. Si prefieres no complicarte, dejas la clase con estado de completas y una lista de espera.",
      },
      {
        q: "¿Sirve para talleres y retiros puntuales?",
        a: "Sí: taller o retiro con su fecha, plazas y precio, y su propio formulario. Son los productos con más margen y los más fáciles de vender con una web clara.",
      },
      {
        q: "¿Puedo integrar mi sistema de reservas actual?",
        a: "Se puede: enlazamos tu software de reservas desde el botón de cada clase o añadimos un formulario propio que llega a tu correo.",
      },
    ],
  },
  {
    slug: "floristerias",
    name: "Floristerías",
    emoji: "💐",
    navLabel: "Web para floristerías",
    tagline: "Ramos, encargos y reparto",
    title: "Web para floristerías en Málaga desde 0€: reparto hoy",
    description: "Webs para floristerías en Málaga: catálogo por ocasión, pedido online y reparto el mismo día. Desde 0€ y online en menos de 7 días.",
    h1Prefix: "Tu floristería",
    h1Accent: "con pedidos todo el año",
    intro:
      "Nadie quiere llamar para preguntar si hay ramos de cumpleaños y a qué hora llegan. Quien busca «floristería con reparto hoy» compra al instante: si no puede encargar en tu web, ese pedido se lo lleva otra.",
    pains: [
      "En San Valentín y el Día de la Madre el teléfono se desborda",
      "No se ve qué ramos tienes ni desde cuánto puedes pedir",
      "Cada encargo se apunta a mano con la dirección y la dedicatoria",
      "No apareces buscando «flores a domicilio» en tu ciudad",
    ],
    features: [
      {
        title: "Catálogo por ocasión",
        text: "Cumpleaños, bodas, condolencias, nacimientos o flores secas: cada ocasión con sus fotos y su rango de precio real.",
      },
      {
        title: "Encargo con dedicatoria",
        text: "El cliente elige ramo, fecha y franja de entrega, dirección y tarjeta: el pedido llega completo y no se pierde nada en el mostrador.",
      },
      {
        title: "Reparto el mismo día",
        text: "Zonas de reparto, hora límite para pedir hoy y gastos de envío por zona, visibles antes de pagar.",
      },
      {
        title: "Suscripción y empresas",
        text: "Ramos mensuales, flores para oficinas y eventos recurrentes: ingresos que no dependen de las tres fechas señaladas.",
      },
    ],
    blogPost: "/blog/web-floristeria-malaga/",
    faq: [
      {
        q: "¿Puedo cobrar online el pedido?",
        a: "Sí: con pasarela de pago (tarjeta o Bizum) o, si lo prefieres, con el pedido por transferencia y una llamada de confirmación antes de prepararlo.",
      },
      {
        q: "¿Conviene trabajar con sustituciones de flores?",
        a: "Sí, y la web lo permite: si una variedad no está en temporada, indicas la sustitución de color y valor equivalente para no perder el pedido.",
      },
      {
        q: "¿Sirve para bodas y eventos?",
        a: "Sí: una página específica de bodas con presupuesto personalizado, galería de montajes y formulario con fecha y lugar del enlace.",
      },
    ],
  },
];
