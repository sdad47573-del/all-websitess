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
        title: 'Nueva Página',
        children: (
            <div className="p-5">
                <div className="bg-base-200 h-96 rounded-xl flex items-center justify-center border-2 border-dashed border-base-300">
                    <p className="text-base-content/40">Contenido de la página</p>
                </div>
            </div>
        ),
    },
};

export const NoTitle: Story = {
    args: {
        children: (
            <div className="p-5">
                <p>Página sin título superior de layout.</p>
            </div>
        ),
    },
};
