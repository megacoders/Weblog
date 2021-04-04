import React from 'react';
import { render } from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';

import App from './containers/App';
import RtlProvider from './components/Chakra/RtlProvider';

import './assets/styles/fonts.css';
import './assets/styles/index.css';

render(
  <ChakraProvider>
    <RtlProvider>
      <App />
    </RtlProvider>
  </ChakraProvider>,
  document.getElementById('app')
);
