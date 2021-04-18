import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Box, Button, Heading, Image, Text, VStack } from '@chakra-ui/react';

import GoogleLogo from '../../assets/images/google-logo.png';

const Account = ({ email }) => {
  return (
    <Box
      as="section"
      flex="1"
      d={{ base: 'block', md: 'flex' }}
      alignItems="center"
      p="8"
      position="relative"
      h="100%"
    >
      <VStack w="full" spacing="5" alignItems="flex-start">
        <Heading color="#107abe" fontSize="1.2rem">
          ورود با اکانت شبکه های اجتماعی
        </Heading>
        <Box
          as="button"
          w="full"
          py="2"
          px="4"
          outline="none"
          rounded="full"
          d="flex"
          alignItems="center"
          justifyContent="space-between"
          border="1px solid #ebebeb"
          boxShadow="0 0 14px 0 rgb(0 0 0 / 7%)"
        >
          <Text fontWeight="bold" fontSize="0.9rem" color="red.500">
            از طریق حساب گوگل
          </Text>
          <Image src={GoogleLogo} alt="لوگو گوگل" />
        </Box>
        <VStack w="full" spacing="3" pt="10" fontSize="0.9rem">
          <Button
            color="#aaa"
            variant="link"
            fontWeight="normal"
            onClick={email}
            _hover={{ textDecor: 'none' }}
            _active={{ color: '#aaa' }}
            _focus={{ boxShadow: 'none' }}
          >
            ورود از طریق شماره موبایل یا پست الکترونیک
          </Button>
          <Text color="#5b5b5b">
            ثبت نام در ویرگول به منزله موافقت با{' '}
            <Text as="span" color="#aaa" borderBottom="1px solid #aaa">
              قوانین
            </Text>{' '}
            است
          </Text>
        </VStack>
        <Box
          position="absolute"
          textAlign="center"
          w="full"
          color="#5b5b5b"
          fontSize="0.9rem"
          bottom="8"
          left="50%"
          transform="translate(-50%)"
        >
          <Link to="/register">عضو نیستید؟ ثبت نام کنید</Link>
        </Box>
      </VStack>
    </Box>
  );
};

Account.propTypes = {
  email: PropTypes.func,
};

export default Account;
