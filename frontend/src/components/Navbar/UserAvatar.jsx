import React from 'react';
import { Avatar, Box } from '@chakra-ui/react';

import UserProfile from '../../assets/images/user.png';

const userAvatar = () => {
  return (
    <Box>
      <Avatar src={UserProfile} size="md" name="Pooria Faramarzian" />
    </Box>
  );
};

export default userAvatar;
