import { describe, it, expect } from 'vitest';
import { modalData, isModalOpen } from '../modal.store';

describe('Modal Store', () => {
  it('should have initial state', () => {
    expect(modalData.get()).toBeNull();
    expect(isModalOpen.get()).toBe(false);
  });

  it('should update modalData', () => {
    // Mocking ModalData structure based on usage in modalVanilla.ts
    // { id: number, title: string, src: string, amount: number }
    const testData: any = {
      id: 1,
      title: 'Test Item',
      src: 'test.jpg',
      amount: 100
    };
    
    modalData.set(testData);
    expect(modalData.get()).toEqual(testData);
  });

  it('should update isModalOpen', () => {
    isModalOpen.set(true);
    expect(isModalOpen.get()).toBe(true);
    
    isModalOpen.set(false);
    expect(isModalOpen.get()).toBe(false);
  });
});
