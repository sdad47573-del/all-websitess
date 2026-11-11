/**
 * Datos de Aguatapá Cádiz | Restaurante y Freidor (Av. Amílcar Barca, 17 · Cádiz).
 *
 * Solo datos públicos y verificables:
 * - Nombre y coordenadas (36.5147245, -6.283842) del enlace de Google Maps aportado.
 * - Turismo Cádiz (Ayuntamiento): freidor, Playa Victoria, Av. Amílcar Barca 17,
 *   teléfono 856 07 33 31, Instagram aguatapa.cadiz, cervecería-freiduría en el
 *   paseo marítimo, especialidad pavía de merluza, horario Mié-Jue 13-00,
 *   Vie-Sáb 13-02, Dom 13-20, Lun 13-17.
 *
 * Las fotos son las de la ficha de Google Maps del local (assets/fotos/, con su
 * .maps-manifest.json), descargadas con scripts/fetch-maps-photos.mjs.
 * No se reproducen reseñas literales ni valoraciones.
 */

import type { ImageMetadata } from 'astro';

const fotos = import.meta.glob<{ default: ImageMetadata }>('../assets/fotos/*.{jpg,jpeg,png,JPG,JPEG,PNG}', { eager: true });
const foto = (name: string) => fotos[`../assets/fotos/${name}`].default;

export const site = {
  siteUrl: 'https://www.sur-digital.com/aguatapa-cadiz',
  consultado: '18 de octubre de 2026',
} as const;

export const business = {
  name: 'Aguatapá Cádiz | Restaurante y Freidor',
  shortName: 'Aguatapá',
  category: 'Freidor',
  categories: ['Freidor', 'Cervecería', 'Playa Victoria'],
  streetAddress: 'Av. Amílcar Barca, 17',
  district: 'Playa Victoria',
  postalCode: '11009',
  city: 'Cádiz',
  province: 'Cádiz',
  region: 'Andalucía',
  country: 'ES',
  phone: '+34 856 07 33 31',
  latitude: 36.5147245,
  longitude: -6.283842,
  rating: 0,
  reviewCount: 0,
  site: site.siteUrl,
} as const;

export const mapsUrl =
  'https://www.google.com/maps/place/Aguatap%C3%A1+C%C3%A1diz+%7C+Restaurante+y+Freidor/@36.5147245,-6.283842,17z/data=!3m1!4b1!4m6!3m5!1s0xd0dd39843d2e70b:0xdc5d051afd84923c!8m2!3d36.5147245!4d-6.283842!16s%2Fg%2F11hdvv8pfn?authuser=0&hl=es&entry=ttu';

export const reviewsUrl = mapsUrl;

export const instagramUrl = 'https://www.instagram.com/aguatapa.cadiz/';

export const phoneHref = 'tel:+34856073331';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/** Collage de la portada: la fachada con la terraza, un plato de pescaíto y el salmorejo. */
export const heroPhotos = {
  main: { src: foto('aguatapa-cadiz-vertical-08.jpg'), alt: 'Fachada de Aguatapá en la Av. Amílcar Barca, con el rótulo del local y la terraza llena' },
  top: { src: foto('aguatapa-cadiz-vertical-03.jpg'), alt: 'Plato de pescaíto frito con ensalada de lechuga y tomate' },
  bottom: { src: foto('aguatapa-cadiz-apaisada-02.jpg'), alt: 'Salmorejo con jamón y huevo picado en plato de raya' },
} as const;

export const galleryPhotos = [
  { src: foto('aguatapa-cadiz-apaisada-01.jpg'), alt: 'Comedor de Aguatapá con lámparas de mimbre y las ventanas abiertas a la terraza' },
  { src: foto('aguatapa-cadiz-apaisada-04.jpg'), alt: 'Barra con taburetes y pared azul con platos decorativos' },
  { src: foto('aguatapa-cadiz-vista-5-05.jpg'), alt: 'Terraza del local con sombrillas y mesas en el paseo marítimo' },
  { src: foto('aguatapa-cadiz-panoramica-06.jpg'), alt: 'Bocadillo de la casa con patatas paja en plato de cerámica' },
  { src: foto('aguatapa-cadiz-vertical-09.jpg'), alt: 'Bocadillo caliente con carne y pimientos junto a patatas paja' },
  { src: foto('aguatapa-cadiz-vertical-07.jpg'), alt: 'Chocos fritos sobre ensalada de tomate y cebolla' },
  { src: foto('aguatapa-cadiz-vertical-10.jpg'), alt: 'Ensalada de fideos con gambas, tomate cherry y vinagreta' },
] as const;

export const hours = [
  { day: 'Lunes', service: '13:00 – 17:00', shifts: [{ open: '13:00', close: '17:00' }], dayOfWeek: 'Monday' },
  { day: 'Martes', service: 'Cerrado', shifts: [], dayOfWeek: 'Tuesday' },
  { day: 'Miércoles', service: '13:00 – 00:00', shifts: [{ open: '13:00', close: '00:00' }], dayOfWeek: 'Wednesday' },
  { day: 'Jueves', service: '13:00 – 00:00', shifts: [{ open: '13:00', close: '00:00' }], dayOfWeek: 'Thursday' },
  { day: 'Viernes', service: '13:00 – 02:00', shifts: [{ open: '13:00', close: '02:00' }], dayOfWeek: 'Friday' },
  { day: 'Sábado', service: '13:00 – 02:00', shifts: [{ open: '13:00', close: '02:00' }], dayOfWeek: 'Saturday' },
  { day: 'Domingo', service: '13:00 – 20:00', shifts: [{ open: '13:00', close: '20:00' }], dayOfWeek: 'Sunday' },
] as const;

export const hoursSummary = 'Mié-Lun según día · Mar cerrado · confirmar';

export const hoursSource = 'Turismo Cádiz (Ayuntamiento)';

export const faqs = [
  {
    question: '¿Dónde está Aguatapá?',
    answer:
      'En la Av. Amílcar Barca, 17, Playa Victoria, Cádiz, coordenadas 36.5147245, -6.283842, frente al mar. Los botones de esta web abren las indicaciones en Google Maps.',
  },
  {
    question: '¿Cuál es el teléfono para reservar?',
    answer: 'El teléfono publicado por Turismo Cádiz es el 856 07 33 31.',
  },
  {
    question: '¿Cuál es el horario?',
    answer:
      'Según Turismo Cádiz: miércoles y jueves 13:00-00:00; viernes y sábado 13:00-02:00; domingo 13:00-20:00; lunes 13:00-17:00; martes cerrado. Confirma por teléfono.',
  },
  {
    question: '¿Qué tipo de comida sirve?',
    answer:
      'Cervecería y freiduría en el paseo marítimo: pescaíto y marisco, comida casera y terraza exterior. Especialidad: pavía de merluza.',
  },
  {
    question: '¿Dónde puedo ver fotos y opiniones?',
    answer:
      'La galería de esta web muestra fotos del local; en la ficha de Google Maps y en su Instagram @aguatapa.cadiz, enlazados desde aquí, tienes más fotos y las opiniones de los clientes.',
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
    'Aguatapá Cádiz, cervecería y freiduría frente al mar en Av. Amílcar Barca 17, Playa Victoria. Pavía de merluza y terraza. Web informativa no oficial.',
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
  servesCuisine: ['Gaditana', 'Pescaíto', 'Marisco'],
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
