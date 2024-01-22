import { bulkAction } from '@/types/componens';
import { TFunction } from 'i18next';
import {
  FaUnlockAlt,
  FaLock,
  FaUserTie,
  FaUser,
  FaTrashAlt,
} from 'react-icons/fa';

export const BULK_ACTIONS = (t: TFunction): bulkAction[] => [
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
      console.log('delete');
      console.log(items);
    },
  },
];
