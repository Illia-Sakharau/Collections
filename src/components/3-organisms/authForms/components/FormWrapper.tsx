import {
  Alert,
  AlertDescription,
  Box,
  Button,
  Flex,
  Spacer,
} from '@chakra-ui/react';
import { FormEvent, ReactNode } from 'react';

type Props = {
  onSubmit: (e?: FormEvent<HTMLFormElement> | undefined) => void;
  children: ReactNode;
  buttonText: string;
  isLoading: boolean;
  error?: string;
};

const FormWrapper = ({
  onSubmit,
  children,
  buttonText,
  isLoading,
  error,
}: Props) => {
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
        <Flex direction="column" flexGrow="1" gap={2}>
          <Spacer />
          {children}
          <Spacer />
          <Spacer />

          {!!error && (
            <Alert status="error">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          <Button
            colorScheme="brand"
            mt={8}
            alignSelf="stretch"
            type="submit"
            isLoading={isLoading}
          >
            {buttonText}
          </Button>
        </Flex>
      </form>
    </Box>
  );
};

export default FormWrapper;
