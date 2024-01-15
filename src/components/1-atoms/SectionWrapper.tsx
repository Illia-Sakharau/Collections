import { Container, Box, BoxProps, ContainerProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

type Props = {
  sectionProps?: BoxProps;
  containerProps?: ContainerProps;
  children: ReactNode;
};

const SectionWrapper = ({ sectionProps, containerProps, children }: Props) => {
  return (
    <Box {...sectionProps}>
      <Container
        maxW="8xl"
        px={{ base: 4, md: 8 }}
        py={{ base: 8, md: 16, xl: 24 }}
        {...containerProps}
      >
        {children}
      </Container>
    </Box>
  );
};

export default SectionWrapper;
