/* eslint-disable @typescript-eslint/no-explicit-any */
import { TableCellProps, Td } from '@chakra-ui/react';
import { Cell, flexRender } from '@tanstack/react-table';

export default function BodyCell<Data extends object>({
  cellProps,
  ...cell
}: Cell<Data, unknown> & { cellProps?: TableCellProps }) {
  const meta: any = cell.column.columnDef.meta;
  return (
    <Td isNumeric={meta?.right} {...cellProps}>
      {flexRender(cell.column.columnDef.cell, cell.getContext())}
    </Td>
  );
}
