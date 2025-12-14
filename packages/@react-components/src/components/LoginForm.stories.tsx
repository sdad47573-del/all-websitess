import type { Meta, StoryObj } from '@storybook/react';
import { LoginForm } from './LoginForm';

const meta: Meta<typeof LoginForm> = {
	title: 'Packages/ReactComponents/LoginForm',
	component: LoginForm,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Default: Story = {
	args: {
		onSubmit: async (data) => {
			await new Promise((resolve) => setTimeout(resolve, 1000));
			alert(JSON.stringify(data));
		},
	},
};
