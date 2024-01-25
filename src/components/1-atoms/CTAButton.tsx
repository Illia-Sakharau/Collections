import { Button, IconButton, useMediaQuery } from '@chakra-ui/react';
import { ReactElement } from 'react';

type Props = {
  text: string;
  icon: ReactElement;
  action: () => void;
};

const CTAButton = ({ text, action, icon }: Props) => {
  const [isLargerThan480] = useMediaQuery('(min-width: 480px)');

  return (
    <>
      {isLargerThan480 ? (
        <Button colorScheme="brand" onClick={action} leftIcon={icon}>
          {text}
        </Button>
      ) : (
        <IconButton
          colorScheme="brand"
          onClick={action}
          aria-label={text}
          icon={icon}
        />
      )}
    </>
  );
};

export default CTAButton;
