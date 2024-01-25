import { FC } from 'react';
import {
  IconButton,
  IconButtonProps,
  InputRightElement,
} from '@chakra-ui/react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

type Props = {
  isShow: boolean;
  action: () => void;
} & Omit<IconButtonProps, 'aria-label'>;

const PasswordButton: FC<Props> = ({ isShow, action, ...props }) => {
  const { t } = useTranslation();

  return (
    <InputRightElement>
      <IconButton
        size="md"
        variant="ghost"
        color="current"
        onClick={action}
        icon={isShow ? <FaRegEyeSlash /> : <FaRegEye />}
        aria-label={t('other.passwordBtn')}
        {...props}
      />
    </InputRightElement>
  );
};

export default PasswordButton;
