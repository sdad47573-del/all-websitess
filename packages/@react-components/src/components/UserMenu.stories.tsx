import type { Meta, StoryObj } from '@storybook/react';
import { UserMenu } from './UserMenu';

const meta: Meta<typeof UserMenu> = {
	title: 'Packages/ReactComponents/UserMenu',
	component: UserMenu,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof UserMenu>;

export const Default: Story = {
	args: {
		user: { email: 'user@example.com' },
		profile: { full_name: 'John Doe', role: 'Admin' },
		onLogout: () => alert('Logout clicked'),
	},
};

export const LoggedOut: Story = {
	args: {
		user: null,
		profile: null,
		onLogout: () => {},
	},
};
