import { useDeleteUsersMutation } from '@/API/usersAPI';
import { bulkAction } from '@/types/componens';
import { useToast } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import {
  FaUnlockAlt,
  FaLock,
  FaUserTie,
  FaUser,
  FaTrashAlt,
} from 'react-icons/fa';

const useBulkUsers = () => {
  const { t } = useTranslation();
  const [deleteUsers] = useDeleteUsersMutation();
  const toast = useToast();

  const bulkActions: bulkAction[] = [
    {
      text: t('users.block'),
      icon: <FaLock />,
      action: (items) => {
        console.log('block');
        console.log(items);
      },
    },
    {
      text: t('users.unblock'),
      icon: <FaUnlockAlt />,
      action: (items) => {
        console.log('unblock');
        console.log(items);
      },
    },
    {
      text: t('users.do_admin'),
      icon: <FaUserTie />,
      action: (items) => {
        console.log('do_admin');
        console.log(items);
      },
    },
    {
      text: t('users.unadmin'),
      icon: <FaUser />,
      action: (items) => {
        console.log('unadmin');
        console.log(items);
      },
    },
    {
      text: t('users.delete'),
      icon: <FaTrashAlt />,
      colorScheme: 'negative',
      action: (items) => {
        deleteUsers(items)
          .unwrap()
          .then(() => {
            toast({
              description: t('users.delete_msg_success', {
                count: items.length,
              }),
              status: 'success',
              position: 'bottom-left',
              duration: 10000,
              isClosable: true,
            });
          })
          .catch(() => {
            toast({
              description: t('users.msg_error'),
              status: 'error',
              position: 'bottom-left',
              duration: 10000,
              isClosable: true,
            });
          });
      },
    },
  ];

  return bulkActions;
};

export default useBulkUsers;
