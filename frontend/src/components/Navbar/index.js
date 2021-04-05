import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import {
  Box,
  Container,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Text,
} from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Box as="header" py="5" boxShadow="sm">
      <Container maxW="container.lg">
        <Box
          mb="5"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Text as="h1" fontSize="lg">
            وبلاگ
          </Text>
          <InputGroup w="72">
            <InputRightElement pointerEvents="none">
              <AiOutlineSearch color="#A0AEC0" />
            </InputRightElement>
            <Input type="tel" placeholder="دنبال چی میگردی؟" />
          </InputGroup>
        </Box>
        <HStack as="nav" spacing="3">
          <Link color="gray.600" fontSize="sm">
            صفحه اصلی
          </Link>
          <Link color="gray.600" fontSize="sm">
            جدترین پست‌ها
          </Link>
          <Link color="gray.600" fontSize="sm">
            مهندسی نرم‌افزار
          </Link>
          <Link color="gray.600" fontSize="sm">
            تجربه کاربری
          </Link>
          <Link color="gray.600" fontSize="sm">
            امنیت سایبری
          </Link>
        </HStack>
      </Container>
    </Box>
  );
};

export default Navbar;
