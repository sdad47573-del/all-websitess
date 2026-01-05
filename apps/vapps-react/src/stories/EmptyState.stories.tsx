import type { Meta, StoryObj } from '@storybook/react';
import { EmptyState } from '../components/EmptyState';

const meta: Meta<typeof EmptyState> = {
    title: 'Components/EmptyState',
    component: EmptyState,
    parameters: {
        layout: 'centered',
    },
};

export default meta;
type Story = StoryObj<typeof EmptyState>;

export const Default: Story = {
    args: {
        message: 'No hay datos disponibles',
    },
};

export const CustomIcon: Story = {
    args: {
        message: 'No se encontraron resultados para tu búsqueda',
        icon: 'ri-search-line',
    },
};

export const NoSales: Story = {
	args: {
		message: 'Todavía no has realizado ninguna venta',
		icon: 'ri-shopping-cart-line',
	},
};
