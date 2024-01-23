import { bulkAction } from '@/types/componens';
import { useTranslation } from 'react-i18next';
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';

const useCollectionActions = () => {
  const { t } = useTranslation();

  const itemActions: bulkAction[] = [
    {
      text: t('collections.actions.edit'),
      icon: <FaPencilAlt />,
      action: (IDs) => {
        console.log(IDs);
      },
    },
    {
      text: t('collections.actions.delete'),
      icon: <FaTrashAlt />,
      colorScheme: 'negative',
      action: (IDs) => {
        console.log(IDs);
      },
    },
  ];

  return itemActions;
};

export default useCollectionActions;
