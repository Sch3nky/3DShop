import '../styles/globals.css'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import type { ReactElement, ReactNode } from 'react'
import Layout from '../lib/Layout/Layout'

export default function App({ Component, pageProps }: AppProps) {

  return (<Layout><Component {...pageProps} /></Layout>)
}
