import PageHeading from '@atoms/PageHeading';
import SectionWrapper from '@atoms/SectionWrapper';
import useAuth from '@/hooks/useAuth';
import { useTranslation } from 'react-i18next';
import AdminView from './components/AdminView';
import UserView from './components/UserView';
import { FaPlus } from 'react-icons/fa';
import { useDisclosure } from '@chakra-ui/react';
import CreateCollectionPopUp from '@organisms/createCollectionPopUp/CreateCollectionPopUp';

export default () => {
  const { t } = useTranslation();
  const { isAdmin } = useAuth();

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <PageHeading
        pageTitle={t('collections.title')}
        ctaButtonInfo={{
          text: t('collections.cta'),
          icon: <FaPlus />,
          action: onOpen,
        }}
      />
      <SectionWrapper
        containerProps={{
          pt: { base: 0, md: 0, xl: 0 },
        }}
      >
        {isAdmin ? <AdminView /> : <UserView />}
      </SectionWrapper>
      <CreateCollectionPopUp isOpen={isOpen} onClose={onClose} />
    </>
  );
};
