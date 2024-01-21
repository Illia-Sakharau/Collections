import { Tr } from '@chakra-ui/react';
import { HeaderGroup } from '@tanstack/react-table';
import HeaderCell from './HeaderCell';

export default function HeaderRaw<Data extends object>({
  ...headerGroup
}: HeaderGroup<Data>) {
  return (
    <Tr key={headerGroup.id}>
      {headerGroup.headers.map((header) => (
        <HeaderCell {...header} />
      ))}
    </Tr>
  );
}
