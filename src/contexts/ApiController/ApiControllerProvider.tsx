import React from 'react';
import { ApiControllerContext, ApiControllerContextProps } from './ApiControllerContext';

type ApiControllerProviderProps = ApiControllerContextProps;

const ApiControllerProvider: React.FC<React.PropsWithChildren<ApiControllerProviderProps>> = ({
  children,
  ...props
}) => (
  <ApiControllerContext.Provider value={props}>
    {children}
  </ApiControllerContext.Provider>
);

export default ApiControllerProvider;
