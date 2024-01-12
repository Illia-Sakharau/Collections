import { NavRoutes } from '@/router/routes';
import { NavLink } from 'react-router-dom';
import LogoIcon from '@/assets/logo.svg?react';
import { useColorModeValue, useTheme } from '@chakra-ui/react';

const Logo = () => {
  const theme = useTheme();
  console.log(theme.__cssVars['--chakra-colors-brand-300']);

  const fill = useColorModeValue(
    theme.__cssVars['--chakra-colors-brand-500'],
    theme.__cssVars['--chakra-colors-brand-300']
  );

  return (
    <NavLink to={NavRoutes.landingPagePath}>
      <LogoIcon
        style={{
          fill,
        }}
      />
    </NavLink>
  );
};

export default Logo;
