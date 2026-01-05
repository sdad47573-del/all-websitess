import type { Meta, StoryObj } from '@storybook/react';
import { SaleCard } from './SaleCard';

const meta = {
	title: 'Components/SaleCardd',
	component: SaleCard,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof SaleCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockItems = [
	{
		sale_id: '1',
		item_title: 'Blue Razz',
		brand: 'Vaporesso',
		amount: 2,
		price_per_unit: 10,
		image_url: null,
	},
	{
		sale_id: '2',
		item_title: 'Lemon Lime',
		brand: 'Voopoo',
		amount: 1,
		price_per_unit: 12,
		image_url: null,
	},
];

export const Paid: Story = {
	args: {
		day: '2024-01-05',
		concept: 'Venta de la tarde',
		total_amount: 3,
		total_price: 32,
		total_payment: 32,
		items: mockItems,
	},
};

export const Pending: Story = {
	args: {
		day: '2024-01-05',
		concept: 'Venta Ismael',
		total_amount: 2,
		total_price: 20,
		total_payment: 10,
		items: [mockItems[0]],
	},
};

export const NoConcept: Story = {
	args: {
		day: '2024-01-04',
		concept: null,
		total_amount: 1,
		total_price: 12,
		total_payment: 12,
		items: [mockItems[1]],
	},
};
