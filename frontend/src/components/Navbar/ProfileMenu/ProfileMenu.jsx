import { Divider, List, ListIcon, ListItem } from '@chakra-ui/layout';
import React from 'react';
import { BsFillPersonFill } from 'react-icons/bs';

const profileMenu = ({ show }) => {
  const menu = show ? (
    <List spacing={3} position="absolute">
      <ListItem>
        <ListIcon as={BsFillPersonFill} color="green.500" />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit
      </ListItem>
      <Divider />
      <ListItem>
        <ListIcon as={BsFillPersonFill} color="green.500" />
        Assumenda, quia temporibus eveniet a libero incidunt suscipit
      </ListItem>
      <ListItem>
        <ListIcon as={BsFillPersonFill} color="green.500" />
        Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
      </ListItem>
    </List>
  ) : null;

  return <>{menu}</>;
};

export default profileMenu;
