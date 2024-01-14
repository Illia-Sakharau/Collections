import { HStack } from '@chakra-ui/react';
import NavigationBar from './NavigationBar';
import AuthBar from './AuthBar';

const DesktopMenu = () => {
  return (
    <HStack>
      <NavigationBar />
      <AuthBar ml="2" />
    </HStack>
  );
};

export default DesktopMenu;
