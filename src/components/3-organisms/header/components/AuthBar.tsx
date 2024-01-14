import { useTranslation } from 'react-i18next';
import useAuth from '@/hooks/useAuth';
import { Button, Flex, FlexProps } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { NavRoutes } from '@/router/routes';

type Props = FlexProps;

const AuthBar = (props: Props) => {
  const { t } = useTranslation();
  const { isAuth } = useAuth();
  const navigate = useNavigate();
  const logoutHandle = () => {
    console.log('Logout action');
  };

  return (
    <Flex gap="2" {...props}>
      {isAuth ? (
        <Button variant="outline" colorScheme="negative" onClick={logoutHandle}>
          {t('authbar.logout')}
        </Button>
      ) : (
        <>
          <Button
            variant="ghost"
            colorScheme="brand"
            onClick={() => navigate(NavRoutes.loginPagePath)}
          >
            {t('authbar.login')}
          </Button>
          <Button
            variant="outline"
            colorScheme="brand"
            onClick={() => navigate(NavRoutes.registrationPagePath)}
          >
            {t('authbar.registration')}
          </Button>
        </>
      )}
    </Flex>
  );
};

export default AuthBar;
