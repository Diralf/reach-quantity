import { TextField } from '@mui/material';
import React from 'react';
import Layout from '../../components/Layout/Layout';

const CreateTarget: React.FC = () => (
  <Layout>
    <h1>Create New Target</h1>
    <TextField label="Target"/>
  </Layout>
);

export default CreateTarget;
