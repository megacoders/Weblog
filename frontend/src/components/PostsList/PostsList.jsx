import { VStack } from '@chakra-ui/react';

import { posts } from '../../constants';
import Post from './Post';

const PostsList = () => {
  return (
    <VStack
      as="ul"
      flex="2"
      listStyleType="none"
      pr={{ base: '0', md: '10' }}
      spacing="5"
    >
      {posts.map(post => (
        <Post
          key={post.id}
          author={post.author}
          title={post.title}
          description={post.description}
          image={post.img}
          link={post.link}
          createdDate={post.createdDate}
          readingTime={post.readingTime}
        />
      ))}
    </VStack>
  );
};

export default PostsList;
