import { Spinner, Text } from '@chakra-ui/react';
import SectionWrapper from './SectionWrapper';
import { useTranslation } from 'react-i18next';

type Props = {
  text?: string;
};

const PageLoading = ({ text }: Props) => {
  const { t } = useTranslation();
  return (
    <SectionWrapper
      sectionProps={{
        display: 'flex',
        alignItems: 'center',
        flexGrow: '1',
      }}
      containerProps={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '4',
      }}
    >
      <Spinner thickness="4px" speed="0.65s" color="brand.500" size="xl" />
      <Text fontSize="2xl">{text ? text : t('other.loading')}</Text>
    </SectionWrapper>
  );
};

export default PageLoading;
