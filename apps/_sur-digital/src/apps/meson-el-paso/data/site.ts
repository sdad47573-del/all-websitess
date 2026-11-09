/**
 * Datos de Mesón El Paso (Ronda de Muñoz Torrero 9 · 10910 Malpartida de Cáceres).
 *
 * Solo datos públicos y verificables:
 * - Nombre y coordenadas (39.4488913, -6.5065381) del enlace de Google Maps aportado.
 * - Dirección Ronda de Muñoz Torrero 9, 10910 Malpartida de Cáceres (Facebook, toppingsandsalads).
 * - Teléfono 644 84 62 08 (turismo.malpartidadecaceres.es y Facebook oficial).
 * - Horario Lun-Dom 07:00-01:00 (turismo.malpartidadecaceres.es).
 *
 * NO se copian fotos, reseñas literales ni valoraciones de Google Maps.
 */

export const site = {
  siteUrl: 'https://www.sur-digital.com/meson-el-paso',
  consultado: '18 de octubre de 2026',
} as const;

export const business = {
  name: 'Mesón El Paso',
  shortName: 'El Paso',
  category: 'Mesón',
  categories: ['Mesón', 'Restaurante español'],
  streetAddress: 'Ronda de Muñoz Torrero 9',
  district: '',
  postalCode: '10910',
  city: 'Malpartida de Cáceres',
  province: 'Cáceres',
  region: 'Extremadura',
  country: 'ES',
  phone: '+34 644 84 62 08',
  latitude: 39.4488913,
  longitude: -6.5065381,
  rating: 0,
  reviewCount: 0,
  site: site.siteUrl,
} as const;

export const mapsUrl =
  'https://www.google.com/maps/place/Mes%C3%B3n+El+Paso/@39.4488913,-6.5065381,17z/data=!3m1!4b1!4m6!3m5!1s0xd1673706c4a987f:0x4773a27368d6eb06!8m2!3d39.4488913!4d-6.5065381!16s%2Fg%2F11h1qfwgyl?hl=es';

export const reviewsUrl = mapsUrl;

export const phoneHref = 'tel:+34644846208';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

export const hours = [
  { day: 'Lunes', service: '07:00 – 01:00', shifts: [{ open: '07:00', close: '01:00' }], dayOfWeek: 'Monday' },
  { day: 'Martes', service: '07:00 – 01:00', shifts: [{ open: '07:00', close: '01:00' }], dayOfWeek: 'Tuesday' },
  { day: 'Miércoles', service: '07:00 – 01:00', shifts: [{ open: '07:00', close: '01:00' }], dayOfWeek: 'Wednesday' },
  { day: 'Jueves', service: '07:00 – 01:00', shifts: [{ open: '07:00', close: '01:00' }], dayOfWeek: 'Thursday' },
  { day: 'Viernes', service: '07:00 – 01:00', shifts: [{ open: '07:00', close: '01:00' }], dayOfWeek: 'Friday' },
  { day: 'Sábado', service: '07:00 – 01:00', shifts: [{ open: '07:00', close: '01:00' }], dayOfWeek: 'Saturday' },
  { day: 'Domingo', service: '07:00 – 01:00', shifts: [{ open: '07:00', close: '01:00' }], dayOfWeek: 'Sunday' },
] as const;

export const hoursSummary = 'Lun–dom 7:00–1:00';

export const faqs = [
  {
    question: '¿Dónde está Mesón El Paso?',
    answer:
      'En la Ronda de Muñoz Torrero 9, 10910 Malpartida de Cáceres (Extremadura), coordenadas 39.4488913, -6.5065381. Los botones de esta web abren las indicaciones en Google Maps.',
  },
  {
    question: '¿Cuál es el teléfono?',
    answer: 'El teléfono publicado por el turismo municipal es el 644 84 62 08.',
  },
  {
    question: '¿Cuál es el horario?',
    answer:
      'Según el portal de turismo municipal: de lunes a domingo de 07:00 a 01:00. Conviene confirmar por teléfono.',
  },
  {
    question: '¿Dónde puedo ver fotos y opiniones?',
    answer:
      'En la ficha del mesón en Google Maps, enlazada desde esta web. Aquí solo se usarán fotos propias con permiso.',
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
    'Mesón El Paso en Ronda de Muñoz Torrero 9, 10910 Malpartida de Cáceres. Web informativa no oficial con ubicación, contacto y mapa.',
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
  openingHoursSpecification: hours.flatMap((item) =>
    item.shifts.map((shift) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: item.dayOfWeek,
      opens: shift.open,
      closes: shift.close,
    })),
  ),
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
