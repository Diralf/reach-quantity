import { Analytics } from '@vercel/analytics/react';
import type { AppProps } from 'next/app';
import React from 'react';
import { ControllerProvider } from '../contexts/Controller';
import { getDbApiController } from '../idb/idb-api-controller';
import '../styles/globals.css';

const App = ({
  Component,
  pageProps,
}: AppProps): JSX.Element => (
  <>
    <ControllerProvider controller={getDbApiController()}>
      <Component {...pageProps} />
    </ControllerProvider>
    <Analytics/>
  </>
);

export default App;
