import { list, item } from '../../styles/components/navigation/navigation.module.scss';
import { CONTACT_EMAIL } from '../../scripts/constants/constants';
import Logo from '../logo/logo';
import Button from '../button';
import Wrapper from '../wrapper';

const href = `mailto:${CONTACT_EMAIL}`;

const Navigation = () => (
  <Wrapper>
    <nav>
      <ul className={list}>
        <li className={item}>
          <Logo />
        </li>
        <Button
          type="outline"
          className={item}
        >
          <a href={href}>SAY HELLO</a>
        </Button>
        <Button
          type="outline"
          className={item}
        >
          <a href='/blog'>BLOG</a>
        </Button>
      </ul>
    </nav>
  </Wrapper>
);

export default Navigation;
