import { render } from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';

import App from './containers/App';
import RtlProvider from './components/Chakra/RtlProvider';

render(
  <ChakraProvider>
    <RtlProvider>
      <App />
    </RtlProvider>
  </ChakraProvider>,
  document.getElementById('app')
);
