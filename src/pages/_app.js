import Head from 'next/head';
import '../styles/globals.css';
import Layout from '@/components/layout';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>E. Mbewe</title>
        <meta name="description" content="Welcome to Emmanuel's blog" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;