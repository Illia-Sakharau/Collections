import { Logo } from '@atoms/Logo';
import { ColorModeSwitcher } from '@molecules/ColorModeSwitcher';
import { Box, Text, Grid, VStack, Code, Button } from '@chakra-ui/react';

export default () => {
  return (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
          <Logo h="40vmin" pointerEvents="none" />
          <Text>
            Edit <Code fontSize="xl">src/App.tsx</Code> and save to reload.
          </Text>
          <Button colorScheme="brand">Brand color</Button>
        </VStack>
      </Grid>
    </Box>
  );
};
