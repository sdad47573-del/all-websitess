/**
 * Partidos judiciales de Andalucía y los municipios de cada uno.
 *
 * Fuente: reparto de la Ley 38/1988 de Demarcación y Planta Judicial, con los
 * cambios de la Ley Orgánica 1/2025 (los partidos con un solo juzgado pasaron a
 * ser Tribunales de Instancia entre el 1 de julio y el 31 de diciembre de 2025,
 * según la provincia). Verificado contra el anexo de partidos judiciales de
 * Andalucía y el directorio de la Junta de Andalucía.
 *
 * **Por qué existe un dataset aparte de `src/data/cities/`:** las plazas de
 * `cities/` son las 29 localidades donde hay una página propia. Este fichero
 * cubre los 48 partidos de las cinco provincias donde arrives, incluidos los
 * que no tienen landing (Aguilar, Montoro, Posadas, Órgiva...). Es lo que
 * necesita el buscador «qué juzgado me corresponde» para no tener que decir
 * que no sabe de un municipio.
 *
 * **Lo que NO cubre:** Jaén y Sevilla. Están fuera a propósito, porque una lista
 * a medias en una herramienta judicial es peor que no tenerla: el buscador
 * responde «no lo tengo, pregúntanos» en vez de inventar. Cuando se verifiquen,
 * se añaden aquí y el buscador las cubre sin tocar nada más.
 *
 * La Sección de lo Social **no** está en el partido: vive en la capital de
 * provincia. Por eso `SOCIAL_COURT` es una tabla aparte y no un campo del
 * partido. Confundir las dos cosas es el error más común que se comete al
 * buscar por internet, y fue el que hizo que este despacho publicara durante
 * unos días que el juicio social de un vecino de Granada iba a Málaga.
 */

export interface PartidoJudicial {
	/** Cabecera del partido, que es también el nombre del órgano. */
	capital: string;
	/** Número de partido dentro de la provincia. */
	numero: number;
	/** Municipios que comprende. */
	municipios: string[];
}

