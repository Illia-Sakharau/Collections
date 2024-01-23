import { ICollectionInfo } from '@/types/api';
import {
  SortingState,
  createColumnHelper,
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
} from '@tanstack/react-table';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ImageCell from '../components/ImageCell';

type Props = {
  data: ICollectionInfo[];
};

const useDefUsersTable = ({ data }: Props) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const { t } = useTranslation();
  const columnHelper = createColumnHelper<ICollectionInfo>();

  const columns = [
    columnHelper.accessor('imgUrl', {
      cell: (info) => <ImageCell imgUrl={info.getValue()} />,
      header: t('collections.table.image'),
      enableSorting: false,
    }),
    columnHelper.accessor('title', {
      cell: (info) => info.getValue(),
      header: t('collections.table.title'),
    }),
    columnHelper.accessor('description', {
      cell: (info) => info.getValue(),
      header: t('collections.table.description'),
      enableSorting: false,
    }),
    columnHelper.accessor('theme', {
      cell: (info) => info.getValue(),
      header: t('collections.table.theme'),
    }),
    columnHelper.accessor('username', {
      cell: (info) => info.getValue(),
      header: t('collections.table.owner'),
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
