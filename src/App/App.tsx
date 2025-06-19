import { type JSX } from 'react';
import { Providers } from './providers';
import { MainRouter } from './routers';
import { Page } from '@/core';

export const App = (): JSX.Element => {
  return (
    <Providers>
      <Page>
        <h1>App</h1>
        <MainRouter />
      </Page>
    </Providers>
  );
};
