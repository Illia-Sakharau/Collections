import { useGetAllUsersQuery } from '@/API/usersAPI';
import PageLoading from '@/components/1-atoms/PageLoading';
import { useAppSelector } from '@/hooks/redux';
import PageHeading from '@atoms/PageHeading';
import UsersTable from '@organisms/usersTable/UsersTable';

export default () => {
  useGetAllUsersQuery();
  const { isLoading, users, error } = useAppSelector(
    (state) => state.usersListReducer
  );

  if (error) {
    throw error;
  }

  return (
    <>
      <PageHeading pageTitle={'Users'} />
      {isLoading && <PageLoading />}
      {users && <UsersTable data={users} />}
      {error && <div>{JSON.stringify(error)}</div>}
    </>
  );
};
