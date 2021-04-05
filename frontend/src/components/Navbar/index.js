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
import ProfileMenu from './ProfileMenu/ProfileMenu';

const Navbar = () => {
  return (
    <>
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
            <Box display="flex" alignItems="center">
              <InputGroup w="72" margin="0 1rem 0 0">
                <InputRightElement pointerEvents="none">
                  <AiOutlineSearch color="#A0AEC0" />
                </InputRightElement>
                <Input type="tel" placeholder="دنبال چی میگردی؟" />
              </InputGroup>
              <ProfileMenu />
            </Box>
          </Box>
          <HStack as="nav" spacing="4">
            <Link color="gray.600" fontSize="md">
              صفحه اصلی
            </Link>
            <Link color="gray.600" fontSize="md">
              جدترین پست‌ها
            </Link>
            <Link color="gray.600" fontSize="md">
              مهندسی نرم‌افزار
            </Link>
            <Link color="gray.600" fontSize="md">
              تجربه کاربری
            </Link>
            <Link color="gray.600" fontSize="md">
              امنیت سایبری
            </Link>
          </HStack>
        </Container>
      </Box>
    </>
  );
};

export default Navbar;
