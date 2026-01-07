import type { StoryObj } from '@storybook/react';
import { OfflineIndicator } from './OfflineIndicator';
declare const meta: {
    title: string;
    component: typeof OfflineIndicator;
    parameters: {
        layout: string;
    };
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Simulated: Story;
