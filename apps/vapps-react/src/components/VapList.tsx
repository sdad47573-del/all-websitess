import { modalData, isModalOpen } from '../stores/modal.store';
import { VapList as SharedVapList, type VapItemData } from '@react-components';

const VapList = ({ items, isLoading }: { items: VapItemData[]; isLoading: boolean }) => {
	const handleItemClick = (item: VapItemData) => {
		if (item.amount === 0) return;

		modalData.set(item);
		isModalOpen.set(true);
	};

	return <SharedVapList items={items} isLoading={isLoading} onItemClick={handleItemClick} />;
};

export default VapList;
