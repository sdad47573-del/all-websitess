import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: import("react").ForwardRefExoticComponent<import("react").InputHTMLAttributes<HTMLInputElement> & {
        label?: string;
        error?: string;
        leftIconClass?: string;
        rightAddon?: import("react").ReactNode;
        containerClassName?: string;
    } & import("react").RefAttributes<HTMLInputElement>>;
    parameters: {
        layout: string;
    };
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const WithIcon: Story;
export declare const Password: Story;
export declare const ErrorState: Story;
export declare const Disabled: Story;
