import { useDonationsModal } from '@/hooks';
import { Modal } from '@mantine/core';

export const DonationsModal = () => {
  const { opened, close } = useDonationsModal();

  return (
    <Modal opened={opened} onClose={close} title="Authentication">
      Hi
    </Modal>
  );
};
