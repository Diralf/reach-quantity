import { Typography } from '@mui/material';
import React from 'react';
import Layout from '../components/Layout/Layout';
import TargetQuantityList from '../components/TargetQuantityList';
import useTargetQuantityList from '../hooks/useTargetQuantityList';

const Dashboard: React.FC = () => {
  const { targetQuantityList } = useTargetQuantityList();
  return (
    <Layout>
      <Typography variant="h2" component="h1">Dashboard</Typography>
      <TargetQuantityList targets={targetQuantityList}/>
    </Layout>
  );
};

export default Dashboard;
