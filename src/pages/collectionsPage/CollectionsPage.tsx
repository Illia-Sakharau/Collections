import PageHeading from '@atoms/PageHeading';
import SectionWrapper from '@atoms/SectionWrapper';
import useAuth from '@/hooks/useAuth';
import { useTranslation } from 'react-i18next';
import AdminView from './components/AdminView';
import UserView from './components/UserView';

export default () => {
  const { t } = useTranslation();
  const { isAdmin } = useAuth();

  return (
    <>
      <PageHeading pageTitle={t('collections.title')} />
      <SectionWrapper
        containerProps={{
          pt: { base: 0, md: 0, xl: 0 },
        }}
      >
        {isAdmin ? <AdminView /> : <UserView />}
      </SectionWrapper>
    </>
  );
};
