import { Heading } from '@chakra-ui/react';
import SectionWrapper from './SectionWrapper';

type Props = {
  pageTitle: string;
};

const PageHeading = ({ pageTitle }: Props) => {
  return (
    <SectionWrapper
      containerProps={{
        pt: { base: '4', md: '8', xl: '16' },
        pb: { base: '2', md: '4', xl: '4' },
      }}
    >
      <Heading as="h2" size="xl">
        {pageTitle}
      </Heading>
    </SectionWrapper>
  );
};

export default PageHeading;
