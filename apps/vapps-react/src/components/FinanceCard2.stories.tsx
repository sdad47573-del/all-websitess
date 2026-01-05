import type { Meta, StoryObj } from '@storybook/react';
import { FinanceCard } from './FinanceCard2';

const meta = {
	title: 'Components/FinanceCard2',
	component: FinanceCard,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof FinanceCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		label: 'Venta de E-liquid',
		amount: 25.5,
		date: '2024-01-05',
		fullName: 'Juan Pérez',
	},
};

export const LargeAmount: Story = {
	args: {
		label: 'Comisión Mensual',
		amount: 1540.0,
		date: '2024-01-03',
		fullName: 'Ismael',
	},
};
