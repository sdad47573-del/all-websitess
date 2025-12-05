import { useEffect } from 'react';
import { NumericForm } from './NumericForm';
// import type FormData from './NumericForm';
import { twJoin } from 'tailwind-merge';
import { useStore } from '@nanostores/react';
import { modalData, isModalOpen } from '../stores/modal.store';
import { insertSale } from '../services/sales.service';
import Toastify from 'toastify-js';

export interface ModalData {
	id: number;
	title: string;
	src: string;
	amount: number;
}

export default function Modal() {
	const $data = useStore(modalData);
	const $isModalOpen = useStore(isModalOpen);

	useEffect(() => {
		const handleOpenModal = (e: Event) => {
			const customEvent = e as CustomEvent<ModalData>;
			modalData.set(customEvent.detail);
			isModalOpen.set(true);
		};

		window.addEventListener('openModal', handleOpenModal);

		return () => {
			window.removeEventListener('openModal', handleOpenModal);
		};
	}, []);

	useEffect(() => {
		if ($isModalOpen) {
			document.body.classList.add('overflow-hidden');
		} else {
			document.body.classList.remove('overflow-hidden');
		}

		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === 'Escape' && $data) {
				handleClose();
			}
		};

		document.addEventListener('keydown', handleEscape);
		return () => {
			document.removeEventListener('keydown', handleEscape);
			document.body.classList.remove('overflow-hidden');
		};
	}, [$isModalOpen]);

	const handleClose = () => {
		isModalOpen.set(false);
	};

	const handleSubmit = async (form) => {
		await insertSale({
			item_id: $data.id,
			seller_id: 'ISMAEL',
			price_per_unit: form.price_per_unit,
			amount: form.amount,
			concept: form.concept,
			payment: form.payment ? form.price_per_unit * form.amount : 0,
		} as any);
		Toastify({
			text: 'Venta guardada correctamente 🎉',
			duration: 3000,
			gravity: 'bottom', // "top" o "bottom"
			position: 'right', // "left", "center", "right"
			style: {
				background: 'linear-gradient(to right, #00b09b, #96c93d)',
			},
		}).showToast();
		handleClose();
		return;
	};

	if (!$data) return null;

	return (
		<div
			className={twJoin(
				'fixed inset-0 z-50 overflow-y-auto transition-opacity duration-300',

				$isModalOpen ? 'opacity-100' : 'hidden opacity-0',
			)}
			aria-hidden={!$isModalOpen}
			onClick={(e) => {
				if (e.target === e.currentTarget) {
					handleClose();
				}
			}}
			// onClick={handleClose}
		>
			<div className="relative flex min-h-full items-end justify-center p-4 sm:items-center">
				<div
					className="absolute top-0 left-0 h-full w-full cursor-pointer bg-black/50"
					onClick={handleClose}
				></div>
				<div
					className={twJoin(
						'relative w-full max-w-md transform rounded-t-3xl bg-white transition-all duration-300 sm:rounded-3xl',
						$isModalOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0',
					)}
				>
					<div className="sticky top-0 flex items-center justify-between rounded-t-3xl border-b border-gray-100 bg-white px-6 py-4">
						<h2 className="text-xl font-bold text-gray-900">Detalles del Objeto</h2>
						<button
							onClick={handleClose}
							className="flex h-8 w-8 cursor-pointer items-center justify-center text-gray-400 transition-colors hover:text-gray-600"
							aria-label="Cerrar"
						>
							<i className="ri-close-line text-2xl"></i>
						</button>
					</div>
					<div className="p-6">
						<div className="mb-6 aspect-square overflow-hidden rounded-2xl bg-gray-50">
							<img
								alt={$data.title}
								className="h-full w-full object-cover object-top"
								src={$data.src}
							/>
						</div>
						<div className="mb-6 space-y-4">
							<div>
								<h3 className="mb-2 text-2xl font-bold text-gray-900">{$data.title}</h3>
							</div>
						</div>

						<div className="border-t border-gray-100 pt-6">
							<h4 className="mb-4 flex items-baseline justify-between gap-2 font-semibold text-gray-900">
								<p></p>
								<p className="text-2xl font-bold text-teal-600">{$data.amount}</p>
							</h4>

							<NumericForm onSubmit={handleSubmit} stock={$data.amount} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
