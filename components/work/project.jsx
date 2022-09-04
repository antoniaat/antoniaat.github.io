import softuniImg from '../../assets/images/softuni.png';
import perfectaMarketingImg from '../../assets/images/perfectamarketing.png';
import drGaisImg from '../../assets/images/drgais.png';
import teachMeImg from '../../assets/images/teachmebg.png';
import jivaRecoveryImg from '../../assets/images/jivarecovery.png';
import softwareUniversityImg from '../../assets/images/softwareuniversity.png';

const projectsImages = {
	softuni: softuniImg,
	teachmebg: teachMeImg,
	jivarecovery: jivaRecoveryImg,
	perfectamarketing: perfectaMarketingImg,
	softwareuniversity: softwareUniversityImg,
	drgais: drGaisImg,
};

export const Project = ({ description, img, url }) => (
	<ProjectStyled>
		<ProjectImgStyled src={projectsImages[img.name]} alt={img.name} />
		<ProjectContentStyled>
			<ProjectContentTextStyled>{description}</ProjectContentTextStyled>
			<ProjectContentCtaStyled>
				<ProjectContentLinkCtaStyled rel="noreferrer" target="_blank" href={url}>
					SEE MORE
				</ProjectContentLinkCtaStyled>
			</ProjectContentCtaStyled>
		</ProjectContentStyled>
	</ProjectStyled>
);
