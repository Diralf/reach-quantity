import { Typography, Card, CardContent, Grid } from '@mui/material';
import React from 'react';
import Layout from '../components/Layout/Layout';

const Dashboard: React.FC = () => (
  <Layout>
    <Typography variant="h2" component="h1">Dashboard</Typography>
    <Card aria-label="Paper Cranes card">
      <CardContent>
        <Grid container direction="column" justifyContent="space-between">
          <Grid>
            <Typography component="strong" fontWeight="bold">Name</Typography>
            <Typography component="span">Paper Cranes</Typography>
          </Grid>
          <Grid>
            <Typography component="strong" fontWeight="bold">Target</Typography>
            <Typography component="span">50 paper cranes</Typography>
          </Grid>
          <Grid>
            <Typography component="strong" fontWeight="bold">For</Typography>
            <Typography component="span">Next 10 Days</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  </Layout>
);

export default Dashboard;
