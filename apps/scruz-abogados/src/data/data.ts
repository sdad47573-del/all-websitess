import despidosImg from "../assets/abogado-de-despidos-min.png";
import paternidadImg from "../assets/familia.png";
import generoImg from "../assets/mejor-abogado-violencia-de-genero-malaga-min.png";
import penalImg from "../assets/mejores-abogados-penales-min.png";
import questionImg from "../assets/Recurso-3@0.5x-2-980x707.webp";
import extranjeriaImg from "../assets/abogado-especialistas-en-extranjeria-min.png";
import traficoImg from "../assets/abogados-de-accidentes-e-indemnizaciones-min-1.png";
import herenciasImg from "../assets/abogados-de-herencias-y-patrimonios-min.png";
import divorciosImg from "../assets/abogados-especialistas-en-divorcios-baratos-min.png";
import deudasImg from "../assets/abogados-especializados-en-deudas-e-impagos-min.png";
import bancoImg from "../assets/abogados-especializados-en-problemas-bancarios-min.png";
import empresasImg from "../assets/empresa.png";
import incapacidadImg from "../assets/resfriado.png";
import laboralImg from "../assets/subiendo.png";
import logoImg from "../assets/Recurso-2@0.5x.png";

const services = [
  {
    title: "Indemnizaciones de Tráfico",
    description: "Reclama la máxima compensación por tu accidente.",
    path: "/indemnizaciones-trafico",
    img: {
      ...traficoImg,
      alt: "Abogado especialista en indemnizaciones por accidentes de tráfico",
      title:
        "Asesoría legal para obtener la máxima compensación tras un accidente",
    },
  },
  {
    title: "Herencias y Testamentos",
    description:
      "Gestionamos herencias y redactamos testamentos sin complicaciones.",
    path: "/herencias-testamentos",
    img: {
      ...herenciasImg,
      alt: "Asesoramiento legal en herencias y testamentos",
      title:
        "Gestión de herencias y redacción de testamentos sin complicaciones",
    },
  },
  {
    title: "Divorcios y Separaciones",
    description: "Soluciones rápidas y justas en rupturas familiares.",
    path: "/divorcios-separaciones",
    img: {
      ...divorciosImg,
      alt: "Abogado experto en divorcios y separaciones",
      title: "Soluciones legales rápidas y justas en casos de divorcio",
    },
  },
  {
    title: "Cobro de deudas e Impagos",
    description: "Recupera tu dinero de forma eficaz.",
    path: "/cobro-deudas-impagos",
    img: {
      ...deudasImg,
      alt: "Recuperación de deudas e impagos con respaldo legal",
      title: "Recuperación eficaz de deudas con asesoramiento jurídico",
    },
  },
  {
    title: "Reclamaciones Bancarias",
    description: "Defiende tus derechos frente a bancos y productos abusivos.",
    path: "/reclamaciones-bancarias",
    img: {
      ...bancoImg,
      alt: "Asesoramiento en reclamaciones bancarias",
      title: "Defensa de tus derechos frente a bancos y productos financieros",
    },
  },
  {
    title: "Compraventas de Empresas",
    description: "Seguridad y asesoramiento en operaciones mercantiles.",
    path: "/compraventas-empresas",
    img: {
      ...empresasImg,
      alt: "Abogado para compraventa de empresas",
      title:
        "Asesoramiento legal en compraventas de empresas con seguridad jurídica",
    },
  },
  {
    title: "Derecho Penal",
    description: "Defensa y acusación en todo tipo de delitos.",
    path: "/derecho-penal",
    img: {
      ...penalImg,
      alt: "Representación legal en derecho penal",
      title: "Defensa y acusación en todo tipo de delitos",
    },
  },
  {
    title: "Nacionalidad y Extranjería",
    description: "Tramitamos tu residencia, visado o nacionalidad.",
    path: "/nacionalidad-extranjeria",
    img: {
      ...extranjeriaImg,
      alt: "Asesoramiento en nacionalidad y extranjería",
      title: "Tramitación de residencia, visado y nacionalidad",
    },
  },
  {
    title: "Violencia de Género",
    description: "Apoyo legal inmediato y protección a las víctimas.",
    path: "/violencia-genero",
    img: {
      ...generoImg,
      alt: "Asesoramiento legal para víctimas de violencia de género",
      title: "Apoyo legal inmediato y protección para víctimas de violencia",
    },
  },
  {
    title: "Despidos",
    description: "Impugnamos despidos y reclamamos tu indemnización.",
    path: "/despidos",
    img: {
      ...despidosImg,
      alt: "Reclamación por despidos injustificados",
      title: "Impugnación de despidos y reclamación de indemnizaciones",
    },
  },
  {
    title: "Incapacidad Permanente",
    description: "Consigue tu pensión por incapacidad laboral.",
    path: "/incapacidad-permanente",
    img: {
      ...incapacidadImg,
      alt: "Abogado especializado en incapacidad permanente",
      title: "Asesoramiento para obtener tu pensión por incapacidad laboral",
    },
  },
  {
    title: "Accidente Laboral",
    description: "Reclamamos las prestaciones que te corresponden.",
    path: "/accidente-laboral",
    img: {
      ...laboralImg,
      alt: "Reclamación por accidente laboral",
      title: "Reclamación de prestaciones tras accidente laboral",
    },
  },
  {
    title: "Complemento de Paternidad o Maternidad",
    description: "Te ayudamos a aumentar tu pensión.",
    path: "/complemento-paternidad-maternidad",
    img: {
      ...paternidadImg,
      alt: "Asesoramiento legal en complemento de pensiones por paternidad/maternidad",
      title:
        "Asistencia legal para aumentar tu pensión por paternidad o maternidad",
    },
  },
];

