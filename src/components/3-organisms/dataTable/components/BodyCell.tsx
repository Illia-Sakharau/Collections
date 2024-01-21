/* eslint-disable @typescript-eslint/no-explicit-any */
import { Td } from '@chakra-ui/react';
import { Cell, flexRender } from '@tanstack/react-table';

export default function BodyCell<Data extends object>({
  ...cell
}: Cell<Data, unknown>) {
  const meta: any = cell.column.columnDef.meta;
  return (
    <Td key={cell.id} isNumeric={meta?.isNumeric}>
      {flexRender(cell.column.columnDef.cell, cell.getContext())}
    </Td>
  );
}
