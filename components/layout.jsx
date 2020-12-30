import Head from 'next/head';
import { node } from 'prop-types';
import { WEBSITE_TITLE } from '../scripts/constants/constants';
import { wrapper } from '../styles/components/layout.module.scss';
import Navigation from './navigation/navigation';

const Layout = ({ children }) => (
  <>
    <Head>
      <title>{WEBSITE_TITLE}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className={wrapper}>
      <Navigation />
      {children}
    </main>
  </>
);

Layout.propTypes = {
  children: node.isRequired,
};

export default Layout;
