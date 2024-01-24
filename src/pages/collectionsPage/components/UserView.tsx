import CollectionsTable from '@organisms/collectionsTable/CollectionsTable';
import { useAppSelector } from '@/hooks/redux';
import PageLoading from '@/components/1-atoms/PageLoading';

export default () => {
  const { collections, error, isLoading } = useAppSelector(
    (state) => state.collectionsListReducer
  );

  return (
    <>
      {isLoading && <PageLoading />}
      {collections && <CollectionsTable data={collections} />}
      {error && <div>{JSON.stringify(error)}</div>}
    </>
  );
};
