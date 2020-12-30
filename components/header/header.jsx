import Flip from 'react-reveal/Flip';
import avatarImg from '../../assets/icons/avatar.svg';
import { PROFESSION, WEBSITE_TITLE } from '../../scripts/constants/constants';

import {
  wrapper, title, subtitle, green, image,
} from '../../styles/components/header/header.module.scss';

const Header = () => (
  <header className={wrapper}>
    <h1 className={title}>
      {PROFESSION}
    </h1>
    <h3 className={subtitle}>
      I design websites that help businesses
      {' '}
      <Flip top>
        <span className={green}>
          grow
        </span>
      </Flip>
      .
    </h3>
    <img
      src={avatarImg}
      alt={WEBSITE_TITLE}
      className={image}
    />
  </header>
);

export default Header;
