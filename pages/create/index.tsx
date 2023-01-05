import { TextField, Typography } from '@mui/material';
import React from 'react';
import Layout from '../../components/Layout/Layout';

const CreateTarget: React.FC = () => (
  <Layout>
    <Typography variant="h2" component="h1">Create New Target</Typography>
    <TextField label="Target"/>
  </Layout>
);

export default CreateTarget;
