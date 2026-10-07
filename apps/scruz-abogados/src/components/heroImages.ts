import { getImage } from '@astro-components';
import HeroPjImg from '@assets/hero-pj.webp';

// Variantes del hero (foto del abogado). Fuente única compartida por el
// <picture> de Hero1.astro y los <link rel="preload"> de index.astro: como
// ambos usan los mismos parámetros, las URLs coinciden y el preload acierta
// sobre la variante que el navegador realmente renderiza.
//
// - AVIF (q65): formato moderno — ~53 KB en desktop frente a 117 KB webp.
//   Los navegadores modernos lo eligen vía <source type="image/avif">.
// - WebP (q72): fallback para navegadores sin AVIF (mismo punto dulce medido).
// - Desktop 800 px / móvil 412 px: cada viewport solo preloada su variante
//   (media query), y los preloads llevan `type` para que cada navegador
//   descargue únicamente el formato que soporta.
const WEBP_QUALITY = 72;
const AVIF_QUALITY = 65;

export const HERO_IMAGES = {
	desktop: {
		avif: await getImage({ src: HeroPjImg, width: 800, format: 'avif', quality: AVIF_QUALITY }),
		webp: await getImage({ src: HeroPjImg, width: 800, format: 'webp', quality: WEBP_QUALITY }),
	},
	mobile: {
		avif: await getImage({ src: HeroPjImg, width: 412, format: 'avif', quality: AVIF_QUALITY }),
		webp: await getImage({ src: HeroPjImg, width: 412, format: 'webp', quality: WEBP_QUALITY }),
	},
};