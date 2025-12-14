import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
	title: 'Packages/ReactComponents/Modal',
	component: Modal,
	parameters: {
		layout: 'fullscreen',
	},
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
	render: (args) => {
		const [isOpen, setIsOpen] = useState(false);
		return (
			<div className="p-4">
				<button className="btn btn-primary" onClick={() => setIsOpen(true)}>
					Open Modal
				</button>
				<Modal
					{...args}
					isOpen={isOpen}
					onClose={() => setIsOpen(false)}
					onSubmit={(data) => {
						alert(JSON.stringify(data));
						setIsOpen(false);
					}}
				/>
			</div>
		);
	},
	args: {
		isOpen: true,
		data: {
			id: 1,
			title: 'Example Item',
			src: 'https://via.placeholder.com/300',
			amount: 50,
		},
		onClose: () => {},
		onSubmit: () => {},
	},
};
