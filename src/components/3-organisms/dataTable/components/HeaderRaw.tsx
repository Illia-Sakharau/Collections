import { Tr } from '@chakra-ui/react';
import { HeaderGroup } from '@tanstack/react-table';
import HeaderCell from './HeaderCell';

export default function HeaderRaw<Data extends object>({
  ...headerGroup
}: HeaderGroup<Data>) {
  return (
    <Tr position={'relative'}>
      {headerGroup.headers.map((header) => (
        <HeaderCell
          key={header.id}
          hCellProps={
            header.column.id === 'actions'
              ? {
                  position: 'absolute',
                  height: '100%',
                }
              : undefined
          }
          {...header}
        />
      ))}
    </Tr>
  );
}
