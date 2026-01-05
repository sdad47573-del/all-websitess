import type { Meta, StoryObj } from '@storybook/react';
import { Collapsible } from './Collapsible';

const meta = {
	title: 'Components/Collapsible',
	component: Collapsible,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Collapsible>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Open: Story = {
	args: {
		isOpen: true,
		children: (
			<div className="bg-base-200 p-4 rounded-lg">
				<p>Este contenido es visible porque Collapsible está abierto.</p>
			</div>
		),
	},
};

export const Closed: Story = {
	args: {
		isOpen: false,
		children: (
			<div className="bg-base-200 p-4 rounded-lg">
				<p>Este contenido no debería ser visible.</p>
			</div>
		),
	},
};
