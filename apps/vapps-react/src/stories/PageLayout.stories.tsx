import type { Meta, StoryObj } from '@storybook/react';
import { PageLayout } from '../components/PageLayout';

const meta: Meta<typeof PageLayout> = {
	title: 'Components/PageLayout',
	component: PageLayout,
	parameters: {
		layout: 'fullscreen',
	},
};

export default meta;
type Story = StoryObj<typeof PageLayout>;

export const Default: Story = {
	args: {
		children: (
			<div className="p-5">
				<div className="bg-base-200 border-base-300 flex h-96 items-center justify-center rounded-xl border-2 border-dashed">
					<p className="text-base-content/40">Contenido de la página</p>
				</div>
			</div>
		),
	},
};
