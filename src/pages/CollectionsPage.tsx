import PageHeading from '@atoms/PageHeading';
import SectionWrapper from '@atoms/SectionWrapper';
import CollectionsTable from '@organisms/collectionsTable/CollectionsTable';
import useAuth from '@/hooks/useAuth';
import { useTranslation } from 'react-i18next';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';

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
        {isAdmin ? (
          <Tabs size="md" variant="enclosed" colorScheme="brand">
            <TabList>
              <Tab>{t('collections.tabs.my')}</Tab>
              <Tab>{t('collections.tabs.all')}</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <CollectionsTable />
              </TabPanel>
              <TabPanel>
                <CollectionsTable isAll={true} />
              </TabPanel>
            </TabPanels>
          </Tabs>
        ) : (
          <CollectionsTable />
        )}
      </SectionWrapper>
    </>
  );
};
