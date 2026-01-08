import type { Meta, StoryObj } from '@storybook/react';
import { LoginForm2 } from './LoginForm2';

const meta = {
	title: 'Shared Components/LoginForm2',
	component: LoginForm2,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof LoginForm2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		onSubmit: async (data) => {
			console.log('Login submitted:', data);
			await new Promise((resolve) => setTimeout(resolve, 1000));
		},
	},
};
