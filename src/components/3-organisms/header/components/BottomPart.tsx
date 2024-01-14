import Logo from '@atoms/Logo';
import { Flex, useColorModeValue } from '@chakra-ui/react';
import MobileMenu from './MobileMenu';
import NavigationBar from './NavigationBar';

type Props = {
  isLargerThan: boolean;
};

const BottomPart = ({ isLargerThan }: Props) => {
  const bg = useColorModeValue('gray.300', 'gray.700');

  return (
    <Flex
      gap={{ base: 1, md: 4 }}
      justifyContent="space-between"
      position="sticky"
      top="0"
      h="80px"
      alignItems="center"
      px={{ base: '4', md: '8' }}
      bg={bg}
      zIndex="100"
    >
      <Logo w="112px" />
      <div>SEARCH BAR</div>
      {isLargerThan && <NavigationBar />}
      {!isLargerThan && <MobileMenu />}
    </Flex>
  );
};

export default BottomPart;
