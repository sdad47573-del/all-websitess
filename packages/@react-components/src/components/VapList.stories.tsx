import type { Meta, StoryObj } from '@storybook/react';
import { VapList } from './VapList';

const meta: Meta<typeof VapList> = {
	title: 'Packages/ReactComponents/VapList',
	component: VapList,
	parameters: {
		layout: 'padded',
	},
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof VapList>;

const items = Array.from({ length: 10 }).map((_, i) => ({
	id: i + 1,
	title: `Item ${i + 1}`,
	src: 'https://via.placeholder.com/150',
	amount: 10 * (i + 1),
	price: 20 * (i + 1),
}));

export const Default: Story = {
	args: {
		items: items,
		isLoading: false,
		onItemClick: (item) => alert(`Clicked: ${item.title}`),
	},
};

export const Loading: Story = {
	args: {
		items: [],
		isLoading: true,
		onItemClick: () => {},
	},
};
