import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import {
  Box,
  Container,
  HStack,
  Image,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';

import './Navbar.css';
import { navItems } from '../../constants';

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
            <Link to="/">
              <Image width="12" src="/img/logo.png" alt="لوگو ویرگول" />
            </Link>
            <Box display="flex" alignItems="center">
              <InputGroup w="72" margin="0 1rem 0 0">
                <InputRightElement pointerEvents="none">
                  <AiOutlineSearch color="#A0AEC0" />
                </InputRightElement>
                <Input type="text" placeholder="دنبال چی میگردی؟" />
              </InputGroup>
              <ProfileMenu />
            </Box>
          </Box>
          <HStack as="nav" spacing="4">
            {navItems.map(item => (
              <Link key={item.id} to={item.link} className="main-nav__link">
                {item.text}
              </Link>
            ))}
          </HStack>
        </Container>
      </Box>
      <SideDrawer />
    </>
  );
};

export default Navbar;
