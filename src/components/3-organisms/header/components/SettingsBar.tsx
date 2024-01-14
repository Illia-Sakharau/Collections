import { ColorModeSwitcher } from '@/components/2-molecules/ColorModeSwitcher';
import LanguageSwitcher from '@/components/2-molecules/languageSwitcher/LanguageSwitcher';
import { Flex, FlexProps } from '@chakra-ui/react';

type Props = FlexProps;

const SettingsBar = (props: Props) => {
  return (
    <Flex gap="2" alignItems="center" {...props}>
      <ColorModeSwitcher />
      <LanguageSwitcher />
    </Flex>
  );
};

export default SettingsBar;
