import { Analytics } from '@vercel/analytics/react';
import type { AppProps } from 'next/app';
import React from 'react';
import { jsStoreApiController } from '../api-controllers/js-store/js-store-api-controller';
import { ApiControllerProvider } from '../contexts/ApiController';
import '../styles/globals.css';

const App = ({
  Component,
  pageProps,
}: AppProps): JSX.Element => (
  <>
    <ApiControllerProvider controller={jsStoreApiController}>
      <Component {...pageProps} />
    </ApiControllerProvider>
    <Analytics/>
  </>
);

export default App;
