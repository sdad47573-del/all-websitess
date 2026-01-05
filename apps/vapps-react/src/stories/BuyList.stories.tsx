import type { Meta, StoryObj } from '@storybook/react';
import { BuyList } from '../components/BuyList';

const meta = {
	title: 'Components/BuyList',
	component: BuyList,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof BuyList>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleBuys = [
	{
		id: 1,
		fecha: '2025-01-02T10:00:00Z',
		eur: 120.0,
		total: 24,
		label: 'Compra de VAPSOLO',
		payed: true,
		items: [
			{ id: 11, title: 'VAPSOLO 12000 Kiwi', brand: 'VAPSOLO', quantity: 12, image_url: null },
			{ id: 12, title: 'VAPSOLO 12000 Mango', brand: 'VAPSOLO', quantity: 12, image_url: null },
		],
	},
	{
		id: 2,
		fecha: '2025-01-03T18:30:00Z',
		eur: 200.0,
		total: 40,
		label: 'Pedido mixto',
		payed: false,
		pending: 50.0,
		facture_url: 'https://ejemplo.com/factura-2.pdf',
		items: [
			{
				id: 21,
				title: 'VAPSOLO 12000 Strawberry',
				brand: 'VAPSOLO',
				quantity: 20,
				image_url: null,
			},
			{ id: 22, title: 'Bolero Bar Blue', brand: 'BOLERO', quantity: 20, image_url: null },
		],
	},
		{
		id: 1,
		fecha: '2024-01-05',
		eur: 150.5,
		total: 15,
		label: 'Primera Compra',
		items: [
			{ id: 101, title: 'Item 1', brand: 'Brand A', quantity: 5, image_url: null },
			{ id: 102, title: 'Item 2', brand: 'Brand B', quantity: 10, image_url: null },
		],
		payed: true,
	},
	{
		id: 2,
		fecha: '2024-01-04',
		eur: 200.0,
		total: 20,
		label: 'Segunda Compra',
		items: [{ id: 103, title: 'Item 3', brand: 'Brand C', quantity: 20, image_url: null }],
		payed: false,
		pending: 200.0,
	},
];

export const Default: Story = {
	args: {
		buys: sampleBuys,
		title: 'Historial de Compras',
		subtitle: 'Lista detallada de adquisiciones',
		emptyMessage: 'No se han registrado compras todavía',
		onOpenInvoice: (url: string) => {
			console.log('Abrir factura:', url);
		},
	},
};

export const Empty: Story = {
	args: {
		buys: [],
		title: 'Historial de Compras',
		subtitle: 'Lista detallada de adquisiciones',
		emptyMessage: 'No se han registrado compras todavía',
	},
};
