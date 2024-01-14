import { Flex, useMediaQuery } from '@chakra-ui/react';
import TopPart from './components/TopPart';
import BottomPart from './components/BottomPart';

const Header = () => {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

  return (
    <Flex
      direction="column"
      position="sticky"
      top="0"
      zIndex="100"
      boxShadow="md"
    >
      {isLargerThan768 && <TopPart />}
      <BottomPart isLargerThan={isLargerThan768} />
    </Flex>
  );
};

export default Header;
