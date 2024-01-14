import { Flex, IconButton, Spacer, useColorModeValue } from '@chakra-ui/react';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import NavigationBar from './NavigationBar';
import AuthBar from './AuthBar';

const MobileMenu = () => {
  const bg = useColorModeValue('gray.400', 'gray.900');
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <IconButton
        variant="ghost"
        icon={<FaBars />}
        aria-label={'menu'}
        border="solid 1px"
        isActive={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      />
      <Flex
        hidden={!isOpen}
        direction="column"
        alignItems="center"
        position="absolute"
        top="80px"
        left="0"
        w="100%"
        h="calc(100vh - 80px)"
        bg={bg}
        zIndex="100"
      >
        <Spacer />
        <NavigationBar
          direction="column"
          alignItems="center"
          onClick={() => setIsOpen(false)}
        />
        <Spacer />
        <AuthBar
          direction="column-reverse"
          mb="16"
          onClick={() => setIsOpen(false)}
        />
      </Flex>
    </>
  );
};

export default MobileMenu;
