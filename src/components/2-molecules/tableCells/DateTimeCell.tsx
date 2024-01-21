import { Flex, Text } from '@chakra-ui/react';

type Props = {
  stringDate: string;
};

const DateTimeCell = ({ stringDate }: Props) => {
  const data = stringDate.split('T');
  const date = data[0];
  const time = data[1].split('.')[0];
  return (
    <Flex direction={'column'} alignItems={'flex-end'}>
      <Text>{date}</Text>
      <Text opacity={0.65}>{time}</Text>
    </Flex>
  );
};

export default DateTimeCell;
