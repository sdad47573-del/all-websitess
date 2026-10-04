import pinchoQuesoCabra from '../assets/fotos/el-gallu-pincho-queso-cabra-tomate.jpg';
import cachopoEmpanado from '../assets/fotos/el-gallu-cachopo-empanado-patatas.jpg';
import cachopoCabrales from '../assets/fotos/el-gallu-cachopo-al-cabrales-patatas.jpg';
import cachopoQueso from '../assets/fotos/el-gallu-cachopo-con-queso.jpg';
import croquetasHuevoJamón from '../assets/fotos/el-gallu-croquetas-caseras-huevo-jamon.jpg';
import croquetasCazuela from '../assets/fotos/el-gallu-croquetas-gratinadas-cazuela.jpg';
import pinchosSidra from '../assets/fotos/el-gallu-pinchos-encurtidos-sidra.jpg';
import carpaccioQueso from '../assets/fotos/el-gallu-carpaccio-vacuno-queso.jpg';
import arrozConLeche from '../assets/fotos/el-gallu-arroz-con-leche-fruta.jpg';
import flanCasero from '../assets/fotos/el-gallu-flan-casero-obleas.jpg';

export const business = {
	name: 'El Gallu',
	streetAddress: 'Calle Jaén, 11',
	postalCode: '29730',
	city: 'Rincón de la Victoria',
	province: 'Málaga',
	region: 'Andalucía',
	country: 'ES',
	phones: ['+34 618 79 29 62'],
	latitude: 36.7164174,
	longitude: -4.2844113,
	site: 'https://el-gallu-malaga.vercel.app',
} as const;

// La URL de Google Maps facilitada es solo la ficha del lugar, sin foto en la propia
// URL. La imagen de la web se descargó de la galería de esa ficha y vive en
// `src/assets/fotos`, servida por `astro:assets` (no se hotlinkea lh3.googleusercontent.com).
export const mapsUrl =
	'https://www.google.com/maps/place/El+Gallu/@36.7164174,-4.2844113,17z/data=!3m1!4b1!4m6!3m5!1s0xd725b002ca15679:0xb85fef418669b6df!8m2!3d36.7164174!4d-4.2844113!16s%2Fg%2F11njz933f6?authuser=0&hl=es&entry=ttu';

export const phoneHrefs = ['tel:+34618792962'] as const;
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;
export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

// Platos más mencionados en las reseñas públicas de la ficha.
export const specialties = [
	{ name: 'Gildas', note: 'De tamaño XL, para abrir boca.' },
	{ name: 'Cachopo', note: 'Generoso, ideal para compartir.' },
	{ name: 'Croquetas caseras', note: 'Cremosas, hechas en casa.' },
	{ name: 'Solomillo al Cabrales', note: 'Con salsa de queso asturiano.' },
	{ name: 'Arroz con leche', note: 'El postre más celebrado.' },
] as const;

// Las diez imágenes salen de la galería de la ficha de Google Maps de El Gallu
// (descargadas, nunca hotlinkeadas). El hero usa el cachopo empanado; el resto va
// en la galería de la carta.
export const dishPhoto = {
	src: cachopoEmpanado,
	alt: 'Cachopo empanado fileteado con patatas fritas y salsa en la mesa de El Gallu, con una copa de sidra al lado',
	width: 1400,
	height: 1400,
};

export const gallery = [
	{
		src: cachopoCabrales,
		alt: 'Cachopo al Cabrales con salsa de queso asturiano y patatas fritas',
		cap: 'Cachopo al Cabrales',
	},
	{
		src: croquetasHuevoJamón,
		alt: 'Croquetas caseras con huevo frito y jamón, espolvoreadas con perejil',
		cap: 'Croquetas caseras',
	},
	{
		src: cachopoQueso,
		alt: 'Cachopo fileteado cubierto de queso fundido con salsa y cebollino',
		cap: 'Cachopo con queso',
	},
	{
		src: carpaccioQueso,
		alt: 'Carpaccio de vacuno con queso rallado y alcaparras sobre plato blanco',
		cap: 'Carpaccio de vacuno',
	},
	{
		src: croquetasCazuela,
		alt: 'Croquetas caseras gratinadas hasta dorarlas, servidas en cazuela de barro',
		cap: 'Gratinado de cazuela',
	},
	{
		src: pinchosSidra,
		alt: 'Pinchos con encurtidos, pimientos y tomate acompañados de una copa de sidra',
		cap: 'Pinchos y encurtidos',
	},
	{
		src: pinchoQuesoCabra,
		alt: 'Pincho de queso de cabra al natural con tomate y pan tostado, con ensalada verde',
		cap: 'Pincho de cabra',
	},
	{
		src: arrozConLeche,
		alt: 'Arroz con leche cremoso con fresas y salsa de fresa',
		cap: 'Arroz con leche',
	},
	{
		src: flanCasero,
		alt: 'Flan casero con caramelo y obleas crujientes al lado',
		cap: 'Flan casero',
	},
] as const;

export const structuredData = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${business.site}/#restaurante`,
	name: business.name,
	description: 'Restaurante de cocina asturiana y sidrería en Rincón de la Victoria, Málaga.',
	url: `${business.site}/`,
	telephone: business.phones[0],
	servesCuisine: ['Asturiana', 'Española'],
	address: {
		'@type': 'PostalAddress',
		streetAddress: business.streetAddress,
		addressLocality: business.city,
		addressRegion: business.region,
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
