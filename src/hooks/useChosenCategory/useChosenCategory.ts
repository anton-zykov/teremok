import { useLocalStorage } from '@mantine/hooks';
import type { category } from '@/types';

export const useChosenCategory = () => {
  return useLocalStorage<category>({
    key: 'category',
  });
};
