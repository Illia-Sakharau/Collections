import { useTranslation } from 'react-i18next';
import useAuth from '@/hooks/useAuth';
import { Button, Flex, FlexProps } from '@chakra-ui/react';

type Props = FlexProps;

const AuthBar = (props: Props) => {
  const { t } = useTranslation();
  const { isAuth } = useAuth();
  const logoutHandle = () => {
    console.log('Logout action');
  };
  const loginHandle = () => {
    console.log('Login action');
  };
  const registrationHandle = () => {
    console.log('Registration action');
  };

  return (
    <Flex gap="2" {...props}>
      {isAuth ? (
        <Button variant="outline" colorScheme="negative" onClick={logoutHandle}>
          {t('authbar.logout')}
        </Button>
      ) : (
        <>
          <Button variant="ghost" colorScheme="brand" onClick={loginHandle}>
            {t('authbar.login')}
          </Button>
          <Button
            variant="outline"
            colorScheme="brand"
            onClick={registrationHandle}
          >
            {t('authbar.registration')}
          </Button>
        </>
      )}
    </Flex>
  );
};

export default AuthBar;
