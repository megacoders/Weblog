import { useState } from 'react';
import { Box } from '@chakra-ui/react';

import Content from '../components/Login/Content';
import Form from '../components/Login/Form';
import Account from '../components/Login/Account';

const Login = () => {
  const [form, setForm] = useState(true);

  const loginWithEmail = () => setForm(true);
  const loginWithAccount = () => setForm(false);

  return (
    <Box as="main" h="100vh" display={{ md: 'flex' }}>
      <Content />
      {form ? (
        <Form account={loginWithAccount} />
      ) : (
        <Account email={loginWithEmail} />
      )}
    </Box>
  );
};

export default Login;
