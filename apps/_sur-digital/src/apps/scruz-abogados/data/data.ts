import type { ImageMetadata } from 'astro';
import familiaImg from '@assets/familia.png';
import traficoImg from '@assets/abogados-de-accidentes-e-indemnizaciones-min-1.png';
import herenciasImg from '@assets/abogados-de-herencias-y-patrimonios-min.png';
import divorciosImg from '@assets/abogados-especialistas-en-divorcios-baratos-min.png';
import { SERVICES } from './SERVICES';

// Iconos de las cuatro tarjetas del hero. Viven aquí y no en SERVICES porque
// solo esos cuatro servicios se pintan con imagen en la home: con `img` en
// cada entrada había que importar 13 imágenes de las que 9 no se renderizaban
// en ninguna página y el build las emitía como PNG huérfanos (el import se
// resuelve siempre, aunque su servicio nunca se pinte).
//
// La imagen se pasa SIN leerle propiedades (`...img` marcaba el asset como
// "usado fuera del pipeline de imágenes" y Astro conservaba el original en
// dist): el objeto metadata viaja intacto hasta <Image>, que ya trabaja sobre
// un clon.
//
// Este módulo solo alimenta las tarjetas del hero (Hero1.astro). Los datos de
// contacto y navegación del sitio viven en src/data/seo.ts (NAP), Topbar1 y
// Footer3: mantener aquí copias provocó teléfonos divergentes (957 117 185 vs
// 957 118 195) y enlaces a páginas que no existen.
const HERO_SERVICE_ICONS: Record<string, ImageMetadata> = {
	'/derecho-civil': familiaImg,
	'/indemnizaciones-trafico': traficoImg,
	'/herencias-testamentos': herenciasImg,
	'/divorcios-separaciones': divorciosImg,
};

export const DATA = {
	heroServices: SERVICES.slice(0, 4).map((service) => ({
		...service,
		img: HERO_SERVICE_ICONS[service.path],
	})),
	SERVICES,
};
