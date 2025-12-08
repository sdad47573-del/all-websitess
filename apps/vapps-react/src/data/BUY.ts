export interface BuyItem {
	name: string;
	amount: number;
}

export interface Buy {
	data: string;
	price: number;
	quantity: number;
	items: BuyItem[];
}

export const BUY: Buy[] = [
	{
		data: '27/08/2025',
		price: 560,
		quantity: 100,
		items: [
			{ name: 'Double Apple', amount: 10 },
			{ name: 'Peach Mango Pineapple', amount: 10 },
			{ name: 'Pink Lemonade', amount: 10 },
			{ name: 'Raspberry Watermelon', amount: 10 },
			{ name: 'Strawberry Ice', amount: 10 },
			{ name: 'Strawberry Kiwi', amount: 10 },
			{ name: 'cool mint', amount: 10 },
			{ name: 'love 66', amount: 10 },
			{ name: 'strawberry vanilla cola', amount: 20 },
		],
	},
	{
		data: '17/10/2025',
		price: 1080,
		quantity: 200,
		items: [
			{ name: 'Double Apple', amount: 20 },
			{ name: 'Lemon Lime', amount: 10 },
			{ name: 'Mixed Berry', amount: 10 },
			{ name: 'Peach Mango Pineapple', amount: 20 },
			{ name: 'Pink Lemonade', amount: 30 },
			{ name: 'Raspberry Watermelon', amount: 20 },
			{ name: 'Red Bull', amount: 10 },
			{ name: 'Strawberry Banana', amount: 20 },
			{ name: 'Strawberry Ice', amount: 20 },
			{ name: 'Strawberry Kiwi', amount: 10 },
			{ name: 'Watermelon Ice', amount: 10 },
			{ name: 'cool mint', amount: 20 },
		],
	},
	{
		data: '30/10/2025',
		price: 1020,
		quantity: 200,
		items: [
			{ name: 'Blueberry Cherry Cranberry', amount: 10 },
			{ name: 'Blueberry Ice', amount: 10 },
			{ name: 'Double Apple', amount: 30 },
			{ name: 'Kiwi Passion Fruit Guava', amount: 10 },
			{ name: 'Lemon Lime', amount: 30 },
			{ name: 'Peach Berry', amount: 10 },
			{ name: 'Red Bull', amount: 10 },
			{ name: 'Strawberry Ice', amount: 10 },
			{ name: 'Strawberry Watermelon', amount: 10 },
			{ name: 'Watermelon Ice', amount: 20 },
			{ name: 'blackberry blueberry ice', amount: 10 },
			{ name: 'cool mint', amount: 20 },
			{ name: 'triple cherry', amount: 20 },
		],
	},
	{
		data: '18/11/2025',
		price: 1080,
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

export const TOTAL_BUY = BUY.reduce((total, item) => total + item.price, 0);
