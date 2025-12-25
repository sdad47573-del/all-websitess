import type { Meta, StoryObj } from '@storybook/react';
import { ProductInventory } from '../components/ProductInventory';

const meta: Meta<typeof ProductInventory> = {
    title: 'Components/ProductInventory',
    component: ProductInventory,
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;
type Story = StoryObj<typeof ProductInventory>;

export const Default: Story = {
    args: {
        title: 'Compras totales: 154 vapers',
        subtitle: 'Cantidad acumulada de vapers adquiridos desde el inicio',
        items: [
            { item_id: 1, title: 'VAPSOLO 12000 Kiwi Strawberry', brand: 'VAPSOLO', total_quantity: 45 },
            { item_id: 2, title: 'VAPSOLO 12000 Mango Ice', brand: 'VAPSOLO', total_quantity: 30 },
            { item_id: 3, title: 'Boler Bar Blue', brand: 'BOLERO', total_quantity: 25 },
            { item_id: 4, title: 'VAPSOLO 12000 Watermelon Bubblegum', brand: 'VAPSOLO', total_quantity: 54 },
        ],
    },
};

export const Empty: Story = {
    args: {
        title: 'Inventario Vacío',
        subtitle: 'No se han registrado compras aún',
        items: [],
    },
};
