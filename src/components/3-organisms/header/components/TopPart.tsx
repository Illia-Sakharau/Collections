import { Flex, useColorModeValue } from '@chakra-ui/react';
import AuthBar from './AuthBar';
import SettingsBar from './SettingsBar';

const TopPart = () => {
  const bg = useColorModeValue('gray.400', 'gray.900');

  return (
    <Flex
      gap={{ base: 1, md: 4 }}
      justifyContent="space-between"
      h="40px"
      alignItems="center"
      px={{ base: '4', md: '8' }}
      bg={bg}
    >
      <SettingsBar />
      <AuthBar buttonSize="sm" />
    </Flex>
  );
};

export default TopPart;
