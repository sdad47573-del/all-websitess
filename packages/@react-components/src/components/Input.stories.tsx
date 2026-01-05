import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta = {
	title: 'Shared Components/Input',
	component: Input,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		label: 'Nombre completo',
		placeholder: 'Escribe tu nombre...',
	},
};

export const WithIcon: Story = {
	args: {
		label: 'Buscador',
		placeholder: 'Buscar productos...',
		leftIconClass: 'ri-search-line',
	},
};

export const Password: Story = {
	args: {
		label: 'Contraseña',
		type: 'password',
		placeholder: '••••••••',
	},
};

export const ErrorState: Story = {
	args: {
		label: 'Email',
		type: 'email',
		placeholder: 'usuario@ejemplo.com',
		error: 'El formato del email no es válido',
	},
};

export const Disabled: Story = {
	args: {
		label: 'Campo Deshabilitado',
		disabled: true,
		placeholder: 'No puedes escribir aquí',
	},
};
