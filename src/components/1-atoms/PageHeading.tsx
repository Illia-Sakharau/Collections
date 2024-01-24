import { Heading } from '@chakra-ui/react';
import SectionWrapper from './SectionWrapper';
import { ReactElement } from 'react';
import CTAButton from './CTAButton';

type Props = {
  pageTitle: string;
  ctaButtonInfo?: {
    text: string;
    icon: ReactElement;
    action: () => void;
  };
};

const PageHeading = ({ pageTitle, ctaButtonInfo }: Props) => {
  return (
    <SectionWrapper
      containerProps={{
        pt: { base: '4', md: '8', xl: '16' },
        pb: { base: '2', md: '4', xl: '4' },
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 2,
      }}
    >
      <Heading as="h2" size="xl">
        {pageTitle}
      </Heading>
      {ctaButtonInfo && <CTAButton {...ctaButtonInfo} />}
    </SectionWrapper>
  );
};

export default PageHeading;
