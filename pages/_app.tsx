import '../styles/globals.css'
import type { AppProps } from 'next/app'
import AppBar from '../components/app_bar/AppBar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
  // <AppBar>
  <Component {...pageProps} />
  // </AppBar>
  );

}

export default MyApp
