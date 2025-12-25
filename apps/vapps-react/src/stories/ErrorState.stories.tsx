import type { Meta, StoryObj } from '@storybook/react';
import { ErrorState } from '../components/ErrorState';

const meta: Meta<typeof ErrorState> = {
    title: 'Components/ErrorState',
    component: ErrorState,
    parameters: {
        layout: 'centered',
    },
};

export default meta;
type Story = StoryObj<typeof ErrorState>;

export const Default: Story = {
    args: {
        message: 'Error de Conexión',
    },
};

export const WithDetails: Story = {
    args: {
        message: 'Error al cargar datos',
        details: 'JWT expired: Tu sesión ha caducado. Por favor, vuelve a entrar.',
    },
};

export const FullCustom: Story = {
    args: {
        message: 'Servicio no disponible',
        details: 'Estamos realizando tareas de mantenimiento. Vuelve a intentarlo en unos minutos.',
    },
};
