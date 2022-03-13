import { render, screen } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import JobBoard from '../features/JobBoard/JobBoard';

jest.mock('react-redux');

describe('', () => {
  it('', () => {
    useDispatch.mockReturnValue(() => {});
    useSelector.mockReturnValue([]);
    render(<JobBoard />);
    expect(screen.getByText(/Total Jobs:/)).toBeInTheDocument();
  });
});
