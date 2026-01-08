import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Topbar } from './Topbar';

describe('Topbar Component', () => {
	const mockLinkComponent = ({ href, children, className, onClick }: any) => (
		<a href={href} className={className} onClick={onClick}>
			{children}
		</a>
	);

	const mockLinks = [
		{ name: 'Home', href: '/' },
		{ name: 'About', href: '/about' },
	];

	it('renders logo', () => {
		render(
			<Topbar
				logo={<span>MyLogo</span>}
				links={mockLinks}
				currentPath="/"
				LinkComponent={mockLinkComponent}
			/>,
		);
		expect(screen.getByText('MyLogo')).toBeInTheDocument();
	});

	it('renders social links', () => {
		render(
			<Topbar
				logo="Logo"
				links={mockLinks}
				currentPath="/"
				LinkComponent={mockLinkComponent}
				phone="123456789"
				facebook="http://fb.com"
			/>,
		);
		expect(screen.getByText('123456789')).toBeInTheDocument();
		const links = screen.getAllByRole('link');
		const fb = links.find((l) => l.getAttribute('href') === 'http://fb.com');
		expect(fb).toBeInTheDocument();
	});

	it('toggles mobile menu', () => {
		render(
			<Topbar logo="Logo" links={mockLinks} currentPath="/" LinkComponent={mockLinkComponent} />,
		);

		// Find mobile menu button by ID or class or icon
		// Implementation: <button id="menu-toggle" ...>
		// const toggleButton = screen.getByRole('button', { name: '' }); // It has an icon inside, no text
		// Or better, verify implementation uses id="menu-toggle" (seen in previous read)
		// Since testing-library prefers accessible queries, but button has no aria-label in snippet (Wait, line 153 in Topbar.tsx has no aria-label).
		// It has <i className="ri-menu-line ...">

		// Let's use the container query to find the button
		const menuButton = screen.getByRole('button');
		fireEvent.click(menuButton);

		// Check if menu is open
		// Menu has id="mobile-menu"
		const menu = document.getElementById('mobile-menu');
		expect(menu).toHaveClass('opacity-100');

		// Close menu
		fireEvent.click(menuButton);
		expect(menu).toHaveClass('opacity-0');
	});
});
