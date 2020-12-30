import Flip from 'react-reveal/Flip';
import { string, instanceOf } from 'prop-types';
import {
  skillContainer, skillHeader, skillTitle, skillHeaderTitle, img, item,
} from '../../styles/components/skills/skill.module.scss';
import { freelancerIcon, frontEndDeveloperIcon, trainerIcon } from '../../scripts/icons/icons';

const ICONS = {
  freelancer: freelancerIcon,
  frontEnd: frontEndDeveloperIcon,
  trainer: trainerIcon,
};

const Skill = ({
  type, title, subtitle, header, content,
}) => {
  const imageSrc = ICONS[type];
  const { title: headerTitle, skills: topSkills } = header;
  const { title: contentTitle, skills } = content;

  return (
    <article className={skillContainer}>
      <img
        src={imageSrc}
        alt={title}
        className={img}
      />
      <Flip top>
        <h4 className={skillTitle}>{title}</h4>
      </Flip>
      <p>
        {subtitle}
      </p>
      <header className={skillHeader}>
        <h5 className={skillHeaderTitle}>{headerTitle}</h5>
        <p>{topSkills}</p>
      </header>
      <article>
        <h5 className={skillHeaderTitle}>{contentTitle}</h5>
        <ul>
          {
              skills.map((skill) => (
                <Flip top>
                  <li className={item}>
                    {skill}
                  </li>
                </Flip>
              ))
          }
        </ul>
      </article>
    </article>
  );
};

Skill.propTypes = {
  type: string.isRequired,
  title: string.isRequired,
  subtitle: string.isRequired,
  header: instanceOf(Object),
  content: instanceOf(Object),
};

Skill.defaultProps = {
  header: [],
  content: [],
};

export default Skill;
