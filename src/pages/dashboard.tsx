import { Typography } from '@mui/material';
import React from 'react';
import Layout from '../components/Layout/Layout';

const Dashboard: React.FC = () => (
  <Layout>
    <Typography variant="h2" component="h1">Dashboard</Typography>
    <Typography component="span">Paper Cranes</Typography>
  </Layout>
);

export default Dashboard;
