import { Tr, useColorModeValue } from '@chakra-ui/react';
import { Row } from '@tanstack/react-table';
import BodyCell from './BodyCell';

export default function BodyRaw<Data extends object>({ ...row }: Row<Data>) {
  const hoverBg = useColorModeValue('gray.300', 'gray.700');

  return (
    <Tr key={row.id} _hover={{ bg: hoverBg }}>
      {row.getVisibleCells().map((cell) => (
        <BodyCell {...cell} />
      ))}
    </Tr>
  );
}
