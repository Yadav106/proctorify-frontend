import React, { useState } from 'react';
import Layout from '@/components/Layout';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  return(
    <Layout >
      <div className='text-5xl font-bold'>home</div>
    </Layout>
  )
  
};

export default Home;
