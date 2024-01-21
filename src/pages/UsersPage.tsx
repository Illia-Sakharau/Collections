import { useGetAllUsersQuery } from '@/API/usersAPI';
import PageLoading from '@/components/1-atoms/PageLoading';
import PageHeading from '@atoms/PageHeading';
import UsersTable from '@organisms/usersTable/UsersTable';

export default () => {
  const { isLoading, data, error } = useGetAllUsersQuery();

  if (error) {
    throw error;
  }

  return (
    <>
      <PageHeading pageTitle={'Users'} />
      {isLoading && <PageLoading />}
      {data && <UsersTable data={data} />}
      {error && <div>{JSON.stringify(error)}</div>}
    </>
  );
};
