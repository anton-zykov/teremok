import { useContext } from 'react';
import { DonationsModalContext } from '@/App';

export const useDonationsModal = () => useContext(DonationsModalContext);
