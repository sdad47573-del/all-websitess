export interface BuyItem {
	name: string;
	amount: number;
}

export interface Sell {
	label: string;
	data: string;
	price: number;
	received: number;
	quantity: number;
	items: BuyItem[];
}

export const SELL: Sell[] = [
	{
		label: 'venta segundos vapers',
		data: '17/10/2025',
		price: 1000,
		received: 1000,
		quantity: 100,
		items: [
			{ name: 'Double Apple', amount: 20 },
			{ name: 'Lemon Lime', amount: 10 },
			{ name: 'Mixed Berry', amount: 10 },
			{ name: 'Peach Mango Pineapple', amount: 20 },
			{ name: 'Pink Lemonade', amount: 30 },
			{ name: 'Red Bull', amount: 10 },
		],
	},
	{
		label: '',
		data: '17/10/2025',
		price: 350,
		received: 350,
		quantity: 35,
		items: [
			{ name: 'Raspberry Watermelon', amount: 20 },
			{ name: 'Watermelon Ice', amount: 5 },
		],
	},
	{
		label: 'vapers lolo niño',
		data: '17/10/2025',
		price: 34,
		received: 34,
		quantity: 4,
		items: [{ name: 'Watermelon Ice', amount: 4 }],
	},
	{
		label: 'venta 2º vapers',
		data: '17/10/2025',
		price: 180,
		received: 180,
		quantity: 20,
		items: [
			{ name: 'cool mint', amount: 15 },
			{ name: 'Blueberry Cherry Cranberry', amount: 5 },
		],
	},
	{
		label: 'vapers niño lolo',
		data: '30/10/2025',
		price: 332,
		received: 332,
		quantity: 40,
		items: [
			{ name: 'Blueberry Ice', amount: 10 },
			{ name: 'Double Apple', amount: 30 },
		],
	},
	{
		label: 'autoconsumo ISMAEL',
		data: '30/10/2025',
		price: 0,
		received: 0,
		quantity: 6,
		items: [
			{ name: 'Blueberry Cherry Cranberry', amount: 5 },
			{ name: 'Kiwi Passion Fruit Guava', amount: 1 },
		],
	},
	{
		label: '',
		data: '30/10/2025',
		price: 0,
		received: 0,
		quantity: 90,
		items: [
			{ name: 'Kiwi Passion Fruit Guava', amount: 9 },
			{ name: 'Strawberry Watermelon', amount: 10 },
			{ name: 'Watermelon Ice', amount: 20 },
			{ name: 'blackberry blueberry ice', amount: 10 },
			{ name: 'cool mint', amount: 20 },
			{ name: 'triple cherry', amount: 20 },
		],
	},
	{
		label: '',
		data: '18/11/2025',
		price: 0,
		received: 0,
		quantity: 200,
		items: [
			{ name: 'Black Ice Drangofruit Strawberry', amount: 10 },
			{ name: 'Blueberry Blackcurrant Ice', amount: 10 },
			{ name: 'Blueberry Cherry Cola', amount: 10 },
			{ name: 'Blueberry Ice', amount: 10 },
			{ name: 'Double Apple', amount: 10 },
			{ name: 'Lemon Lime', amount: 20 },
			{ name: 'Mixed Berry', amount: 10 },
			{ name: 'Peach Mango Pineapple', amount: 10 },
			{ name: 'Pink Lemonade', amount: 10 },
			{ name: 'Raspberry Watermelon', amount: 10 },
			{ name: 'Red Bull', amount: 10 },
			{ name: 'Strawberry Banana', amount: 10 },
			{ name: 'Strawberry Ice', amount: 10 },
			{ name: 'Strawberry Kiwi', amount: 10 },
			{ name: 'Watermelon Ice', amount: 10 },
			{ name: 'cool mint', amount: 10 },
			{ name: 'grape burst', amount: 10 },
			{ name: 'love 66', amount: 10 },
			{ name: 'strawberry vanilla cola', amount: 10 },
		],
	},
];
