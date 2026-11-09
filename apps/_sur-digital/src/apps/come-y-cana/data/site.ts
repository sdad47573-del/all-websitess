/**
 * Datos de Come y Caña (Calle Padre Bayle 29 · 10003 Cáceres).
 *
 * Solo datos públicos y verificables:
 * - Nombre y coordenadas (39.4792874, -6.3762114) del enlace de Google Maps aportado.
 * - Dirección Calle Padre Bayle 29, 10003 Cáceres (toppingsandsalads, infobel).
 * - Teléfono 685 11 10 36 (toppingsandsalads).
 *
 * NO se copian fotos, reseñas literales, horarios ni valoraciones de Google Maps.
 */

export const site = {
  siteUrl: 'https://www.sur-digital.com/come-y-cana',
  consultado: '18 de octubre de 2026',
} as const;

export const business = {
  name: 'Come y Caña',
  shortName: 'Come y Caña',
  category: 'Bar restaurante',
  categories: ['Bar restaurante', 'Restaurante de desayunos'],
  streetAddress: 'Calle Padre Bayle 29',
  district: 'Centro-Casco Antiguo',
  postalCode: '10003',
  city: 'Cáceres',
  province: 'Cáceres',
  region: 'Extremadura',
  country: 'ES',
  phone: '+34 685 11 10 36',
  latitude: 39.4792874,
  longitude: -6.3762114,
  rating: 0,
  reviewCount: 0,
  site: site.siteUrl,
} as const;

export const mapsUrl =
  'https://www.google.com/maps/place/Come+Y+Ca%C3%B1a/@39.4792874,-6.3762114,17z/data=!3m1!4b1!4m6!3m5!1s0xd15e07785b2c933:0x97d19d02f78fc92d!8m2!3d39.4792874!4d-6.3762114!16s%2Fg%2F11dynbzgl3?hl=es';

export const reviewsUrl = mapsUrl;

export const phoneHref = 'tel:+34685111036';

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

export const hoursSummary = 'Horario sin confirmar · llama al 685 11 10 36';

export const faqs = [
  {
    question: '¿Dónde está Come y Caña?',
    answer:
      'En la Calle Padre Bayle 29, 10003 Cáceres (Extremadura), coordenadas 39.4792874, -6.3762114. Los botones de esta web abren las indicaciones en Google Maps.',
  },
  {
    question: '¿Cuál es el teléfono?',
    answer: 'El teléfono público es el 685 11 10 36.',
  },
  {
    question: '¿Cuál es el horario?',
    answer:
      'No publicamos un horario porque no se ha verificado con el local. Llama al 685 11 10 36 para confirmar apertura.',
  },
  {
    question: '¿Dónde puedo ver fotos y opiniones?',
    answer:
      'En la ficha del local en Google Maps, enlazada desde esta web. Aquí solo se usarán fotos propias con permiso.',
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
  '@id': `${site.siteUrl}/#restaurante`,
  name: business.name,
  description:
    'Come y Caña, bar restaurante en Calle Padre Bayle 29, 10003 Cáceres. Web informativa no oficial con ubicación, contacto y mapa.',
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
