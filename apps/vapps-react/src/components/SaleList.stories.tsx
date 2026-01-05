import type { Meta, StoryObj } from '@storybook/react';
import { SaleList } from './SaleList';

const meta = {
	title: 'Components/SaleList',
	component: SaleList,
	parameters: {
		// layout: 'centered',
		layout: 'fullscreen',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof SaleList>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockSales = [
	{
		day: '2024-01-05',
		concept: 'Venta Mañana',
		total_amount: 2,
		total_price: 24,
		total_payment: 24,
		brand: 'Vaporesso',
		items: [
			{ sale_id: '1', item_title: 'Blue Razz', brand: 'Vaporesso', amount: 2, price_per_unit: 12, image_url: null }
		]
	},
	{
		day: '2024-01-05',
		concept: 'Venta Tarde',
		total_amount: 1,
		total_price: 15,
		total_payment: 15,
		brand: 'Voopoo',
		items: [
			{ sale_id: '2', item_title: 'Lemon Lime', brand: 'Voopoo', amount: 1, price_per_unit: 15, image_url: null }
		]
	}
];

export const Default: Story = {
	args: {
		title: 'Ventas de Hoy',
		subtitle: 'Resumen de transacciones',
		sales: mockSales,
	},
};

export const Empty: Story = {
	args: {
		title: 'Ventas de Hoy',
		sales: [],
		emptyMessage: 'No se han registrado ventas hoy.',
	},
};
