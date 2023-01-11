import { Analytics } from '@vercel/analytics/dist/react';
import type { AppProps } from 'next/app';
import React from 'react';
import '../styles/globals.css';

const App = ({
  Component,
  pageProps,
}: AppProps): JSX.Element => (
  <>
    <Component {...pageProps} />
    <Analytics/>
  </>
);

export default App;
