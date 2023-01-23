import React from 'react';
import { ApiController } from '../../types/api-controller';

interface ApiControllerContextProps {
  controller: ApiController;
}

const defaultValue: ApiControllerContextProps = {
  controller: {
    createTarget() {
      throw Error('Controller Context is not defined');
    },
    getAllTargets() {
      throw Error('Controller Context is not defined');
    },
  },
};

const ApiControllerContext = React.createContext<ApiControllerContextProps>(defaultValue);

export type { ApiControllerContextProps };
export { ApiControllerContext };
