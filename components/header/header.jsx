import Flip from 'react-reveal/Flip';
import avatarImg from '../../assets/icons/avatar.svg';
import { PROFESSION, WEBSITE_TITLE } from '../../scripts/constants/global';
import {
	HeaderStyled,
	HeaderTitleStyled,
	HeaderAvatarStyled,
} from './header.styled';

export const Header = () => (
	<HeaderStyled>
		<Flip top>
			<HeaderTitleStyled>{PROFESSION}</HeaderTitleStyled>
		</Flip>
		<HeaderAvatarStyled src={avatarImg} alt={WEBSITE_TITLE} />
	</HeaderStyled>
);
