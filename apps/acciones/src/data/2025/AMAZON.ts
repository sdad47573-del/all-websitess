import { DataType, TYPES } from '../utils';
import { NAMES } from '../names';
const AMAZON_BUY_2024: DataType[] = [
	{
		date: '11/12/2024',
		type: TYPES.compra,
		id: 'f6449789128e47b4bb89cfb0f99508ed',
		name: NAMES.AMAZON,
		amount: 20,
		price: 4396,
	},
];
export const AMAZON: DataType[] = [
	...AMAZON_BUY_2024,
	{
		date: '17/01/2025',
		type: TYPES.venta,
		id: '751c579c09514e5eb8f609bcd71df37a',
		name: NAMES.AMAZON,
		amount: 20,
		price: 4405,
	},
];
