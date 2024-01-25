import { useTranslation } from 'react-i18next';
import FormStep1 from '../components/FormStep1';
import FormStep2 from '../components/FormStep2';

export default () => {
  const { t } = useTranslation();

  const steps = [
    {
      title: t('collections.popup.step1.title'),
      component: <FormStep1 />,
      action: async () => {
        console.log('next');
      },
    },
    {
      title: t('collections.popup.step2.title'),
      component: <FormStep2 />,
      action: async () => {
        console.log('send');
      },
    },
  ];
  return steps;
};
