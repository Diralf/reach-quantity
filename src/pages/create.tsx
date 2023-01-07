import React from 'react';
import Layout from '../components/Layout/Layout';
import TargetQuantityForm from '../components/TargetQuantityForm';
import useTargetQuantitySubmit from '../hooks/useTargetQuantitySubmit';

const CreateTarget: React.FC = () => {
  const { handleSubmit } = useTargetQuantitySubmit({ redirectTo: '/dashboard' });
  return (
    <Layout>
      <TargetQuantityForm onSubmit={handleSubmit}/>
    </Layout>
  );
};

export default CreateTarget;
