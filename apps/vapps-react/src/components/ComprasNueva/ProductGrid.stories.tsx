import type { Meta, StoryObj } from '@storybook/react';
import { ProductGrid } from '@react-components';

const meta = {
	title: 'Components/ComprasNueva/ProductGrid',
	component: ProductGrid,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof ProductGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockItems = [
	{ id: 1, title: 'Blue Razz', src: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp', amount: 10 },
	{ id: 2, title: 'Lemon Lime', src: '', amount: 5 },
	{ id: 3, title: 'Strawberry Ice', src: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp', amount: 0 },
];

export const Default: Story = {
	args: {
		items: mockItems,
		onItemClick: (id) => console.log('Item clicked:', id),
	},
};
