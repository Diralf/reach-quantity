import React from 'react';
import Layout from '../components/Layout/Layout';
import TargetQuantityForm from '../components/TargetQuantityForm';
import TargetQuantitySubmitHandler from '../components/TargetQuantitySubmitHandler';

const CreateTarget: React.FC = () => (
  <Layout>
    <TargetQuantitySubmitHandler redirectTo="/dashboard">
      {({ handleSubmit }) => <TargetQuantityForm onSubmit={handleSubmit}/>}
    </TargetQuantitySubmitHandler>
  </Layout>
);

export default CreateTarget;
