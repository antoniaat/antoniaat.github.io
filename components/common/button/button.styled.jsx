import styled from 'styled-components';

export const ButtonStyled = styled.button`
	font-size: 18px;
	padding: 14px 18px;
	border-radius: 30px;

	&:hover {
		cursor: pointer;
	}

	a {
		text-decoration: none;
	}
`;

export const PrimaryButtonStyled = styled(ButtonStyled)`
	background: var(--cyan);
	border: 1px solid var(--cyan);
	color: var(--white);

	&:hover {
		color: var(--cyan);
		background: var(--white);
		border: 1px solid var(--cyan);

		a {
			color: var(--cyan);
		}
	}

	a {
		color: var(--white);
	}
`;

export const OutlineButtonStyled = styled(ButtonStyled)`
	color: var(--cyan);
	background: var(--white);
	border: 1px solid var(--cyan);

	&:hover {
		background: var(--cyan);
		border: 1px solid var(--cyan);
		color: var(--white);
		cursor: pointer;

		a {
			color: var(--white);
		}
	}

	a {
		color: var(--cyan);
	}
`;
