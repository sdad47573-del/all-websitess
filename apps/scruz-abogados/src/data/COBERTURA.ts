/**
 * Materias que atiende cada plaza, derivadas de su ficha.
 *
 * **Lo que es esto y lo que no es.** No es una declaración del despacho de qué
 * hace en cada pueblo: es una lectura por palabras clave del campo `matters`
 * que ya está escrito en `src/data/cities/*.ts`. Ese campo es lo que cuenta el
 * propio letrado de la plaza, y la página enseña su texto tal cual debajo de
 * las etiquetas, para que se pueda comprobar de dónde sale cada una.
 *
 * Por qué se lee en vez de declararse: declarar 29 plazas × 10 materias a mano
 * son 290 datos que se quedan viejos en cuanto una ficha cambia, y lo que
 * aparece desactualizado en una web de abogados es peor que no aparecer. Con
 * esta lectura, cambiar una ficha cambia el mapa el mismo día, y el texto
 * original sigue estando a la vista para contrastar.
 *
 * Las palabras que se buscan son intencionadamente amplias. Un caso que toca
 * dos materias aparece en las dos: una Queries de despacho en Rute que es de
 * herencias y de fincas, es de herencias y de urbanismo, y filtrar por una sola
 * escondería la mitad del trabajo de esa plaza.
 */

export interface Materia {
	id: string;
	nombre: string;
	/** Texto que se busca en el campo `matters` de la ficha. */
	patron: RegExp;
}

export const MATERIAS_COBERTURA: Materia[] = [
	{ id: 'herencias', nombre: 'Herencias y sucesiones', patron: /herencia|sucesi|testament|partici|legado/ },
	{ id: 'laboral', nombre: 'Derecho laboral', patron: /laboral|n[oó]mina|despido|accidente|seguridad social/ },
	{ id: 'familia', nombre: 'Familia', patron: /familia|divorcio|guarda|paternidad|alimentos|medidas/ },
	{ id: 'administrativo', nombre: 'Recursos administrativos', patron: /administrativ|multa|sanci|procedimiento|expediente/ },
	{ id: 'urbanismo', nombre: 'Urbanismo', patron: /urbanis|obra|licencia|suelo|edific/ },
	{ id: 'penal', nombre: 'Derecho penal', patron: /penal|delito|denuncia/, },
	{ id: 'mercantil', nombre: 'Mercantil y empresas', patron: /mercantil|sociedad|empresa|contrato|comercial/ },
	{ id: 'seguros', nombre: 'Seguros e indemnizaciones', patron: /seguro|indemniza/ },
	{ id: 'fiscal', nombre: 'Fiscal', patron: /fiscal|impuesto|tribut|tasa/ },
	{ id: 'extranjeria', nombre: 'Extranjería', patron: /NIE|extranjer|nacionalidad|residencia/ },
	{ id: 'consumo', nombre: 'Consumo y banca', patron: /consumo|banca|deuda|impag/ },
];

export const materiaNombre = (id: string): string =>
	MATERIAS_COBERTURA.find((m) => m.id === id)?.nombre ?? id;

/** Materias detectadas en el texto de la ficha de una plaza. */
export const materiasDe = (matters: string): string[] =>
	MATERIAS_COBERTURA.filter((m) => m.patron.test(matters)).map((m) => m.id);
