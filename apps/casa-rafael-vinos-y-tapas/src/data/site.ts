/**
 * Datos de Casa Rafael Vinos y Tapas (C. Periodista Emilio López, 7 · 11004 Cádiz).
 *
 * Solo datos públicos y verificables:
 * - Nombre y coordenadas (36.5334213, -6.2940197) del enlace de Google Maps aportado.
 * - Web oficial https://casarafaelvinosytapas.com/ (contacto): dirección y teléfonos
 *   676 89 28 88 / 956 80 89 53, reservas solo por teléfono o presencial.
 * - Turismo Cádiz (Ayuntamiento): bar de tapas, centro histórico, especialidad pescado
 *   fresco, email casarafaelvinosytapas@gmail.com, horario Mar-Mié 12:30-16:00,
 *   Jue-Sáb 12:30-16:00 y 21:00-23:00, Dom 12:30-16:00.
 *
 * NO se copian fotos, reseñas literales ni valoraciones de Google Maps.
 */

export const site = {
  siteUrl: 'https://casa-rafael-vinos-y-tapas.vercel.app',
  consultado: '18 de octubre de 2026',
} as const;

export const business = {
  name: 'Casa Rafael Vinos y Tapas',
  shortName: 'Casa Rafael',
  category: 'Bar de tapas',
  categories: ['Bar de tapas', 'Vinos', 'Pescado fresco'],
  streetAddress: 'C. Periodista Emilio López, 7',
  district: 'Centro histórico',
  postalCode: '11004',
  city: 'Cádiz',
  province: 'Cádiz',
  region: 'Andalucía',
  country: 'ES',
  phone: '+34 676 89 28 88',
  phoneSecondary: '+34 956 80 89 53',
  email: 'casarafaelvinosytapas@gmail.com',
  latitude: 36.5334213,
  longitude: -6.2940197,
  rating: 0,
  reviewCount: 0,
  site: site.siteUrl,
  officialWeb: 'https://casarafaelvinosytapas.com/',
} as const;

export const mapsUrl =
  'https://www.google.com/maps/place/Casa+Rafael+vinos+y+tapas/@36.5334213,-6.2940197,17z/data=!3m1!4b1!4m6!3m5!1s0xd0dd16a97716805:0x43a80ffe5877687d!8m2!3d36.5334213!4d-6.2940197!16s%2Fg%2F11ffv431pj?authuser=0&hl=es&entry=ttu';

export const reviewsUrl = mapsUrl;

export const officialWebUrl = business.officialWeb;

export const instagramUrl = 'https://www.instagram.com/casarafaelvinosytapas/';

export const facebookUrl = 'https://www.facebook.com/people/Casa-Rafael-Vinos-y-Tapas/61572981884539/';

export const phoneHref = 'tel:+34676892888';

export const phoneSecondaryHref = 'tel:+34956808953';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario publicado por Turismo Cádiz (Ayuntamiento de Cádiz).
 * Lunes: cerrado (no figura en la tabla oficial).
 */
export const hours = [
  { day: 'Lunes', service: 'Cerrado', shifts: [], dayOfWeek: 'Monday' },
  { day: 'Martes', service: '12:30 – 16:00', shifts: [{ open: '12:30', close: '16:00' }], dayOfWeek: 'Tuesday' },
  { day: 'Miércoles', service: '12:30 – 16:00', shifts: [{ open: '12:30', close: '16:00' }], dayOfWeek: 'Wednesday' },
  { day: 'Jueves', service: '12:30 – 16:00 · 21:00 – 23:00', shifts: [{ open: '12:30', close: '16:00' }, { open: '21:00', close: '23:00' }], dayOfWeek: 'Thursday' },
  { day: 'Viernes', service: '12:30 – 16:00 · 21:00 – 23:00', shifts: [{ open: '12:30', close: '16:00' }, { open: '21:00', close: '23:00' }], dayOfWeek: 'Friday' },
  { day: 'Sábado', service: '12:30 – 16:00 · 21:00 – 23:00', shifts: [{ open: '12:30', close: '16:00' }, { open: '21:00', close: '23:00' }], dayOfWeek: 'Saturday' },
  { day: 'Domingo', service: '12:30 – 16:00', shifts: [{ open: '12:30', close: '16:00' }], dayOfWeek: 'Sunday' },
] as const;

export const hoursSummary = 'Mar-Dom 12:30-16:00 + Jue-Sáb noches · Lunes cerrado';

export const hoursSource = 'Turismo Cádiz (Ayuntamiento)';

export const faqs = [
  {
    question: '¿Dónde está Casa Rafael?',
    answer:
      'En la C. Periodista Emilio López, 7, 11004 Cádiz (centro histórico), coordenadas 36.5334213, -6.2940197. Los botones de esta web abren las indicaciones en Google Maps.',
  },
  {
    question: '¿Cómo reservo mesa?',
    answer:
      'Según su web oficial, solo por teléfono (676 89 28 88 / 956 80 89 53) o presencialmente. Piden no reservar por otras webs ni redes sociales para evitar fraudes.',
  },
  {
    question: '¿Cuál es el horario?',
    answer:
      'Según Turismo Cádiz: martes y miércoles 12:30-16:00; jueves a sábado 12:30-16:00 y 21:00-23:00; domingo 12:30-16:00; lunes cerrado. Confirma por teléfono en festivos.',
  },
  {
    question: '¿Qué tipo de comida sirve?',
    answer:
      'Bar de tapas de cocina tradicional gaditana, especialidad en pescado fresco, con selección de vinos. La carta cambia: consúltala en su web oficial casarafaelvinosytapas.com.',
  },
  {
    question: '¿Dónde puedo ver fotos y opiniones?',
    answer:
      'En la ficha del local en Google Maps y en su Instagram @casarafaelvinosytapas, enlazados desde esta web. Aquí solo se usarán fotos propias con permiso.',
  },
  {
    question: '¿De quién es esta web?',
    answer:
      'Es una web informativa no oficial, creada con datos públicos de ubicación y contacto. La web oficial es casarafaelvinosytapas.com. Esta web no vende ni reserva nada.',
  },
] as const;

export const restaurantSchema = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  '@id': `${site.siteUrl}/#restaurante`,
  name: business.name,
  description:
    'Casa Rafael Vinos y Tapas, bar de tapas de pescado fresco en C. Periodista Emilio López 7, 11004 Cádiz. Web informativa no oficial con ubicación, contacto y mapa.',
  url: `${site.siteUrl}/`,
  image: `${site.siteUrl}/og.jpg`,
  telephone: business.phone,
  email: business.email,
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
  servesCuisine: ['Gaditana', 'Andaluza', 'Tapas', 'Pescado'],
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
