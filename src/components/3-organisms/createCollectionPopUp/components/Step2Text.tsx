import {
  VStack,
  Text,
  Alert,
  AlertDescription,
  useColorModeValue,
} from '@chakra-ui/react';
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
    >
      <Text px={4} pt={4}>
        <Trans i18nKey={dicPath + 'buildin_text'}>
          Items from your collection have the following build in fields:
          <b>name</b>, <b>tags</b>.
        </Trans>
      </Text>
      <Text px={4}>{t(dicPath + 'additional_text')}</Text>
      <Alert status="error">
        <AlertDescription>{t(dicPath + 'warning_text')}</AlertDescription>
      </Alert>
    </VStack>
  );
};

export default Step2Text;
