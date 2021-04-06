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

import ProfileMenu from './ProfileMenu';
import SideDrawer from './SideDrawer';

const Navbar = () => {
  return (
    <>
      <Box
        as="header"
        py="5"
        boxShadow="sm"
        display={{ base: 'none', lg: 'block' }}
      >
        <Container maxW="container.lg">
          <Box
            mb="8"
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
            <Link
              color="gray.600"
              fontSize="13px"
              _hover={{ textDecoration: 'none' }}
            >
              صفحه اصلی
            </Link>
            <Link
              color="gray.600"
              fontSize="13px"
              _hover={{ textDecoration: 'none' }}
            >
              جدترین پست‌ها
            </Link>
            <Link
              color="gray.600"
              fontSize="13px"
              _hover={{ textDecoration: 'none' }}
            >
              مهندسی نرم‌افزار
            </Link>
            <Link
              color="gray.600"
              fontSize="13px"
              _hover={{ textDecoration: 'none' }}
            >
              تجربه کاربری
            </Link>
            <Link
              color="gray.600"
              fontSize="13px"
              _hover={{ textDecoration: 'none' }}
            >
              امنیت سایبری
            </Link>
            <Link
              color="gray.600"
              fontSize="13px"
              _hover={{ textDecoration: 'none' }}
            >
              فریلنسری
            </Link>
            <Link
              color="gray.600"
              fontSize="13px"
              _hover={{ textDecoration: 'none' }}
            >
              پادکست
            </Link>
          </HStack>
        </Container>
      </Box>
      <SideDrawer />
    </>
  );
};

export default Navbar;
