/**
 * Tasa por el ejercicio de la potestad jurisdiccional (Ley 10/2012).
 *
 * Los importes salen del art. 7.1 de la Ley 10/2012, en el texto consolidado
 * del BOE, y de la nota informativa de la Agencia Tributaria de 7 de septiembre
 * de 2016 sobre la STC 140/2016, que es la que explica qué hay que
 * autoliquidar después de la sentencia.
 *
 * **Lo que la sentencia cambió, y es lo que más se ve:**
 *
 * 1. **Las personas físicas están exentas** (art. 4.2.a, modificado por la Ley
 *    25/2015). Quien va como particular no paga tasa judicial. Es lo primero que
 *    hay que decir, porque todavía hay despachos que la cobran igual.
 * 2. **La cuota variable sobre la cuantía desapareció.** El art. 7.2, que
 *    aplicaba el 0,5 %, fue declarado nulo. Hoy la cuantía del litigio no
 *    cambia el importe: solo cuenta el tipo de proceso.
 * 3. **Se anularon todas las cuotas del orden contencioso-administrativo y
 *    social**, y en el civil las de apelación y casación. La nota de la AEAT
 *    dice que desde el 15 de agosto de 2016 no hay obligación de presentar el
 *    modelo 696 por esos conceptos.
 *
 * Sobre el punto 3 hay una lecturas práctica posterior que sí cobra la
 * apelación y la casación civiles a las personas jurídicas. Por eso las
 * entradas marcadas como `anulada` llevan la nota en la propia ficha en vez de
 * desaparecer: la calculadora enseña el importe que dice la ley y avisa de la
 * salvedad, que es lo que un profesional necesita y lo que un particular
 * entendería mal si le diéramos solo un cero.
 *
 * - Bonificación del 10 % por presentación telemática (art. 10).
 * - Devolución del 60 % si el proceso acaba en acuerdo o allanamiento total, y
 *   del 20 % por acumulación de procesos (art. 8.5 y 8.6).
 * - Si se impone las costas al demandado, la tasa va con ellas (art. 241.1.7ª
 *   de la Ley de Enjuiciamiento Civil).
 */

export interface ProcesoTasa {
	id: string;
	orden: 'civil' | 'contencioso' | 'social';
	nombre: string;
	/** Cuota fija en euros del art. 7.1. */
	fija: number;
	/** Anulada por la STC 140/2016: no hay que autoliquidar. */
	anulada: boolean;
	nota?: string;
}

export const PROCESOS_TASA: ProcesoTasa[] = [
	{
		id: 'verbal-2000',
		orden: 'civil',
		nombre: 'Juicio verbal hasta 2.000 euros',
		fija: 0,
		anulada: false,
		nota: 'Exento mientras la cuantía no pase de 2.000 euros (art. 4.1.c).',
	},
	{
		id: 'verbal',
		orden: 'civil',
		nombre: 'Juicio verbal por encima de 2.000 euros',
		fija: 150,
		anulada: false,
	},
	{
		id: 'ordinario',
		orden: 'civil',
		nombre: 'Juicio ordinario',
		fija: 300,
		anulada: false,
		nota:
			'Si el documento es un título ejecutivo extrajudicial, hay un camino más barato: el monitorio.',
	},
	{
		id: 'monitorio',
		orden: 'civil',
		nombre: 'Procedimiento monitorio o monitorio europeo',
		fija: 100,
		anulada: false,
		nota:
			'Exento hasta 2.000 euros de cuantía. Es la vía más barata para reclamar una deuda con un pagaré o un contrato.',
	},
	{
		id: 'ejecucion-extrajudicial',
		orden: 'civil',
		nombre: 'Ejecución de títulos ejecutivos extrajudiciales',
		fija: 200,
		anulada: false,
		nota: 'Un pagaré, una póliza con fe notarial o una escritura de cantidad determinada.',
	},
	{
		id: 'oposicion-titulos',
		orden: 'civil',
		nombre: 'Oposición a la ejecución de títulos judiciales',
		fija: 200,
		anulada: false,
	},
	{
		id: 'concurso-necesario',
		orden: 'civil',
		nombre: 'Solicitud de concurso necesario',
		fija: 200,
		anulada: false,
		nota: 'El concurso voluntario que pide el propio deudor está exento (art. 4.1.b).',
	},
	{
		id: 'apelacion',
		orden: 'civil',
		nombre: 'Recurso de apelación',
		fija: 800,
		anulada: true,
		nota:
			'La STC 140/2016 la anuló y la nota de la AEAT dice que no hay que autoliquidarla. En la práctica se viene pasando a las empresas: consúltalo antes de pagar.',
	},
	{
		id: 'casacion',
		orden: 'civil',
		nombre: 'Recurso de casación o extraordinario por infracción procesal',
		fija: 1_200,
		anulada: true,
		nota: 'Misma salvedad que la apelación: cuota anulada por la STC 140/2016.',
	},
	{
		id: 'ca-abreviado',
		orden: 'contencioso',
		nombre: 'Procedimiento abreviado',
		fija: 200,
		anulada: true,
		nota: 'Anulada por la STC 140/2016: no hay autoliquidación.',
	},
	{
		id: 'ca-ordinario',
		orden: 'contencioso',
		nombre: 'Procedimiento ordinario',
		fija: 350,
		anulada: true,
		nota: 'Anulada por la STC 140/2016: no hay autoliquidación.',
	},
	{
		id: 'ca-apelacion',
		orden: 'contencioso',
		nombre: 'Recurso de apelación',
		fija: 800,
		anulada: true,
		nota: 'Anulada por la STC 140/2016: no hay autoliquidación.',
	},
	{
		id: 'ca-casacion',
		orden: 'contencioso',
		nombre: 'Recurso de casación',
		fija: 1_200,
		anulada: true,
		nota: 'Anulada por la STC 140/2016: no hay autoliquidación.',
	},
	{
		id: 'suplicacion',
		orden: 'social',
		nombre: 'Recurso de suplicación',
		fija: 500,
		anulada: true,
		nota:
			'Anulada por la STC 140/2016. La demanda en primera instancia no genera tasa: en lo social solo tributan los recursos.',
	},
	{
		id: 'social-casacion',
		orden: 'social',
		nombre: 'Recurso de casación',
		fija: 750,
		anulada: true,
		nota: 'Anulada por la STC 140/2016: no hay autoliquidación.',
	},
];

/** Órdenes sin tasa con ningún concepto: el penal entero, y la primera instancia social. */
export const ORDENES_SIN_TASA = [
	'En el orden penal no se cobra tasa judicial en ningún supuesto.',
	'En el orden social, solo tributaban el recurso de suplicación y el de casación, y ambos están anulados.',
];

export const BONIFICACION_TELEMATICA = 0.1;
export const DEVOLUCION_ACUERDO = 0.6;
export const DEVOLUCION_ACUMULACION = 0.2;
