import { extendTheme } from '@chakra-ui/react';

const colors = {
  brand: {
    50: '#F4FFDC',
    100: '#C4FE87',
    200: '#A9E56A',
    300: '#8BC74C',
    400: '#6DA92E',
    500: '#579218',
    600: '#437E04',
    700: '#286300',
    800: '#1B5607',
    900: '#114C0A',
  },
  gray: {
    50: '#FBFBFA',
    100: '#F6F6F3',
    200: '#EEEFEA',
    300: '#DDDED7',
    400: '#BBBDB3',
    500: '#929387',
    600: '#65655C',
    700: '#45463E',
    800: '#2B2B25',
    900: '#22221E',
  },
};

const theme = extendTheme({ colors });

export default theme;
