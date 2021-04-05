import React from 'react';

import PageInfo from '../components/PageInfo';
import Navbar from '../components/Navbar';

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
    </>
  );
};

export default Home;
