import type { Meta, StoryObj } from '@storybook/react';
import { PageLayout } from './PageLayout';

const meta = {
	title: 'Components/PageLayoutt',
	component: PageLayout,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof PageLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: (
			<div className="p-8">
				<h1 className="text-2xl font-bold">Título de la Página</h1>
				<p className="mt-4">Este es el contenido dentro del PageLayout.</p>
				<div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
					<div className="bg-base-200 p-12 rounded-xl">Card 1</div>
					<div className="bg-base-200 p-12 rounded-xl">Card 2</div>
				</div>
			</div>
		),
	},
};
