import { Logo } from '@/components/1-atoms/AnimLogo';
import HerroBanner from '@/components/3-organisms/herroBanner/HerroBanner';
import useAuth from '@/hooks/useAuth';
import { Box, Text, Grid, VStack, Code, Button } from '@chakra-ui/react';

export default () => {
  const { isAuth } = useAuth();

  return (
    <>
      {!isAuth && <HerroBanner />}

      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <VStack spacing={8}>
            <Logo h="40vmin" pointerEvents="none" />
            <Text>
              Edit <Code fontSize="xl">src/App.tsx</Code> and save to reload.
            </Text>
            <Button colorScheme="brand">Brand color</Button>
          </VStack>
        </Grid>
      </Box>
    </>
  );
};
