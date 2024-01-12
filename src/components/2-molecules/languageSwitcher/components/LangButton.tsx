import { FC } from 'react';
import { Button, ButtonProps } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { languageInfo } from '@/types/componens';

type Props = languageInfo & ButtonProps;

const LangButton: FC<Props> = ({ value, text, ...props }) => {
  const { i18n } = useTranslation();

  return (
    <Button
      key={value}
      size="sm"
      variant="ghost"
      px="2"
      fontWeight={i18n.language === value ? 'bold' : 'medium'}
      isActive={i18n.language === value}
      onClick={() => i18n.changeLanguage(value)}
      {...props}
    >
      {text}
    </Button>
  );
};

export default LangButton;
