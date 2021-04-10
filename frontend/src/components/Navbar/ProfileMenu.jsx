import { Link } from 'react-router-dom';
import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from '@chakra-ui/menu';

import UserAvatar from './UserAvatar';

const profileMenu = () => {
  return (
    <Menu>
      <MenuButton aria-label="Options" size="sm" variant="outline">
        <UserAvatar />
      </MenuButton>
      <MenuList>
        <Link to="/profile">
          <MenuItem>حساب کاربری</MenuItem>
        </Link>
        <Link to="/new-post">
          <MenuItem>نوشتن پست جدید</MenuItem>
        </Link>
        <Link to="/settings">
          <MenuItem>تنظیمات</MenuItem>
        </Link>
        <MenuDivider />
        <Link to="/logout">
          <MenuItem>خروج از حساب کاربری</MenuItem>
        </Link>
      </MenuList>
    </Menu>
  );
};

export default profileMenu;
