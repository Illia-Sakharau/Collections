import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { ColorModeScript } from '@chakra-ui/react';
import './i18n.ts';
import { Provider } from 'react-redux';
import { setupStore } from '@/store/store.ts';

const store = setupStore();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ColorModeScript />
      <App />
    </Provider>
  </React.StrictMode>
);
