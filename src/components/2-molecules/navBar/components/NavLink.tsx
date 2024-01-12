import { FC } from 'react';
import { Link, useColorModeValue, useTheme } from '@chakra-ui/react';
import { NavLink as RouterLink } from 'react-router-dom';
import { linkInfo } from '@/types/componens';

const NavLink: FC<linkInfo> = ({ text, link }) => {
  const theme = useTheme();
  const activeLinkColor = useColorModeValue(
    theme.__cssVars['--chakra-colors-brand-600'],
    theme.__cssVars['--chakra-colors-brand-400']
  );

  return (
    <Link
      as={RouterLink}
      to={link}
      fontSize="xl"
      _activeLink={{
        fontWeight: 'bold',
        color: activeLinkColor,
      }}
    >
      {text}
    </Link>
  );
};

export default NavLink;
