import { bulkAction } from '@/types/componens';
import { FaSun, FaMagic } from 'react-icons/fa';

export const BULK_ACTIONS: bulkAction[] = [
  {
    text: 'Test',
    icon: <FaSun />,
    colorScheme: 'negative',
    action: (items) => {
      console.log('test');
      console.log(items);
    },
  },
  {
    text: 'Test2',
    icon: <FaMagic />,
    action: (items) => {
      console.log('test2');
      console.log(items);
    },
  },
];
