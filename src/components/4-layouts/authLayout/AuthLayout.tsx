import { Outlet } from 'react-router-dom';
import SectionWrapper from '../../1-atoms/SectionWrapper';
import { Box, Flex, useColorModeValue, useMediaQuery } from '@chakra-ui/react';
import IMG from '@/assets/auth-img.jpg';
import NavBar from '@molecules/navBar/NavBar';
import { LINKS } from './constants';
import { useTranslation } from 'react-i18next';

const AuthLayout = () => {
  const [isLargerThan768] = useMediaQuery('(max-width: 768px)');
  const bg = useColorModeValue('white', 'gray.700');
  const { t } = useTranslation();

  return (
    <SectionWrapper
      sectionProps={{
        h: 'calc(100vh - 80px)',
      }}
      containerProps={{
        display: 'flex',
        h: '100%',
        alignItems: 'center',
      }}
    >
      <Flex
        flexGrow="1"
        alignItems="stretch"
        borderRadius={{ base: 4, md: 8, lg: 16 }}
        overflow="hidden"
        bg={bg}
        boxShadow="lg"
        minH="50vh"
      >
        <Box
          w="50%"
          alignSelf="stretch"
          hidden={isLargerThan768}
          bg={`url('${IMG}') 50%/cover no-repeat`}
        />
        <Flex direction="column" w={{ base: '100%', md: '50%' }}>
          <NavBar
            links={LINKS(t)}
            justifyContent="space-around"
            py="3"
            borderBottom="solid 1px grey"
          />
          <Outlet />
        </Flex>
      </Flex>
    </SectionWrapper>
  );
};

export default AuthLayout;
