import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: ({ isOpen, children }: import("./Collapsible").CollapsibleProps) => import("react").JSX.Element;
    parameters: {
        layout: string;
    };
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Open: Story;
export declare const Closed: Story;
