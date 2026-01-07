import { twJoin } from 'tailwind-merge';

interface EmptyStateProps {
	message?: string;
	icon?: string;
}

export const EmptyState = ({
	message = 'No hay datos disponibles',
	icon = 'ri-inbox-line',
}: EmptyStateProps) => {
	return (
		<div className="bg-base-200/50 border-base-300 mx-5 rounded-lg border-2 border-dashed p-12 text-center">
			<i className={twJoin('text-base-content/20 mb-4 block text-4xl', icon)} />
			<p className="text-base-content/60 font-medium">{message}</p>
		</div>
	);
};
