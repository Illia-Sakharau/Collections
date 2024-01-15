import { Box, Button, Flex, Spacer } from '@chakra-ui/react';
import { FormEvent, ReactNode } from 'react';

type Props = {
  onSubmit: (e?: FormEvent<HTMLFormElement> | undefined) => void;
  children: ReactNode;
  buttonText: string;
};

const FormWrapper = ({ onSubmit, children, buttonText }: Props) => {
  return (
    <Box
      flexGrow="1"
      p={{ base: 4, sm: 8, md: 4, lg: 8, xl: 16 }}
      py={{ base: 6, lg: 8, xl: 12 }}
    >
      <form
        onSubmit={onSubmit}
        noValidate
        style={{ display: 'flex', minHeight: '100%' }}
      >
        <Flex direction="column" flexGrow="1">
          <Spacer />
          {children}
          <Spacer />
          <Spacer />
          <Button colorScheme="brand" mt={8} alignSelf="stretch" type="submit">
            {buttonText}
          </Button>
        </Flex>
      </form>
    </Box>
  );
};

export default FormWrapper;
