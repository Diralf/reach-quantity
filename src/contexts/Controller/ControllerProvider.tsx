import React from 'react';
import { ControllerContext, ControllerContextProps } from './ControllerContext';

type ControllerProviderProps = ControllerContextProps;

const ControllerProvider: React.FC<React.PropsWithChildren<ControllerProviderProps>> = ({
  children,
  ...props
}) => (
  <ControllerContext.Provider value={props}>
    {children}
  </ControllerContext.Provider>
);

export default ControllerProvider;
