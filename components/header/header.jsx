import Flip from 'react-reveal/Flip';
import avatarImg from '../../assets/icons/avatar.svg';
import headerImg from '../../assets/images/header.svg';
import { PROFESSION, WEBSITE_TITLE } from '../../scripts/constants/global';
import {
	HeaderStyled,
	HeaderTitleStyled,
	HeaderSubtitleStyled,
	HeaderImgStyled,
	HeaderAvatarStyled,
} from './header.styled';

export const Header = () => (
	<HeaderStyled>
		<Flip top>
			<HeaderTitleStyled>{PROFESSION}</HeaderTitleStyled>
		</Flip>
		<Flip top>
			<HeaderSubtitleStyled>I design websites that help businesses grow.</HeaderSubtitleStyled>
		</Flip>
		<HeaderAvatarStyled src={avatarImg} alt={WEBSITE_TITLE} />
		<HeaderImgStyled src={headerImg} alt={WEBSITE_TITLE} />
	</HeaderStyled>
);
