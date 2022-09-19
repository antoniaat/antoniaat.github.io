import Flip from 'react-reveal/Flip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { SOCIAL_MEDIA_ACCOUNTS } from '../../scripts/constants/global';
import nextJsImg from '../../assets/images/nextjs.png';
import {
	FooterCopyrightMadeWithImgStyled,
	FooterCopyrightMadeWithLinkStyled,
	FooterCopyrightMadeWithStyled,
	FooterCopyrightStyled,
	FooterCopyrightTextStyled,
	FooterIconsListItemLinkStyled,
	FooterIconsListItemStyled,
	FooterIconsListStyled,
	FooterSloganStyled,
	FooterStyled,
} from './footer.styled';

export const Footer = () => (
	<FooterStyled>
		<Flip top>
			<FooterSloganStyled>Living, learning, & leveling up</FooterSloganStyled>
			<FooterSloganStyled>one day at a time.</FooterSloganStyled>
			<FooterIconsListStyled>
				{SOCIAL_MEDIA_ACCOUNTS.map(({ key, icon, url }) => (
					<FooterIconsListItemStyled key={key}>
						<FooterIconsListItemLinkStyled href={url}>
							<FontAwesomeIcon icon={icon} />
						</FooterIconsListItemLinkStyled>
					</FooterIconsListItemStyled>
				))}
			</FooterIconsListStyled>
			<FooterCopyrightStyled>
				<FooterCopyrightTextStyled>
					Handcrafted by me
					<FontAwesomeIcon icon={faCopyright} />
					antoniaat
				</FooterCopyrightTextStyled>
				<FooterCopyrightMadeWithStyled>
					Made with
					<FooterCopyrightMadeWithLinkStyled href="https://nextjs.org/">
						<FooterCopyrightMadeWithImgStyled src={nextJsImg} alt="Next.js" />
					</FooterCopyrightMadeWithLinkStyled>
				</FooterCopyrightMadeWithStyled>
			</FooterCopyrightStyled>
		</Flip>
	</FooterStyled>
);
