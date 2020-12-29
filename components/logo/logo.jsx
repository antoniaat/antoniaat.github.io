import styles from '../../styles/components/logo/logo.module.scss';

const Logo = () => {
  const { logo, initials } = styles;

  return (
    <article className={logo}>
      antonia
      <span className={initials}>At</span>
    </article>
  );
};

export default Logo;
