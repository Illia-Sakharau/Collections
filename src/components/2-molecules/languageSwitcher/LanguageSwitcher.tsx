import { FC } from 'react';
import { Flex, FlexProps } from '@chakra-ui/react';
import { LANGUAGES } from './constants';
import LangButton from './components/LangButton';

type Props = FlexProps;

const LanguageSwitcher: FC<Props> = (props) => {
  return (
    <Flex border="solid 1px" borderRadius="md" alignItems="center" {...props}>
      {LANGUAGES.map((lang) => (
        <LangButton key={lang.value} {...lang} />
      ))}
    </Flex>
  );
};

export default LanguageSwitcher;
