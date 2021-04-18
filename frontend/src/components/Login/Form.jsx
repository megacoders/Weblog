import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { BiChevronLeft } from 'react-icons/bi';
import { Box, Button, Heading, Input, Text, VStack } from '@chakra-ui/react';

const Form = ({ account }) => {
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
          ورود به حساب کاربری
        </Heading>
        <Text color="#5b5b5b">
          نام کاربری، پست الکترونیک یا شماره موبایل خود را وارد کنید
        </Text>
        <VStack as="form" w="full" spacing="5" alignItems="flex-end">
          <Input
            w="full"
            h="12"
            type="text"
            rounded="full"
            _placeholder={{ color: '#757575' }}
            _focus={{ justifyContent: 'flex-start' }}
            placeholder="نام کاربری، پست الکترونیک یا شماره موبایل"
          />
          <Button
            d="flex"
            bg="#107abe"
            rounded="full"
            color="#ffffff"
            fontWeight="normal"
            alignItems="center"
            _hover={{ bg: '#0c5c8f' }}
            _active={{ bg: '#0c5c8f' }}
          >
            <Text mr="2">ورود به حساب کاربری</Text>
            <BiChevronLeft size="1.5rem" />
          </Button>
        </VStack>
        <VStack w="full" spacing="3" pt="10" fontSize="0.9rem">
          <Button
            color="#aaa"
            variant="link"
            fontWeight="normal"
            onClick={account}
            _hover={{ textDecor: 'none' }}
            _active={{ color: '#aaa' }}
            _focus={{ boxShadow: 'none' }}
          >
            ورود با اکانت{' '}
            <Text color="red.500" ml="1">
              گوگل
            </Text>
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

Form.propTypes = {
  account: PropTypes.func,
};

export default Form;
