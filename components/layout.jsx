import { node } from 'prop-types';
import { wrapper } from '../styles/components/layout.module.scss';

const Layout = ({ children }) => (
  <div className={wrapper}>
    {/* <Header /> */}
    {children}
    {/* <Footer /> */}
  </div>
);

Layout.propTypes = {
  children: node.isRequired,
};

export default Layout;
