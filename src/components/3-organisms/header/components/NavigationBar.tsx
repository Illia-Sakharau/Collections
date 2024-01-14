import NavBar from '@molecules/navBar/NavBar';
import { useTranslation } from 'react-i18next';
import { ADMIN_LINKS, AUTH_LINKS, ANON_LINKS } from '../constants';
import useAuth from '@/hooks/useAuth';
import { FlexProps } from '@chakra-ui/react';

type Props = FlexProps;

const NavigationBar = (props: Props) => {
  const { t } = useTranslation();
  const { isAuth, isAdmin } = useAuth();
  const links = !isAuth ? ANON_LINKS : isAdmin ? ADMIN_LINKS(t) : AUTH_LINKS(t);

  return <NavBar links={links} {...props} />;
};

export default NavigationBar;
