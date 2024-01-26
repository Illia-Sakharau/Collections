import CollectionsTable from '@organisms/collectionsTable/CollectionsTable';
import PageLoading from '@/components/1-atoms/PageLoading';
import { useGetMyCollectionsQuery } from '@/API/collectionsAPI';
import collectionsAllAdapter from '@/utils/adapters/collectionsAllAdapter';

export default () => {
  const { data, isLoading, isError, error } = useGetMyCollectionsQuery();

  if (isError) throw error
  return (
    <>
      {isLoading && <PageLoading />}
      {data && <CollectionsTable data={collectionsAllAdapter(data)} />}
      {isError && <div>{JSON.stringify(error)}</div>}
    </>
  );
};
