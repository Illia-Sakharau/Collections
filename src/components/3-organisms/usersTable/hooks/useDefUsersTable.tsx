import DateTimeCell from '@/components/2-molecules/tableCells/DateTimeCell';
import { IUserInfo } from '@/types/api';
import { Tag, TagLeftIcon, TagLabel } from '@chakra-ui/react';
import {
  SortingState,
  createColumnHelper,
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
} from '@tanstack/react-table';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaLock, FaLockOpen } from 'react-icons/fa';

type Props = {
  data: IUserInfo[];
};

const useDefUsersTable = ({ data }: Props) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const { t } = useTranslation();
  const columnHelper = createColumnHelper<IUserInfo>();

  const columns = [
    columnHelper.accessor('id', {
      cell: (info) => info.getValue(),
      header: t('users.id'),
      enableSorting: false,
    }),
    columnHelper.accessor('is_blocked', {
      cell: (info) =>
        info.getValue() ? (
          <Tag colorScheme="negative">
            <TagLeftIcon boxSize="12px" as={FaLock} />
            <TagLabel>Blocked</TagLabel>
          </Tag>
        ) : (
          <Tag colorScheme="brand">
            <TagLeftIcon boxSize="12px" as={FaLockOpen} />
            <TagLabel>Active</TagLabel>
          </Tag>
        ),
      header: t('users.state'),
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
      cell: (info) =>
        info.getValue() ? <Tag border={'solid 1px'}>Admin</Tag> : '---',
      header: t('users.role'),
    }),
    columnHelper.accessor('createdAt', {
      cell: (info) => <DateTimeCell stringDate={info.getValue()} />,
      header: t('users.createdAt'),
      meta: {
        right: true,
      },
    }),
    columnHelper.accessor('updatedAt', {
      cell: (info) => <DateTimeCell stringDate={info.getValue()} />,
      header: t('users.updatedAt'),
      meta: {
        right: true,
      },
    }),
  ];

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    getRowId: (row) => `${row.id}`,
    state: {
      sorting,
    },
  });

  return {
    table,
    columns,
  };
};

export default useDefUsersTable;
