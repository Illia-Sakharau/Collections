import { ChakraProvider } from '@chakra-ui/react';
import theme from './themes/theme';
import { RouterProvider } from 'react-router-dom';
import { routesConfig } from './router/routesConfig';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={routesConfig} />
    </ChakraProvider>
  );
}

export default App;
