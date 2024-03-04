import styled from 'styled-components';
import { wrapperStyles } from '../../styles/global.styled';
import { respondTo } from '../../styles/breakpoints.styled';
import { LogoStyled } from '../common/logo/logo.styled';

export const NavigationStyled = styled.nav`
	${wrapperStyles};
`;

export const NavigationListStyled = styled.ul`
	display: grid;
	grid-auto-flow: row;
	justify-content: center;
	grid-gap: 20px;
	align-items: center;
	padding: 20px 0;
	text-align: center;

	${respondTo.mobile`
		grid-auto-flow: column;
		grid-template-columns: 120px 1fr 120px;
		justify-content: space-between;
	`};
`;

export const NavigationSocialMediaWrapperStyled = styled.article`
	display: flex;
	align-items: center;
	gap: 20px;

	svg {
		width: 100%;
		max-width: 30px;

		&:hover {
			cursor: pointer;
		}
	}
`;

export const NavigationListItemStyled = styled.li`
	display: flex;
	justify-content: center;
	gap: 10px;
	flex-direction: column;

	${LogoStyled} {
		font-size: 40px;
	}
`;

export const NavigationLinkStyled = styled.a`
	font-size: 22px;

	span {
		color: var(--cyan);
		font-weight: bold;
	}
`;

export const ThemeButtonStyled = styled.div`
	display: flex;
	justify-content: center;

	&:hover {
		cursor: pointer;
	}
`;

export const ThemeButtonImgStyled = styled.img`
	width: 100%;
	max-width: 30px;
`;
