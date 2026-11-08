/**
 * Datos de Restaurante Gerasimo Palacios Blázquez (Calle Colombia 5 · 10005 Cáceres).
 *
 * Solo con datos públicos y verificables:
 * - Nombre y coordenadas (39.4591581, -6.3724961) del enlace de Google Maps aportado.
 * - Dirección Calle Colombia 5, 10005 Cáceres y teléfono 927 22 37 08 de directorios públicos.
 *
 * NO se copian fotos, reseñas literales, horarios ni valoraciones de Google Maps:
 * las fotos tienen derechos de sus autores y las Condiciones de Google prohíben extraerlas.
 * Para añadir fotos propias, colócalas en `src/assets/fotos/` (ver README).
 */

export const site = {
  siteUrl: 'https://www.sur-digital.com/restaurante-gerasimo-palacios-blazquez',
  consultado: '18 de octubre de 2026',
} as const;

export const business = {
  name: 'Restaurante Gerasimo Palacios Blázquez',
  shortName: 'Gerasimo',
  category: 'Restaurante',
  categories: ['Restaurante', 'Bar'],
  streetAddress: 'Calle Colombia 5',
  district: '',
  postalCode: '10005',
  city: 'Cáceres',
  province: 'Cáceres',
  region: 'Extremadura',
  country: 'ES',
  phone: '+34 927 22 37 08',
  latitude: 39.4591581,
  longitude: -6.3724961,
  rating: 0,
  reviewCount: 0,
  site: site.siteUrl,
} as const;

export const mapsUrl =
  'https://www.google.com/maps/place/Restaurante+Gerasimo+Palacios+Bl%C3%A1zquez/@39.4591581,-6.3724961,17z/data=!3m1!4b1!4m6!3m5!1s0xd15dfc968b11ccf:0x9c0240cd9673f3b!8m2!3d39.4591581!4d-6.3724961!16s%2Fg%2F1tdvq_m2?hl=es';

export const reviewsUrl = mapsUrl;

export const phoneHref = 'tel:+34927223708';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

export const hours = [
  { day: 'Lunes', service: 'Consultar por teléfono', shifts: [], dayOfWeek: 'Monday' },
  { day: 'Martes', service: 'Consultar por teléfono', shifts: [], dayOfWeek: 'Tuesday' },
  { day: 'Miércoles', service: 'Consultar por teléfono', shifts: [], dayOfWeek: 'Wednesday' },
  { day: 'Jueves', service: 'Consultar por teléfono', shifts: [], dayOfWeek: 'Thursday' },
  { day: 'Viernes', service: 'Consultar por teléfono', shifts: [], dayOfWeek: 'Friday' },
  { day: 'Sábado', service: 'Consultar por teléfono', shifts: [], dayOfWeek: 'Saturday' },
  { day: 'Domingo', service: 'Consultar por teléfono', shifts: [], dayOfWeek: 'Sunday' },
] as const;

export const hoursSummary = 'Horario sin confirmar · llama al 927 22 37 08';

export const faqs = [
  {
    question: '¿Dónde está el Restaurante Gerasimo Palacios Blázquez?',
    answer:
      'En la Calle Colombia 5, 10005 Cáceres (Extremadura), coordenadas 39.4591581, -6.3724961. Los botones de esta web abren las indicaciones en Google Maps.',
  },
  {
    question: '¿Cuál es el teléfono?',
    answer: 'El teléfono público es el 927 22 37 08.',
  },
  {
    question: '¿Cuál es el horario?',
    answer:
      'No publicamos un horario porque no se ha verificado con el local. Llama al 927 22 37 08 para confirmar apertura y reservas.',
  },
  {
    question: '¿Dónde puedo ver fotos y opiniones?',
    answer:
      'En la ficha del restaurante en Google Maps, enlazada desde esta web. Aquí solo se usarán fotos propias con permiso.',
  },
  {
    question: '¿De quién es esta web?',
    answer:
      'Es una web informativa no oficial, creada con datos públicos de ubicación y contacto. No vende ni reserva nada.',
  },
] as const;

export const restaurantSchema = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  acceptsReservations: true,
  '@id': `${site.siteUrl}/#restaurante`,
  name: business.name,
  description:
    'Restaurante en Calle Colombia 5, 10005 Cáceres. Web informativa no oficial con ubicación, contacto y mapa.',
  url: `${site.siteUrl}/`,
  image: `${site.siteUrl}/og.jpg`,
  telephone: business.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: business.streetAddress,
    addressLocality: business.city,
    addressRegion: business.province,
    postalCode: business.postalCode,
    addressCountry: business.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: business.latitude,
    longitude: business.longitude,
  },
  hasMap: mapsUrl,
};

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${site.siteUrl}/#faq`,
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
};

export const LEGAL = {
  razonSocial: '[pendiente de completar]',
  nif: '[pendiente de completar]',
  email: '[pendiente de completar]',
} as const;
