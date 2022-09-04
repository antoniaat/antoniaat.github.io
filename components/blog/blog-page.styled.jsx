import styled from 'styled-components';
import { wrapperStyles } from '../../styles/global.styled';

export const BlogPageStyled = styled.ul`
	${wrapperStyles};
`;

export const BlogPageListStyled = styled.ul`
	margin: 100px 0 250px 0;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 60px;
	align-items: center;
	padding: 20px;
`;