import SectionWrapper from '@/components/1-atoms/SectionWrapper';
import { Button, Heading, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import BG_IMG from '@/assets/herro-banner.webp';
import BG_IMG_MOB from '@/assets/herro-banner-mob.webp';
import { useNavigate } from 'react-router-dom';
import { NavRoutes } from '@/router/routes';

const HerroBanner = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <SectionWrapper
      sectionProps={{
        bg: {
          base: `url('${BG_IMG_MOB}') 50%/cover no-repeat;`,
          md: `url('${BG_IMG}') 50%/cover no-repeat;`,
        },
        minH: { base: 'calc(100vh - 80px)', md: 'calc(100vh - 120px)' },
        display: 'flex',
        alignItems: 'center',
      }}
      containerProps={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: { base: 'center', md: 'flex-start' },
      }}
    >
      <Heading
        as={'h2'}
        size={{ base: 'xl', sm: '2xl', md: '3xl', '2xl': '4xl' }}
        maxW={{ base: '100%', md: '60%' }}
        textAlign={{ base: 'center', md: 'left' }}
      >
        {t('herro_banner.title')}
      </Heading>
      <Text
        fontSize={{ base: 'md', md: 'xl' }}
        maxW={{ base: '90%', md: '40%' }}
        textAlign={{ base: 'center', md: 'left' }}
        mt={{ base: 4, md: 8 }}
      >
        {t('herro_banner.description')}
      </Text>
      <Button
        size={{ base: 'md', lg: 'lg' }}
        colorScheme="brand"
        mt={16}
        onClick={() => navigate(NavRoutes.loginPagePath)}
      >
        {t('herro_banner.btn_text')}
      </Button>
    </SectionWrapper>
  );
};

export default HerroBanner;
