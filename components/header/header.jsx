import { wrapper, title, subtitle } from '../../styles/components/header/header.module.scss';
import { PROFESSION } from '../../scripts/constants/constants';

const Header = () => (
  <header className={wrapper}>
    <h1 className={title}>
      {PROFESSION}
    </h1>
    <h3 className={subtitle}>
      I design websites that help businesses grow.
    </h3>
  </header>
);

export default Header;
