import '../styles/globals.css'
import Head from 'next/head'

import Layout from '../components/Layout'
function MyApp({ Component, pageProps }) {
  return <>
  <Head>
        <meta name="viewport" content="viewport-fit=cover" />
      </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
}

export default MyApp
