import type { Meta, StoryObj } from '@storybook/react';
import { InputPassword } from './InputPassword';

const meta = {
	title: 'Shared Components/InputPassword',
	component: InputPassword,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof InputPassword>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		label: 'Contraseña',
		placeholder: '••••••••',
	},
};

export const WithError: Story = {
	args: {
		label: 'Nueva Contraseña',
		placeholder: '••••••••',
		error: 'La contraseña es demasiado corta',
	},
};
