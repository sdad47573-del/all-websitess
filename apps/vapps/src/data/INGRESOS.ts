export interface Ingreso {
	label: string;
	EUR: number;
	FECHA: Date;
}

export const INGRESOS: Ingreso[] = [
	{ label: 'efectivo', EUR: 160, FECHA: new Date('2025-10-22') },
	{ label: 'ANGEL RU', EUR: 10, FECHA: new Date('2025-10-23') },
	{ label: 'SHAKIRA JL', EUR: 11, FECHA: new Date('2025-10-23') },
	{ label: 'DIEGO RM', EUR: 11, FECHA: new Date('2025-10-24') },
	{ label: 'ALBA CL', EUR: 11, FECHA: new Date('2025-10-28') },
	{ label: 'CARMEN YANG ME', EUR: 11, FECHA: new Date('2025-10-28') },
	{ label: 'DANI RS', EUR: 10, FECHA: new Date('2025-10-29') },
	{ label: 'ISMA AP', EUR: 20, FECHA: new Date('2025-10-29') },
	{ label: 'JOSE CAR MJ', EUR: 11, FECHA: new Date('2025-10-31') },
	{ label: 'MARINA CB', EUR: 11, FECHA: new Date('2025-10-31') },
	{ label: 'efectivo', EUR: 1132.32, FECHA: new Date('2025-11-01') },
	{ label: 'YASSIR SK', EUR: 11, FECHA: new Date('2025-11-05') },
	{ label: 'JOSE MIGU AR', EUR: 10, FECHA: new Date('2025-11-07') },
	{ label: 'ROSA MARIA PA', EUR: 20, FECHA: new Date('2025-11-09') },
	{ label: 'ANA BP', EUR: 10, FECHA: new Date('2025-11-09') },
	{ label: 'LUIS O', EUR: 10, FECHA: new Date('2025-11-09') },
	{ label: 'ADRIAN SR', EUR: 27, FECHA: new Date('2025-11-12') },
	{ label: 'efectivo', EUR: 621.3, FECHA: new Date('2025-11-12') },
	{ label: 'LUIS O', EUR: 10, FECHA: new Date('2025-11-13') },
	{ label: 'JOSE RR', EUR: 10, FECHA: new Date('2025-11-14') },
	{ label: 'ANTONIO RJ', EUR: 36, FECHA: new Date('2025-11-15') },
	{ label: 'ANDRES MR', EUR: 18, FECHA: new Date('2025-11-16') },
	{ label: 'MANU MA', EUR: 8, FECHA: new Date('2025-11-21') },
	{ label: 'MANU GM', EUR: 9, FECHA: new Date('2025-11-22') },
	{ label: 'FRANCISCO  JAVIER MP', EUR: 8, FECHA: new Date('2025-11-22') },
	{ label: 'ANTONIO RJ', EUR: 8, FECHA: new Date('2025-11-22') },
	{ label: 'PABLO PM', EUR: 8, FECHA: new Date('2025-11-22') },
	{ label: 'ARIADNA CD', EUR: 8, FECHA: new Date('2025-11-23') },
	{ label: 'efectivo', EUR: 695, FECHA: new Date('2025-11-27') },
	{ label: 'efectivo', EUR: 39.8, FECHA: new Date('2025-11-27') },
	{ label: 'ALBA CL', EUR: 10, FECHA: new Date('2025-11-26') },
	{ label: 'ISMA AP', EUR: 25, FECHA: new Date('2025-11-30') },
	{ label: 'JOSE RR', EUR: 10, FECHA: new Date('2025-12-01') },
];
export const TOTAL_INGRESOS = INGRESOS.reduce((total, item) => total + item.EUR, 0);
