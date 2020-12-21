/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import Head from 'next/head';
import Layout from '../components/layout';
import Navigation from '../components/navigation/navigation';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Antonia Atanasova - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navigation />
      </main>
    </Layout>
  );
}
