import { ApiController } from '@reach-quantity/types';
import React from 'react';

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
    updateReached() {
      throw Error('Controller Context is not defined');
    },
  },
};

const ApiControllerContext = React.createContext<ApiControllerContextProps>(defaultValue);

export type { ApiControllerContextProps };
export { ApiControllerContext };
