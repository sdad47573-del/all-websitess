import type { Meta, StoryObj } from '@storybook/react';
import Stats from './Stats';

const meta = {
	title: 'Components/Statss',
	component: Stats,
	parameters: {
		// layout: 'centered',
		layout: 'fullscreen',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Stats>;

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
	{
		label: 'Ganancia Neta',
		value: '450€',
		icon: 'ri-line-chart-line',
		color: 'bg-secondary',
	},
    {
		label: 'Inversión',
		value: '800€',
		icon: 'ri-bank-card-line',
		color: 'bg-info',
	},
];

export const Default: Story = {
	args: {
		title: 'Resumen Mensual',
		items: mockItems,
	},
};

export const CustomTitle: Story = {
	args: {
		title: 'Estadísticas de Hoy',
		items: mockItems.slice(0, 2),
	},
};
