import { bulkAction } from '@/types/componens';
import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import { FaEllipsisV } from 'react-icons/fa';

type Props = {
  selectedID: number[] | string[];
  actions: bulkAction[];
};

const ButtonMenu = ({ selectedID, actions }: Props) => {
  const color = useColorModeValue('500', '200');
  const toast = useToast();
  const { t } = useTranslation();

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<FaEllipsisV />}>
        {t('bulk_bar.button_text')}
      </MenuButton>
      <MenuList>
        {actions.map(({ text, icon, colorScheme, action }) => (
          <MenuItem
            key={text}
            icon={icon}
            color={`${colorScheme}.${color}`}
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
          >
            {text}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default ButtonMenu;
