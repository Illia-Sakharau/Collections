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
import ImageCell from '../../../2-molecules/tableCells/ImageCell';
import DescriptionCell from '../../../2-molecules/tableCells/DescriptionCell';
import { Tag } from '@chakra-ui/react';
import useCollectionActions from './useCollectionActions';
import ButtonMenu from '@/components/2-molecules/ButtonMenu';

type Props = {
  data: ICollectionInfo[];
  isAll: boolean;
};

const useDefUsersTable = ({ data, isAll }: Props) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const { t, i18n } = useTranslation();
  const columnHelper = createColumnHelper<ICollectionInfo>();
  const itemAction = useCollectionActions();

  const columns = [
    columnHelper.display({
      id: 'actions',
      header: t('collections.table.actions'),
      cell: (table) => (
        <ButtonMenu
          selectedID={[+table.row.id]}
          size="sm"
          actions={itemAction}
        />
      ),
    }),
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
      cell: (info) => <DescriptionCell text={info.getValue()} />,
      header: t('collections.table.description'),
      enableSorting: false,
    }),
    columnHelper.accessor('theme', {
      cell: (info) => {
        const currentLang = i18n.language.split('-')[0] as 'en' | 'ru';
        return <Tag border={'solid 1px'}>{info.getValue()[currentLang]}</Tag>;
      },
      header: t('collections.table.theme'),
    }),
  ];

  if (isAll)
    columns.push(
      columnHelper.accessor<(row: ICollectionInfo) => string, string>(
        (row) => row.username,
        {
          cell: (info) => info.getValue(),
          header: t('collections.table.owner'),
        }
      )
    );

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
