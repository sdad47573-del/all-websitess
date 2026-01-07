import type { StoryObj } from '@storybook/react';
import { PWAInstallButton } from './PWAInstallButton';
declare const meta: {
    title: string;
    component: typeof PWAInstallButton;
    parameters: {
        layout: string;
    };
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const InNavbar: Story;
