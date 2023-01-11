import { Typography, Card, CardContent, Grid } from '@mui/material';
import React from 'react';
import Layout from '../components/Layout/Layout';

const Dashboard: React.FC = () => (
  <Layout>
    <Typography variant="h2" component="h1">Dashboard</Typography>
    <Card aria-label="Paper Cranes card">
      <CardContent>
        <Grid container direction="column">
          <Grid container gap={1}>
            <Typography component="strong" fontWeight="bold">Name</Typography>
            <Typography component="span">Paper Cranes</Typography>
          </Grid>
          <Grid container gap={1}>
            <Typography component="strong" fontWeight="bold">Target</Typography>
            <Typography component="span">50 paper cranes</Typography>
          </Grid>
          <Grid container gap={1}>
            <Typography component="strong" fontWeight="bold">For</Typography>
            <Typography component="span">Next 10 Days</Typography>
          </Grid>
          <Grid container gap={1} direction="column">
            <Typography component="span">Today target</Typography>
            <Typography variant="h2">5</Typography>
          </Grid>
        </Grid>
        <Grid container direction="row" gap={1}>
          <Grid container aria-label="Day 1" direction="column" flexShrink={0}>
            <Typography component="strong" fontWeight="bold">Day 1</Typography>
            <Typography component="span">5</Typography>
          </Grid>
          <Grid container aria-label="Day 2" direction="column">
            <Typography component="strong" fontWeight="bold">Day 2</Typography>
            <Typography component="span">5</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  </Layout>
);

export default Dashboard;
