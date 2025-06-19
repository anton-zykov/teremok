import type { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';

type ReactBrowserRouterProps = {
  children: ReactNode;
};

const repoName = import.meta.env.MODE === 'production' ? '/teremok' : '';

export const ReactBrowserRouter = ({ children }: ReactBrowserRouterProps) => {
  return (
    <BrowserRouter basename={repoName}>
      {children}
    </BrowserRouter>
  );
};
