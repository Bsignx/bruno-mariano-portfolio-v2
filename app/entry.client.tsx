import * as React from 'react';
import { RemixBrowser } from '@remix-run/react';
import { hydrate } from 'react-dom';
import { getCssText } from './styles/stitches.config';
import { ClientStyleContext } from './styles';

interface ClientCacheProviderProps {
  children: React.ReactNode;
}

function ClientCacheProvider({ children }: ClientCacheProviderProps) {
  const [sheet, setSheet] = React.useState(getCssText());

  const reset = React.useCallback(() => {
    setSheet(getCssText());
  }, []);

  // if the browser supports SW (all modern browsers do it)
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      // we will register it after the page complete the load
      navigator.serviceWorker.register('/sw.js');
    });
  }

  return (
    <ClientStyleContext.Provider value={{ reset, sheet }}>
      {children}
    </ClientStyleContext.Provider>
  );
}

hydrate(
  <ClientCacheProvider>
    <RemixBrowser />
  </ClientCacheProvider>,
  document
);
