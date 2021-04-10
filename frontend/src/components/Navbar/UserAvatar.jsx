import { Avatar, Box } from '@chakra-ui/react';

import UserProfile from '../../assets/images/user.png';

const UserAvatar = () => {
  return (
    <Box zIndex="100">
      <Avatar src={UserProfile} size="md" name="Pooria Faramarzian" />
    </Box>
  );
};

export default UserAvatar;
