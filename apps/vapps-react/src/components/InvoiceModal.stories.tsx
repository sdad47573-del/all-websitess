import type { Meta, StoryObj } from '@storybook/react';
import { InvoiceModal } from './InvoiceModal';

const meta = {
	title: 'Components/InvoiceModal',
	component: InvoiceModal,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof InvoiceModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		isOpen: true,
		url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
		onClose: () => alert('Modal closed'),
	},
};

export const Closed: Story = {
	args: {
		isOpen: false,
		url: 'https://example.com/invoice.pdf',
		onClose: () => {},
	},
};
