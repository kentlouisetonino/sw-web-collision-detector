import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Fragment } from 'react'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <link
          rel="icon"
          href="/static/images/logo/favicon.png"
          type="image/png"
          sizes="16x16"
        />
        <meta name="viewport" content="width=600" />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  )
}
