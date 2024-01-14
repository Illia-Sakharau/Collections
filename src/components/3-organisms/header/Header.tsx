import { ColorModeSwitcher } from '@molecules/ColorModeSwitcher';
import Logo from '@atoms/Logo';
import {
  Flex,
  HStack,
  useColorModeValue,
  useMediaQuery,
} from '@chakra-ui/react';
import LanguageSwitcher from '@molecules/languageSwitcher/LanguageSwitcher';
import MobileMenu from './components/MobileMenu';
import DesktopMenu from './components/DesktopMenu';

const Header = () => {
  const bg = useColorModeValue('gray.300', 'gray.700');
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

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
      <HStack>
        <ColorModeSwitcher />
        <LanguageSwitcher />
      </HStack>
      {isLargerThan768 && <DesktopMenu />}
      {!isLargerThan768 && <MobileMenu />}
    </Flex>
  );
};

export default Header;
