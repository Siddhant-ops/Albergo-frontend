import '../styles/globals.scss';
import '../styles/Navbar/Navbar.scss';
import type { AppProps } from 'next/app';
import { Fragment } from 'react';
import Navbar from '../Components/Navbar/Navbar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Navbar />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