export const PARTIDOS_JUDICIALES: Record<string, PartidoJudicial[]> = {
	Málaga: [
		{
			capital: 'Málaga',
			numero: 1,
			municipios: [
				'Málaga', 'Alhaurín de la Torre', 'Álora', 'Rincón de la Victoria',
				'Pizarra', 'Colmenar', 'Almogía', 'Casabermeja', 'Alozaina', 'Ardales',
				'Carratraca', 'Casarabonela', 'Yunquera', 'Alfarnate',
				'Riogordo', 'Totalán', 'Cártama',
			],
		},
		{ capital: 'Marbella', numero: 2, municipios: ['Marbella', 'Ojén', 'Istán', 'Benahavís'] },
		{ capital: 'Fuengirola', numero: 3, municipios: ['Fuengirola', 'Mijas'] },
		{ capital: 'Torremolinos', numero: 4, municipios: ['Torremolinos', 'Benalmádena'] },
		{ capital: 'Vélez-Málaga', numero: 5, municipios: ['Vélez-Málaga', 'Almáchar', 'Arenas', 'Benamargosa', 'Benamocarra', 'El Borge', 'Iznate', 'Macharaviaya', 'Moclinejo', 'Cútar', 'Comares', 'Periana', 'Alcaucín', 'Canillas de Aceituno', 'Salares', 'Sedella', 'Viñuela'] },
		{ capital: 'Estepona', numero: 6, municipios: ['Estepona', 'Casares', 'Manilva'] },
		{ capital: 'Antequera', numero: 7, municipios: ['Antequera', 'Alameda', 'Almargen', 'Campillos', 'Cañete la Real', 'Fuente de Piedra', 'Humilladero', 'Mollina', 'Sierra de Yeguas', 'Teba', 'Valle de Abdalajís'] },
		{ capital: 'Ronda', numero: 8, municipios: ['Ronda', 'Arriate', 'Benaoján', 'Montejaque', 'Cortes de la Frontera', 'Gaucín', 'Algatocín', 'Cuevas del Becerro', 'El Burgo'] },
		{ capital: 'Coín', numero: 9, municipios: ['Coín', 'Alhaurín el Grande', 'Guaro', 'Monda', 'Tolox'] },
		{ capital: 'Torrox', numero: 10, municipios: ['Torrox', 'Nerja', 'Frigiliana', 'Algarrobo', 'Cómpeta', ' Árchez', 'Canillas de Albaida', 'Sayalonga'] },
		{ capital: 'Archidona', numero: 11, municipios: ['Archidona', 'Cuevas Bajas', 'Cuevas de San Marcos', 'Villanueva de Algaidas', 'Villanueva de Tapia', 'Villanueva del Rosario'] },
	],
	Córdoba: [
		{ capital: 'Montoro', numero: 1, municipios: ['Montoro', 'Adamuz', 'Bujalance', 'Cañete de las Torres', 'Cardeña', 'El Carpio', 'Pedro Abad', 'Villaviciosa de Córdoba', 'Villafranca de Córdoba'] },
		{ capital: 'Aguilar de la Frontera', numero: 2, municipios: ['Aguilar de la Frontera', 'Monturque', 'Moriles'] },
		{ capital: 'Pozoblanco', numero: 3, municipios: ['Pozoblanco', 'Alcaracejos', 'Añora', 'Conquista', 'Dos Torres', 'El Guijo', 'Pedroche', 'Santa Eufemia', 'Torrecampo', 'Villanueva de Córdoba', 'Villanueva del Duque', 'Villaralto', 'El Viso'] },
		{ capital: 'Baena', numero: 4, municipios: ['Baena', 'Luque', 'Valenzuela'] },
		{ capital: 'Posadas', numero: 5, municipios: ['Posadas', 'Almodóvar del Río', 'La Carlota', 'Fuente Carreteros', 'Fuente Palmera', 'Guadalcázar', 'Hornachuelos', 'Palma del Río'] },
		{ capital: 'Peñarroya-Pueblonuevo', numero: 6, municipios: ['Peñarroya-Pueblonuevo', 'Belalcázar', 'Belmez', 'Los Blázquez', 'Espiel', 'Fuente la Lancha', 'Fuente Obejuna', 'La Granjuela', 'Hinojosa del Duque', 'Valsequillo', 'Villanueva del Rey'] },
		{ capital: 'Lucena', numero: 7, municipios: ['Lucena', 'Benamejí', 'Encinas Reales', 'Iznájar', 'Palenciana', 'Rute'] },
		{ capital: 'Córdoba', numero: 8, municipios: ['Córdoba', 'Castro del Río', 'Espejo', 'Obejo', 'Villaharta', 'Villaviciosa de Córdoba'] },
		{ capital: 'Priego de Córdoba', numero: 9, municipios: ['Priego de Córdoba', 'Almedinilla', 'Carcabuey', 'Fuente-Tójar'] },
		{ capital: 'Cabra', numero: 10, municipios: ['Cabra', 'Doña Mencía', 'Nueva Carteya', 'Zuheros'] },
		{ capital: 'Montilla', numero: 11, municipios: ['Montilla', 'Fernán-Núñez', 'La Guijarrosa', 'Montalbán de Córdoba', 'Montemayor', 'La Rambla', 'San Sebastián de los Ballesteros', 'Santaella', 'La Victoria'] },
		{ capital: 'Puente Genil', numero: 12, municipios: ['Puente Genil'] },
	],
	Cádiz: [
		{ capital: 'Chiclana de la Frontera', numero: 1, municipios: ['Chiclana de la Frontera', 'Alcalá de los Gazules', 'Benalup-Casas Viejas', 'Conil de la Frontera', 'Medina Sidonia', 'Paterna de Rivera'] },
		{ capital: 'Arcos de la Frontera', numero: 2, municipios: ['Arcos de la Frontera', 'Alcalá del Valle', 'Algar', 'Algodonales', 'Bornos', 'Espera', 'El Gastor', 'Olvera', 'Puerto Serrano', 'Setenil de las Bodegas', 'Torre Alháquime', 'Villamartín'] },
		{ capital: 'Algeciras', numero: 3, municipios: ['Algeciras', 'Los Barrios', 'Tarifa'] },
		{ capital: 'Cádiz', numero: 4, municipios: ['Cádiz'] },
		{ capital: 'San Roque', numero: 5, municipios: ['San Roque', 'Castellar de la Frontera', 'Jimena de la Frontera', 'San Martín del Tesorillo'] },
		{ capital: 'Sanlúcar de Barrameda', numero: 6, municipios: ['Sanlúcar de Barrameda', 'Chipiona', 'Trebujena'] },
		{ capital: 'Jerez de la Frontera', numero: 7, municipios: ['Jerez de la Frontera', 'San José del Valle'] },
		{ capital: 'La Línea de la Concepción', numero: 8, municipios: ['La Línea de la Concepción'] },
		{ capital: 'San Fernando', numero: 9, municipios: ['San Fernando'] },
		{ capital: 'El Puerto de Santa María', numero: 10, municipios: ['El Puerto de Santa María'] },
		{ capital: 'Rota', numero: 11, municipios: ['Rota'] },
		{ capital: 'Puerto Real', numero: 13, municipios: ['Puerto Real'] },
		{ capital: 'Barbate', numero: 14, municipios: ['Barbate', 'Vejer de la Frontera'] },
		{ capital: 'Ubrique', numero: 15, municipios: ['Ubrique', 'Benaocaz', 'El Bosque', 'Grazalema', 'Prado del Rey', 'Villaluenga del Rosario', 'Zahara de la Sierra'] },
	],
	Granada: [
		{ capital: 'Loja', numero: 1, municipios: ['Loja', 'Agrón', 'Algarinejo', 'Alhama de Granada', 'Arenas del Rey', 'Cacín', 'Fornes', 'Huétor Tájar', 'Íllora', 'Játar', 'Jayena', 'Montefrío', 'Moraleda de Zafayona', 'Salar', 'Santa Cruz del Comercio', 'Ventas de Huelma', 'Villanueva Mesía', 'Zafarraya', 'Zagra'] },
		{ capital: 'Guadix', numero: 2, municipios: ['Guadix', 'Alamedilla', 'Albuñán', 'Aldeire', 'Alicún de Ortega', 'Alquife', 'Beas de Guadix', 'Benalúa', 'La Calahorra', 'Cogollos de Guadix', 'Cortes y Graena', 'Darro', 'Dehesas de Guadix', 'Diezma', 'Dólar', 'Ferreira', 'Fonelas', 'Gobernador', 'Gor', 'Gorafe', 'Huélago', 'Huéneja', 'Jérez del Marquesado', 'Lanteira', 'Lugros', 'Marchal', 'Morelábor', 'Pedro Martínez', 'La Peza', 'Polícar', 'Purullena', 'Valle del Zalabí', 'Villanueva de las Torres'] },
		{ capital: 'Granada', numero: 3, municipios: ['Granada', 'Albolote', 'Albuñuelas', 'Alfacar', 'Armilla', 'Atarfe', 'Beas de Granada', 'Benalúa de las Villas', 'Cájar', 'Calicasas', 'Campotéjar', 'Cenes de la Vega', 'Chimeneas', 'Churriana de la Vega', 'Cogollos Vega', 'Colomera', 'Dehesas Viejas', 'Deifontes', 'Dílar', 'Domingo Pérez de Granada', 'Dúdar', 'Dúrcal', 'Gójar', 'Guadahortuna', 'Güéjar Sierra', 'Güevéjar', 'Huétor Santillán', 'Huétor Vega', 'Iznalloz', 'Jun', 'Lecrín', 'Maracena', 'Moclín', 'Monachil', 'Montejícar', 'Montillana', 'Nigüelas', 'Nívar', 'Ogíjares', 'Padul', 'Peligros', 'Píñar', 'Pinos Genil', 'Pinos Puente', 'Pulianas', 'Quéntar', 'Torre-Cardela', 'Valderrubio', 'El Valle', 'Villamena', 'Víznar', 'La Zubia'] },
		{ capital: 'Motril', numero: 4, municipios: ['Motril', 'Albondón', 'Albuñol', 'Los Guájares', 'Gualchos', 'Ítrabo', 'Lújar', 'Molvízar', 'Polopos', 'Rubite', 'Salobreña', 'Sorvilán', 'Torrenueva Costa', 'Vélez de Benaudalla'] },
		{ capital: 'Órgiva', numero: 5, municipios: ['Órgiva', 'Almegíjar', 'Bérchules', 'Bubión', 'Busquístar', 'Cáñar', 'Capileira', 'Carataunas', 'Cástaras', 'Lanjarón', 'Lobras', 'Murtas', 'Nevada', 'Pampaneira', 'El Pinar', 'Pórtugos', 'Soportújar', 'La Taha', 'Torvizcón', 'Trevélez', 'Turón', 'Ugíjar', 'Válor'] },
		{ capital: 'Baza', numero: 6, municipios: ['Baza', 'Benamaurel', 'Caniles', 'Cortes de Baza', 'Cuevas del Campo', 'Cúllar', 'Freila', 'Zújar'] },
		{ capital: 'Santa Fe', numero: 7, municipios: ['Santa Fe', 'Alhendín', 'Chauchina', 'Cijuela', 'Cúllar Vega', 'Escúzar', 'Fuente Vaqueros', 'Las Gabias', 'Láchar', 'La Malahá', 'Vegas del Genil', 'Villa de Otura'] },
		{ capital: 'Huéscar', numero: 8, municipios: ['Huéscar', 'Castilléjar', 'Castril', 'Galera', 'Orce', 'Puebla de Don Fadrique'] },
		{ capital: 'Almuñécar', numero: 9, municipios: ['Almuñécar', 'Jete', 'Lentegí', 'Otívar'] },
	],
	Huelva: [
		{ capital: 'Aracena', numero: 1, municipios: ['Aracena', 'Alájar', 'Almonaster la Real', 'Aroche', 'Arroyomolinos de León', 'Cala', 'Campofrio', 'Cañaveral de León', 'Castaño del Robledo', 'Corteconcepción', 'Cortegana', 'Cortelazor', 'Cumbres de Enmedio', 'Cumbres de San Bartolomé', 'Cumbres Mayores', 'Encinasola', 'Fuenteheridos', 'Galaroza', 'La Granada de Río-Tinto', 'Higuera de la Sierra', 'Hinojales', 'Jabugo', 'Linares de la Sierra', 'Los Marines', 'La Nava', 'Puerto Moral', 'Rosal de la Frontera', 'Santa Ana la Real', 'Santa Olalla del Cala', 'Valdelarco', 'Zufre'] },
		{ capital: 'Huelva', numero: 2, municipios: ['Huelva', 'Aljaraque', 'Beas', 'Gibraleón', 'Punta Umbría', 'San Bartolomé de la Torre', 'San Juan del Puerto', 'Trigueros'] },
	],
};

