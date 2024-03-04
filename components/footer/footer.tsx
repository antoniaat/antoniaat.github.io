import Flip from 'react-reveal/Flip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SOCIAL_MEDIA_ACCOUNTS } from '../../i18n/main-info';
import {
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
					Всички права са запазени © Антония Атанасова {CURRENT_YEAR}
				</FooterCopyrightTextStyled>
			</FooterCopyrightStyled>
		</Flip>
	</FooterStyled>
);
