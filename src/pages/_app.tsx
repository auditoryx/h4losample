import '../styles/globals.css';
import type { AppProps } from 'next/app';
import MobileFallback from '../components/MobileFallback';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MobileFallback>
      <Component {...pageProps} />
    </MobileFallback>
  );
}