/**
 * Provincia -> capital donde se sirve lo Social. La jurisdicción social no
 * depende del partido: vive en la capital de provincia, y esa es la fuente de
 * errores más habitual cuando alguien busca «mi juzgado» en internet.
 */
export const SOCIAL_COURT: Record<string, string> = {
	Málaga: 'Sección de lo Social del Tribunal de Instancia de Málaga',
	Córdoba: 'Sección de lo Social del Tribunal de Instancia de Córdoba',
	Cádiz: 'Sección de lo Social del Tribunal de Instancia de Cádiz',
	Granada: 'Sección de lo Social del Tribunal de Instancia de Granada',
	Huelva: 'Sección de lo Social del Tribunal de Instancia de Huelva',
	Jaén: 'Sección de lo Social del Tribunal de Instancia de Jaén',
	Sevilla: 'Sección de lo Social del Tribunal de Instancia de Sevilla',
};

/** Provincias cubiertas por el buscador. Las demás responden que no lo saben. */
export const PROVINCIAS_CUBIERTAS = Object.keys(PARTIDOS_JUDICIALES);

export interface ResultadoBusqueda {
	municipio: string;
	provincia: string;
	partido: PartidoJudicial;
	/** Órgano de primera instancia, con su número de partido. */
	organo: string;
	/** Dónde se tramita lo social, que no es lo mismo. */
	social: string;
}

