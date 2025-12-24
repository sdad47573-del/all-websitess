import { twJoin } from "tailwind-merge";

interface EmptyStateProps {
    message?: string;
    icon?: string;
}

export const EmptyState = ({ message = 'No hay datos disponibles', icon = 'ri-inbox-line' }: EmptyStateProps) => {
    return (
        <div className="mx-5 rounded-lg bg-base-200/50 border-2 border-dashed border-base-300 p-12 text-center">
            <i className={twJoin('mb-4 text-4xl text-base-content/20 block', icon)} />
            <p className="text-base-content/60 font-medium">{message}</p>
        </div>
    );
};
