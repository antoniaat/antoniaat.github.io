
import { Flip } from 'react-reveal';
import { freelancerIcon, frontEndDeveloperIcon, trainerIcon } from '../../scripts/icons/icons';
import skills from '../../scripts/constants/skills';
import {
	SkillContentListItemStyled,
	SkillContentListStyled,
	SkillContentStyled,
	SkillHeaderStyled,
	SkillHeaderTitleStyled,
	SkillImgStyled,
	SkillsListItemStyled,
	SkillsListStyled,
	SkillsStyled,
	SkillStyled,
	SkillSubtitleStyled,
	SkillTitleStyled,
} from './skills.styled';

const ICONS = {
	freelancer: freelancerIcon,
	frontEnd: frontEndDeveloperIcon,
	trainer: trainerIcon,
};

export const Skills = () => (
	<SkillsStyled>
		<SkillsListStyled>
			{skills.map(({ id, type, title, subtitle, header, content }) => (
				<SkillsListItemStyled key={id}>
					<SkillStyled>
						<SkillImgStyled src={ICONS[type]} alt={title} />
						<Flip top>
							<SkillTitleStyled>{title}</SkillTitleStyled>
						</Flip>
						<SkillSubtitleStyled>{subtitle}</SkillSubtitleStyled>
						<SkillHeaderStyled>
							<SkillHeaderTitleStyled>{header.title}</SkillHeaderTitleStyled>
							<p>{header.skills}</p>
						</SkillHeaderStyled>
						<SkillContentStyled>
							<SkillHeaderTitleStyled>{content.title}</SkillHeaderTitleStyled>
							<SkillContentListStyled>
								{content.skills.map(skill => (
									<Flip top>
										<SkillContentListItemStyled>{skill}</SkillContentListItemStyled>
									</Flip>
								))}
							</SkillContentListStyled>
						</SkillContentStyled>
					</SkillStyled>
				</SkillsListItemStyled>
			))}
		</SkillsListStyled>
	</SkillsStyled>
);
