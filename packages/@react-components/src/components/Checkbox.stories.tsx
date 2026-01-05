import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

const meta = {
	title: 'Shared Components/Checkbox',
	component: Checkbox,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		label: 'Aceptar términos y condiciones',
	},
};

export const Checked: Story = {
	args: {
		label: 'Opción seleccionada',
		checked: true,
	},
};

export const Disabled: Story = {
	args: {
		label: 'Opción deshabilitada',
		disabled: true,
	},
};
