import {
  title, description, link, projectsList, item,
} from '../../styles/components/work/work.module.scss';
import { CONTACT_EMAIL } from '../../scripts/constants/constants';
import projects from '../../scripts/constants/projects';
import Wrapper from '../wrapper';
import Project from './project';

const href = `mailto:${CONTACT_EMAIL}`;

const Work = () => (
  <Wrapper>
    <h3 className={title}>
      My Recent Work
    </h3>
    <p className={description}>
      Here are a few projects I've worked on recently. Want to see more?
      <a
        className={link}
        href={href}
      >
        Email me.

      </a>
    </p>
    <ul className={projectsList}>
      {
          projects.map(({ ...props }) => (
            <li className={item}>
              <Project {...props} />
            </li>
          ))
      }
    </ul>
  </Wrapper>
);

export default Work;
