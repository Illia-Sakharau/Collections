import { Flex, IconButton, useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";
import { FaBars } from 'react-icons/fa';


const MobileMenu = () => {
  const bg = useColorModeValue('gray.400', 'gray.800');
  const [ isOpen, setIsOpen ] = useState(false);

  return (
    <>
      <IconButton 
        variant='ghost'
        icon={<FaBars />}
        aria-label={'menu'}
        border="solid 1px"
        isActive={isOpen}
        onClick={()=> setIsOpen(!isOpen)}
      />
      <Flex
        hidden={!isOpen}
        position='absolute'
        top='80px'
        left='0'
        w='100vw'
        h='100vh'
        bg={bg}
        zIndex='100'
      >
        123
      </Flex>
    </>
  );
};

export default MobileMenu;
