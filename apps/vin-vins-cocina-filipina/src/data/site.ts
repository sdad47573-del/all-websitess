/**
 * Datos de Vin Vin's Cocina Filipina (Callejones de Cardoso, 18 · 11002 Cádiz).
 *
 * Solo datos públicos y verificables:
 * - Nombre y coordenadas (36.5300329, -6.299703) del enlace de Google Maps aportado.
 * - Cosasdecome Cádiz: Callejones de Cardoso 18, teléfono 956 26 37 26, abierto por
 *   Arvin Siapo y Angélica Primoy, trasladado el 24-10-2022, platos para llevar,
 *   no admiten reservas, almuerzos y cenas de lunes a sábado (actualizado 01-02-2024).
 * - Horario posterior variable según su Facebook: se indica confirmar por teléfono.
 *
 * NO se copian fotos, reseñas literales ni valoraciones de Google Maps.
 */

export const site = {
  siteUrl: 'https://vin-vins-cocina-filipina.vercel.app',
  consultado: '18 de octubre de 2026',
} as const;

export const business = {
  name: "Vin Vin's Cocina Filipina",
  shortName: "Vin Vin's",
  category: 'Restaurante filipino',
  categories: ['Cocina filipina', 'Comida para llevar', 'Mercado de Abastos'],
  streetAddress: 'Callejones de Cardoso, 18',
  district: 'La Viña / Mercado de Abastos',
  postalCode: '11002',
  city: 'Cádiz',
  province: 'Cádiz',
  region: 'Andalucía',
  country: 'ES',
  phone: '+34 956 26 37 26',
  latitude: 36.5300329,
  longitude: -6.299703,
  rating: 0,
  reviewCount: 0,
  site: site.siteUrl,
} as const;

export const mapsUrl =
  'https://www.google.com/maps/place/Restaurante+Vin+Vin%27s+Cocina+Filipina/@36.5300329,-6.299703,17z/data=!3m1!4b1!4m6!3m5!1s0xd0dd3b4d660e62d:0xa251f9252aa81efa!8m2!3d36.5300329!4d-6.299703!16s%2Fg%2F11fmypn7f5?authuser=0&hl=es&entry=ttu';

export const reviewsUrl = mapsUrl;

export const facebookUrl = 'https://www.facebook.com/vinvinscocinafilipina/';

export const phoneHref = 'tel:+34956263726';

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

export const hoursSummary = 'Lun-Sáb almuerzos y cenas · confirmar por teléfono';

export const hoursSource = 'Cosasdecome + Facebook del local';

export const faqs = [
  {
    question: '¿Dónde está Vin Vin’s?',
    answer:
      'En Callejones de Cardoso, 18, 11002 Cádiz (junto al Mercado de Abastos), coordenadas 36.5300329, -6.299703. Los botones de esta web abren las indicaciones en Google Maps.',
  },
  {
    question: '¿Cuál es el teléfono?',
    answer: 'El teléfono publicado es el 956 26 37 26.',
  },
  {
    question: '¿Se puede reservar?',
    answer:
      'Según Cosasdecome, no admiten reservas. Ve directamente o llama al 956 26 37 26 para consultar.',
  },
  {
    question: '¿Cuál es el horario?',
    answer:
      'Cosasdecome indica almuerzos y cenas de lunes a sábado, pero su Facebook avisa de cambios por conciliación familiar. Llama al 956 26 37 26 antes de ir.',
  },
  {
    question: '¿Qué tipo de comida sirve?',
    answer:
      'Cocina filipina de Arvin Siapo y Angélica Primoy: lumpia, Dinuguan con arroz, combinados y menús, también para llevar.',
  },
  {
    question: '¿Dónde puedo ver fotos y opiniones?',
    answer:
      'En la ficha del local en Google Maps y en su Facebook Vin Vin’s Cocina Filipina, enlazados desde esta web. Aquí solo se usarán fotos propias con permiso.',
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
  sameAs: ['https://www.facebook.com/vinvinscocinafilipina/'],
  '@id': `${site.siteUrl}/#restaurante`,
  name: business.name,
  description:
    "Vin Vin's Cocina Filipina, cocina filipina en Callejones de Cardoso 18, 11002 Cádiz. Web informativa no oficial con ubicación, contacto y mapa.",
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
  servesCuisine: ['Filipina'],
  acceptsReservations: false,
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
