import { Container, Divider, Flex } from '@chakra-ui/react';

import Aside from '../components/Aside/Aside';
import FeaturedPosts from '../components/FeaturedPosts/Posts';
import Navbar from '../components/Navbar/Navbar';
import PageInfo from '../components/PageInfo';
import PostsList from '../components/PostsList/PostsList';

const Home = () => {
  return (
    <>
      <PageInfo
        title="صفحه اصلی | وبلاگ"
        description="بهترین و بروزترین مقالات برنامه نویسی را اینجا پیدا کنید."
        type="website"
        image=""
        url=""
      />
      <Navbar />
      <FeaturedPosts />
      <Container maxW="container.lg">
        <Divider mb="10" />
        <Flex>
          <PostsList />
          <Aside />
        </Flex>
      </Container>
    </>
  );
};

export default Home;
