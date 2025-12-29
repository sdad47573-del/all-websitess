import ArandanoAzulGrosellaNegraHielo from '@assets/VAPS/vapsolo-ArandanoAzulGrosellaNegraHielo.webp';
import ArandanosRojos from '@assets/VAPS/vapsolo-arandano-cereza-arandano-rojo.webp';
import ArandanoAzulCerezaCola from '@assets/VAPS/vapsolo-arandano-cereza-cola.webp';
import ArandanoAzulHielo from '@assets/VAPS/vapsolo-arandano-hielo.webp';
import DobleManzana from '@assets/VAPS/vapsolo-doble-manzana.webp';
import ExplosionDeUva from '@assets/VAPS/vapsolo-explosion-uva.webp';
import FrambuesaAzul from '@assets/VAPS/vapsolo-frambuesa-azul.webp';
import FrambuesaSandia from '@assets/VAPS/vapsolo-frambuesa-sandia.webp';
import FresaBanana from '@assets/VAPS/vapsolo-fresa-banana.webp';
import FresaHielo from '@assets/VAPS/vapsolo-fresa-hielo.webp';
import FresaKiwi from '@assets/VAPS/vapsolo-fresa-kiwi.webp';
import FresaSandia from '@assets/VAPS/vapsolo-fresa-sandia.webp';
import FresaVainillaCola from '@assets/VAPS/vapsolo-fresa-vainilla-cola.webp';
import FrutosMixtos from '@assets/VAPS/vapsolo-frutos-mixtos.webp';
import HieloNegroDragonfruitFresa from '@assets/VAPS/vapsolo-hielo-negro-dragonfruit-fresa.webp';
import KiwiMaracuyaGuayaba from '@assets/VAPS/vapsolo-kiwi-maracuya-guayaba.webp';
import LimonLima from '@assets/VAPS/vapsolo-limon-lima.webp';
import LimonadaRosa from '@assets/VAPS/vapsolo-limonada-rosa.webp';
import Love66 from '@assets/VAPS/vapsolo-love66.webp';
import MelocotonFrutosDelBosque from '@assets/VAPS/vapsolo-melocoton-frutos-bosque.webp';
import MelocotonMangoPina from '@assets/VAPS/vapsolo-melocoton-mango-pina.webp';
import MentaFresca from '@assets/VAPS/vapsolo-menta-fresca.webp';
import HieloMorasArandanoAzul from '@assets/VAPS/vapsolo-mora-arandano-hielo.webp';
import RedBull from '@assets/VAPS/vapsolo-red-bull.webp';
import SandiaHielo from '@assets/VAPS/vapsolo-sandia-hielo.webp';
import Skittles from '@assets/VAPS/vapsolo-skittles.webp';
import SummerDream from '@assets/VAPS/vapsolo-sueno-verano.webp';
import TripleCereza from '@assets/VAPS/vapsolo-triple-cereza.webp';

import BangBoxS1 from '@assets/VAPS/Bang-Box-S1-15000.png';
import ZooyKing from '@assets/VAPS/zooy-king-15000.jpg';

// TODO: quitar y usar storage en supabase
// Mapa de imágenes importadas
export const imageMap: Record<string, any> = {
	'Black Ice Drangofruit Strawberry': HieloNegroDragonfruitFresa,
	'Blue Razz': FrambuesaAzul,
	'Blueberry Blackcurrant Ice': ArandanoAzulGrosellaNegraHielo,
	'Blueberry Cherry Cola': ArandanoAzulCerezaCola,
	'Blueberry Cherry Cranberry': ArandanosRojos,
	'Blueberry Ice': ArandanoAzulHielo,
	'Double Apple': DobleManzana,
	'Kiwi Passion Fruit Guava': KiwiMaracuyaGuayaba,
	'Lemon Lime': LimonLima,
	'Mixed Berry': FrutosMixtos,
	'Peach Berry': MelocotonFrutosDelBosque,
	'Peach Mango Pineapple': MelocotonMangoPina,
	'Pink Lemonade': LimonadaRosa,
	'Raspberry Watermelon': FrambuesaSandia,
	'Red Bull': RedBull,
	'Strawberry Banana': FresaBanana,
	'Strawberry Ice': FresaHielo,
	'Strawberry Kiwi': FresaKiwi,
	'Strawberry Watermelon': FresaSandia,
	'Summer Dream': SummerDream,
	'Watermelon Ice': SandiaHielo,
	'blackberry blueberry ice': HieloMorasArandanoAzul,
	'cool mint': MentaFresca,
	'grape burst': ExplosionDeUva,
	'love 66': Love66,
	'strawberry vanilla cola': FresaVainillaCola,
	'triple cherry': TripleCereza,
	Skittles: Skittles,
};

export const imageBrandMap: Record<string, any> = {
	'Bang Box': BangBoxS1,
	Zooy: ZooyKing,
};
