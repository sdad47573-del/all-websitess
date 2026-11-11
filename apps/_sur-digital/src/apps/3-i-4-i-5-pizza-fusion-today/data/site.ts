/**
 * Datos de 3 I 4 I 5 Pizza Fusion Today (Carrer Sant Pere, 34 · 03590 Altea, Alicante).
 *
 * Solo datos públicos y verificables:
 * - Nombre y coordenadas (38.5950463, -0.0520501) del enlace de Google Maps aportado.
 * - Dirección Carrer Sant Pere, 34, 03590 Altea (Alicante) y teléfono 965 84 03 24
 *   de la ficha del local en Google Maps.
 * - Descripción de esa misma ficha: pizzas napolitanas con un toque escandinavo,
 *   comedor diáfano de mesa y mantel y terraza cubierta.
 * - Horario publicado en la ficha: todos los días 13:00–23:00, sábado hasta las 24:00.
 * - Reservas: ficha del local en TheFork.
 *
 * Las fotos son las de la ficha de Google Maps del local (assets/fotos/, con su
 * .maps-manifest.json), descargadas con scripts/fetch-maps-photos.mjs.
 * No se reproducen reseñas literales ni valoraciones.
 */

import type { ImageMetadata } from 'astro';

const fotos = import.meta.glob<{ default: ImageMetadata }>('../assets/fotos/*.{jpg,jpeg,png,JPG,JPEG,PNG}', { eager: true });
const foto = (name: string) => fotos[`../assets/fotos/${name}`].default;

export const site = {
  siteUrl: 'https://www.sur-digital.com/3-i-4-i-5-pizza-fusion-today',
  consultado: '11 de noviembre de 2026',
} as const;

export const business = {
  name: '3 I 4 I 5 Pizza Fusion Today',
  shortName: '3 I 4 I 5',
  category: 'Pizzería',
  categories: ['Pizzería', 'Pizza napolitana', 'Terraza cubierta'],
  streetAddress: 'Carrer Sant Pere, 34',
  district: 'Centre',
  postalCode: '03590',
  city: 'Altea',
  province: 'Alicante',
  region: 'Comunidad Valenciana',
  country: 'ES',
  phone: '+34 965 84 03 24',
  latitude: 38.5950463,
  longitude: -0.0520501,
  rating: 0,
  reviewCount: 0,
  site: site.siteUrl,
} as const;

export const mapsUrl =
  'https://www.google.com/maps/place/3+I+4+I+5+Pizza+Fusion+Today/@38.5950463,-0.0520501,17z/data=!3m1!4b1!4m6!3m5!1s0xd620105a850b921:0x9751485d022331a9!8m2!3d38.5950463!4d-0.0520501!16s%2Fg%2F1tfnvblf';

export const reviewsUrl = mapsUrl;

/** Ficha del local para reservar mesa (TheFork). */
export const bookingUrl = 'https://thefork.es/restaurante/345-pizza-fusion-today-r699511';

export const phoneHref = 'tel:+34965840324';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/** Collage de la portada: la terraza con el mar, una pizza y la barra del local. */
export const heroPhotos = {
  main: { src: foto('3-i-4-i-5-pizza-fusion-today-apaisada-01.jpg'), alt: 'Terraza de 3 I 4 I 5 Pizza Fusion Today con mesas puestas y el mar al fondo, en Sant Pere 34, Altea' },
  top: { src: foto('3-i-4-i-5-pizza-fusion-today-vertical-03.jpg'), alt: 'Pizza napolitana con rúcula recién salida del horno' },
  bottom: { src: foto('3-i-4-i-5-pizza-fusion-today-apaisada-07.jpg'), alt: 'Toldos azules y mesas de la terraza del local frente a la playa de Altea' },
} as const;

