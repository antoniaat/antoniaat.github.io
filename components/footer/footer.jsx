import Flip from 'react-reveal/Flip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCopyright,
} from '@fortawesome/free-solid-svg-icons';
import {
  footer, icons, slogan, item, nextjs, copyright, madeWith,
} from '../../styles/components/footer/footer.module.scss';

import Logo from '../logo/logo';
import { SOCIAL_MEDIA_ACCOUNTS } from '../../scripts/constants/constants';
import Wrapper from '../wrapper';
import nextJsImg from '../../assets/images/nextjs.png';

const Footer = () => (
  <footer className={footer}>
    <Wrapper>
      <Flip top>
        <Logo type="light" />
        <p className={slogan}>
          Living, learning, & leveling up
        </p>
        <p className={slogan}>
          one day at a time.
        </p>
        <ul className={icons}>
          {
            SOCIAL_MEDIA_ACCOUNTS.map(({ key, icon, url }) => (
              <li
                key={key}
                className={item}
              >
                <a href={url}>
                  <FontAwesomeIcon icon={icon} />
                </a>
              </li>
            ))
          }
        </ul>
        <article className={copyright}>
          <p>
            Handcrafted by me
            <FontAwesomeIcon icon={faCopyright} />
            antoniaat
          </p>
          <p className={madeWith}>
            Made with
            <a href="https://nextjs.org/">
              <img
                src={nextJsImg}
                className={nextjs}
                alt="Next.js"
              />
            </a>
          </p>
        </article>
      </Flip>
    </Wrapper>
  </footer>
);

export default Footer;
