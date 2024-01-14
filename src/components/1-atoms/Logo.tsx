import { NavRoutes } from '@/router/routes';
import { NavLink } from 'react-router-dom';
import LogoIcon from '@/assets/logo.svg?react';
import { useColorModeValue, useTheme } from '@chakra-ui/react';
import { FC } from 'react';

type Props = {
  w?: string;
  h?: string;
}

const Logo: FC<Props> = ({ w='inherit', h='inherit' }) => {
  const theme = useTheme();
  const fill = useColorModeValue(
    theme.__cssVars['--chakra-colors-brand-600'],
    theme.__cssVars['--chakra-colors-brand-400']
  );

  return (
    <NavLink to={NavRoutes.landingPagePath}>
      <LogoIcon
        style={{
          fill,
          width: w,
          height: h
        }}
      />
    </NavLink>
  );
};

export default Logo;
