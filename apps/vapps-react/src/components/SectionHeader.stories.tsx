import type { Meta, StoryObj } from '@storybook/react';
import { SectionHeader } from './SectionHeader';

const meta = {
	title: 'Components/SectionHeaderr',
	component: SectionHeader,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof SectionHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		title: 'Título de Sección',
		subtitle: 'Este es un subtítulo descriptivo para la sección.',
	},
};

export const OnlyTitle: Story = {
	args: {
		title: 'Solo Título',
	},
};

export const WithChildren: Story = {
	args: {
		title: 'Sección con Acción',
		subtitle: 'Puedes añadir botones u otros elementos.',
		children: (
			<div className="mt-4">
				<button className="btn btn-primary btn-sm">Acción</button>
			</div>
		),
	},
};
