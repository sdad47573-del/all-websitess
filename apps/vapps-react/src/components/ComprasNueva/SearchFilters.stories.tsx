import type { Meta, StoryObj } from '@storybook/react';
import { SearchFilters } from './SearchFilters';

const meta = {
	title: 'Components/ComprasNueva/SearchFilters',
	component: SearchFilters,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof SearchFilters>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockBrands = [
	{ id: 1, name: 'Vaporesso' },
	{ id: 2, name: 'Voopoo' },
	{ id: 3, name: 'SMOK' },
] as any;

export const Default: Story = {
	args: {
		brands: mockBrands,
		searchTerm: '',
		onSearchChange: (val) => console.log('Search:', val),
		selectedBrand: '',
		onBrandChange: (val) => console.log('Brand:', val),
	},
};

export const Filtered: Story = {
	args: {
		...Default.args,
		searchTerm: 'Blue',
		selectedBrand: 'Vaporesso',
	},
};