/**
 * Busca el partido de un municipio. Normaliza mayúsculas, tildes y espacios, y
 * tolera el prefijo spanish de artículo: «la Rambla» y «Rambla» son el mismo.
 * Devuelve `null` si el municipio no está en la base, para que el buscador
 * pueda decirlo en vez de inventar.
 */
export function buscarPartido(municipio: string): ResultadoBusqueda | null {
	const normalizar = (s: string) =>
		s
			.toLowerCase()
			.normalize('NFD')
			.replace(/[\u0300-\u036f]/g, '')
			.replace(/^(el|la|los|las)\s+/, '')
			.replace(/[^a-z0-9]/g, '');

	const objetivo = normalizar(municipio);
	if (!objetivo) return null;

	for (const [provincia, partidos] of Object.entries(PARTIDOS_JUDICIALES)) {
		for (const partido of partidos) {
			if (partido.municipios.some((m) => normalizar(m) === objetivo)) {
				return {
					municipio,
					provincia,
					partido,
					organo: `Tribunal de Instancia de ${partido.capital}, partido judicial número ${partido.numero} de ${provincia}`,
					social: SOCIAL_COURT[provincia],
				};
			}
		}
	}
	return null;
}

/** Todos los municipios de la base, ordenados, para el desplegable del buscador. */
export const TODOS_LOS_MUNICIPIOS = Object.entries(PARTIDOS_JUDICIALES)
	.flatMap(([provincia, partidos]) =>
		partidos.flatMap((p) => p.municipios.map((m) => ({ municipio: m, provincia }))),
	)
	.sort((a, b) => a.municipio.localeCompare(b.municipio, 'es'));
