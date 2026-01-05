import type { Meta, StoryObj } from '@storybook/react';
import { ExpandableTransactionCard } from '../components/common/ExpandableTransactionCard';

const meta = {
	title: 'Components/ExpandableTransactionCard',
	component: ExpandableTransactionCard,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof ExpandableTransactionCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const commonItems = [
	{ id: 1, title: 'VAPSOLO 12000 Kiwi', brand: 'VAPSOLO', amount: 12, price: 12.0, image_url: null },
	{ id: 2, title: 'VAPSOLO 12000 Mango', brand: 'VAPSOLO', amount: 12, price: 12.0, image_url: null },
];

export const Default: Story = {
	args: {
		title: 'Compra de Productos',
		date: '2025-01-02T10:00:00Z',
		stats: [
			{ label: 'Vapers', value: 24 },
			{ label: 'Inversión', value: '120.00€' },
		],
		status: {
			label: 'Pagado',
			value: '120.00€',
			isPending: false,
		},
		items: commonItems,
	},
};

export const Pendiente: Story = {
	args: {
		title: 'Pedido mixto',
		date: '2025-01-03T18:30:00Z',
		stats: [
			{ label: 'Vapers', value: 40 },
			{ label: 'Inversión', value: '200.00€' },
		],
		status: {
			label: 'Pendiente',
			value: '50.00€',
			isPending: true,
		},
		items: [
			{ id: 3, title: 'VAPSOLO 12000 Strawberry', brand: 'VAPSOLO', amount: 20, price: 10.0, image_url: null },
			{ id: 4, title: 'Bolero Bar Blue', brand: 'BOLERO', amount: 20, price: 10.0, image_url: null },
		],
	},
};

export const ExpandidoInicial: Story = {
	args: {
		...Default.args,
		isInitiallyExpanded: true,
	},
};

