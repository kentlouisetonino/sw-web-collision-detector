import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Fragment } from 'react'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>Collision Detector</title>
        <link rel="icon" href="/favicon.ico" type="image/png" sizes="16x16" />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  )
}
