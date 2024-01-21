import { useGetAllUsersQuery } from '@/API/usersAPI';
import PageLoading from '@/components/1-atoms/PageLoading';
import PageHeading from '@atoms/PageHeading';

export default () => {
  const { isLoading, data, error } = useGetAllUsersQuery();

  return (
    <>
      <PageHeading pageTitle={'Users'} />
      {isLoading && <PageLoading />}
      {data && <div>{JSON.stringify(data)}</div>}
      {error && <div>{JSON.stringify(error)}</div>}
    </>
  );
};
