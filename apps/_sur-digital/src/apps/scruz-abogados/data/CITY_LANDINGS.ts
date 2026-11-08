/**
 * Agregador de las landings de ciudad.
 *
 * Las plazas viven una por archivo en `src/data/cities/`; aquí solo se
 * reunen para que la página las recorra. Ver `cities/types.ts`.
 */

export type { CityLanding, CityLink, CitySection } from './cities/types';
import type { CityLanding } from './cities/types';

import { Marbella } from './cities/marbella';
import { Fuengirola } from './cities/fuengirola';
import { Torremolinos } from './cities/torremolinos';
import { Benalmadena } from './cities/benalmadena';
import { Estepona } from './cities/estepona';
import { Antequera } from './cities/antequera';
import { Ronda } from './cities/ronda';
import { AlhaurinDeLaTorre } from './cities/alhaurin-de-la-torre';
import { Torrox } from './cities/torrox';
import { Nerja } from './cities/nerja';
import { PuenteGenil } from './cities/puente-genil';
import { Chiclana } from './cities/chiclana-de-la-frontera';
import { SanFernando } from './cities/san-fernando';
import { ElPuertoDeSantaMaria } from './cities/el-puerto-de-santa-maria';
import { ArcosDeLaFrontera } from './cities/arcos-de-la-frontera';
import { SantaFe } from './cities/santa-fe';
import { Ogijares } from './cities/ogijares';
import { Loja } from './cities/loja';
import { Baza } from './cities/baza';
import { Huescar } from './cities/huescar';
import { Motril } from './cities/motril';
import { Almunecar } from './cities/almunecar';
import { Guadix } from './cities/guadix';
import { Cordoba } from './cities/cordoba';
import { Villacarrillo } from './cities/villacarrillo';
import { Baena } from './cities/baena';
import { Cabra } from './cities/cabra';
import { Montilla } from './cities/montilla';
import { PriegoDeCordoba } from './cities/priego-de-cordoba';

export const CITY_LANDINGS: CityLanding[] = [
	Marbella,
	Fuengirola,
	Torremolinos,
	Benalmadena,
	Estepona,
	Antequera,
	Ronda,
	AlhaurinDeLaTorre,
	Torrox,
	Nerja,
	PuenteGenil,
	Chiclana,
	SanFernando,
	ElPuertoDeSantaMaria,
	ArcosDeLaFrontera,
	SantaFe,
	Ogijares,
	Loja,
	Baza,
	Huescar,
	Motril,
	Almunecar,
	Guadix,
	Cordoba,
	Villacarrillo,
	Baena,
	Cabra,
	Montilla,
	PriegoDeCordoba,
];
