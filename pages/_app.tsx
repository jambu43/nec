import '@/styles/globals.css'
import type { AppProps } from 'next/app'

// Import styles 
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Spartan%3A400%2C500%2C600%2C700%2C800%2C900%7CInter%3A300%2C400%2C500%2C600%2C700%2C800%2C900&subset=latin%2Clatin-ext"
  type="text/css"
  media="all"
/>;

import "../public/landing/bootstrap.css";
import "../public/landing/all.css";
import "../public/landing/brk-blue.css";
import "../public/landing/brk-base-color.css";
import "../public/landing/offsets.css";
import "../public/landing/styles.min.css";
import "../public/landing/backgrounds.css";
import "../public/landing/countdown.css";
// import "../public/landing/content.css";


// Import JS



export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

