import { Link } from 'react-router-dom';
import { BsBookmarkFill } from 'react-icons/bs';
import {
  Box,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Heading,
  VStack,
} from '@chakra-ui/react';

import './Aside.css';
import { bookmarks } from '../../constants';

const Aside = () => {
  return (
    <Box as="aside" display={{ base: 'none', md: 'block' }} flex="1">
      <Flex
        roundedTop="md"
        as="header"
        px="4"
        py="6"
        color="white"
        bg="blackAlpha.800"
        alignItems="center"
      >
        <Link to="/bookmarks" style={{ display: 'flex', width: '100%' }}>
          <BsBookmarkFill size="1.5em" />
          <Heading ml="2" fontSize="lg">
            پست های ذخیره شده
          </Heading>
        </Link>
      </Flex>
      <VStack
        as="ul"
        roundedBottom="md"
        listStyleType="none"
        overflow="hidden"
        spacing="0"
        id="bookmarks"
      >
        {bookmarks.map(bookmark => (
          <Flex
            key={bookmark.id}
            as="li"
            py="5"
            px="3"
            w="full"
            bg="gray.50"
            alignItems="center"
            borderTopWidth="1px"
            borderStyle="dashed"
          >
            <Box>
              <CircularProgress
                value={bookmark.value}
                size={35}
                color="blackAlpha.800"
              >
                <CircularProgressLabel
                  d="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <BsBookmarkFill color="#858585" size="1.5em" />
                </CircularProgressLabel>
              </CircularProgress>
            </Box>
            <Flex flex="1" ml="2" flexDir="column">
              <Link to={bookmark.link} style={{ fontSize: '14px' }}>
                {bookmark.title}
              </Link>
              <Link
                to={bookmark.profile}
                style={{ color: '#282828', fontSize: '12px' }}
              >
                {bookmark.author}
              </Link>
            </Flex>
          </Flex>
        ))}
      </VStack>
    </Box>
  );
};

export default Aside;
