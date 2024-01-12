import { ColorModeSwitcher } from '@molecules/ColorModeSwitcher';
import Logo from '@atoms/Logo';
import { Flex, Spacer, useColorModeValue } from '@chakra-ui/react';
import NavBar from '@/components/2-molecules/navBar/NavBar';
import { LINKS } from './constants';

const Header = () => {
  const bg = useColorModeValue('gray.300', 'gray.700');

  return (
    <Flex
      position="sticky"
      top="0"
      h="80px"
      alignItems="center"
      px={{ base: '4', md: '8' }}
      bg={bg}
      zIndex="100"
    >
      <Logo />
      <Spacer />
      <ColorModeSwitcher justifySelf="flex-end" mr="4" />
      <div>EN / РУС</div>
      <Spacer />
      <NavBar links={LINKS} />
      <div>BtnBar</div>
    </Flex>
  );
};

export default Header;
