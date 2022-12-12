import styled from 'styled-components';
import { wrapperStyles } from '../../styles/global.styled.tsx';

export const BlogPageStyled = styled.ul`
	${wrapperStyles};
`;

export const BlogPageListStyled = styled.ul`
	margin: 100px 0 120px 0;
	display: inline-block;
	columns: 3 auto;
	column-gap: 20px;
`;