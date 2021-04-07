import React from 'react';

import Navbar from '../components/Navbar/Navbar';
import FeaturedPosts from '../components/FeaturedPosts/Posts';
import PageInfo from '../components/PageInfo';

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
    </>
  );
};

export default Home;
