import Head from 'next/head';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>Emmanuel</title>
        <meta name="description" content="Welcome to Emmanuel's blog" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <h1 className="text-3xl p-6">Welcome to My blog</h1>
      
    </div>
  );
};

export default Home;