// Mapa de traducción de sabores al español
export const ITEMS_ES: Record<string, string> = {
	'Double Apple': 'Manzana Doble',
	'Peach Mango Pineapple': 'Melocotón Mango Piña',
	'Pink Lemonade': 'Limonada Rosa',
	'Raspberry Watermelon': 'Frambuesa Sandía',
	'Strawberry Ice': 'Fresa Hielo',
	'Strawberry Kiwi': 'Fresa Kiwi',
	'cool mint': 'Menta Fresca',
	'love 66': 'Amor 66',
	'strawberry vanilla cola': 'Fresa Vainilla Cola',
	'Lemon Lime': 'Lima Limón',
	'Mixed Berry': 'Frutos del Bosque',
	'Red Bull': 'Red Bull',
	'Strawberry Banana': 'Fresa Plátano',
	'Watermelon Ice': 'Sandía Hielo',
	'Blueberry Cherry Cranberry': 'Arándano Cereza Arándano Rojo',
	'Blueberry Ice': 'Arándano Hielo',
	'Kiwi Passion Fruit Guava': 'Kiwi Maracuyá Guayaba',
	'Peach Berry': 'Melocotón Frutos del Bosque',
	'Strawberry Watermelon': 'Fresa Sandía',
	'blackberry blueberry ice': 'Mora Arándano Hielo',
	'triple cherry': 'Triple Cereza',
	'Black Ice Drangofruit Strawberry': 'Hielo Negro Pitaya Fresa',
	'Blueberry Blackcurrant Ice': 'Arándano Grosella Negra Hielo',
	'Blueberry Cherry Cola': 'Arándano Cereza Cola',
	'grape burst': 'Explosión de Uva',
};

// Mapa de imágenes de sabores
export const ITEMS_IMAGES: Record<string, string> = {
	'Double Apple': 'doble-manzana.png',
	'Peach Mango Pineapple': 'melocoton-mango-pina.png',
	'Pink Lemonade': 'limonada-rosa.png',
	'Raspberry Watermelon': 'frambuesa-sandia.png',
	'Strawberry Ice': 'fresa-hielo.png',
	'Strawberry Kiwi': 'fresa-kiwi.png',
	'cool mint': 'menta-fresca.png',
	'love 66': 'love66.png',
	'strawberry vanilla cola': 'fresa-vainilla-cola.png',
	'Lemon Lime': 'limon-lima.png',
	'Mixed Berry': 'frutos-mixtos.png',
	'Red Bull': 'red-bull.png',
	'Strawberry Banana': 'fresa-banana.png',
	'Watermelon Ice': 'sandia-hielo.png',
	'Blueberry Cherry Cranberry': 'arandano-cereza-arandano-rojo.png',
	'Blueberry Ice': 'arandano-hielo.png',
	'Kiwi Passion Fruit Guava': 'kiwi-maracuya-guayaba.png',
	'Peach Berry': 'melocoton-frutos-bosque.png',
	'Strawberry Watermelon': 'fresa-sandia.png',
	'blackberry blueberry ice': 'mora-arandano-hielo.png',
	'triple cherry': 'triple-cereza.png',
	'Black Ice Drangofruit Strawberry': 'hielo-negro-dragonfruit-fresa.png',
	'Blueberry Blackcurrant Ice': 'ArandanoAzulGrosellaNegraHielo.png',
	'Blueberry Cherry Cola': 'arandano-cereza-cola.png',
	'grape burst': 'explosion-uva.png',
};

// Función helper para traducir items
export function translateItem(item: string): string {
	return ITEMS_ES[item] || item;
}

// Función helper para obtener la imagen de un item
export function getItemImage(item: string): string {
	return ITEMS_IMAGES[item] || '';
}

// Importar todas las imágenes
import ArandanoAzulGrosellaNegraHielo from '@assets/VAPS/ArandanoAzulGrosellaNegraHielo.png';
import ArandanosRojos from '@assets/VAPS/arandano-cereza-arandano-rojo.png';
import ArandanoAzulCerezaCola from '@assets/VAPS/arandano-cereza-cola.png';
import ArandanoAzulHielo from '@assets/VAPS/arandano-hielo.png';
import DobleManzana from '@assets/VAPS/doble-manzana.png';
import ExplosionDeUva from '@assets/VAPS/explosion-uva.png';
import FrambuesaAzul from '@assets/VAPS/frambuesa-azul.png';
import FrambuesaSandia from '@assets/VAPS/frambuesa-sandia.png';
import FresaBanana from '@assets/VAPS/fresa-banana.png';
import FresaHielo from '@assets/VAPS/fresa-hielo.png';
import FresaKiwi from '@assets/VAPS/fresa-kiwi.png';
import FresaSandia from '@assets/VAPS/fresa-sandia.png';
import FresaVainillaCola from '@assets/VAPS/fresa-vainilla-cola.png';
import FrutosMixtos from '@assets/VAPS/frutos-mixtos.png';
import HieloNegroDragonfruitFresa from '@assets/VAPS/hielo-negro-dragonfruit-fresa.png';
import KiwiMaracuyaGuayaba from '@assets/VAPS/kiwi-maracuya-guayaba.png';
import LimonLima from '@assets/VAPS/limon-lima.png';
import LimonadaRosa from '@assets/VAPS/limonada-rosa.png';
import Love66 from '@assets/VAPS/love66.png';
import MelocotonFrutosDelBosque from '@assets/VAPS/melocoton-frutos-bosque.png';
import MelocotonMangoPina from '@assets/VAPS/melocoton-mango-pina.png';
import MentaFresca from '@assets/VAPS/menta-fresca.png';
import HieloMorasArandanoAzul from '@assets/VAPS/mora-arandano-hielo.png';
import RedBull from '@assets/VAPS/red-bull.png';
import SandiaHielo from '@assets/VAPS/sandia-hielo.png';
import TripleCereza from '@assets/VAPS/triple-cereza.png';

// Mapa de imágenes importadas
export const imageMap: Record<string, any> = {
	'ArandanoAzulGrosellaNegraHielo.png': ArandanoAzulGrosellaNegraHielo,
	'arandano-cereza-arandano-rojo.png': ArandanosRojos,
	'arandano-cereza-cola.png': ArandanoAzulCerezaCola,
	'arandano-hielo.png': ArandanoAzulHielo,
	'doble-manzana.png': DobleManzana,
	'explosion-uva.png': ExplosionDeUva,
	'frambuesa-azul.png': FrambuesaAzul,
	'frambuesa-sandia.png': FrambuesaSandia,
	'fresa-banana.png': FresaBanana,
	'fresa-hielo.png': FresaHielo,
	'fresa-kiwi.png': FresaKiwi,
	'fresa-sandia.png': FresaSandia,
	'fresa-vainilla-cola.png': FresaVainillaCola,
	'frutos-mixtos.png': FrutosMixtos,
	'hielo-negro-dragonfruit-fresa.png': HieloNegroDragonfruitFresa,
	'kiwi-maracuya-guayaba.png': KiwiMaracuyaGuayaba,
	'limon-lima.png': LimonLima,
	'limonada-rosa.png': LimonadaRosa,
	'love66.png': Love66,
	'melocoton-frutos-bosque.png': MelocotonFrutosDelBosque,
	'melocoton-mango-pina.png': MelocotonMangoPina,
	'menta-fresca.png': MentaFresca,
	'mora-arandano-hielo.png': HieloMorasArandanoAzul,
	'red-bull.png': RedBull,
	'sandia-hielo.png': SandiaHielo,
	'triple-cereza.png': TripleCereza,
};
