import type { Meta, StoryObj } from '@storybook/react';
import { ErrorState } from '../components/ErrorState';

const meta = {
	title: 'Components/ErrorState',
	component: ErrorState,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof ErrorState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CustomMessage: Story = {
	args: {
		message: 'No se pudieron cargar los datos. Por favor intente más tarde.',
	},
};
