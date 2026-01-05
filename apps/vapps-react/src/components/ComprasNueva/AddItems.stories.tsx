import type { Meta, StoryObj } from '@storybook/react';
import { AddItems } from './AddItems';

const meta = {
	title: 'Components/ComprasNueva/AddItems',
	component: AddItems,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof AddItems>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockItems = [
	{ id: 1, title: 'Blue Razz' },
	{ id: 2, title: 'Lemon Lime' },
	{ id: 3, title: 'Strawberry Ice' },
];

export const Default: Story = {
	args: {
		items: mockItems,
		currentItemId: '',
		currentQty: 1,
		onItemIdChange: (id) => console.log('Item ID changed:', id),
		onQtyChange: (qty) => console.log('Qty changed:', qty),
		onAdd: () => console.log('Add clicked'),
	},
};

export const ItemSelected: Story = {
	args: {
		...Default.args,
		currentItemId: 2,
		currentQty: 5,
	},
};
