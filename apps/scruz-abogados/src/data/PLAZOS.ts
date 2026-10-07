/**
 * Plazos legales por materia, con el artículo del que sale cada uno.
 *
 * Existe para la calculadora de plazos de `/calculadora-plazos/`. Cada entrada
 * guarda su base de cómputo y su artículo porque un plazo sin base no sirve
 * para nada: lo que la gente se equivoca no es el número, es la fecha desde la
 * que se cuenta. Por eso el campo `base` está en el dato y no en el texto de
 * la página, y la calculadora lo enseña junto al resultado.
 *
 * **Todos los artículos están comprobados en el texto consolidado del BOE.**
 * Cuando un plazo depende de una norma sectorial que no se ha verificado, no
 * se ha puesto: se prefiere un catálogo corto y certo que uno largo y
 * dudoso. Si se añade una entrada, se añade con el artículo, o no se añade.
 *
 * - Ley 39/2015 (LPC): arts. 122 (alzada), 124 (reposición), 125 (extraordinario
 *   de revisión) y 30 (cómputo de plazos).
 * - Ley 29/1998 (LJCA): art. 46 (plazo del recurso contencioso).
 * - Ley 40/2015 (Régimen Jurídico del Sector Público): art. 30 (prescripción de
 *   infracciones).
 * - Ley de Enjuiciamiento Civil: arts. 188, 189, 190 y 263.
 * - Estatuto de los Trabajadores: art. 59.2.
 * - Real Decreto 2/2015, art. 3.2 (acta de despido).
 */

export type Computo = 'naturales' | 'habiles' | 'fecha-a-fecha';

export interface Materia {
	id: string;
	nombre: string;
	resumen: string;
	/** Página de servicio donde se explica la materia entera. */
	href: string;
}

export interface Plazo {
	id: string;
	materia: string;
	nombre: string;
	/** Texto del plazo tal y como lo dice la norma. */
	texto: string;
	/** Cantidad en meses de calendario, si el plazo va en meses. */
	meses?: number;
	/** Cantidad en días, si el plazo va en días. */
	dias?: number;
	computo: Computo;
	/** Desde qué fecha se cuenta, y si hay que sumo un día. */
	base: string;
	fuente: string;
	/** Lo que suele hacer que este plazo se pierda. */
	aviso?: string;
}

export const MATERIAS: Materia[] = [
	{
		id: 'recursos',
		nombre: 'Recursos administrativos',
		resumen:
			'Recursos contra una multa, una sanción o un acto de la Administración. Es la materia con más plazos distintos y la que más se confunde.',
		href: '/recursos-administrativos/',
	},
	{
		id: 'herencias',
		nombre: 'Herencias y sucesiones',
		resumen:
			'Lo que hay que hacer en los días siguientes a un fallecimiento, antes de que otro las dé por perdidas.',
		href: '/herencias-testamentos/',
	},
	{
		id: 'laboral',
		nombre: 'Laboral',
		resumen:
			'Reclamar un salario, impugnar un despido o pedir el acta. El plazo corre desde fechas distintas según lo que reclames.',
		href: '/despidos/',
	},
	{
		id: 'prescripcion',
		nombre: 'Prescripción',
		resumen:
			'Cuándo se pierde el derecho a pedir algo, por muy legítimo que sea. Aquí el plazo no se interrumpe solo por reclamar.',
		href: '/reclamaciones-bancarias/',
	},
];

