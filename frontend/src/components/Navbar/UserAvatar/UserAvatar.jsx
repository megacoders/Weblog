import React from 'react';
import { Avatar, Box } from '@chakra-ui/react';

const userAvatar = () => {
  return (
    <Box cursor="pointer">
      <Avatar
        src="https://avatars.githubusercontent.com/u/66781740?v=4"
        size="md"
        name="pooria faramarzian"
      />
    </Box>
  );
};

export default userAvatar;
