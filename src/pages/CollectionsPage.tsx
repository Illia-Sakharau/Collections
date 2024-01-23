import PageHeading from '@atoms/PageHeading';
import SectionWrapper from '@atoms/SectionWrapper';
import CollectionsTable from '@organisms/collectionsTable/CollectionsTable';
import useAuth from '@/hooks/useAuth';
import { useTranslation } from 'react-i18next';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { useAppSelector } from '@/hooks/redux';
import PageLoading from '@/components/1-atoms/PageLoading';

export default () => {
  const { t } = useTranslation();
  const { isAdmin } = useAuth();
  const { collections, error, isLoading } = useAppSelector(
    (state) => state.collectionsListReducer
  );

  return (
    <>
      <PageHeading pageTitle={t('collections.title')} />
      <SectionWrapper
        containerProps={{
          pt: { base: 0, md: 0, xl: 0 },
        }}
      >
        {isAdmin ? (
          <Tabs variant="line" colorScheme="brand" isLazy>
            <TabList>
              <Tab>{t('collections.tabs.my')}</Tab>
              <Tab>{t('collections.tabs.all')}</Tab>
            </TabList>
            <TabPanels>
              <TabPanel p={0} pt={4}>
                {isLoading && <PageLoading />}
                {collections && <CollectionsTable data={collections} />}
                {error && <div>{JSON.stringify(error)}</div>}
              </TabPanel>
              <TabPanel p={0} pt={4}>
                {isLoading && <PageLoading />}
                {collections && <CollectionsTable data={collections} isAll />}
                {error && <div>{JSON.stringify(error)}</div>}
              </TabPanel>
            </TabPanels>
          </Tabs>
        ) : (
          <>{collections && <CollectionsTable data={collections} />}</>
        )}
      </SectionWrapper>
    </>
  );
};
