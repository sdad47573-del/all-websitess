import type { Meta, StoryObj } from '@storybook/react';
import VapList from './VapList';

const meta = {
	title: 'Components/VapListt',
	component: VapList,
	parameters: {
		// layout: 'centered',
		layout: 'fullscreen',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof VapList>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockItems = [
	{
		id: '1',
		title: 'Blue Razz',
		src: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp',
		amount: 15,
	},
	{
		id: '2',
		title: 'Strawberry Ice',
		src: null,
		amount: 8,
	},
	{
		id: '3',
		title: 'Lemon Lime',
		src: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp',
		amount: 20,
	},
];

export const Default: Story = {
	args: {
		items: mockItems,
		isLoading: false,
	},
};

export const Loading: Story = {
	args: {
		items: [],
		isLoading: true,
	},
};

export const Empty: Story = {
	args: {
		items: [],
		isLoading: false,
	},
};
