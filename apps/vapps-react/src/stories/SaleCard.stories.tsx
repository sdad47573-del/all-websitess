import type { Meta, StoryObj } from '@storybook/react';
import { SaleCard } from '../components/SaleCard';

const meta: Meta<typeof SaleCard> = {
	title: 'Components/SaleCard',
	component: SaleCard,
	parameters: {
		layout: 'padded',
	},
};

export default meta;
type Story = StoryObj<typeof SaleCard>;

export const Default: Story = {
	args: {
		day: '2023-12-25T15:30:00Z',
		concept: 'Venta de Juan',
		total_amount: 5,
		total_price: 60.0,
		total_payment: 60.0,
		items: [
			{
				sale_id: 101,
				item_id: 101,
				item_title: 'VAPSOLO 12000 Kiwi',
				brand: 'VAPSOLO',
				amount: 3,
				price_per_unit: 12.0,
			},
			{
				sale_id: 102,
				item_id: 102,
				item_title: 'VAPSOLO 12000 Mango',
				brand: 'VAPSOLO',
				amount: 2,
				price_per_unit: 12.0,
			},
		],
	},
};

export const PartialPayment: Story = {
	args: {
		day: '2023-12-24T18:00:00Z',
		concept: 'Venta Maria (Sin pagar entero)',
		total_amount: 10,
		total_price: 120.0,
		total_payment: 50.0,
		items: [
			{
				sale_id: 103,
				item_id: 103,
				item_title: 'VAPSOLO 12000 Strawberry',
				brand: 'VAPSOLO',
				amount: 10,
				price_per_unit: 12.0,
			},
		],
	},
};

export const NoConcept: Story = {
	args: {
		day: '2023-12-23T12:00:00Z',
		concept: null,
		total_amount: 1,
		total_price: 15.0,
		total_payment: 15.0,
		items: [
			{
				sale_id: 104,
				item_id: 104,
				item_title: 'VAPSOLO 12000 Watermelon',
				brand: 'VAPSOLO',
				amount: 1,
				price_per_unit: 15.0,
			},
		],
	},
};
