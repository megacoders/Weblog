import { useRef } from 'react';
import { Link } from 'react-router-dom';
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
  Image,
  Input,
  InputGroup,
  InputRightElement,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';

import './SideDrawer.css';
import { navItems } from '../../constants';
import ProfileMenu from './ProfileMenu';

const SideDrawer = () => {
  const btnRef = useRef();
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
        <Link to="/">
          <Image width="12" src="/img/logo.png" alt="لوگو ویرگول" />
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
                {navItems.map(item => (
                  <Link key={item.id} to={item.link} className="nav-item">
                    {item.text}
                  </Link>
                ))}
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};
export default SideDrawer;
