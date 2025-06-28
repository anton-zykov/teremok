import type { ReactNode } from 'react';
import { DonationsModalProvider } from './DonationsModalProvider';
import { ReactBrowserRouter } from './ReactBrowserRouter';
import { StylesProviders } from './StylesProviders';

type ProvidersProps = {
  children: ReactNode;
};

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <StylesProviders>
      <ReactBrowserRouter>
        <DonationsModalProvider>
          {children}
        </DonationsModalProvider>
      </ReactBrowserRouter>
    </StylesProviders>
  );
};
