import { AppProps } from "blitz"

import "app/styles/app.css"

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
