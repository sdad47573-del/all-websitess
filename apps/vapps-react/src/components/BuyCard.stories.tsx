import type { Meta, StoryObj } from '@storybook/react';
import { BuyCard } from './BuyCard';

const meta = {
	title: 'Components/BuyCard',
	component: BuyCard,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof BuyCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockItems = [
	{
		id: 1,
		title: 'Vaper Pro 5000',
		brand: 'Vaporesso',
		image_url: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp',
		quantity: 5,
	},
	{
		id: 2,
		title: 'Vaper Slim Plus',
		brand: 'Voopoo',
		image_url: null,
		quantity: 10,
	},
];

export const Default: Story = {
	args: {
		fecha: '2024-01-05',
		eur: 150.5,
		total: 15,
		items: mockItems,
		label: 'Reposición Enero',
	},
};

export const Paid: Story = {
	args: {
		fecha: '2024-01-05',
		eur: 200.0,
		total: 20,
		items: mockItems,
		payed: true,
	},
};

export const Pending: Story = {
	args: {
		fecha: '2024-01-05',
		eur: 300.0,
		total: 30,
		items: mockItems,
		payed: false,
		pending: 150.0,
	},
};

export const WithInvoice: Story = {
	args: {
		fecha: '2024-01-05',
		eur: 120.0,
		total: 12,
		items: mockItems,
		facture_url: 'https://example.com/invoice.pdf',
		onOpenInvoice: (url) => alert(`Opening invoice: ${url}`),
	},
};
