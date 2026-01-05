import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: (props: Omit<import("./Input").InputProps, "type" | "rightAddon">) => import("react/jsx-runtime").JSX.Element;
    parameters: {
        layout: string;
    };
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const WithError: Story;
