import { isModalOpen, modalData } from '../stores/modal.store';

document.addEventListener('click', (e) => {
	const target = e.target as HTMLElement;
	const vapItem = target.closest('.vap-item') as HTMLElement;
	if (!vapItem) return;
	const { id, title, src, amount } = vapItem.dataset;
	if (id && title && src && amount) {
		let parsedSrc = src;
		try {
			const srcObj = JSON.parse(src);
			parsedSrc = srcObj.src || srcObj;
		} catch (_) {
			parsedSrc = src;
		}
		modalData.set({
			id: Number(id),
			title,
			src: parsedSrc,
			amount: Number(amount),
		});
		isModalOpen.set(true);
	}
});
