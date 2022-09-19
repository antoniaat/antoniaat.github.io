import { CONTACT_EMAIL } from '../../scripts/constants/global';
import { Logo } from '../common/logo/logo';
import {
	NavigationStyled,
	NavigationListStyled,
	NavigationListItemStyled,
	NavigationBtnLinkStyled,
	ThemeButtonStyled,
	ThemeButtonImgStyled,
	HelloBtnStyled,
	BlogBtnStyled,
} from './navigation.styled';
import sunImg from '../../public/common/sun.png';
import moonImg from '../../public/common/moon.png';

export const Navigation = ({ toggleTheme, isDarkTheme }) => {
	const themeIcon = isDarkTheme ? moonImg : sunImg;

	return (
		<NavigationStyled>
			<NavigationListStyled>
				<NavigationListItemStyled>
					<Logo />
				</NavigationListItemStyled>
				<HelloBtnStyled>
					<NavigationBtnLinkStyled href={`mailto:${CONTACT_EMAIL}`}>SAY HELLO</NavigationBtnLinkStyled>
				</HelloBtnStyled>
				<BlogBtnStyled>
					<NavigationBtnLinkStyled href="/blog">BLOG</NavigationBtnLinkStyled>
				</BlogBtnStyled>
				<ThemeButtonStyled onClick={toggleTheme}>
					<ThemeButtonImgStyled src={themeIcon} />
				</ThemeButtonStyled>
			</NavigationListStyled>
		</NavigationStyled>
	);
};
