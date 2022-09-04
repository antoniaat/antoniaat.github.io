import { OutlineButtonStyled, PrimaryButtonStyled } from './button.styled';

export const PrimaryButton = ({ children, onClick }) => (
	<PrimaryButtonStyled onClick={onClick}>{children}</PrimaryButtonStyled>
);

export const OutlineButton = ({ children, onClick }) => (
	<OutlineButtonStyled onClick={onClick}>{children}</OutlineButtonStyled>
);
