import styled from 'styled-components';
import { wrapperStyles } from '../../styles/global.styled';

export const NavigationStyled = styled.nav`
	${wrapperStyles};
`;

export const NavigationListStyled = styled.ul`
	display: grid;
	grid-auto-flow: column;
	grid-template-columns: 1fr max-content max-content;
	grid-gap: 20px;
	align-items: center;
	padding: 20px 0;
`;

export const NavigationListItemStyled = styled.li``
export const NavigationBtnLinkStyled = styled.a``
