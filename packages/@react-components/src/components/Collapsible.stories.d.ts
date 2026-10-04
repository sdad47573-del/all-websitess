import type { StoryObj } from '@storybook/react';
import { Collapsible } from './Collapsible';
declare const meta: {
    title: string;
    component: typeof Collapsible;
    parameters: {
        layout: string;
    };
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Open: Story;
export declare const Closed: Story;
