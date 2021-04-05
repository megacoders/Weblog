import React from 'react';
import { Avatar, Box } from '@chakra-ui/react';
import ProfileMenu from '../ProfileMenu/ProfileMenu';

const userAvatar = ({ show, openMenu }) => {
  return (
    <Box cursor="pointer" onClick={openMenu} zIndex="100">
      <Avatar
        src="https://avatars.githubusercontent.com/u/66781740?v=4"
        size="md"
        name="pooria faramarzian"
      />
      <ProfileMenu show={show} />
    </Box>
  );
};

export default userAvatar;
