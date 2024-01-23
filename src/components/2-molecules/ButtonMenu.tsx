import { bulkAction } from '@/types/componens';
import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorModeValue,
  useToast,
  IconButton,
} from '@chakra-ui/react';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { FaEllipsisV } from 'react-icons/fa';

type Props = {
  selectedID: number[];
  actions: bulkAction[];
  size?: 'sm' | 'md';
};

const ButtonMenu: FC<Props> = ({ selectedID, actions, size = 'md' }) => {
  const color = useColorModeValue('500', '200');
  const toast = useToast();
  const { t } = useTranslation();

  return (
    <Menu>
      {size === 'md' ? (
        <MenuButton
          as={Button}
          rightIcon={<FaEllipsisV />}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {t('bulk_bar.button_text')}
        </MenuButton>
      ) : (
        <MenuButton
          size={size}
          as={IconButton}
          icon={<FaEllipsisV />}
          onClick={(e) => {
            e.stopPropagation();
          }}
        />
      )}
      <MenuList>
        {actions.map(({ text, icon, colorScheme, action }) => (
          <MenuItem
            key={text}
            icon={icon}
            color={`${colorScheme}.${color}`}
            onClick={(e) => {
              e.stopPropagation();
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
