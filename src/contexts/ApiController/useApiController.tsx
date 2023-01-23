import React from 'react';
import { ApiController } from '../../types/api-controller';
import { ApiControllerContext } from './ApiControllerContext';

const useApiController = (): ApiController => {
  const { controller } = React.useContext(ApiControllerContext);

  return controller;
};

export default useApiController;
