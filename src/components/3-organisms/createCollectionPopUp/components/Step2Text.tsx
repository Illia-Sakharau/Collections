import { VStack, Text, useColorModeValue } from '@chakra-ui/react';
import { Trans, useTranslation } from 'react-i18next';

const Step2Text = () => {
  const { t } = useTranslation();
  const dicPath = 'collections.popup.step2.';
  const borderColor = useColorModeValue('gray.400', 'gray.600');

  return (
    <VStack
      alignItems={'stretch'}
      border={'solid 1px'}
      borderColor={borderColor}
      borderRadius={8}
      mt={-4}
      p={4}
    >
      <Text>
        <Trans i18nKey={dicPath + 'buildin_text'}>
          Items from your collection have the following build in fields:
          <b>name</b>, <b>tags</b>.
        </Trans>
      </Text>
      <Text>{t(dicPath + 'additional_text')}</Text>
    </VStack>
  );
};

export default Step2Text;
