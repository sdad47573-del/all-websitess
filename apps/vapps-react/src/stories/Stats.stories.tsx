import type { Meta, StoryObj } from '@storybook/react';
import Stats from '../components/Stats';

const meta: Meta<typeof Stats> = {
    title: 'Components/Stats',
    component: Stats,
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;
type Story = StoryObj<typeof Stats>;

export const Default: Story = {
    args: {
        title: 'Resumen y Estadísticas',
        items: [
            {
                label: 'Ventas Totales',
                value: '1.200,00€',
                icon: 'ri-money-euro-box-line',
                color: 'bg-green-500',
            },
            {
                label: 'Pedidos',
                value: 12,
                icon: 'ri-shopping-cart-line',
                color: 'bg-blue-500',
            },
            {
                label: 'Beneficio',
                value: '450,00€',
                icon: 'ri-line-chart-line',
                color: 'bg-purple-500',
            },
            {
                label: 'Gastos',
                value: '150,00€',
                icon: 'ri-arrow-down-circle-line',
                color: 'bg-red-500',
            },
        ],
    },
};

export const CustomTitle: Story = {
    args: {
        title: 'Métricas de Inventario',
        items: [
            {
                label: 'Stock Total',
                value: 154,
                icon: 'ri-stack-line',
                color: 'bg-emerald-500',
            },
            {
                label: 'Agotados',
                value: 3,
                icon: 'ri-close-circle-line',
                color: 'bg-rose-500',
            },
        ],
    },
};
