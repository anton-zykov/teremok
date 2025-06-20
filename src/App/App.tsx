import { type JSX } from 'react';
import { Providers } from './providers';
import { MainRouter } from './routers';
import { Page } from '@/core';

export const App = (): JSX.Element => {
  return (
    <Providers>
      <Page>
        <MainRouter />
      </Page>
    </Providers>
  );
};
