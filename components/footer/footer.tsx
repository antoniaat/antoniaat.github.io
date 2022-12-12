import Flip from 'react-reveal/Flip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SOCIAL_MEDIA_ACCOUNTS } from '../../i18n/main-info';
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

const CURRENT_YEAR = new Date().getFullYear();

export const Footer = () => (
	<FooterStyled>
		<Flip top>
			<FooterSloganStyled>Living, learning, & leveling up</FooterSloganStyled>
			<FooterSloganStyled>one day at a time.</FooterSloganStyled>
			<FooterIconsListStyled>
				{SOCIAL_MEDIA_ACCOUNTS.map(({ key, icon, url }) => (
					<FooterIconsListItemStyled key={key}>
						<FooterIconsListItemLinkStyled href={url}>
							<FontAwesomeIcon icon={icon as any} />
						</FooterIconsListItemLinkStyled>
					</FooterIconsListItemStyled>
				))}
			</FooterIconsListStyled>
			<FooterCopyrightStyled>
				<FooterCopyrightTextStyled>
					All rights reserved © Antonia Atanasova {CURRENT_YEAR}
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
