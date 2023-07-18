import '@/styles/globals.css'
import type { AppProps } from 'next/app'

// Import styles 
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Spartan%3A400%2C500%2C600%2C700%2C800%2C900%7CInter%3A300%2C400%2C500%2C600%2C700%2C800%2C900&subset=latin%2Clatin-ext"
  type="text/css"
  media="all"
/>;

import "../public/css/bootstrap.min.css";
import "../public/css/owl.css";
import "../public/css/swiper.min.css";
import "../public/css/jquery.fancybox.min.css";
import "../public/css/icomoon.css";
import "../public/css/flexslider.css";
import "../public/css/font-awesome.min.css";
import "../public/css/style.css";
import "../public/css/scss/elements/theme-css.css";
import "../public/css/scss/elements/color-switcher/color.css";
import "../public/css/woocommerce-layout.css";
import "../public/css/woocommerce.css";
import "../public/css/custom.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
