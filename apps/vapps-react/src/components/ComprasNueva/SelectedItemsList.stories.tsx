import type { Meta, StoryObj } from '@storybook/react';
import { SelectedItemsList } from '@react-components';

const meta = {
	title: 'Components/ComprasNueva/SelectedItemsList',
	component: SelectedItemsList,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof SelectedItemsList>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockSelected = [
	{ item_id: 1, title: 'Blue Razz', quantity: 10 },
	{ item_id: 2, title: 'Lemon Lime', quantity: 5 },
];

export const Default: Story = {
	args: {
		selected: mockSelected,
		onRemove: (id) => console.log('Remove item:', id),
	},
};

export const Empty: Story = {
	args: {
		selected: [],
		onRemove: () => {},
	},
};
