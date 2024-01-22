import { TableRowProps, Tr, useColorModeValue } from '@chakra-ui/react';
import { Row } from '@tanstack/react-table';
import BodyCell from './BodyCell';

export default function BodyRaw<Data extends object>({
  trProps,
  ...row
}: { trProps?: TableRowProps } & Row<Data>) {
  const hoverBg = useColorModeValue('gray.300', 'gray.700');

  return (
    <Tr _hover={{ bg: hoverBg }} {...trProps}>
      {row.getVisibleCells().map((cell) => (
        <BodyCell key={cell.id} {...cell} />
      ))}
    </Tr>
  );
}