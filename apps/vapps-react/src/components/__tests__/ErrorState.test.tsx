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
});
