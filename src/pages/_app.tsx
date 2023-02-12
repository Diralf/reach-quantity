import { ApiController } from '@reach-quantity/types';
import { Analytics } from '@vercel/analytics/react';
import type { AppProps } from 'next/app';
import React, { useState, useEffect } from 'react';
import { jsStoreApiController } from '../api-controllers/js-store/js-store-api-controller';
import { ApiControllerProvider } from '../contexts/ApiController';
import '../styles/globals.css';

const App = ({
  Component,
  pageProps,
}: AppProps): JSX.Element => {
  const [api, setApi] = useState<ApiController>(null);
  useEffect(() => {
    const getController = async () => {
      const ctrl = await jsStoreApiController();
      setApi(ctrl);
    };
    getController();
  });
  return (
    <>
      {api && (
        <ApiControllerProvider controller={api}>
          <Component {...pageProps} />
        </ApiControllerProvider>
      )}
      <Analytics/>
    </>
  );
};

export default App;
