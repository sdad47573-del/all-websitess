import type { Meta, StoryObj } from '@storybook/react';
import { BeneficioItem } from './BeneficioItem';

const meta = {
	title: 'Components/Beneficios/BeneficioItem',
	component: BeneficioItem,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof BeneficioItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Profit: Story = {
	args: {
		label: 'Venta Ismael',
		fecha: '2024-01-05',
		eur: 15.5,
	},
};

export const Loss: Story = {
	args: {
		label: 'Gasto Envío',
		fecha: '2024-01-04',
		eur: -5.0,
	},
};