export const DATA = {
  heroServices: [services[0], services[1], services[2], services[3]],
  services,
  NAVBAR: {
    logo: { src: "", alt: "" },
    menu: [
      // { label: "INICIO", href: "/" },
      // { label: "SERVICIOS", href: "/servicios" },
      // { label: "QUIENES SOMOS", href: "/quienes-somos" },
      { label: "Conócenos", href: "/quienes-somos" },
      { label: "Servicios", href: "/servicios" },
      { label: "¿Eres empresa?", href: "/quienes-somos" },
    ],
  },

  footer: {
    logo: {
      ...logoImg,
      alt: "Logo del Despacho de Abogados Sergio Cruz Chacón",
    },
    areas: [
      { label: "Derecho Familiar", href: "/" },
      { label: "Herencias y sucesiones", href: "/" },
      { label: "Derecho penal", href: "/" },
      { label: "Derecho laboral", href: "/" },
    ],
    menu: [
      { label: "Inicio", href: "/" },
      { label: "Servicios", href: "/servicios" },
      { label: "Quiénes somos", href: "/quienes-somos" },
    ],
    legal: [
      { label: "Aviso Legal", href: "/aviso-legal" },
      { label: "Privacidad", href: "/politica-de-privacidad" },
      { label: "Accesibilidad", href: "/declaracion-de-accesibilidad" },
    ],
  },
  info: {
    phone1: "957 117 185",
    phone2: "666 329 155",
    address: "Calle El Agua, 19, 1º Izq., 14900 Lucena.",
    email: "",
  },
  FAQ: {
    img: {
      ...questionImg,
      alt: "Representación de preguntas frecuentes sobre servicios legales",
    },
    questions: [
      {
        question: "¿Qué servicios ofrece Scruz Abogados en Lucena?",
        answer:
          "En nuestro despacho de abogados en Lucena, estamos especializados en Derecho Civil, Penal, Laboral, Mercantil, Familiar y Bancario. Ofrecemos asesoramiento integral tanto a particulares como a empresas.",
      },
      {
        question: "¿Cómo puede ayudarme un abogado penal en Lucena?",
        answer:
          "Nuestro equipo está capacitado para asistir en casos de denuncias, delitos leves, defensa y acusación particular, garantizando un enfoque personalizado y profesional.",
      },
      {
        question:
          "¿Atendéis a empresas que necesitan asesoramiento legal en Lucena?",
        answer:
          "Sí, somos especialistas en ofrecer soluciones legales a medianas empresas que necesitan apoyo continuo en temas como contratos, despidos y reestructuraciones.",
      },
      {
        question: "¿Para qué podría necesitar un abogado familiar en Lucena?",
        answer:
          "Un abogado familiar puede ayudarte en procesos como divorcios, modificación de medidas, incumplimientos de sentencias, incapacidades legales o cualquier situación relacionada con el ámbito familiar. En Scruz Abogados, ofrecemos un trato cercano y profesional para resolver estos casos en Lucena.",
      },
      {
        question: "¿Pueden gestionar herencias?",
        answer:
          "Sí, en Scruz Abogados contamos con amplia experiencia en la gestión de herencias, desde la redacción de testamentos hasta la tramitación de particiones hereditarias. Nos encargamos de todo el proceso legal para que sea lo más sencillo y claro para nuestros clientes.",
      },
      {
        question: "¿Cómo puede ayudarme un abogado laboral en Lucena?",
        answer:
          "Nuestros abogados laborales en Lucena están especializados en resolver conflictos como despidos, reclamaciones salariales, mediaciones y conciliaciones. Ofrecemos un asesoramiento integral tanto para empleados como para empleadores.",
      },
      {
        question: "¿Asesoran a empresas en Lucena en temas legales?",
        answer:
          "Sí, en Scruz Abogados ofrecemos servicios legales para empresas, incluyendo la redacción de contratos, reclamaciones de deudas, refinanciaciones y reestructuraciones. Nos adaptamos a las necesidades de medianas empresas que buscan un asesoramiento continuo y profesional.",
      },
      {
        question: "¿Cómo puedo contactar con Scruz Abogados?",
        answer:
          "Puedes visitarnos en Calle El Agua, 19, 1º Izq., Lucena, llamarnos al 957 118 195 o escribirnos a través de WhatsApp. Estamos aquí para ayudarte con tus necesidades legales.",
      },
    ],
  },
};
