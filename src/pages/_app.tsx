import { Analytics } from '@vercel/analytics/react';
import type { AppProps } from 'next/app';
import React from 'react';
import { ApiControllerProvider } from '../contexts/ApiController';
import { getLocalApiController } from '../idb/local-api-controller';
import '../styles/globals.css';

const App = ({
  Component,
  pageProps,
}: AppProps): JSX.Element => (
  <>
    <ApiControllerProvider controller={getLocalApiController()}>
      <Component {...pageProps} />
    </ApiControllerProvider>
    <Analytics/>
  </>
);

export default App;
