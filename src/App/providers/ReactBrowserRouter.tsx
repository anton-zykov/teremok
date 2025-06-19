import type { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';

type ReactBrowserRouterProps = {
  children: ReactNode;
};

export const ReactBrowserRouter = ({ children }: ReactBrowserRouterProps) => {
  return (
    <BrowserRouter>
      {children}
    </BrowserRouter>
  );
};
