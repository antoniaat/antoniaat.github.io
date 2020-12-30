import { node } from 'prop-types';
import { wrapper } from '../styles/components/wrapper.module.scss';

const Wrapper = ({ children }) => (
  <div className={wrapper}>
    {children}
  </div>
);

Wrapper.propTypes = { children: node.isRequired };

export default Wrapper;
