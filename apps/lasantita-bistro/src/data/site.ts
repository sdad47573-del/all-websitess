/**
 * Datos de Lasantita bistró (Av. de la Sanidad Pública 9 · 11007 Cádiz).
 *
 * Solo datos públicos y verificables:
 * - Nombre y coordenadas (36.5186323, -6.2787987) del enlace de Google Maps aportado.
 * - Dirección Av. de la Sanidad Pública 9, 11007 Cádiz (KitKing, Wanderlog).
 * - Teléfono 668 56 75 96 (KitKing).
 *
 * NO se copian fotos, reseñas literales, horarios ni valoraciones de Google Maps.
 */

export const site = {
  siteUrl: 'https://lasantita-bistro.vercel.app',
  consultado: '18 de octubre de 2026',
} as const;

export const business = {
  name: 'Lasantita bistró',
  shortName: 'Lasantita',
  category: 'Bistró',
  categories: ['Bistró', 'Bar de tapas'],
  streetAddress: 'Av. de la Sanidad Pública 9',
  district: 'San Severiano',
  postalCode: '11007',
  city: 'Cádiz',
  province: 'Cádiz',
  region: 'Andalucía',
  country: 'ES',
  phone: '+34 668 56 75 96',
  latitude: 36.5186323,
  longitude: -6.2787987,
  rating: 0,
  reviewCount: 0,
  site: site.siteUrl,
} as const;

export const mapsUrl =
  'https://www.google.com/maps/place/Lasantita+bistr%C3%B3/@36.5186323,-6.2787987,17z/data=!3m1!4b1!4m6!3m5!1s0xd0dd346a15a2cbd:0x6600a65238840562!8m2!3d36.5186323!4d-6.2787987!16s%2Fg%2F11j7t4nj88?hl=es';

export const reviewsUrl = mapsUrl;

export const phoneHref = 'tel:+34668567596';

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

export const hoursSummary = 'Horario sin confirmar · llama al 668 56 75 96';

export const faqs = [
  {
    question: '¿Dónde está Lasantita?',
    answer:
      'En la Av. de la Sanidad Pública 9, 11007 Cádiz (zona San Severiano), coordenadas 36.5186323, -6.2787987. Los botones de esta web abren las indicaciones en Google Maps.',
  },
  {
    question: '¿Cuál es el teléfono?',
    answer: 'El teléfono público es el 668 56 75 96.',
  },
  {
    question: '¿Cuál es el horario?',
    answer:
      'No publicamos un horario porque no se ha verificado con el local. Llama al 668 56 75 96 para confirmar apertura.',
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
    'Lasantita bistró, bistró en Av. de la Sanidad Pública 9, 11007 Cádiz. Web informativa no oficial con ubicación, contacto y mapa.',
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
