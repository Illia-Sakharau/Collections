/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import { Table, Thead, Tbody } from '@chakra-ui/react';
import {
  useReactTable,
  getCoreRowModel,
  ColumnDef,
  SortingState,
  getSortedRowModel,
} from '@tanstack/react-table';
import BodyRaw from './components/BodyRaw';
import HeaderRaw from './components/HeaderRaw';

export type DataTableProps<Data extends object> = {
  data: Data[];
  columns: ColumnDef<Data, any>[];
};

export function DataTable<Data extends object>({
  data,
  columns,
}: DataTableProps<Data>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
  });

  return (
    <Table>
      <Thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <HeaderRaw key={headerGroup.id} {...headerGroup} />
        ))}
      </Thead>
      <Tbody>
        {table.getRowModel().rows.map((row) => (
          <BodyRaw key={row.id} {...row} />
        ))}
      </Tbody>
    </Table>
  );
}
