/**
 * geo-codes.ts — Códigos ISO 3166-2 para el meta `geo.region`.
 *
 * Cada app declara su provincia o comunidad en `BUSINESS.region` («Cáceres»,
 * «Murcia», «Castelló»…), así que el código se deriva de ahí en lugar de
 * escribirlo a mano en cada web: así ninguna página acaba anunciando una región
 * que no es la suya.
 *
 * Fuente: ISO 3166-2:ES (50 provincias, 2 ciudades autónomas y 17 comunidades) e
 * ISO 3166-2:PT (distritos y regiones autónomas), con los nombres en castellano
 * y en la lengua cooficial de cada territorio.
 */

const REGION_CODES: Record<string, string> = {
	// Provincias y ciudades autónomas (ISO 3166-2:ES)
	'a coruna': 'ES-C',
	'coruna': 'ES-C',
	'la coruna': 'ES-C',
	'alava': 'ES-VI',
	'araba': 'ES-VI',
	'albacete': 'ES-AB',
	'alacant': 'ES-A',
	'alicante': 'ES-A',
	'almeria': 'ES-AL',
	'asturias': 'ES-O',
	'avila': 'ES-AV',
	'badajoz': 'ES-BA',
	'barcelona': 'ES-B',
	'bizkaia': 'ES-BI',
	'vizcaya': 'ES-BI',
	'burgos': 'ES-BU',
	'caceres': 'ES-CC',
	'cadiz': 'ES-CA',
	'cantabria': 'ES-S',
	'castello': 'ES-CS',
	'castellon': 'ES-CS',
	'ceuta': 'ES-CE',
	'ciudad real': 'ES-CR',
	'cordoba': 'ES-CO',
	'cuenca': 'ES-CU',
	'gerona': 'ES-GI',
	'girona': 'ES-GI',
	'granada': 'ES-GR',
	'guadalajara': 'ES-GU',
	'guipuzcoa': 'ES-SS',
	'gipuzkoa': 'ES-SS',
	'huelva': 'ES-H',
	'huesca': 'ES-HU',
	'illes balears': 'ES-PM',
	'islas baleares': 'ES-PM',
	'baleares': 'ES-PM',
	'jaen': 'ES-J',
	'la rioja': 'ES-LO',
	'las palmas': 'ES-GC',
	'leon': 'ES-LE',
	'lerida': 'ES-L',
	'lleida': 'ES-L',
	'lugo': 'ES-LU',
	'madrid': 'ES-M',
	'malaga': 'ES-MA',
	'murcia': 'ES-MU',
	'nafarroa': 'ES-NA',
	'navarra': 'ES-NA',
	'orense': 'ES-OR',
	'ourense': 'ES-OR',
	'palencia': 'ES-P',
	'pontevedra': 'ES-PO',
	'salamanca': 'ES-SA',
	'santa cruz de tenerife': 'ES-TF',
	'segovia': 'ES-SG',
	'sevilla': 'ES-SE',
	'soria': 'ES-SO',
	'tarragona': 'ES-T',
	'teruel': 'ES-TE',
	'toledo': 'ES-TO',
	'valencia': 'ES-V',
	'valladolid': 'ES-VA',
	'zamora': 'ES-ZA',
	'zaragoza': 'ES-Z',
	'melilla': 'ES-ML',

	// Comunidades autónomas y regiones
	'andalucia': 'ES-AN',
	'aragon': 'ES-AR',
	'principado de asturias': 'ES-AS',
	'canarias': 'ES-CN',
	'castilla y leon': 'ES-CL',
	'castilla-la mancha': 'ES-CM',
	'castilla la mancha': 'ES-CM',
	'cataluna': 'ES-CT',
	'catalunya': 'ES-CT',
	'formentera': 'ES-PM',
	'ibiza': 'ES-PM',
	'eivissa': 'ES-PM',
	'mallorca': 'ES-PM',
	'menorca': 'ES-PM',
	'el hierro': 'ES-CN',
	'fuerteventura': 'ES-CN',
	'gran canaria': 'ES-CN',
	'la gomera': 'ES-CN',
	'la palma': 'ES-CN',
	'lanzarote': 'ES-CN',
	'tenerife': 'ES-CN',
	'extremadura': 'ES-EX',
	'galicia': 'ES-GA',
	'euskadi': 'ES-PV',
	'pais vasco': 'ES-PV',
	'comunidad de madrid': 'ES-MD',
	'comunidad foral de navarra': 'ES-NC',
	'region de murcia': 'ES-MC',
	'comunidad valenciana': 'ES-VC',
	'comunitat valenciana': 'ES-VC',

	// Distritos y regiones autónomas de Portugal (ISO 3166-2:PT)
	'aveiro': 'PT-01',
	'beja': 'PT-02',
	'braga': 'PT-03',
	'braganca': 'PT-04',
	'castelo branco': 'PT-05',
	'coimbra': 'PT-06',
	'evora': 'PT-07',
	'faro': 'PT-08',
	'guarda': 'PT-09',
	'leiria': 'PT-10',
	'lisboa': 'PT-11',
	'area metropolitana de lisboa': 'PT-11',
	'portalegre': 'PT-12',
	'porto': 'PT-13',
	'santarem': 'PT-14',
	'setubal': 'PT-15',
	'viana do castelo': 'PT-16',
	'vila real': 'PT-17',
	'viseu': 'PT-18',
	'acores': 'PT-20',
	'madeira': 'PT-30',
};

