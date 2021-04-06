import React from 'react';
import { CgMenuGridO } from 'react-icons/cg';
import { AiOutlineSearch } from 'react-icons/ai';
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';

import ProfileMenu from './ProfileMenu';

const SideDrawer = () => {
  const btnRef = React.useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        display={{ base: 'flex', lg: 'none' }}
        justifyContent="space-between"
        alignItems="center"
        padding={{ base: '0.5rem', md: '0.7rem' }}
        bgColor="gray.600"
      >
        <Button
          ref={btnRef}
          background="transparent"
          padding="0"
          onClick={onOpen}
          _hover={{ color: 'gray.600' }}
          _active={{ bg: 'transparent' }}
        >
          <CgMenuGridO color="white" size="30" />
        </Button>
        <Link color="white" fontSize="xl" _hover={{ textDecoration: 'none' }}>
          وبلاگ
        </Link>
        <ProfileMenu />
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>وبلاگ</DrawerHeader>
            <DrawerBody>
              <InputGroup w="full">
                <InputRightElement pointerEvents="none">
                  <AiOutlineSearch color="#A0AEC0" />
                </InputRightElement>
                <Input type="text" placeholder="دنبال چی میگردی؟" />
              </InputGroup>
              <VStack as="nav" spacing="1" alignItems="end" my="4">
                <Link
                  w="full"
                  p="2"
                  userSelect="none"
                  color="gray.600"
                  fontSize="md"
                  display="block"
                  rounded="md"
                  _hover={{
                    textDecoration: 'none',
                    bg: 'gray.100',
                  }}
                  _active={{ bg: 'gray.200' }}
                >
                  صفحه اصلی
                </Link>
                <Link
                  w="full"
                  p="2"
                  userSelect="none"
                  color="gray.600"
                  fontSize="md"
                  display="block"
                  rounded="md"
                  _hover={{
                    textDecoration: 'none',
                    bg: 'gray.100',
                  }}
                  _active={{ bg: 'gray.200' }}
                >
                  جدید ترین پست‌ها
                </Link>
                <Link
                  w="full"
                  p="2"
                  userSelect="none"
                  color="gray.600"
                  fontSize="md"
                  display="block"
                  rounded="md"
                  _hover={{
                    textDecoration: 'none',
                    bg: 'gray.100',
                  }}
                  _active={{ bg: 'gray.200' }}
                >
                  مهندسی نرم‌افزار
                </Link>
                <Link
                  w="full"
                  p="2"
                  userSelect="none"
                  color="gray.600"
                  fontSize="md"
                  display="block"
                  rounded="md"
                  _hover={{
                    textDecoration: 'none',
                    bg: 'gray.100',
                  }}
                  _active={{ bg: 'gray.200' }}
                >
                  تجربه کاربری
                </Link>
                <Link
                  w="full"
                  p="2"
                  userSelect="none"
                  color="gray.600"
                  fontSize="md"
                  display="block"
                  rounded="md"
                  _hover={{
                    textDecoration: 'none',
                    bg: 'gray.100',
                  }}
                  _active={{ bg: 'gray.200' }}
                >
                  امنیت سایبری
                </Link>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};
export default SideDrawer;
