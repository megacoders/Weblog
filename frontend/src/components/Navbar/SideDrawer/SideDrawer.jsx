import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  Box,
  InputGroup,
  InputRightElement,
  Link,
  VStack,
} from '@chakra-ui/react';
import { CgMenuGridO } from 'react-icons/cg';
import ProfileMenu from '../ProfileMenu/ProfileMenu';
import { AiOutlineSearch } from 'react-icons/ai';

const sideDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
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
        >
          <CgMenuGridO color="white" size="30" />
        </Button>
        <Link color="white">وبلاگ</Link>
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
              {/*  search input */}
              <InputGroup w="72" margin="0 1rem 0 0">
                <InputRightElement pointerEvents="none">
                  <AiOutlineSearch color="#A0AEC0" />
                </InputRightElement>
                <Input type="tel" placeholder="دنبال چی میگردی؟" />
              </InputGroup>
              {/* end search input */}
              <VStack
                as="nav"
                spacing="4"
                alignItems="end"
                margin="2rem 0"
                padding="0 0.4rem"
              >
                <Link color="gray.600" fontSize="md">
                  صفحه اصلی
                </Link>
                <Link color="gray.600" fontSize="md">
                  جدید ترین پست‌ها
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
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};
export default sideDrawer;
