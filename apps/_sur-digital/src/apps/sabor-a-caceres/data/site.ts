/**
 * Datos de Sabor a Cáceres (Calle General Ezponda 7 · 10003 Cáceres).
 *
 * Solo datos públicos y verificables:
 * - Nombre y coordenadas (39.4756832, -6.3721718) del enlace de Google Maps aportado.
 * - Dirección Calle General Ezponda 7, 10003 Cáceres (Tripadvisor, Cylex).
 * - Teléfono 664 78 11 95 (Cylex).
 *
 * NO se copian fotos, reseñas literales, horarios ni valoraciones de Google Maps.
 */

export const site = {
  siteUrl: 'https://www.sur-digital.com/sabor-a-caceres',
  consultado: '18 de octubre de 2026',
} as const;

export const business = {
  name: 'Sabor a Cáceres',
  shortName: 'Sabor a Cáceres',
  category: 'Restaurante',
  categories: ['Restaurante', 'Restaurante español'],
  streetAddress: 'Calle General Ezponda 7',
  district: 'Centro-Casco Antiguo',
  postalCode: '10003',
  city: 'Cáceres',
  province: 'Cáceres',
  region: 'Extremadura',
  country: 'ES',
  phone: '+34 664 78 11 95',
  latitude: 39.4756832,
  longitude: -6.3721718,
  rating: 0,
  reviewCount: 0,
  site: site.siteUrl,
} as const;

export const mapsUrl =
  'https://www.google.com/maps/place/Sabor+a+C%C3%A1ceres/@39.4756832,-6.3721718,17z/data=!3m1!4b1!4m6!3m5!1s0xd15dfd644fbdfa9:0x61fc3dd215f48269!8m2!3d39.4756832!4d-6.3721718!16s%2Fg%2F11cr_hdqvg?hl=es';

export const reviewsUrl = mapsUrl;

export const phoneHref = 'tel:+34664781195';

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

export const hoursSummary = 'Horario sin confirmar · llama al 664 78 11 95';

export const faqs = [
  {
    question: '¿Dónde está Sabor a Cáceres?',
    answer:
      'En la Calle General Ezponda 7, 10003 Cáceres (Extremadura), coordenadas 39.4756832, -6.3721718. Los botones de esta web abren las indicaciones en Google Maps.',
  },
  {
    question: '¿Cuál es el teléfono?',
    answer: 'El teléfono público es el 664 78 11 95.',
  },
  {
    question: '¿Cuál es el horario?',
    answer:
      'No publicamos un horario porque no se ha verificado con el local. Llama al 664 78 11 95 para confirmar apertura y reservas.',
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
    'Sabor a Cáceres, restaurante en Calle General Ezponda 7, 10003 Cáceres. Web informativa no oficial con ubicación, contacto y mapa.',
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
