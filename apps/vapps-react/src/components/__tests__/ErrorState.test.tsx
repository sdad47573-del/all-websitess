import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ErrorState } from '../ErrorState';

describe('ErrorState Component', () => {
  it('renders with default message', () => {
    render(<ErrorState />);
    expect(screen.getByText('Ha ocurrido un error')).toBeInTheDocument();
  });

  it('renders with a custom message', () => {
    const customMessage = 'Something went wrong';
    render(<ErrorState message={customMessage} />);
    expect(screen.getByText(customMessage)).toBeInTheDocument();
  });

  it('renders details when provided', () => {
    render(<ErrorState details="Detalles del error" />);
    expect(screen.getByText('Detalles del error')).toBeInTheDocument();
  });

  it('reloads page on button click', () => {
    const reloadSpy = vi.fn();
    const originalLocation = window.location;
    Object.defineProperty(window, 'location', {
      value: { ...originalLocation, reload: reloadSpy },
      writable: true,
    });
    render(<ErrorState />);
    screen.getByText('Reintentar').click();
    expect(reloadSpy).toHaveBeenCalled();
  });
});
