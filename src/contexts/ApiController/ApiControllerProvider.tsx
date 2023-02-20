import { ApiController } from '@reach-quantity/types';
import React from 'react';
import { ApiControllerContext } from './ApiControllerContext';

interface ApiControllerProviderProps {
  controller(): ApiController | Promise<ApiController>;
}

const ApiControllerProvider: React.FC<React.PropsWithChildren<ApiControllerProviderProps>> = ({
  children,
  controller,
}) => (
  <ApiControllerContext.Provider value={{ controller: controller() }}>
    {children}
  </ApiControllerContext.Provider>
);

export default ApiControllerProvider;
