import { useGetAllUsersQuery } from '@/API/usersAPI';

export default () => {
  const { isLoading, data, error } = useGetAllUsersQuery();
  return (
    <div>
      USERS PAGE
      {isLoading && <div>Loading</div>}
      {data && <div>{JSON.stringify(data)}</div>}
      {error && <div>{JSON.stringify(error)}</div>}
    </div>
  );
};
