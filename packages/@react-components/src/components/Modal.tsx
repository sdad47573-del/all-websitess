import { useEffect } from 'react';
import { twJoin } from 'tailwind-merge';
import { NumericForm, type NumericFormData } from './NumericForm';

export interface ModalData {
	id: number;
	title: string;
	src: string;
	amount: number;
}

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	data: ModalData | null;
	onSubmit: (data: NumericFormData) => void;
}

export const Modal = ({ isOpen, onClose, data, onSubmit }: ModalProps) => {
	useEffect(() => {
		if (isOpen) {
			document.body.classList.add('overflow-hidden');
		} else {
			document.body.classList.remove('overflow-hidden');
		}

		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === 'Escape' && isOpen) {
				onClose();
			}
		};

		document.addEventListener('keydown', handleEscape);
		return () => {
			document.removeEventListener('keydown', handleEscape);
			document.body.classList.remove('overflow-hidden');
		};
	}, [isOpen, onClose]);

	if (!data) return null;

	return (
		<div
			className={twJoin(
				'fixed inset-0 z-50 overflow-y-auto transition-opacity duration-300',
				isOpen ? 'opacity-100' : 'hidden opacity-0',
			)}
			aria-hidden={!isOpen}
			onClick={(e) => {
				if (e.target === e.currentTarget) {
					onClose();
				}
			}}
		>
			<div className="relative flex min-h-full items-end justify-center p-4 sm:items-center">
				<div
					className="absolute top-0 left-0 h-full w-full cursor-pointer bg-black/50"
					onClick={onClose}
				></div>
				<div
					className={twJoin(
						'relative w-full max-w-md transform rounded-t-3xl bg-white transition-all duration-300 sm:rounded-3xl',
						isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0',
					)}
				>
					<div className="sticky top-0 flex items-center justify-between rounded-t-3xl border-b border-gray-100 bg-white px-6 py-4">
						<h2 className="text-xl font-bold text-gray-900">Detalles del Objeto</h2>
						<button
							onClick={onClose}
							className="flex h-8 w-8 cursor-pointer items-center justify-center text-gray-400 transition-colors hover:text-gray-600"
							aria-label="Cerrar"
						>
							<i className="ri-close-line text-2xl"></i>
						</button>
					</div>
					<div className="p-6">
						<div className="mb-6 aspect-square overflow-hidden rounded-2xl bg-gray-50">
							<img
								alt={data.title}
								className="h-full w-full object-cover object-top"
								src={data.src}
							/>
						</div>
						<div className="mb-6 space-y-4">
							<div>
								<h3 className="mb-2 text-2xl font-bold text-gray-900">{data.title}</h3>
							</div>
						</div>

						<div className="border-t border-gray-100 pt-6">
							<h4 className="mb-4 flex items-baseline justify-between gap-2 font-semibold text-gray-900">
								<p></p>
								<p className="text-2xl font-bold text-teal-600">{data.amount}</p>
							</h4>

							<NumericForm onSubmit={onSubmit} stock={data.amount} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
