import React from 'react';
import { ApiController } from '../../types/api-controller';

interface ControllerContextProps {
  controller: ApiController;
}

const defaultContext: ControllerContextProps = {
  controller: {
    createTarget() {
      throw Error('Controller Context is not defined');
    },
  },
};

const ControllerContext = React.createContext<ControllerContextProps>(defaultContext);

export type { ControllerContextProps };
export { ControllerContext };
