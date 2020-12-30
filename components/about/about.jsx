import Flip from 'react-reveal/Flip';
import { container, title, description } from '../../styles/components/about/about.module.scss';
import Wrapper from '../wrapper';

const About = () => (
  <section className={container}>
    <Wrapper>
      <Flip top>
        <h2 className={title}>
          Hi, I’m Tony. Nice to meet you.
        </h2>
      </Flip>
      <p className={description}>
        If you love your business as much as I love my job, we’re off to a good start!
        With YOUR VISION and my experience, we can create something that engages your
        audience. I design beautiful, effective websites with clean, modern and simple
        design. You can trust that I will communicate promptly, deadlines are kept and
        budgets are respected. I’m passionate about simplicity, building user-friendly
        websites, achieved through good design.
      </p>
    </Wrapper>
  </section>
);

export default About;
