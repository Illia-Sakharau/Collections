import { Text } from '@chakra-ui/react';

type Props = {
  text: string;
};

const DescriptionCell = ({ text }: Props) => {
  return (
    <Text maxW={'600px'} noOfLines={{ base: 4, md: 3 }} whiteSpace={'wrap'}>
      {text}
    </Text>
  );
};

export default DescriptionCell;
