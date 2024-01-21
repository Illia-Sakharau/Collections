/* eslint-disable @typescript-eslint/no-explicit-any */
import { Th, chakra } from '@chakra-ui/react';
import { FaSort, FaSortDown, FaSortUp } from 'react-icons/fa';
import { flexRender, Header } from '@tanstack/react-table';

export default function HeaderCell<Data extends object>({
  ...header
}: Header<Data, unknown>) {
  const meta: any = header.column.columnDef.meta;

  return (
    <Th
      key={header.id}
      onClick={header.column.getToggleSortingHandler()}
      cursor={'pointer'}
      isNumeric={meta?.isNumeric}
    >
      {flexRender(header.column.columnDef.header, header.getContext())}

      {header.column.getCanSort() ? (
        <chakra.span pl="4">
          {header.column.getIsSorted() ? (
            header.column.getIsSorted() === 'desc' ? (
              <FaSortDown aria-label="sorted descending" />
            ) : (
              <FaSortUp aria-label="sorted ascending" />
            )
          ) : (
            <FaSort aria-label="sorted" />
          )}
        </chakra.span>
      ) : null}
    </Th>
  );
}
