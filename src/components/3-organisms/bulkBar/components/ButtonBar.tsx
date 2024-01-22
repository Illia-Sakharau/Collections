import { bulkAction } from '@/types/componens';
import { HStack, Button, useToast } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

type Props = {
  selectedID: number[];
  actions: bulkAction[];
};

const ButtonBar = ({ selectedID, actions }: Props) => {
  const toast = useToast();
  const { t } = useTranslation();

  return (
    <HStack>
      {actions.map(({ text, icon, colorScheme, action }) => (
        <Button
          key={text}
          size={'sm'}
          leftIcon={icon}
          onClick={() => {
            if (!selectedID.length) {
              toast({
                description: t('bulk_bar.message'),
                position: 'bottom-left',
                duration: 10000,
                isClosable: true,
                colorScheme: 'yellow',
              });
            } else {
              action(selectedID);
            }
          }}
          colorScheme={colorScheme}
        >
          {text}
        </Button>
      ))}
    </HStack>
  );
};

export default ButtonBar;