export const galleryPhotos = [
  { src: foto('3-i-4-i-5-pizza-fusion-today-vertical-04.jpg'), alt: 'Pizza con pollo, chorizo, pimientos y cebolla' },
  { src: foto('3-i-4-i-5-pizza-fusion-today-vertical-05.jpg'), alt: 'Pizzas, patatas fritas y salsas en una mesa del comedor' },
  { src: foto('3-i-4-i-5-pizza-fusion-today-vertical-02.jpg'), alt: 'Pizza con cebolla y champiñones con un hilo de nata' },
  { src: foto('3-i-4-i-5-pizza-fusion-today-apaisada-08.jpg'), alt: 'Nachos con carne, queso, tomate y cebolla morada' },
  { src: foto('3-i-4-i-5-pizza-fusion-today-vertical-06.jpg'), alt: 'Ensalada con atún, queso y tomate aliñada en la mesa' },
  { src: foto('3-i-4-i-5-pizza-fusion-today-vertical-09.jpg'), alt: 'Cuenco de queso fundido con tomate y cebolla morada' },
  { src: foto('3-i-4-i-5-pizza-fusion-today-vertical-10.jpg'), alt: 'Dos pizzas familiares servidas con velas en el comedor' },
] as const;

export const hours = [
  { day: 'Lunes', service: '13:00 – 23:00', shifts: [{ open: '13:00', close: '23:00' }], dayOfWeek: 'Monday' },
  { day: 'Martes', service: '13:00 – 23:00', shifts: [{ open: '13:00', close: '23:00' }], dayOfWeek: 'Tuesday' },
  { day: 'Miércoles', service: '13:00 – 23:00', shifts: [{ open: '13:00', close: '23:00' }], dayOfWeek: 'Wednesday' },
  { day: 'Jueves', service: '13:00 – 23:00', shifts: [{ open: '13:00', close: '23:00' }], dayOfWeek: 'Thursday' },
  { day: 'Viernes', service: '13:00 – 23:00', shifts: [{ open: '13:00', close: '23:00' }], dayOfWeek: 'Friday' },
  { day: 'Sábado', service: '13:00 – 24:00', shifts: [{ open: '13:00', close: '24:00' }], dayOfWeek: 'Saturday' },
  { day: 'Domingo', service: '13:00 – 23:00', shifts: [{ open: '13:00', close: '23:00' }], dayOfWeek: 'Sunday' },
] as const;

export const hoursSummary = 'Todos los días 13:00-23:00 · sábado hasta las 24:00';

export const hoursSource = 'Ficha de Google Maps';

export const faqs = [
  {
    question: '¿Dónde está 3 I 4 I 5 Pizza Fusion Today?',
    answer:
      'En el Carrer Sant Pere, 34, 03590 Altea (Alicante), en las coordenadas 38.5950463, -0.0520501, a un paso del paseo marítimo. Los botones de esta web abren las indicaciones en Google Maps.',
  },
  {
    question: '¿Cuál es el teléfono?',
    answer: 'El teléfono publicado en la ficha del local es el 965 84 03 24.',
  },
  {
    question: '¿Cuál es el horario?',
    answer:
      'Según la ficha de Google Maps, abre todos los días de 13:00 a 23:00, y el sábado hasta las 24:00. Confirma por teléfono en festivos.',
  },
  {
    question: '¿Qué tipo de pizza sirven?',
    answer:
      'La descripción de la ficha habla de pizzas napolitanas con un toque escandinavo, en un comedor diáfano de mesa y mantel con terraza cubierta. La carta se consulta en el local.',
  },
  {
    question: '¿Se puede reservar mesa?',
    answer:
      'Sí: el local tiene ficha en TheFork, enlazada desde esta web, y también se puede llamar al 965 84 03 24.',
  },
  {
    question: '¿Dónde puedo ver fotos y opiniones?',
    answer:
      'La galería de esta web muestra fotos del local; en la ficha de Google Maps, enlazada desde aquí, tienes más fotos y las opiniones de los clientes.',
  },
  {
    question: '¿De quién es esta web?',
    answer:
      'Es una web informativa no oficial, creada con datos públicos de ubicación y contacto. No vende ni reserva nada: las reservas se hacen en la ficha de TheFork del local o por teléfono.',
  },
] as const;

export const restaurantSchema = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  '@id': `${site.siteUrl}/#restaurante`,
  name: business.name,
  description:
    '3 I 4 I 5 Pizza Fusion Today, pizzería de pizzas napolitanas con toque escandinavo en Carrer Sant Pere 34, 03590 Altea (Alicante), con terraza cubierta. Web informativa no oficial con ubicación, contacto y mapa.',
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
  servesCuisine: ['Pizza', 'Napolitana', 'Italiana'],
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
