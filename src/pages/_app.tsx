import { Analytics } from '@vercel/analytics/react';
import type { AppProps } from 'next/app';
import React from 'react';
import { getIDBApiController } from '../api-controllers/idb/idb-api-controller';
import { ApiControllerProvider } from '../contexts/ApiController';
import '../styles/globals.css';

const App = ({
  Component,
  pageProps,
}: AppProps): JSX.Element => (
  <>
    <ApiControllerProvider controller={getIDBApiController()}>
      <Component {...pageProps} />
    </ApiControllerProvider>
    <Analytics/>
  </>
);

export default App;
