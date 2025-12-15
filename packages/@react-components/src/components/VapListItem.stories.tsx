import type { Meta, StoryObj } from '@storybook/react';
import { VapListItem } from './VapListItem';

const meta: Meta<typeof VapListItem> = {
	title: 'Packages/ReactComponents/VapListItem',
	component: VapListItem,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof VapListItem>;

export const Default: Story = {
	args: {
		id: 1,
		title: 'Sample Item',
		src: 'https://via.placeholder.com/150',
		amount: 5,
		price: 19.99,
		onClick: (item: any) => alert(`Clicked: ${item.title}`),
	},
};

export const OutOfStock: Story = {
	args: {
		id: 2,
		title: 'Out of Stock Item',
		src: 'https://via.placeholder.com/150',
		amount: 0,
		price: 19.99,
		onClick: (item: any) => alert(`Clicked: ${item.title}`),
	},
};
