import { Flex, Spacer, useColorModeValue } from '@chakra-ui/react';
import AuthBar from './AuthBar';
import SettingsBar from './SettingsBar';
import UserName from './UserName';

const TopPart = () => {
  const bg = useColorModeValue('gray.400', 'gray.900');

  return (
    <Flex
      gap={{ base: 1, md: 4 }}
      h="40px"
      alignItems="center"
      px={{ base: '4', md: '8' }}
      bg={bg}
    >
      <SettingsBar />
      <Spacer />
      <UserName />
      <AuthBar buttonSize="sm" />
    </Flex>
  );
};

export default TopPart;
