import { CircularProgress } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import Layout from '../components/Layout/Layout';

const Home: React.FC = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/dashboard');
  });
  return (
    <Layout>
      <CircularProgress/>
    </Layout>
  );
};

export default Home;
