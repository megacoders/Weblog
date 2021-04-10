import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { BsBookmark } from 'react-icons/bs';
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
} from '@chakra-ui/react';

const Post = ({
  author,
  createdDate,
  description,
  image,
  link,
  readingTime,
  title,
}) => {
  return (
    <HStack
      as="li"
      w="full"
      borderBottomWidth="1px"
      borderColor="gray.200"
      pb="8"
    >
      <Box flex="1">
        <Link to={link}>
          <Heading fontSize="lg" mb="2">
            {title}
          </Heading>
          <Text w="90%" fontSize="sm">
            {description}
          </Text>
        </Link>
        <Flex as="footer" mt="3">
          <Flex flex="1">
            <Image
              width="8"
              height="8"
              rounded="md"
              objectFit="cover"
              src={`/img/${image}`}
              alt={title}
              mr="3"
            />
            <Flex flexDir="column">
              <Heading as="h4" mb="1" fontSize="0.8rem" fontWeight="normal">
                <Link to={link}>{author}</Link>
              </Heading>
              <HStack spacing="1" fontSize="0.7rem" color="gray.600">
                <span>{createdDate}</span>
                <span>•</span>
                <span>{readingTime}</span>
              </HStack>
            </Flex>
          </Flex>
          <Button
            p="1"
            bg="transparent"
            _hover={{ bg: 'transparent' }}
            _active={{ bg: 'transparent' }}
            _focus={{ boxShadow: 'none' }}
          >
            <BsBookmark size="1.2rem" />
          </Button>
        </Flex>
      </Box>
      <Link to={link}>
        <Image
          rounded="md"
          width="36"
          height="28"
          objectFit="cover"
          src={`/img/${image}`}
          alt={title}
        />
      </Link>
    </HStack>
  );
};

Post.propTypes = {
  author: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  link: PropTypes.string,
  createdDate: PropTypes.string,
  readingTime: PropTypes.string,
};

export default Post;
