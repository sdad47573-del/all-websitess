import type { Meta, StoryObj } from '@storybook/react';
import { ProductInventory } from './ProductInventory';

const meta = {
	title: 'Components/ProductInventoryy',
	component: ProductInventory,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof ProductInventory>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockItems = [
	{
		item_id: 1,
		title: 'Blue Razz',
		image_url: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp',
		total_quantity: 15,
	},
	{
		item_id: 2,
		title: 'Strawberry Ice',
		image_url: null,
		total_quantity: 8,
	},
	{
		item_id: 3,
		title: 'Lemon Lime',
		image_url: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp',
		total_quantity: 20,
	},
    {
		item_id: 4,
		title: 'Watermelon Ice',
		image_url: null,
		total_quantity: 5,
	},
];

export const Default: Story = {
	args: {
		title: 'Nuestro Stock',
		subtitle: 'Productos disponibles actualmente',
		items: mockItems,
	},
};

export const Empty: Story = {
	args: {
		title: 'Nuestro Stock',
		items: [],
	},
};
