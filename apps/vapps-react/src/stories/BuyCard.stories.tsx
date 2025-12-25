import type { Meta, StoryObj } from '@storybook/react';
import { BuyCard } from '../components/BuyCard';

const meta: Meta<typeof BuyCard> = {
    title: 'Components/BuyCard',
    component: BuyCard,
    parameters: {
        layout: 'padded',
    },
};

export default meta;
type Story = StoryObj<typeof BuyCard>;

export const Default: Story = {
    args: {
        fecha: '2023-12-25T10:00:00Z',
        eur: 150.50,
        total: 30,
        label: 'Pedido Navidad',
        items: [
            { id: 1, title: 'VAPSOLO 12000 Kiwi', brand: 'VAPSOLO', quantity: 15 },
            { id: 2, title: 'VAPSOLO 12000 Mango', brand: 'VAPSOLO', quantity: 15 },
        ],
    },
};

export const PendingPayment: Story = {
    args: {
        fecha: '2023-12-20T10:00:00Z',
        eur: 200.00,
        total: 40,
        payed: false,
        pending: 50.00,
        items: [
            { id: 1, title: 'VAPSOLO 12000 Strawberry', brand: 'VAPSOLO', quantity: 40 },
        ],
    },
};

export const FullyPayed: Story = {
    args: {
        fecha: '2023-11-20T10:00:00Z',
        eur: 500.00,
        total: 100,
        payed: true,
        items: [
            { id: 1, title: 'VAPSOLO 12000 Watermelon', brand: 'VAPSOLO', quantity: 50 },
            { id: 2, title: 'VAPSOLO 12000 Blueberry', brand: 'VAPSOLO', quantity: 50 },
        ],
    },
};
