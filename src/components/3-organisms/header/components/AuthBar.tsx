import { useTranslation } from 'react-i18next';
import useAuth from '@/hooks/useAuth';
import { Button, Flex, FlexProps } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { NavRoutes } from '@/router/routes';

type Props = {
  buttonSize?: string;
} & FlexProps;

const AuthBar = ({ buttonSize = 'md', ...props }: Props) => {
  const { t } = useTranslation();
  const { isAuth, logoutAction } = useAuth();
  const navigate = useNavigate();

  return (
    <Flex gap="2" {...props}>
      {isAuth ? (
        <Button
          variant="outline"
          colorScheme="negative"
          size={buttonSize}
          onClick={logoutAction}
        >
          {t('authbar.logout')}
        </Button>
      ) : (
        <>
          <Button
            variant="ghost"
            colorScheme="brand"
            size={buttonSize}
            onClick={() => navigate(NavRoutes.loginPagePath)}
          >
            {t('authbar.login')}
          </Button>
          <Button
            variant="outline"
            colorScheme="brand"
            size={buttonSize}
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
