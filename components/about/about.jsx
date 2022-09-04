import Flip from 'react-reveal/Flip';
import { AboutWrapper, AboutTitleStyled, AboutDescriptionStyled } from './about.styled';

export const About = () => (
	<AboutWrapper>
		<Flip top>
			<AboutTitleStyled>Hi, I’m Tony. Nice to meet you.</AboutTitleStyled>
		</Flip>
		<AboutDescriptionStyled>
			If you love your business as much as I love my job, we’re off to a good start! With YOUR VISION and my
			experience, we can create something that engages your audience. I design beautiful, effective websites with
			clean, modern and simple design. You can trust that I will communicate promptly, deadlines are kept and
			budgets are respected. I’m passionate about simplicity, building user-friendly websites, achieved through
			good design.
		</AboutDescriptionStyled>
	</AboutWrapper>
);
