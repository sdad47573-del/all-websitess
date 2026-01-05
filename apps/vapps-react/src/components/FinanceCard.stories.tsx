import type { Meta, StoryObj } from '@storybook/react';
import { FinanceCard } from './FinanceCard';

const meta = {
	title: 'Components/FinanceCard',
	component: FinanceCard,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof FinanceCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Profit: Story = {
	args: {
		label: 'Venta de E-liquid',
		amount: 25.5,
		date: '2024-01-05',
		fullName: 'Juan Pérez',
	},
};

export const Expense: Story = {
	args: {
		label: 'Gasto de Transporte',
		amount: -15.0,
		date: '2024-01-04',
		fullName: 'María García',
	},
};

export const LargeAmount: Story = {
    args: {
        label: 'Retirada Beneficios Trimestre',
        amount: 2500.00,
        date: '2023-12-01T09:00:00Z',
        fullName: 'Jose',
    },
};
