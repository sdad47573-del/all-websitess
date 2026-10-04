import type { StoryObj } from '@storybook/react';
import { Stats } from './Stats';
declare const meta: {
    title: string;
    component: typeof Stats;
    parameters: {
        layout: string;
    };
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const CustomTitle: Story;
