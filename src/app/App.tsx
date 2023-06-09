import { Suspense } from 'react';
import { ThemeProvider } from 'shared/ui/ThemeSwitcher';
import { AppRouter } from './providers/RouterProvider';
import { StoreProvider } from './providers/StoreProvider';

export default function App() {
  return (
    <Suspense fallback="">
      <StoreProvider>
        <ThemeProvider>
          <AppRouter />
        </ThemeProvider>
      </StoreProvider>
    </Suspense>
  );
}
