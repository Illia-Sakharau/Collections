/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Table,
  Thead,
  Tbody,
  Checkbox,
  TableContainer,
} from '@chakra-ui/react';
import { ColumnDef, Table as TableG, Row } from '@tanstack/react-table';
import BodyRaw from './components/BodyRaw';
import HeaderRaw from './components/HeaderRaw';

export type DataTableProps<Data extends object> = {
  columns?: ColumnDef<Data, any>[];
  table: TableG<Data>;
  isSelected?: boolean;
  onRowClick?: (rowID: string) => void;
};

export function DataTable<Data extends object>({
  columns,
  table,
  isSelected = false,
  onRowClick,
}: DataTableProps<Data>) {
  if (isSelected) {
    columns?.unshift({
      id: 'select-col',
      header: ({ table }: { table: TableG<Data> }) => (
        <Checkbox
          colorScheme="brand"
          isChecked={table.getIsAllRowsSelected()}
          isIndeterminate={table.getIsSomeRowsSelected()}
          onChange={table.getToggleAllRowsSelectedHandler()}
        />
      ),
      cell: ({ row }: { row: Row<Data> }) => (
        <Checkbox
          colorScheme="brand"
          isChecked={row.getIsSelected()}
          disabled={!row.getCanSelect()}
          onChange={row.getToggleSelectedHandler()}
        />
      ),
    });
  }

  return (
    <TableContainer>
      <Table>
        <Thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <HeaderRaw key={headerGroup.id} {...headerGroup} />
          ))}
        </Thead>
        <Tbody>
          {table.getRowModel().rows.map((row) => (
            <BodyRaw
              key={row.id}
              trProps={
                isSelected || onRowClick
                  ? {
                      onClick: onRowClick
                        ? () => onRowClick(row.id)
                        : row.getToggleSelectedHandler(),
                      cursor: 'pointer',
                    }
                  : undefined
              }
              {...row}
            />
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
