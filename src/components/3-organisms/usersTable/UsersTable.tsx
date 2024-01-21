import SectionWrapper from '@atoms/SectionWrapper';
import { IUserInfo } from '@/types/api';
import { createColumnHelper } from '@tanstack/react-table';
import { DataTable } from '../dataTable/DataTable';
import { Tag } from '@chakra-ui/react';
import DateTimeCell from '@molecules/tableCells/DateTimeCell';

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
      cell: (info) => <DateTimeCell stringDate={info.getValue()} />,
      header: 'Created at',
    }),
    columnHelper.accessor('updatedAt', {
      cell: (info) => <DateTimeCell stringDate={info.getValue()} />,
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
