import { node, func, string } from 'prop-types';
import styles from '../styles/components/button.module.scss';
import { getClassName } from '../scripts/utils/common';

const Button = ({
  children, type, className, onClick,
}) => {
  const combinedClassName = getClassName({
    [styles.btn]: true,
    [styles[type]]: true,
    [className]: !!className.length,
  });

  return (
    <button
      type="button"
      className={combinedClassName}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: node.isRequired,
  type: string,
  className: string,
  onClick: func,
};

Button.defaultProps = {
  type: 'primary',
  className: '',
  onClick: () => { },
};

export default Button;
