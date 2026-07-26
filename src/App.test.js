import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes, useLocation } from 'react-router-dom';
import { LocaleProvider, useLocale } from './i18n/LocaleContext';

const LocaleProbe = () => {
  const { locale, setLocale, t } = useLocale();
  const location = useLocation();

  return (
    <>
      <div data-testid="locale">{locale}</div>
      <div data-testid="path">{location.pathname}</div>
      <div data-testid="translation">{t('nav.tagline')}</div>
      <button type="button" onClick={() => setLocale('ja', 'manual')}>
        Switch Japanese
      </button>
    </>
  );
};

const renderLocale = (path) =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route
          path="/:locale/*"
          element={
            <LocaleProvider>
              <LocaleProbe />
            </LocaleProvider>
          }
        />
      </Routes>
    </MemoryRouter>
  );

test('loads Japanese from the /ja URL', () => {
  renderLocale('/ja');
  expect(screen.getByTestId('locale').textContent).toBe('ja');
  expect(screen.getByTestId('translation').textContent).toBe(
    '日本・バングラデシュ合弁企業'
  );
});

test('switches English to Japanese and updates the URL', async () => {
  renderLocale('/en/about');
  fireEvent.click(screen.getByRole('button', { name: 'Switch Japanese' }));

  await waitFor(() => {
    expect(screen.getByTestId('locale').textContent).toBe('ja');
    expect(screen.getByTestId('path').textContent).toBe('/ja/about');
    expect(screen.getByTestId('translation').textContent).toBe(
      '日本・バングラデシュ合弁企業'
    );
  });
});
