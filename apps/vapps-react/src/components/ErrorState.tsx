interface ErrorStateProps {
	message?: string;
}

export const ErrorState = ({ message = 'Ha ocurrido un error' }: ErrorStateProps) => {
	return (
		<div className="p-5 text-center text-red-500">
			<p>{message}</p>
		</div>
	);
};
