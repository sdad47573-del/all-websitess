/**
 * Datos de Taberna El tío de la tiza (Plaza El tío de la tiza, 12 · 11002 Cádiz).
 *
 * Solo datos públicos y verificables:
 * - Nombre y coordenadas (36.5305917, -6.3020351) del enlace de Google Maps aportado.
 * - Turismo Cádiz (Ayuntamiento): taberna-mesón, Barrio La Viña, Plaza El tío de la
 *   tiza 12, teléfono 956 21 20 82, fundada en 1979, caballas asadas y caracoles,
 *   adobo, chocos y tortillitas, pago en efectivo, horario Lun-Dom 13:00-16:30 y
 *   19:30-24:00, especialidad pescado, Instagram tabernaeltiodelatiza.
 *
 * NO se copian fotos, reseñas literales ni valoraciones de Google Maps.
 */

export const site = {
  siteUrl: 'https://www.sur-digital.com/taberna-el-tio-de-la-tiza',
  consultado: '18 de octubre de 2026',
} as const;

export const business = {
  name: 'Taberna El tío de la tiza',
  shortName: 'El tío de la tiza',
  category: 'Taberna-mesón',
  categories: ['Taberna-mesón', 'Pescaíto frito', 'Barrio La Viña'],
  streetAddress: 'Plaza El tío de la tiza, 12',
  district: 'Barrio La Viña',
  postalCode: '11002',
  city: 'Cádiz',
  province: 'Cádiz',
  region: 'Andalucía',
  country: 'ES',
  phone: '+34 956 21 20 82',
  founded: 1979,
  latitude: 36.5305917,
  longitude: -6.3020351,
  rating: 0,
  reviewCount: 0,
  site: site.siteUrl,
} as const;

export const mapsUrl =
  'https://www.google.com/maps/place/Taberna+El+t%C3%ADo+de+La+Tiza/@36.5305917,-6.3020351,17z/data=!3m1!4b1!4m6!3m5!1s0xd0dd15fe8c85579:0xa9f5a9777bb8393a!8m2!3d36.5305917!4d-6.3020351!16s%2Fg%2F11b7w1fpmp?authuser=0&hl=es&entry=ttu';

export const reviewsUrl = mapsUrl;

export const instagramUrl = 'https://www.instagram.com/tabernaeltiodelatiza';

export const phoneHref = 'tel:+34956212082';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

export const hours = [
  { day: 'Lunes', service: '13:00 – 16:30 · 19:30 – 24:00', shifts: [{ open: '13:00', close: '16:30' }, { open: '19:30', close: '24:00' }], dayOfWeek: 'Monday' },
  { day: 'Martes', service: '13:00 – 16:30 · 19:30 – 24:00', shifts: [{ open: '13:00', close: '16:30' }, { open: '19:30', close: '24:00' }], dayOfWeek: 'Tuesday' },
  { day: 'Miércoles', service: '13:00 – 16:30 · 19:30 – 24:00', shifts: [{ open: '13:00', close: '16:30' }, { open: '19:30', close: '24:00' }], dayOfWeek: 'Wednesday' },
  { day: 'Jueves', service: '13:00 – 16:30 · 19:30 – 24:00', shifts: [{ open: '13:00', close: '16:30' }, { open: '19:30', close: '24:00' }], dayOfWeek: 'Thursday' },
  { day: 'Viernes', service: '13:00 – 16:30 · 19:30 – 24:00', shifts: [{ open: '13:00', close: '16:30' }, { open: '19:30', close: '24:00' }], dayOfWeek: 'Friday' },
  { day: 'Sábado', service: '13:00 – 16:30 · 19:30 – 24:00', shifts: [{ open: '13:00', close: '16:30' }, { open: '19:30', close: '24:00' }], dayOfWeek: 'Saturday' },
  { day: 'Domingo', service: '13:00 – 16:30 · 19:30 – 24:00', shifts: [{ open: '13:00', close: '16:30' }, { open: '19:30', close: '24:00' }], dayOfWeek: 'Sunday' },
] as const;

export const hoursSummary = 'Lun-Dom 13:00-16:30 y 19:30-24:00';

export const hoursSource = 'Turismo Cádiz (Ayuntamiento)';

export const faqs = [
  {
    question: '¿Dónde está El tío de la tiza?',
    answer:
      'En la Plaza El tío de la tiza, 12, 11002 Cádiz (Barrio La Viña), coordenadas 36.5305917, -6.3020351. Los botones de esta web abren las indicaciones en Google Maps.',
  },
  {
    question: '¿Cuál es el teléfono para reservar?',
    answer: 'El teléfono publicado por Turismo Cádiz es el 956 21 20 82.',
  },
  {
    question: '¿Cuál es el horario?',
    answer:
      'Según Turismo Cádiz: de lunes a domingo de 13:00 a 16:30 y de 19:30 a 24:00. Confirma por teléfono en festivos.',
  },
  {
    question: '¿Qué tipo de comida sirve?',
    answer:
      'Taberna-mesón fundada en 1979, famosa por caballas asadas y caracoles, además de adobo, chocos y tortillitas de camarones. Especialidad: pescado. Pago en efectivo.',
  },
  {
    question: '¿Dónde puedo ver fotos y opiniones?',
    answer:
      'En la ficha del local en Google Maps y en su Instagram @tabernaeltiodelatiza, enlazados desde esta web. Aquí solo se usarán fotos propias con permiso.',
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
  sameAs: ['https://www.instagram.com/tabernaeltiodelatiza'],
  '@id': `${site.siteUrl}/#restaurante`,
  name: business.name,
  description:
    'Taberna El tío de la tiza, taberna-mesón desde 1979 en Plaza El tío de la tiza 12, La Viña, Cádiz. Caballas asadas, caracoles y pescaíto. Web informativa no oficial.',
  url: `${site.siteUrl}/`,
  image: `${site.siteUrl}/og.jpg`,
  telephone: business.phone,
  foundingDate: String(business.founded),
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
  servesCuisine: ['Gaditana', 'Andaluza', 'Pescaíto'],
  acceptsReservations: true,
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
