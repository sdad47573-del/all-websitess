
interface ErrorStateProps {
	message?: string;
	details?: string;
}

export const ErrorState = ({ message = 'Ha ocurrido un error', details }: ErrorStateProps) => {
	return (
		<div className="animate-fadeIn flex flex-col items-center justify-center p-10 text-center">
			<div className="bg-error/10 text-error border-error/20 max-w-md rounded-2xl border p-8 shadow-lg backdrop-blur-sm">
				<div className="bg-error/20 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
					<i className="ri-error-warning-line text-3xl" />
				</div>
				<h3 className="mb-2 text-xl font-bold">{message}</h3>
				{details && <p className="text-sm break-words opacity-70">{details}</p>}
				<button
					onClick={() => window.location.reload()}
					className="bg-error hover:bg-error/80 mt-6 rounded-lg px-6 py-2 font-bold text-white shadow-md transition-colors active:scale-95"
				>
					Reintentar
				</button>
			</div>
		</div>
	);
};
