import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders localized home shell', async () => {
  render(
    <MemoryRouter initialEntries={['/en']}>
      <App />
    </MemoryRouter>
  );
  expect(await screen.findByText(/Japan-Bangladesh Joint Venture/i)).toBeInTheDocument();
});
