import { CONTACT_EMAIL } from '../../scripts/constants/global';
import projects from '../../scripts/constants/projects';
import { WorkStyled, WorkTitleStyled, WorkLinkStyled, WorkListStyled } from './work.styled';
import { Project } from './project';

export const Work = () => (
	<WorkStyled>
		<WorkTitleStyled>My Recent Work</WorkTitleStyled>
		<WorkDescriptionStyled>
			Here are a few projects I've worked on recently. Want to see more?
			<WorkLinkStyled href={`mailto:${CONTACT_EMAIL}`}>Email me.</WorkLinkStyled>
		</WorkDescriptionStyled>
		<WorkListStyled>
			{projects.map(({ ...props }) => (
				<WorkListItemStyled>
					<Project {...props} />
				</WorkListItemStyled>
			))}
		</WorkListStyled>
	</WorkStyled>
);
