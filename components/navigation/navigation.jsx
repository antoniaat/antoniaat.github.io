import { CONTACT_EMAIL } from '../../scripts/constants/global';
import { Logo } from '../common/logo/logo';
import {
	NavigationStyled,
	NavigationListStyled,
	NavigationListItemStyled,
	NavigationBtnLinkStyled,
} from './navigation.styled';
import { OutlineButton } from '../common/button/button';

export const Navigation = () => (
	<NavigationStyled>
		<NavigationListStyled>
			<NavigationListItemStyled>
				<Logo />
			</NavigationListItemStyled>
			<OutlineButton>
				<NavigationBtnLinkStyled href={`mailto:${CONTACT_EMAIL}`}>SAY HELLO</NavigationBtnLinkStyled>
			</OutlineButton>
			<OutlineButton>
				<NavigationBtnLinkStyled href="/blog">BLOG</NavigationBtnLinkStyled>
			</OutlineButton>
		</NavigationListStyled>
	</NavigationStyled>
);
