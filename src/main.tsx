import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { ColorModeScript } from '@chakra-ui/react';
import './i18n.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ColorModeScript />
    <App />
  </React.StrictMode>
);
