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
import Skittles from '@assets/VAPS/skittles.png';
import SummerDream from '@assets/VAPS/sueno-verano.png';
import TripleCereza from '@assets/VAPS/triple-cereza.png';

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

// import { getVaperImageUrl } from '../../utils/supabase-storage';

// // Mapa de imágenes desde Supabase Storage
// // Bucket: vaper-images
// // Estructura: VAPS/<nombre-archivo>.png
// export const imageMap: Record<string, string> = {
// 	'Black Ice Drangofruit Strawberry': getVaperImageUrl('hielo-negro-dragonfruit-fresa.png'),
// 	'Blue Razz': getVaperImageUrl('frambuesa-azul.png'),
// 	'Blueberry Blackcurrant Ice': getVaperImageUrl('ArandanoAzulGrosellaNegraHielo.png'),
// 	'Blueberry Cherry Cola': getVaperImageUrl('arandano-cereza-cola.png'),
// 	'Blueberry Cherry Cranberry': getVaperImageUrl('arandano-cereza-arandano-rojo.png'),
// 	'Blueberry Ice': getVaperImageUrl('arandano-hielo.png'),
// 	'Double Apple': getVaperImageUrl('doble-manzana.png'),
// 	'Kiwi Passion Fruit Guava': getVaperImageUrl('kiwi-maracuya-guayaba.png'),
// 	'Lemon Lime': getVaperImageUrl('limon-lima.png'),
// 	'Mixed Berry': getVaperImageUrl('frutos-mixtos.png'),
// 	'Peach Berry': getVaperImageUrl('melocoton-frutos-bosque.png'),
// 	'Peach Mango Pineapple': getVaperImageUrl('melocoton-mango-pina.png'),
// 	'Pink Lemonade': getVaperImageUrl('limonada-rosa.png'),
// 	'Raspberry Watermelon': getVaperImageUrl('frambuesa-sandia.png'),
// 	'Red Bull': getVaperImageUrl('red-bull.png'),
// 	'Strawberry Banana': getVaperImageUrl('fresa-banana.png'),
// 	'Strawberry Ice': getVaperImageUrl('fresa-hielo.png'),
// 	'Strawberry Kiwi': getVaperImageUrl('fresa-kiwi.png'),
// 	'Strawberry Watermelon': getVaperImageUrl('fresa-sandia.png'),
// 	'Summer Dream': getVaperImageUrl('sueno-verano.png'),
// 	'Watermelon Ice': getVaperImageUrl('sandia-hielo.png'),
// 	'blackberry blueberry ice': getVaperImageUrl('mora-arandano-hielo.png'),
// 	'cool mint': getVaperImageUrl('menta-fresca.png'),
// 	'grape burst': getVaperImageUrl('explosion-uva.png'),
// 	'love 66': getVaperImageUrl('love66.png'),
// 	'strawberry vanilla cola': getVaperImageUrl('fresa-vainilla-cola.png'),
// 	'triple cherry': getVaperImageUrl('triple-cereza.png'),
// 	Skittles: getVaperImageUrl('skittles.png'),
// };
