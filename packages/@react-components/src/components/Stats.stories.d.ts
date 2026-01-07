import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: ({ title, items }: import("./Stats").StatsProps) => import("react/jsx-runtime").JSX.Element;
    parameters: {
        layout: string;
    };
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const CustomTitle: Story;
