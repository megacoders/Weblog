import { Box } from '@chakra-ui/react';

import Content from '../components/Login/Content';
import Form from '../components/Login/Form';

const Login = () => {
  return (
    <Box as="main" h="100vh" display={{ md: 'flex' }}>
      <Content />
      <Form />
    </Box>
  );
};

export default Login;
