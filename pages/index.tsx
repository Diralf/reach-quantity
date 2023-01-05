import { CircularProgress } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import Layout from '../components/Layout/Layout';

const Home = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/create');
  });
  return (
    <Layout>
      <CircularProgress/>
    </Layout>
  );
};

export default Home;
