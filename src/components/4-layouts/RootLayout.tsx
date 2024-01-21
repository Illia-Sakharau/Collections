import { Outlet } from 'react-router-dom';
import Header from '@organisms/header/Header';
import { Flex, VStack, useColorModeValue } from '@chakra-ui/react';
import Footer from '../3-organisms/Footer';

const RootLayout = () => {
  const bg = useColorModeValue('gray.100', 'gray.900');

  return (
    <Flex direction="column" bg={bg}>
      <Header />
      <VStack
        as="main"
        alignItems="stretch"
        minH={{ base: 'calc(100vh - 80px)', md: 'calc(100vh - 120px)' }}
        spacing={'0'}
      >
        <Outlet />
      </VStack>
      <Footer />
    </Flex>
  );
};

export default RootLayout;
