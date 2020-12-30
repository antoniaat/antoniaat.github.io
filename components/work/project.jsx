import { string, shape } from 'prop-types';
import {
  content, cta, project, projectImg,
} from '../../styles/components/work/project.module.scss';

import softuniImg from '../../assets/images/softuni.jpg';
import perfectaMarketingImg from '../../assets/images/perfectamarketing.png';
import drGaisImg from '../../assets/images/drgais.png';
import teachMeImg from '../../assets/images/teachmebg.png';
import jivaRecoveryImg from '../../assets/images/jivarecovery.png';
import softwareUniversityImg from '../../assets/images/softwareuniversity.png';
import Button from '../button';

const projectsImages = {
  softuni: softuniImg,
  teachmebg: teachMeImg,
  jivarecovery: jivaRecoveryImg,
  perfectamarketing: perfectaMarketingImg,
  softwareuniversity: softwareUniversityImg,
  drgais: drGaisImg,
};

const Project = ({
  description, img, url,
}) => {
  const { name } = img;
  const imageUrl = projectsImages[name];

  return (
    <article className={project}>
      <img
        src={imageUrl}
        className={projectImg}
        alt={name}
      />
      <article className={content}>
        <p>
          {description}
        </p>
        <Button type="outline" className={cta}>
          <a href={url}>SEE MORE</a>
        </Button>
      </article>
    </article>
  );
};

Project.propTypes = {
  description: string.isRequired,
  img: shape({
    name: string.isRequired,
  }).isRequired,
  url: string.isRequired,
};

export default Project;
