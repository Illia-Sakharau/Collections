import SectionWrapper from '@atoms/SectionWrapper';
import { IUserInfo } from '@/types/api';
import { createColumnHelper } from '@tanstack/react-table';
import { DataTable } from '../dataTable/DataTable';
import { Tag } from '@chakra-ui/react';
import DateTimeCell from '@molecules/tableCells/DateTimeCell';
import { useTranslation } from 'react-i18next';

type Props = {
  data: IUserInfo[];
};

const UsersTable = ({ data }: Props) => {
  const { t } = useTranslation();
  const columnHelper = createColumnHelper<IUserInfo>();

  const columns = [
    columnHelper.accessor('id', {
      cell: (info) => info.getValue(),
      header: t('users.id'),
      enableSorting: false,
    }),
    columnHelper.accessor('name', {
      cell: (info) => info.getValue(),
      header: t('users.name'),
    }),
    columnHelper.accessor('email', {
      cell: (info) => info.getValue(),
      header: t('users.email'),
    }),
    columnHelper.accessor('is_admin', {
      cell: (info) => (info.getValue() ? <Tag>Admin</Tag> : '---'),
      header: t('users.role'),
    }),
    columnHelper.accessor('createdAt', {
      cell: (info) => <DateTimeCell stringDate={info.getValue()} />,
      header: t('users.createdAt'),
      meta: {
        right: true,
      }
    }),
    columnHelper.accessor('updatedAt', {
      cell: (info) => <DateTimeCell stringDate={info.getValue()} />,
      header: t('users.updatedAt'),
      meta: {
        right: true,
      }
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
