import { useStore } from '@nanostores/react';
import { Modal, type ModalData, type NumericFormData } from '@react-components';
import { useEffect } from 'react';
import Toastify from 'toastify-js';
import { insertSale } from '../services/sales.service';
import { isModalOpen, modalData } from '../stores/modal.store';
import { useMutation } from '@tanstack/react-query';
import { queryClient } from '../lib/queryClient';

export default function ConnectedModal() {
	const $data = useStore(modalData);
	const $isModalOpen = useStore(isModalOpen);
	// TODO: abstraer a un hook
	const mutation = useMutation({
		mutationFn: insertSale,
		// onSuccess: () => {
		// 	queryClient.invalidateQueries(['items']);
		// },
		onSuccess: (alteredSale: any) => {
			queryClient.setQueryData(['items'], (oldItems: any[]) => {
				if (!oldItems) return oldItems;

				return oldItems.map((item) =>
					item.id === alteredSale.data.item_id
						? { ...item, amount: item.amount - alteredSale.data.amount }
						: item,
				);
			});
		},
	});

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

		mutation.mutate({
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

		handleClose();
	};

	return <Modal isOpen={$isModalOpen} onClose={handleClose} data={$data} onSubmit={handleSubmit} />;
}
