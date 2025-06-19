import type { ReactNode } from 'react';
import { ReactBrowserRouter } from './ReactBrowserRouter';
import { StylesProviders } from './StylesProviders';

type ProvidersProps = {
  children: ReactNode;
};

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <StylesProviders>
      <ReactBrowserRouter>
        {children}
      </ReactBrowserRouter>
    </StylesProviders>
  );
};