export const PLAZOS: Plazo[] = [
	{
		id: 'reposicion',
		materia: 'recursos',
		nombre: 'Recurso potestativo de reposición',
		texto: 'un mes',
		meses: 1,
		computo: 'fecha-a-fecha',
		base: 'el día siguiente al de la notificación de la resolución',
		fuente: 'art. 124.1 de la Ley 39/2015',
		aviso:
			'El plazo empieza con la notificación, no con la fecha que pone el acta. Y si el acto es de mero trámite, son tres días.',
	},
	{
		id: 'reposicion-mero-tramite',
		materia: 'recursos',
		nombre: 'Recurso de reposición de un acto de mero trámite',
		texto: 'tres días',
		dias: 3,
		computo: 'habiles',
		base: 'el día siguiente al de la notificación',
		fuente: 'art. 124.2 de la Ley 39/2015',
		aviso:
			'El concepto de mero trámite no siempre está claro en la notificación. Si hay duda, se usa el mes.',
	},
	{
		id: 'alzada',
		materia: 'recursos',
		nombre: 'Recurso de alzada',
		texto: 'un mes',
		meses: 1,
		computo: 'fecha-a-fecha',
		base: 'el día siguiente al de la notificación del acto que se recurre',
		fuente: 'art. 122.1 de la Ley 39/2015',
		aviso:
			'El de alzada va al órgano superior. Si el acto ya pone fin a la vía administrativa, este recurso no es el sitio.',
	},
	{
		id: 'extraordinario-revision',
		materia: 'recursos',
		nombre: 'Recurso extraordinario de revisión',
		texto: 'cuatro días hábiles',
		dias: 4,
		computo: 'habiles',
		base: 'el día siguiente al de la notificación',
		fuente: 'art. 125.2 de la Ley 39/2015',
		aviso:
			'Es un plazo muy corto y solo procede en casos tasados: no es la vía para discutir un acto que simplemente no te gusta.',
	},
	{
		id: 'contencioso-expreso',
		materia: 'recursos',
		nombre: 'Recurso contencioso contra un acto expreso',
		texto: 'dos meses',
		meses: 2,
		computo: 'fecha-a-fecha',
		base: 'el día siguiente al de la notificación del acto que pone fin a la vía administrativa',
		fuente: 'art. 46.1 de la Ley 29/1998',
		aviso:
			'Es un plazo de caducidad: no se interrumpe ni se suspende. Antes hay que agotar la vía administrativa, salvo que el acto sea de mero trámite.',
	},
	{
		id: 'contencioso-silencio',
		materia: 'recursos',
		nombre: 'Recurso contencioso contra un acto presunto',
		texto: 'seis meses',
		meses: 6,
		computo: 'fecha-a-fecha',
		base: 'el día siguiente a aquel en que se entiende producido el acto presunto',
		fuente: 'art. 46.1 de la Ley 29/1998',
		aviso:
			'Ojo con el punto de partida: muchas veces no es la fecha de la solicitud, sino la en que la ley dice que se produce el silencio.',
	},
	{
		id: 'via-hecho',
		materia: 'recursos',
		nombre: 'Recurso contencioso contra una vía de hecho',
		texto: 'diez días desde el requerimiento',
		dias: 10,
		computo: 'naturales',
		base: 'el día siguiente a aquel en que venció el plazo del requerimiento de la Administración',
		fuente: 'art. 46.3 de la Ley 29/1998',
		aviso:
			'Es el plazo más corto de los recursos. Si no se hizo requerimiento, son veinte días, pero conviene no arriesgarse a este cálculo.',
	},
	{
		id: 'herencia-aceptar',
		materia: 'herencias',
		nombre: 'Aceptar o rechazar la herencia',
		texto: 'quince días',
		dias: 15,
		computo: 'naturales',
		base: 'el día siguiente al del fallecimiento, o al de aquel en que se tuvo conocimiento de la muerte',
		fuente: 'art. 188 de la Ley de Enjuiciamiento Civil',
		aviso:
			'Pasados esos quince días, la herencia se acepta a beneficio de inventario aunque nadie haya dicho nada. Es el plazo que más dinero cuesta dejar pasar.',
	},
	{
		id: 'herencia-prerrogativa',
		materia: 'herencias',
		nombre: 'Prerrogativa para menores y para quien no sabía que había muerto',
		texto: 'un mes',
		meses: 1,
		computo: 'fecha-a-fecha',
		base: 'el día siguiente al del fallecimiento o al de aquel en que se tuvo conocimiento de ella',
		fuente: 'art. 189 de la Ley de Enjuiciamiento Civil',
		aviso:
			'Es para menores de edad y para quien no sabía que había muerto: si no constan empadronados en el municipio, no te puede llegar la notificación, y el plazo sigue corriendo igualmente.',
	},
	{
		id: 'herencia-recision',
		materia: 'herencias',
		nombre: 'Recisión de la aceptación pura de la herencia',
		texto: 'sesenta días',
		dias: 60,
		computo: 'naturales',
		base: 'el día siguiente al de la aceptación',
		fuente: 'art. 190.1 de la Ley de Enjuiciamiento Civil',
		aviso:
			'Es la única puerta para deshacer una aceptación hecha sin inventario. Aceptar a beneficio de inventario, no: eso no se recinde.',
	},
	{
		id: 'herencia-legitima',
		materia: 'herencias',
		nombre: 'Reclamación de la legítima',
		texto: 'un año',
		meses: 12,
		computo: 'fecha-a-fecha',
		base: 'el día siguiente al del fallecimiento',
		fuente: 'art. 263 de la Ley de Enjuiciamiento Civil',
		aviso:
			'El año corre para todos los herederos desde el fallecimiento, no desde que uno se enteró de los hechos.',
	},
	{
		id: 'laboral-despido',
		materia: 'laboral',
		nombre: 'Reclamar la copia del acta de despido',
		texto: 'veinte días hábiles',
		dias: 20,
		computo: 'habiles',
		base: 'el día siguiente al de la fecha del despido',
		fuente: 'art. 3.2 del Real Decreto 2/2015',
		aviso:
			'Es el primer paso: sin el acta no se puede impugnar. Ojo: el plazo para impugnar el despido, una vez leída, es de tres meses.',
	},
	{
		id: 'laboral-prescripcion',
		materia: 'laboral',
		nombre: 'Prescripción de los derechos laborales',
		texto: 'un año',
		meses: 12,
		computo: 'fecha-a-fecha',
		base: 'el día siguiente a aquel en que el derecho se hizo exigible',
		fuente: 'art. 59.2 del Estatuto de los Trabajadores',
		aviso:
			'El año corre desde que el derecho se hizo exigible, no desde que se enteró el trabajador. Reclamar dentro del año interrumpe la prescripción y el reloj vuelve a cero.',
	},
	{
		id: 'prescripcion-infracciones',
		materia: 'prescripcion',
		nombre: 'Prescripción de una infracción administrativa',
		texto: 'cuatro años',
		meses: 48,
		computo: 'fecha-a-fecha',
		base: 'el día siguiente al de la comisión de la infracción',
		fuente: 'art. 30.2 de la Ley 40/2015',
		aviso:
			'Cuatro años es el plazo general. Las infracciones tipificadas expresamente como leves prescriben a los tres años.',
	},
	{
		id: 'prescripcion-leves',
		materia: 'prescripcion',
		nombre: 'Prescripción de una infracción tipificada como leve',
		texto: 'tres años',
		meses: 36,
		computo: 'fecha-a-fecha',
		base: 'el día siguiente al de la comisión de la infracción',
		fuente: 'art. 30.2.b de la Ley 40/2015',
		aviso: 'No todas las infracciones son leves, aunque parezcan pequeñas. Depende de cómo las tipifique la norma.',
	},
	{
		id: 'prescripcion-civil',
		materia: 'prescripcion',
		nombre: 'Prescripción de una acción personal ordinaria',
		texto: 'cinco años',
		meses: 60,
		computo: 'fecha-a-fecha',
		base: 'el día siguiente al en que la acción se hizo exigible',
		fuente: 'art. 1968 del Código Civil',
		aviso:
			'Es el plazo general de las acciones personales. Los plazos especiales, como el de la legítima o el de las sublaborales, son más cortos.',
	},
];
