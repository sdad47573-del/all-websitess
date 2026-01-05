import type { Meta, StoryObj } from '@storybook/react';
import { ExpandableTransactionCard } from './ExpandableTransactionCard2';

const meta = {
	title: 'Components/Common/ExpandableTransactionCard2',
	component: ExpandableTransactionCard,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof ExpandableTransactionCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockItems = [
	{
		id: 1,
		title: 'Blue Razz',
		brand: 'Vaporesso',
		image_url: null,
		amount: 2,
		price: 10,
	},
	{
		id: 2,
		title: 'Lemon Lime',
		brand: 'Voopoo',
		image_url: null,
		amount: 1,
		price: 12,
	},
];

export const Default: Story = {
	args: {
		title: 'Compra de Reposición',
		date: '2024-01-05',
		stats: [
			{ label: 'Artículos', value: 3 },
			{ label: 'Total', value: '32.00€' },
		],
		items: mockItems,
	},
};

export const Expanded: Story = {
	args: {
		...Default.args,
		isInitiallyExpanded: true,
	},
};

export const WithStatus: Story = {
	args: {
		...Default.args,
		status: {
			label: 'Estado de Pago',
			value: 'Pendiente',
			isPending: true,
		},
	},
};
