import { oneOfType } from 'prop-types';
import { LOGO_TYPES } from '../../scripts/constants/constants';
import { getClassName } from '../../scripts/utils/common';
import styles from '../../styles/components/logo/logo.module.scss';

const Logo = ({ type }) => {
  const combinedClassName = getClassName({
    [styles.logo]: true,
    [styles[type]]: true,
  });

  const { initials } = styles;

  return (
    <article className={combinedClassName}>
      antonia
      <span className={initials}>AT</span>
    </article>
  );
};

Logo.propTypes = {
  type: oneOfType(LOGO_TYPES),
};

Logo.defaultProps = {
  type: 'dark',
};

export default Logo;
