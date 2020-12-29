import { node } from 'prop-types';

const Layout = ({ children }) => (
  <>
    {/* <Header /> */}
    {children}
    {/* <Footer /> */}
  </>
);

Layout.propTypes = {
  children: node.isRequired,
};

export default Layout;
