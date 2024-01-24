import CollectionsTable from '@organisms/collectionsTable/CollectionsTable';
import { useTranslation } from 'react-i18next';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { useAppSelector } from '@/hooks/redux';
import PageLoading from '@/components/1-atoms/PageLoading';
import { useGetAllCollectionsQuery } from '@/API/collectionsAPI';
import collectionsAllAdapter from '@/utils/adapters/collectionsAllAdapter';

export default () => {
  const { t } = useTranslation();
  const { collections, error, isLoading } = useAppSelector(
    (state) => state.collectionsListReducer
  );

  const {
    data: allCollections,
    isLoading: isLoadingAll,
    isError: isErrorAll,
    error: errorAll,
  } = useGetAllCollectionsQuery();

  return (
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
          {isLoadingAll && <PageLoading />}
          {allCollections && (
            <CollectionsTable
              data={collectionsAllAdapter(allCollections)}
              isAll
            />
          )}
          {isErrorAll && <div>{JSON.stringify(errorAll)}</div>}
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
