import type { Meta, StoryObj } from '@storybook/react';
import { BeneficioItem } from '../components/Beneficios/BeneficioItem';

const meta = {
	title: 'Components/BeneficioItem',
	component: BeneficioItem,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof BeneficioItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Income: Story = {
	args: {
		fecha: '2023-11-15T10:00:00Z',
		eur: 150.5,
		label: 'Venta de Servicios',
	},
};

export const Expense: Story = {
	args: {
		fecha: '2023-11-16T14:30:00Z',
		eur: -45.2,
		label: 'Compra de Materiales',
	},
};

export const ZeroValue: Story = {
	args: {
		fecha: '2023-11-17T09:00:00Z',
		eur: 0,
		label: 'Ajuste de Cuentas',
	},
};
