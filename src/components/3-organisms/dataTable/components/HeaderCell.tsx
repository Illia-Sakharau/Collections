/* eslint-disable @typescript-eslint/no-explicit-any */
import { Flex, Th, chakra } from '@chakra-ui/react';
import { FaSort, FaSortDown, FaSortUp } from 'react-icons/fa';
import { flexRender, Header } from '@tanstack/react-table';

export default function HeaderCell<Data extends object>({
  ...header
}: Header<Data, unknown>) {
  const meta: any = header.column.columnDef.meta;
  const isSortable = header.column.getCanSort();

  return (
    <Th
      key={header.id}
      onClick={header.column.getToggleSortingHandler()}
      cursor={isSortable ? 'pointer' : 'default'}
      isNumeric={meta?.isNumeric}
    >
      <Flex align={'center'}>
        {flexRender(header.column.columnDef.header, header.getContext())}

        {isSortable ? (
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
      </Flex>
    </Th>
  );
}
