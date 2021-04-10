import { Link } from 'react-router-dom';
import { BsBookmark } from 'react-icons/bs';
import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Text,
} from '@chakra-ui/react';

import { featuredPosts } from '../../constants';

const Posts = () => {
  return (
    <Container as="section" py="10" maxW="container.lg">
      <Heading as="h2" fontSize="1.5rem">
        برجسته‌ترین پست‌ها
      </Heading>
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
        gap={5}
        mt="5"
      >
        {featuredPosts.map(post => (
          <Link to={post.link} key={post.id}>
            <GridItem
              as="article"
              bg="gray.50"
              _hover={{ bg: 'gray.100' }}
              _active={{ bg: 'gray.200' }}
              h="52"
              rounded="md"
              d="flex"
              overflow="hidden"
            >
              <Box flex="1">
                <Link to={post.link}>
                  <Image
                    w="full"
                    h="full"
                    objectFit="cover"
                    src={`/img/${post.img}`}
                    alt={post.title}
                  />
                </Link>
              </Box>
              <Box
                flex="2"
                py="5"
                px="3"
                d="flex"
                flexDir="column"
                justifyContent="space-between"
              >
                <Link to={post.link}>
                  <Heading
                    as="h3"
                    title={post.title}
                    fontSize="1rem"
                    mb="1rem"
                    color="gray.800"
                  >
                    {post.title}
                  </Heading>
                  <Text fontSize="14px" color="gray.600">
                    {post.description}
                  </Text>
                </Link>
                <Box
                  as="footer"
                  d="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Box>
                    <Heading
                      as="h4"
                      mb="1"
                      fontSize="0.8rem"
                      fontWeight="normal"
                    >
                      <Link to={post.link}>{post.author}</Link>
                    </Heading>
                    <HStack spacing="1" fontSize="0.7rem" color="gray.600">
                      <span>{post.createdDate}</span>
                      <span>•</span>
                      <span>{post.readingTime}</span>
                    </HStack>
                  </Box>
                  <Button p="1" bg="transparent" _focus={{ boxShadow: 'none' }}>
                    <BsBookmark size="1.2rem" />
                  </Button>
                </Box>
              </Box>
            </GridItem>
          </Link>
        ))}
      </Grid>
    </Container>
  );
};

export default Posts;
