import { Typography } from '@mui/material';
import React from 'react';
import Layout from '../components/Layout/Layout';
import TargetQuantityList from '../components/TargetQuantityList';
import useReachedTodaySubmit from '../hooks/useReachedTodaySubmit';
import useTargetQuantityList from '../hooks/useTargetQuantityList';

const Dashboard: React.FC = () => {
  const { targetQuantityList } = useTargetQuantityList();
  const { handleReachedTodayChange } = useReachedTodaySubmit();
  return (
    <Layout>
      <Typography variant="h2" component="h1">Dashboard</Typography>
      <TargetQuantityList targets={targetQuantityList} onTodayReachedChange={handleReachedTodayChange}/>
    </Layout>
  );
};

export default Dashboard;
