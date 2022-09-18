import styled from 'styled-components';

export const LogoInitialsStyled = styled.span`
	font-family: var(--secondary-font);
`;

export const LogoStyled = styled.a`
	font-family: var(--secondary-font);
	font-size: 40px;
	color: ${({ type }) => (type === 'light' ? 'var(--white)' : 'var(--gray)')};

	${LogoInitialsStyled} {
		color: ${({ type }) => (type === 'light' ? 'var(--cyan-900)' : 'var(--cyan)')};
	}

	&:hover {
		text-decoration: none;
		cursor: pointer;
	}
`;
