import { render, screen } from '@testing-library/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Job from '../features/Job/Job';

jest.mock('react-redux');

const jobs = [{
  id: '1', title: 'Founding Engineer', companyName: 'SIRUM', salary: '$170k - $220k',
}];

const renderWithRoute = (ui, route = '/', params) => {
  const resolvedPath = route.replace(/:(\w+)\/?/, (...args) => {
    const key = args[1];
    return params[key];
  });
  window.history.pushState(undefined, undefined, resolvedPath);
  render(
    <>
      <Routes>
        <Route path={route} element={ui} />
      </Routes>
    </>,
    { wrapper: BrowserRouter },
  );
};

describe('test Job component', () => {
  it('renders Job component correctly', () => {
    useSelector.mockReturnValue(jobs);

    renderWithRoute(<Job />, '/jobs/:id', { id: '1' });
    expect(screen.getByText(/Founding Engineer/)).toBeInTheDocument();
    expect(screen.getByText(/SIRUM/)).toBeInTheDocument();
    expect(screen.getByText('$170k - $220k')).toBeInTheDocument();
  });
});
