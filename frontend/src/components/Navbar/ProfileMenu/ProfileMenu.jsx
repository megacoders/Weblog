import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from '@chakra-ui/menu';
import React from 'react';
import UserAvatar from '../UserAvatar/UserAvatar';

const profileMenu = () => {
  return (
    <Menu closeOnSelect={false}>
      <MenuButton aria-label="Options" size="sm" variant="outline">
        <UserAvatar />
      </MenuButton>
      <MenuList>
        <MenuItem>حساب کاربری</MenuItem>
        <MenuItem>نوشته های من</MenuItem>
        <MenuItem>تنظیمات</MenuItem>
        <MenuDivider />
        <MenuItem>خروج از حساب کاربری</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default profileMenu;
