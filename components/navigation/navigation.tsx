import { Logo } from '../common/logo/logo';
import {
	NavigationStyled,
	NavigationListStyled,
	NavigationListItemStyled,
	ThemeButtonStyled,
	ThemeButtonImgStyled,
	NavigationSocialMediaWrapperStyled,
	NavigationLinkStyled,
} from './navigation.styled';
import sunImg from '../../public/common/sun.png';
import moonImg from '../../public/common/moon.png';
import { faInstagram, faYoutubeSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export const Navigation = ({ toggleTheme, isDarkTheme }) => {
	const themeIcon = isDarkTheme ? moonImg : sunImg;

	return (
		<NavigationStyled>
			<NavigationListStyled>
				<NavigationSocialMediaWrapperStyled>
					<a href="https://www.instagram.com/antoniya.at/" target="_blank">
						<FontAwesomeIcon icon={faInstagram as IconProp} size="xs" />
					</a>

					<a href="https://www.youtube.com/channel/UCYO3R9oWbDsDnKOkls0OPhA" target="_blank">
						<FontAwesomeIcon icon={faYoutubeSquare as IconProp} size="xs" />
					</a>

					<a href="https://www.linkedin.com/in/antoniaat/" target="_blank">
						<FontAwesomeIcon icon={faLinkedin as IconProp} size="xs" />
					</a>
				</NavigationSocialMediaWrapperStyled>

				<NavigationListItemStyled>
					<Logo />
					<NavigationLinkStyled href="https://howtofindjobinit.my.canva.site/howtofindjobinit?fbclid=IwAR0E0Rpyi00-B9T_V87pNj5p_9BmE5nB4jq-0SUjE8VzpcYEXWckN9_pXx0">
						"Как да си намерим <span>работа в ИТ сферата</span> - Практически наръчник"
					</NavigationLinkStyled>

					<NavigationLinkStyled href="https://softuni.bg/trainings/2286/html-css-mini-course">
						Безплатен МИНИ курс <span>HTML и CSS</span>
					</NavigationLinkStyled>
				</NavigationListItemStyled>

				<ThemeButtonStyled onClick={toggleTheme}>
					<ThemeButtonImgStyled src={themeIcon} />
				</ThemeButtonStyled>
			</NavigationListStyled>
		</NavigationStyled>
	);
};
