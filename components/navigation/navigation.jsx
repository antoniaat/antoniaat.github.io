import { navigation, list, item } from '../../styles/components/navigation/navigation.module.scss';
import { CONTACT_EMAIL } from '../../scripts/constants/constants';
import Logo from '../logo/logo';
import Button from '../button';

const href = `mailto:${CONTACT_EMAIL}`;

const Navigation = () => (
  <nav className={navigation}>
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
    </ul>
  </nav>
);

export default Navigation;
