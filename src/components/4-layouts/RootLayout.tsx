import { Outlet } from 'react-router-dom';
import Header from '@organisms/header/Header';
import { Flex, useColorModeValue } from '@chakra-ui/react';

const RootLayout = () => {
  const bg = useColorModeValue('gray.100', 'gray.900');

  return (
    <Flex direction="column" bg={bg}>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>FOOTER</footer>
    </Flex>
  );
};

export default RootLayout;
