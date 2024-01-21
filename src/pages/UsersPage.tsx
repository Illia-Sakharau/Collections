// import { useGetAllUsersQuery } from '@/API/usersAPI';
// import PageLoading from '@/components/1-atoms/PageLoading';
import PageHeading from '@atoms/PageHeading';
import UsersTable from '@organisms/usersTable/UsersTable';

export default () => {
  // const { isLoading, data, error } = useGetAllUsersQuery();

  const data = [
    {
      id: 5,
      name: 'user1',
      email: 'user1@test.com',
      is_admin: false,
      createdAt: '2024-01-06T13:38:01.336Z',
      updatedAt: '2024-01-06T13:38:01.336Z',
    },
    {
      id: 6,
      name: 'user2',
      email: 'user2@test.com',
      is_admin: false,
      createdAt: '2024-01-06T14:01:36.403Z',
      updatedAt: '2024-01-06T14:01:36.403Z',
    },
    {
      id: 8,
      name: 'user4',
      email: 'user4@test.com',
      is_admin: false,
      createdAt: '2024-01-06T17:26:03.650Z',
      updatedAt: '2024-01-06T17:26:03.650Z',
    },
    {
      id: 7,
      name: 'user3',
      email: 'user3@test.com',
      is_admin: true,
      createdAt: '2024-01-06T16:42:03.790Z',
      updatedAt: '2024-01-06T16:42:03.790Z',
    },
    {
      id: 9,
      name: 'user5',
      email: 'user5@test.com',
      is_admin: false,
      createdAt: '2024-01-06T18:14:40.111Z',
      updatedAt: '2024-01-06T18:14:40.111Z',
    },
    {
      id: 10,
      name: 'user7',
      email: 'user7@test.com',
      is_admin: false,
      createdAt: '2024-01-18T11:55:50.189Z',
      updatedAt: '2024-01-18T11:55:50.189Z',
    },
    {
      id: 11,
      name: 'Ily',
      email: 'ily@test.com',
      is_admin: false,
      createdAt: '2024-01-18T15:02:12.988Z',
      updatedAt: '2024-01-18T15:02:12.988Z',
    },
    {
      id: 12,
      name: 'Yuliya Sakharava',
      email: 'maslova0512@gmail.com',
      is_admin: true,
      createdAt: '2024-01-18T15:57:56.175Z',
      updatedAt: '2024-01-18T15:57:56.175Z',
    },
  ];
  return (
    <>
      <PageHeading pageTitle={'Users'} />
      {/* {isLoading && <PageLoading />} */}
      {data && <UsersTable data={data} />}
      {/* {error && <div>{JSON.stringify(error)}</div>} */}
    </>
  );
};
