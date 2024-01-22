import {
  useDeleteUsersMutation,
  useSetUsersStateMutation,
} from '@/API/usersAPI';
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
  const [setUsersState] = useSetUsersStateMutation();
  const toast = useToast();

  const showErrorMessage = () =>
    toast({
      description: t('users.msg_error'),
      status: 'error',
      position: 'bottom-left',
      duration: 10000,
      isClosable: true,
    });
  const showSuccessMessage = (message: string) =>
    toast({
      description: message,
      status: 'success',
      position: 'bottom-left',
      duration: 10000,
      isClosable: true,
    });

  const bulkActions: bulkAction[] = [
    {
      text: t('users.block'),
      icon: <FaLock />,
      action: (items) => {
        setUsersState({ IDs: items, newState: true })
          .unwrap()
          .then(() =>
            showSuccessMessage(
              t('users.block_msg_success', { count: items.length })
            )
          )
          .catch(() => showErrorMessage);
      },
    },
    {
      text: t('users.unblock'),
      icon: <FaUnlockAlt />,
      action: (items) => {
        setUsersState({ IDs: items, newState: false })
          .unwrap()
          .then(() =>
            showSuccessMessage(
              t('users.unblock_msg_success', { count: items.length })
            )
          )
          .catch(() => showErrorMessage);
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
          .then(() =>
            showSuccessMessage(
              t('users.delete_msg_success', { count: items.length })
            )
          )
          .catch(() => showErrorMessage);
      },
    },
  ];

  return bulkActions;
};

export default useBulkUsers;
