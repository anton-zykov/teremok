import { createContext } from 'react';

export const DonationsModalContext = createContext({
  opened: false,
  open: () => {},
  close: () => {},
});
