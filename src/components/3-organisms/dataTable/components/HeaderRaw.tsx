import { Tr } from '@chakra-ui/react';
import { HeaderGroup } from '@tanstack/react-table';
import HeaderCell from './HeaderCell';

export default function HeaderRaw<Data extends object>({
  ...headerGroup
}: HeaderGroup<Data>) {
  return (
    <Tr>
      {headerGroup.headers.map((header) => (
        <HeaderCell key={header.id} {...header} />
      ))}
    </Tr>
  );
}