/**
 * Todos los códigos de ISO 3166-2:ES y ISO 3166-2:PT, para poder aceptar los
 * que una web pase ya escritos (por ejemplo `ES-IB` en lugar de `ES-PM`) y
 * rechazar los inventados como `ES-JA`.
 */
export const ISO_REGION_CODES = [
	// Provincias y ciudades autónomas de España
	'ES-A', 'ES-AB', 'ES-AL', 'ES-AV', 'ES-B', 'ES-BA', 'ES-BI', 'ES-BU', 'ES-C', 'ES-CA',
	'ES-CC', 'ES-CE', 'ES-CO', 'ES-CR', 'ES-CS', 'ES-CU', 'ES-GC', 'ES-GI', 'ES-GR', 'ES-GU',
	'ES-H', 'ES-HU', 'ES-J', 'ES-L', 'ES-LE', 'ES-LO', 'ES-LU', 'ES-M', 'ES-MA', 'ES-ML',
	'ES-MU', 'ES-NA', 'ES-O', 'ES-OR', 'ES-P', 'ES-PM', 'ES-PO', 'ES-S', 'ES-SA', 'ES-SE',
	'ES-SG', 'ES-SO', 'ES-SS', 'ES-T', 'ES-TE', 'ES-TF', 'ES-TO', 'ES-V', 'ES-VA', 'ES-VI',
	'ES-Z', 'ES-ZA',
	// Comunidades autónomas de España
	'ES-AN', 'ES-AR', 'ES-AS', 'ES-CB', 'ES-CL', 'ES-CM', 'ES-CN', 'ES-CT', 'ES-EX', 'ES-GA',
	'ES-IB', 'ES-MC', 'ES-MD', 'ES-NC', 'ES-PV', 'ES-RI', 'ES-VC',
	// Distritos y regiones autónomas de Portugal
	'PT-01', 'PT-02', 'PT-03', 'PT-04', 'PT-05', 'PT-06', 'PT-07', 'PT-08', 'PT-09', 'PT-10',
	'PT-11', 'PT-12', 'PT-13', 'PT-14', 'PT-15', 'PT-16', 'PT-17', 'PT-18', 'PT-20', 'PT-30',
];

/**
 * Provincia → comunidad autónoma. Sirve para aceptar las dos formas: un negocio de
 * Castellón puede anunciar `ES-CS` (provincia) o `ES-VC` (su comunidad), pero no `ES-AN`.
 */
