import SectionWrapper from '@atoms/SectionWrapper';
import { IUserInfo } from '@/types/api';
import { createColumnHelper } from '@tanstack/react-table';
import { DataTable } from '../dataTable/DataTable';
import { Tag } from '@chakra-ui/react';

type Props = {
  data: IUserInfo[];
};

const UsersTable = ({ data }: Props) => {
  const columnHelper = createColumnHelper<IUserInfo>();

  const columns = [
    columnHelper.accessor('id', {
      cell: (info) => info.getValue(),
      header: 'ID',
      enableSorting: false,
    }),
    columnHelper.accessor('name', {
      cell: (info) => info.getValue(),
      header: 'Name',
    }),
    columnHelper.accessor('email', {
      cell: (info) => info.getValue(),
      header: 'Email',
    }),
    columnHelper.accessor('is_admin', {
      cell: (info) => (info.getValue() ? <Tag>Admin</Tag> : '---'),
      header: 'Role',
    }),
    columnHelper.accessor('createdAt', {
      cell: (info) => {
        const data = info.getValue().split('T');
        const date = data[0];
        const time = data[1].split('.')[0];
        return (
          <>
            <div>{date}</div>
            <div>{time}</div>
          </>
        );
      },
      header: 'Created at',
    }),
    columnHelper.accessor('updatedAt', {
      cell: (info) => {
        const data = info.getValue().split('T');
        const date = data[0];
        const time = data[1].split('.')[0];
        return (
          <>
            <div>{date}</div>
            <div>{time}</div>
          </>
        );
      },
      header: 'Updated at',
    }),
  ];

  return (
    <SectionWrapper
      containerProps={{
        pt: { base: 0, md: 0, xl: 0 },
      }}
    >
      <DataTable columns={columns} data={data} />
    </SectionWrapper>
  );
};

export default UsersTable;
