import Head from 'next/head';
import { node } from 'prop-types';
import { WEBSITE_TITLE } from '../scripts/constants/constants';
import Navigation from './navigation/navigation';

const Layout = ({ children }) => (
  <>
    <Head>
      <title>{WEBSITE_TITLE}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <body>
      <main>
        <Navigation />
        {children}
      </main>
    </body>
  </>
);

Layout.propTypes = {
  children: node.isRequired,
};

export default Layout;
