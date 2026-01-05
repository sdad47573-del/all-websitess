import type { Meta, StoryObj } from '@storybook/react';
import Stats2 from './Stats2';

const meta = {
	title: 'Components/Stats2',
	component: Stats2,
	parameters: {
		// layout: 'centered',
		layout: 'fullscreen',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Stats2>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockItems = [
	{
		label: 'Ventas Totales',
		value: '1,250€',
		icon: 'ri-money-euro-circle-line',
		color: 'bg-success',
		isTotal: true,
	},
	{
		label: 'Vapers Vendidos',
		value: '45',
		icon: 'ri-shopping-bag-line',
		color: 'bg-primary',
	},
];

export const Default: Story = {
	args: {
		title: 'Resumen Diario',
		items: mockItems,
	},
};
