import { LogoStyled, LogoInitialsStyled } from './logo.styled';

export const Logo = ({ type }) => (
	<LogoStyled type={type} href={'/'}>
		antonia
		<LogoInitialsStyled>AT</LogoInitialsStyled>
	</LogoStyled>
);
