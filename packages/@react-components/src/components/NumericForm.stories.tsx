import type { Meta, StoryObj } from '@storybook/react';
import { NumericForm } from './NumericForm';

const meta: Meta<typeof NumericForm> = {
	title: 'Packages/ReactComponents/NumericForm',
	component: NumericForm,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof NumericForm>;

export const Default: Story = {
	args: {
		stock: 100,
		onSubmit: (data) => alert(JSON.stringify(data)),
	},
};
