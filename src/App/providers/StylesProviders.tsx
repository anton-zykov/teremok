import { createTheme, MantineProvider } from '@mantine/core';
import { type JSX, type ReactNode } from 'react';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import '@/styles/index.css';

type StylesProvidersProps = {
  children: ReactNode;
};

export const StylesProviders = ({ children }: StylesProvidersProps): JSX.Element => {
  const theme = createTheme({
    colors: {
      fernGreen: [
        '#f3f8f2',
        '#e6ede4',
        '#cadac4',
        '#abc7a2',
        '#91b684',
        '#80ac71',
        '#77a767',
        '#659256',
        '#58824b',
        '#4f7942'
      ]
    }
  });

  return (
    <MantineProvider theme={theme}>
      {children}
    </MantineProvider>
  );
};
