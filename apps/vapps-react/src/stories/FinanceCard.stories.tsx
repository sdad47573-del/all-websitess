import type { Meta, StoryObj } from '@storybook/react';
import { FinanceCard } from '../components/FinanceCard';

const meta: Meta<typeof FinanceCard> = {
    title: 'Components/FinanceCard',
    component: FinanceCard,
    parameters: {
        layout: 'padded',
    },
};

export default meta;
type Story = StoryObj<typeof FinanceCard>;

export const Income: Story = {
    args: {
        label: 'Ingreso Ventas Semanales',
        amount: 350.75,
        date: '2023-12-25T12:00:00Z',
        fullName: 'Caja',
    },
};

export const Expense: Story = {
    args: {
        label: 'Pago Proveedor VapSolo',
        amount: -150.00,
        date: '2023-12-24T10:00:00Z',
        fullName: 'Ismael',
    },
};

export const LargeAmount: Story = {
    args: {
        label: 'Retirada Beneficios Trimestre',
        amount: 2500.00,
        date: '2023-12-01T09:00:00Z',
        fullName: 'Jose',
    },
};
