import { Spinner, Text } from '@chakra-ui/react';
import SectionWrapper from './SectionWrapper';

type Props = {
  text?: string;
};

const PageLoading = ({ text = 'Loading...' }: Props) => {
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
      <Text fontSize="2xl">{text}</Text>
    </SectionWrapper>
  );
};

export default PageLoading;
