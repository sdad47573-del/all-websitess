import { SERVICE_TYPES } from "./pricing";

/** Prueba social para la landing */
export const TESTIMONIALS = [
  {
    name: "Marta G.",
    city: "Madrid",
    text: "Reservé un jueves por la noche y el sábado tenía mi casa impecable. La calculadora me ahorró tres llamadas pidiendo presupuesto.",
    rating: 5,
    service: "Limpieza a fondo",
  },
  {
    name: "Jordi R.",
    city: "Barcelona",
    text: "Gestiono dos pisos de Airbnb desde el panel. Veo los turnos, el precio y el estado de cada limpieza sin abrir el móvil tres veces.",
    rating: 5,
    service: "Airbnb / turnos",
  },
  {
    name: "Lucía F.",
    city: "Valencia",
    text: "El equipo que vino era el mismo que el mes anterior. Puntuamos cada servicio y se nota que leen las valoraciones.",
    rating: 4,
    service: "Limpieza de mantenimiento",
  },
  {
    name: "Andrés M.",
    city: "Sevilla",
    text: "Fin de obra espectacular: pegatinas, polvo de yeso y pintura fuera en una mañana. Factura y garantía por escrito.",
    rating: 5,
    service: "Fin de obra / mudanza",
  },
  {
    name: "Carmen P.",
    city: "Zaragoza",
    text: "Con mascotas y alergias, el pack ecológico fue la clave. Productos sin olores fuertes y mi gato tranquilo.",
    rating: 5,
    service: "Pack ecológico",
  },
  {
    name: "Diego S.",
    city: "Bilbao",
    text: "Cancelé una cita desde el panel en 10 segundos, sin llamadas ni justificaciones. Recorrí la fecha en dos clics.",
    rating: 5,
    service: "Limpieza de mantenimiento",
  },
];

export const FAQS = [
  {
    q: "¿Cómo sé cuánto costará mi limpieza?",
    a: "Usa la calculadora de la página principal: eliges tipo de servicio, tamaño de vivienda, extras y frecuencia. El precio que ves es el que pagas: sin sorpresas ni recargos de última hora.",
  },
  {
    q: "¿Cuándo pago el servicio?",
    a: "Como quieras: puedes pagar online con tarjeta al reservar (Stripe, conexión cifrada) o el día del servicio. Sin pagos por adelantado obligatorios y con factura siempre disponible.",
  },
  {
    q: "¿Recibo confirmación por email?",
    a: "Sí: al reservar recibes la confirmación con todos los detalles, al cancelar la anulación, y tras el servicio te pedimos tu opinión. Sin spam, prometido.",
  },
  {
    q: "¿El equipo trae productos y material?",
    a: "Sí. Todos los servicios incluyen productos profesionales, microfibras y aspiradora. Si prefieres que usemos tus productos (o el pack ecológico), indícalo al reservar.",
  },
  {
    q: "¿Puedo cambiar o cancelar mi reserva?",
    a: "Claro. Desde tu panel puedes cancelar o mover la cita hasta 24 h antes sin coste. Las cancelaciones con menos de 24 h tienen un cargo del 50 % del servicio.",
  },
  {
    q: "¿Qué pasa si algo no queda bien?",
    a: "Tienes 48 h para avisarnos. Si algún punto no cumple el checklist de calidad, volvemos a limpiarlo gratis. Es nuestra Garantía Brillanteza.",
  },
  {
    q: "¿Las personas que limpian están aseguradas?",
    a: "Todos los profesionales están dados de alta en la Seguridad Social y contamos con seguro de responsabilidad civil de 300.000 € por servicio.",
  },
  {
    q: "¿Trabajáis con oficinas y locales?",
    a: "Sí, con turnos de mañana, tarde y noche. Puedes pedir presupuesto en la calculadora eligiendo «Oficinas y locales» y ajustar la frecuencia.",
  },
];

/** Comparativa honesta frente a la competencia (inspirada en Domestia, Helping, etc.) */
export const COMPARISON = {
  us: "Brillanteza",
  usHighlight: true,
  columns: ["Brillanteza", "Plataformas de crédito/horas", "Agencias tradicionales"],
  rows: [
    {
      feature: "Precio cerrado al reservar",
      us: true,
      others: ["Cotización manual", false] as const,
      traditional: false,
    },
    {
      feature: "Calculadora instantánea en web",
      us: true,
      others: [false, false] as const,
      traditional: false,
    },
    {
      feature: "Reserva online 24/7",
      us: true,
      others: [true, false] as const,
      traditional: false,
    },
    {
      feature: "Profesionales dados de alta",
      us: true,
      others: [true, false] as const,
      traditional: true,
    },
    {
      feature: "Garantía de re-servicio 48 h",
      us: true,
      others: [false, false] as const,
      traditional: [true, false] as const,
    },
    {
      feature: "Panel con historial y valoraciones",
      us: true,
      others: [false, false] as const,
      traditional: false,
    },
    {
      feature: "Gestión de pisos turísticos",
      us: true,
      others: [false, false] as const,
      traditional: [true, false] as const,
    },
    {
      feature: "Programa de referidos con recompensa",
      us: true,
      others: [true, "Solo descuentos captación"] as const,
      traditional: false,
    },
    {
      feature: "Presupuesto B2B online sin llamada",
      us: true,
      others: [false, false] as const,
      traditional: ["Requiere visita comercial", false] as const,
    },
    {
      feature: "Timeline del servicio en tiempo real",
      us: true,
      others: [false, false] as const,
      traditional: false,
    },
    {
      feature: "Compromiso ecológico y empleo inclusivo",
      us: true,
      others: ["Parcial", false] as const,
      traditional: ["Parcial", "Parcial"] as const,
    },
    {
      feature: "Reserva por momentos de vida (presets)",
      us: true,
      others: [false, false] as const,
      traditional: false,
    },
    {
      feature: "Comprobador de cobertura por código postal",
      us: true,
      others: ["En el alta", false] as const,
      traditional: ["Contacto", false] as const,
    },
    {
      feature: "Tarjetas regalo con saldo",
      us: true,
      others: [false, false] as const,
      traditional: false,
    },
    {
      feature: "Repetir limpieza en un clic",
      us: true,
      others: [true, false] as const,
      traditional: false,
    },
    {
      feature: "Panel de operativa para el equipo",
      us: true,
      others: [false, false] as const,
      traditional: ["ERP externo", "ERP externo"] as const,
    },
    {
      feature: "Pago online con tarjeta (Stripe)",
      us: true,
      others: [true, false] as const,
      traditional: ["Transferencia", false] as const,
    },
    {
      feature: "Emails automáticos (confirmación y recordatorio)",
      us: true,
      others: [true, false] as const,
      traditional: ["Llamada previa", false] as const,
    },
    {
      feature: "Programa de fidelidad (6ª al 50 %)",
      us: true,
      others: [false, false] as const,
      traditional: ["Trato personal", false] as const,
    },
  ],
};

export const STATS = [
  { value: "12.400+", label: "limpiezas completadas" },
  { value: "4,9/5", label: "valoración media" },
  { value: "24 h", label: "garantía de respuesta" },
  { value: "300.000 €", label: "seguro de RC por servicio" },
];

export const SERVICE_LIST = SERVICE_TYPES;
