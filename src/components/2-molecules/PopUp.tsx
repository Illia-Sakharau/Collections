import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  buttonText: string;
  action: () => void;
};

const PopUp = ({
  isOpen,
  onClose,
  title,
  buttonText,
  action,
  children,
}: Props) => {
  const { t } = useTranslation();
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={'xl'}>
      <ModalOverlay
        bg="blackAlpha.400"
        backdropFilter="auto"
        backdropBlur="2px"
      />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>{children}</ModalBody>

        <ModalFooter display={'flex'} justifyContent={'space-between'} gap={4}>
          <Button onClick={onClose}>{t('other.cancel')}</Button>
          <Button colorScheme="brand" onClick={action}>
            {buttonText}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default PopUp;
