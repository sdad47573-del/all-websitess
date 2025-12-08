import { useStore } from '@nanostores/react';
import { Modal, type ModalData, type NumericFormData } from '@react-components';
import { useEffect } from 'react';
import Toastify from 'toastify-js';
import { insertSale } from '../services/sales.service';
import { isModalOpen, lastSale, modalData } from '../stores/modal.store';

export default function ConnectedModal() {
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

	const handleClose = () => {
		isModalOpen.set(false);
	};

	const handleSubmit = async (form: NumericFormData) => {
		if (!$data) return;

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
			gravity: 'bottom',
			position: 'right',
		}).showToast();

		lastSale.set({
			itemId: $data.id,
			amountSold: form.amount,
			timestamp: Date.now(),
		});

		handleClose();
	};

	return <Modal isOpen={$isModalOpen} onClose={handleClose} data={$data} onSubmit={handleSubmit} />;
}
