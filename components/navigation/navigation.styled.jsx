import styled from 'styled-components';
import { wrapperStyles } from '../../styles/global.styled';

export const NavigationStyled = styled.nav`
	${wrapperStyles};
`;

export const NavigationListStyled = styled.ul`
	display: grid;
	grid-auto-flow: column;
    grid-template-columns: max-content 1fr 1fr max-content;
	grid-gap: 20px;
	align-items: center;
	padding: 20px 0;
`;

export const HelloBtnStyled = styled.a`
	justify-self: end;
`;

export const BlogBtnStyled = styled.a`
	justify-self: start;
`;

export const NavigationListItemStyled = styled.li``;
export const NavigationBtnLinkStyled = styled.a`
	color: var(--gray);
	font-weight: bold;
	font-size: 19px;
	
	&:hover {
		text-decoration: none;
		cursor: pointer;
	}
`;

export const ThemeButtonStyled = styled.div`
	max-width: 75px;

	&:hover {
		cursor: pointer;
	}
`;

export const ThemeButtonImgStyled = styled.img`
	width: 100%;
	max-width: 30px;
`;
