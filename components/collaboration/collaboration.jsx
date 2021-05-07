import {
  collaboration, title, description, cta,
} from '../../styles/components/collaboration/collaboration.module.scss';
import { CONTACT_EMAIL } from '../../scripts/constants/constants';
import Button from '../button';
import Wrapper from '../wrapper';

const Collaboration = () => {
  const href = `mailto:${CONTACT_EMAIL}`;

  return (
    <Wrapper>
      <section className={collaboration}>
        <p className={title}>
          Start a project
        </p>
        <p className={description}>
          Interested in working together? We should queue up a chat. I’ll buy the coffee.
        </p>
        <Button
          type="outline"
          className={cta}
        >
          <a href={href}>Let&apos;s do this</a>
        </Button>
      </section>
    </Wrapper>
  );
};

export default Collaboration;
