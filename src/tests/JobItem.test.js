import { render, screen } from '@testing-library/react';
import JobItem from '../features/JobBoard/JobItem';

jest.mock('react-router-dom', () => ({
  NavLink: () => <div />,
}));

describe('test JobItem component', () => {
  it('renders JobItem component correctly', () => {
    render(<JobItem id={1} title="title" companyName="company" publicationDate="date" />);
    expect(screen.getByText(/title/)).toBeInTheDocument();
    expect(screen.getByText(/company/)).toBeInTheDocument();
    expect(screen.getByText(/date/)).toBeInTheDocument();
  });
});
