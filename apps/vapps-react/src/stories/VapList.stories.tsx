import type { Meta, StoryObj } from '@storybook/react';
import VapList from '../components/VapList';

const meta: Meta<typeof VapList> = {
    title: 'Components/VapList',
    component: VapList,
    parameters: {
        layout: 'padded',
    },
};

export default meta;
type Story = StoryObj<typeof VapList>;

export const Loading: Story = {
    args: {
        items: [],
        isLoading: true,
    },
};

export const Default: Story = {
    args: {
        isLoading: false,
        items: [
            { id: 1, title: 'Kiwi Strawberry', amount: 15, src: 'https://via.placeholder.com/150' },
            { id: 2, title: 'Mango Ice', amount: 8, src: 'https://via.placeholder.com/150' },
            { id: 3, title: 'Blueberry Raspberry', amount: 0, src: 'https://via.placeholder.com/150' },
            { id: 4, title: 'Watermelon Bubblegum', amount: 22, src: 'https://via.placeholder.com/150' },
        ],
    },
};

export const Empty: Story = {
    args: {
        isLoading: false,
        items: [],
    },
};
