import { describe, it, expect, beforeEach } from 'vitest';
import { modalData, isModalOpen } from '../../stores/modal.store';
import '../modalVanilla'; // Import to attach event listener

describe('modalVanilla', () => {
    beforeEach(() => {
        // Reset store before each test
        modalData.set(null);
        isModalOpen.set(false);
        document.body.innerHTML = '';
    });

    it('should update store when clicking on .vap-item element', () => {
        // Create the element structure
        const container = document.createElement('div');
        container.className = 'vap-item';
        container.dataset.id = '123';
        container.dataset.title = 'Test Title';
        container.dataset.src = '{"src": "image.jpg"}'; // JSON format as per logic
        container.dataset.amount = '99.99';
        
        // Add some content to click on
        const button = document.createElement('button');
        button.textContent = 'Click me';
        container.appendChild(button);
        
        document.body.appendChild(container);

        // Click the button inside the container
        button.click();

        // Check store updates
        expect(isModalOpen.get()).toBe(true);
        expect(modalData.get()).toEqual({
            id: 123,
            title: 'Test Title',
            src: 'image.jpg',
            amount: 99.99
        });
    });

    it('should handle simple string src', () => {
        const container = document.createElement('div');
        container.className = 'vap-item';
        container.dataset.id = '456';
        container.dataset.title = 'Simple Title';
        container.dataset.src = 'simple-image.jpg';
        container.dataset.amount = '50';
        
        document.body.appendChild(container);

        container.click(); // Click container directly

        expect(isModalOpen.get()).toBe(true);
        expect(modalData.get()).toEqual({
            id: 456,
            title: 'Simple Title',
            src: 'simple-image.jpg',
            amount: 50
        });
    });

    it('should ignore clicks outside .vap-item', () => {
        const otherDiv = document.createElement('div');
        otherDiv.className = 'other-item';
        document.body.appendChild(otherDiv);

        otherDiv.click();

        expect(isModalOpen.get()).toBe(false);
        expect(modalData.get()).toBeNull();
    });
});
