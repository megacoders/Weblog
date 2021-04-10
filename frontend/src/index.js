import SimpleBar from 'simplebar-react';
import { render } from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';

import App from './containers/App';
import RtlProvider from './components/Chakra/RtlProvider';

import 'simplebar/dist/simplebar.min.css';
import './assets/styles/fonts.css';
import './assets/styles/index.css';

render(
  <SimpleBar style={{ maxHeight: '100vh' }}>
    <ChakraProvider>
      <RtlProvider>
        <App />
      </RtlProvider>
    </ChakraProvider>
  </SimpleBar>,
  document.getElementById('app')
);
