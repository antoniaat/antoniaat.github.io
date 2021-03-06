import Flip from 'react-reveal/Flip';

import avatarImg from '../../assets/icons/avatar.svg';
import headerImg from '../../assets/images/header.svg';
import {
  wrapper, subtitle, avatar, image,
} from '../../styles/components/header/header.module.scss';

import { PROFESSION, WEBSITE_TITLE } from '../../scripts/constants/constants';
import Wrapper from '../wrapper';

const Header = () => (
  <Wrapper>
    <header className={wrapper}>
      <Flip top>
        <h1>
          {PROFESSION}
        </h1>
      </Flip>
      <Flip top>
        <h3 className={subtitle}>
          I design websites that help businesses grow.
        </h3>
      </Flip>
      <img
        src={avatarImg}
        alt={WEBSITE_TITLE}
        className={avatar}
      />
      <img
        src={headerImg}
        alt={WEBSITE_TITLE}
        className={image}
      />
    </header>
  </Wrapper>
);

export default Header;
