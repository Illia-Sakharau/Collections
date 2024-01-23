/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Flex,
  TableColumnHeaderProps,
  Th,
  chakra,
  useTheme,
} from '@chakra-ui/react';
import { FaSort, FaSortDown, FaSortUp } from 'react-icons/fa';
import { flexRender, Header } from '@tanstack/react-table';

export default function HeaderCell<Data extends object>({
  hCellProps,
  ...header
}: Header<Data, unknown> & { hCellProps?: TableColumnHeaderProps }) {
  const meta: any = header.column.columnDef.meta;
  const isSortable = header.column.getCanSort();
  const activColor = useTheme().__cssVars['--chakra-colors-brand-500'];

  return (
    <Th
      onClick={header.column.getToggleSortingHandler()}
      cursor={isSortable ? 'pointer' : 'default'}
      {...hCellProps}
    >
      <Flex
        align={'center'}
        justifyContent={meta?.right ? 'flex-end' : 'flex-start'}
      >
        {flexRender(header.column.columnDef.header, header.getContext())}

        {isSortable ? (
          <chakra.span pl="4">
            {header.column.getIsSorted() ? (
              header.column.getIsSorted() === 'desc' ? (
                <FaSortDown aria-label="sorted descending" color={activColor} />
              ) : (
                <FaSortUp aria-label="sorted ascending" color={activColor} />
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
