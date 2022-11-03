import React from 'react'
import App from 'next/app'
import withReduxSaga from 'next-redux-saga'
import withRedux from 'next-redux-wrapper'
import wrapper from './redux-saga/Store/index'
import { HelmetProvider } from 'react-helmet-async'
import '../styles/globals.css'
class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <HelmetProvider>
          <Component {...pageProps} />
      </HelmetProvider>
    )
  }
}

export default wrapper.withRedux(withReduxSaga(MyApp))