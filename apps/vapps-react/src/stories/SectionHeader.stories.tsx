import type { Meta, StoryObj } from '@storybook/react';
import { SectionHeader } from '../components/SectionHeader';

const meta: Meta<typeof SectionHeader> = {
    title: 'Components/SectionHeader',
    component: SectionHeader,
    parameters: {
        layout: 'centered',
    },
};

export default meta;
type Story = StoryObj<typeof SectionHeader>;

export const Default: Story = {
    args: {
        title: 'Título de la Sección',
    },
};

export const WithSubtitle: Story = {
    args: {
        title: 'Historial de Compras',
        subtitle: 'Lista detallada de todas las adquisiciones realizadas recientemente.',
    },
};

export const WithChildren: Story = {
    args: {
        title: 'Inventario',
        subtitle: 'Vapers disponibles en stock.',
        children: <button className="btn btn-primary btn-sm mt-4">Añadir Nuevo</button>,
    },
};
