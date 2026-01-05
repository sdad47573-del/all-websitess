import type { Meta, StoryObj } from '@storybook/react';
import { Topbar } from './Topbar';

const meta: Meta<typeof Topbar> = {
	title: 'Packages/ReactComponents/Topbar',
	component: Topbar,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Topbar>;

const LinkComponent = ({
	href,
	children,
	className,
	onClick,
}: {
	href: string;
	children: React.ReactNode;
	className?: string;
	onClick?: () => void;
}) => (
	<a href={href} className={className} onClick={onClick}>
		{children}
	</a>
);

export const Default: Story = {
	args: {
		logo: <span className="text-primary text-xl font-bold">Logo</span>,
		links: [
			{ name: 'Home', href: '/' },
			{ name: 'Products', href: '/products' },
			{ name: 'About', href: '/about' },
		],
		currentPath: '/',
		LinkComponent: LinkComponent,
		phone: '+123456789',
		facebook: 'https://facebook.com',
		instagram: 'https://instagram.com',
	},
};
