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
  negative: {
    50: '#FAEBDD',
    100: '#DCB8A7',
    200: '#D1968A',
    300: '#C8665D',
    400: '#C25049',
    500: '#B5312D',
    600: '#9C2623',
    700: '#7B2320',
    800: '#671F1C',
    900: '#4E1213',
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
