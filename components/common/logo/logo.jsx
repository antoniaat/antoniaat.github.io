import { LogoStyled, LogoInitialsStyled } from './logo.styled';

export const Logo = ({ type }) => (
	<LogoStyled type={type}>
		antonia
		<LogoInitialsStyled>AT</LogoInitialsStyled>
	</LogoStyled>
);
