import type { StoryObj } from '@storybook/react';
import { LoginForm2 } from './LoginForm2';
declare const meta: {
    title: string;
    component: typeof LoginForm2;
    parameters: {
        layout: string;
    };
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
