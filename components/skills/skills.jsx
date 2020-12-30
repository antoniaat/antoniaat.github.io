import { container, item } from '../../styles/components/skills/skills.module.scss';
import skills from '../../scripts/constants/skills';
import Wrapper from '../wrapper';
import Skill from './skill';

const Skills = () => (
  <Wrapper>
    <ul className={container}>
      {skills.map(({ id, ...props }) => (
        <li
          key={id}
          className={item}
        >
          <Skill {...props} />
        </li>
      ))}
    </ul>
  </Wrapper>
);

export default Skills;