export const COMMUNITY_OF_PROVINCE: Record<string, string> = {
	'ES-C': 'ES-GA',
	'ES-VI': 'ES-PV',
	'ES-AB': 'ES-CM',
	'ES-A': 'ES-VC',
	'ES-AL': 'ES-AN',
	'ES-O': 'ES-AS',
	'ES-AV': 'ES-CL',
	'ES-BA': 'ES-EX',
	'ES-B': 'ES-CT',
	'ES-BI': 'ES-PV',
	'ES-BU': 'ES-CL',
	'ES-CC': 'ES-EX',
	'ES-CA': 'ES-AN',
	'ES-S': 'ES-CB',
	'ES-CS': 'ES-VC',
	'ES-CE': 'ES-CE',
	'ES-CR': 'ES-CM',
	'ES-CO': 'ES-AN',
	'ES-CU': 'ES-CM',
	'ES-GI': 'ES-CT',
	'ES-GR': 'ES-AN',
	'ES-GU': 'ES-CM',
	'ES-SS': 'ES-PV',
	'ES-H': 'ES-AN',
	'ES-HU': 'ES-AR',
	'ES-PM': 'ES-IB',
	'ES-J': 'ES-AN',
	'ES-LO': 'ES-RI',
	'ES-GC': 'ES-CN',
	'ES-LE': 'ES-CL',
	'ES-L': 'ES-CT',
	'ES-LU': 'ES-GA',
	'ES-M': 'ES-MD',
	'ES-MA': 'ES-AN',
	'ES-MU': 'ES-MC',
	'ES-ML': 'ES-ML',
	'ES-NA': 'ES-NC',
	'ES-OR': 'ES-GA',
	'ES-P': 'ES-CL',
	'ES-PO': 'ES-GA',
	'ES-SA': 'ES-CL',
	'ES-TF': 'ES-CN',
	'ES-SG': 'ES-CL',
	'ES-SE': 'ES-AN',
	'ES-SO': 'ES-CL',
	'ES-T': 'ES-CT',
	'ES-TE': 'ES-AR',
	'ES-TO': 'ES-CM',
	'ES-V': 'ES-VC',
	'ES-VA': 'ES-CL',
	'ES-ZA': 'ES-CL',
	'ES-Z': 'ES-AR',
};

/** Comunidad autónoma de un código de provincia (o el propio código si ya lo es). */
export const communityOf = (code: string): string => COMMUNITY_OF_PROVINCE[code] ?? code;

/** ¿Los dos códigos apuntan al mismo territorio (misma provincia o misma comunidad)? */
export const sameRegion = (a: string, b: string): boolean => communityOf(a) === communityOf(b);

const VALID_CODES = new Set(ISO_REGION_CODES);

/** Normaliza un nombre de región: sin acentos, en minúsculas y con espacios simples. */
const normalize = (value: string) =>
	value
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.toLowerCase()
		.replace(/\s+/g, ' ')
		.trim();

/**
 * Devuelve el código ISO 3166-2 de una región, ya venga como nombre
 * («Cáceres», «Comunitat Valenciana»), como nombre compuesto («Málaga, Andalucía»)
 * o como código válido («ES-CC»). Devuelve `null` si no se reconoce, para no
 * publicar un dato falso.
 */
export function geoRegionCode(value?: string | null): string | null {
	if (!value) return null;
	const clean = normalize(value);
	if (/^[a-z]{2}-[a-z0-9]{1,2}$/.test(clean)) {
		const code = clean.toUpperCase();
		return VALID_CODES.has(code) ? code : null;
	}
	if (REGION_CODES[clean]) return REGION_CODES[clean];
	// «Málaga, Andalucía» o «Distrito de Lisboa»: se prueban las partes y el nombre sin su prefijo.
	for (const part of clean.split(',').map((p) => p.replace(/^(distrito|provincia|comarca|region) de /, '').trim())) {
		if (REGION_CODES[part]) return REGION_CODES[part];
	}
	return null;
}
