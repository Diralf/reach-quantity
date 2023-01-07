import { CircularProgress } from '@mui/material';
import React from 'react';
import Layout from '../components/Layout/Layout';
import useDefaultPage from '../hooks/useDefaultPage';

const Home: React.FC = () => {
  useDefaultPage({ defaultPage: '/dashboard' });
  return (
    <Layout>
      <CircularProgress/>
    </Layout>
  );
};

export default Home;
