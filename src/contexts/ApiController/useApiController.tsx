import { ApiController } from '@reach-quantity/types';
import React from 'react';
import { ApiControllerContext } from './ApiControllerContext';

const useApiController = (): ApiController => {
  const { controller } = React.useContext(ApiControllerContext);

  return controller;
};

export default useApiController;
