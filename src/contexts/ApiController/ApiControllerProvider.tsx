import { ApiController } from '@reach-quantity/types';
import React, { useState, useEffect } from 'react';
import { ApiControllerContext } from './ApiControllerContext';

interface ApiControllerProviderProps {
  controller(): ApiController | Promise<ApiController>;
}

const ApiControllerProvider: React.FC<React.PropsWithChildren<ApiControllerProviderProps>> = ({
  children,
  controller,
}) => {
  const [api, setApi] = useState<ApiController>(null);
  useEffect(() => {
    const getController = async (): Promise<void> => {
      const ctrl = await controller();
      setApi(ctrl);
    };
    getController();
  });
  return (
    <>
      {api && (
        <ApiControllerContext.Provider value={{ controller: api }}>
          {children}
        </ApiControllerContext.Provider>
      )}
    </>
  );
};

export default ApiControllerProvider;
