import type { Meta, StoryObj } from '@storybook/react';
import { Loading } from './Loading';

const meta = {
	title: 'Components/Loadingg',
	component: Loading,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Loading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		text: 'Cargando...',
	},
};

export const FullScreen: Story = {
	args: {
		fullScreen: true,
		text: 'Iniciando aplicación...',
	},
};

export const CustomText: Story = {
	args: {
		text: 'Sincronizando datos...',
	},
};
