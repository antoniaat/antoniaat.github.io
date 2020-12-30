import { node } from 'prop-types';
import { wrapper } from '../styles/components/wrapper.module.scss';

const Wrapper = ({ children }) => (
  <section className={wrapper}>
    {children}
  </section>
);

Wrapper.propTypes = { children: node.isRequired };

export default Wrapper;
