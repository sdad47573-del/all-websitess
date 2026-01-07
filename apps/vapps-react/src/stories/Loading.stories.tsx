import type { Meta, StoryObj } from '@storybook/react';
import { Loading } from '@react-components';

const meta = {
	title: 'Components/Loading',
	component: Loading,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Loading>;

export default meta;
type Story = StoryObj<typeof Loading>;

export const Default: Story = {};

export const FullScreen: Story = {
	args: {
		fullScreen: true,
		text: 'Iniciando sesión...',
	},
	parameters: {
		layout: 'centered',
	},
};

export const CustomText: Story = {
	args: {
		text: 'Preparando tus estadísticas...',
	},
};

