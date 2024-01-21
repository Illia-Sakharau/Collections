import { Tr } from '@chakra-ui/react';
import { Row } from '@tanstack/react-table';
import BodyCell from './BodyCell';

export default function BodyRaw<Data extends object>({ ...row }: Row<Data>) {
  return (
    <Tr key={row.id}>
      {row.getVisibleCells().map((cell) => (
        <BodyCell {...cell} />
      ))}
    </Tr>
  );
}
