import { CONTACT_EMAIL } from '../../i18n/main-info';
import { Logo } from '../common/logo/logo';
import {
	NavigationStyled,
	NavigationListStyled,
	NavigationListItemStyled,
	NavigationBtnLinkStyled,
	ThemeButtonStyled,
	ThemeButtonImgStyled,
	MenuItemBtnStyled,
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
				<MenuItemBtnStyled>
					<NavigationBtnLinkStyled href={`mailto:${CONTACT_EMAIL}`}>SAY HELLO</NavigationBtnLinkStyled>
				</MenuItemBtnStyled>
				<MenuItemBtnStyled>
					<NavigationBtnLinkStyled href="/blog">BLOG</NavigationBtnLinkStyled>
				</MenuItemBtnStyled>
				<MenuItemBtnStyled>
					<NavigationBtnLinkStyled href="https://www.youtube.com/channel/UCYO3R9oWbDsDnKOkls0OPhA">YOUTUBE CHANNEL</NavigationBtnLinkStyled>
				</MenuItemBtnStyled>
				<ThemeButtonStyled onClick={toggleTheme}>
					<ThemeButtonImgStyled src={themeIcon} />
				</ThemeButtonStyled>
			</NavigationListStyled>
		</NavigationStyled>
	);
};
