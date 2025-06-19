import { MantineProvider } from '@mantine/core';
import { type JSX, type ReactNode } from 'react';
import '@mantine/core/styles.css';
import '@/styles/index.css';

type StylesProvidersProps = {
  children: ReactNode;
};

export const StylesProviders = ({ children }: StylesProvidersProps): JSX.Element => {
  return (
    <MantineProvider>
      {children}
    </MantineProvider>
  );
};
