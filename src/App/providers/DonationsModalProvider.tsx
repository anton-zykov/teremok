import type { ReactNode } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { DonationsModalContext } from '@/App';

type DonationsModalProviderProps = {
  children: ReactNode;
}

export const DonationsModalProvider = ({ children }: DonationsModalProviderProps) => {
  const [ opened, { open, close } ] = useDisclosure(false);

  return (
    <DonationsModalContext.Provider value={{ opened, open, close }}>
      {children}
    </DonationsModalContext.Provider>
  );
};
