import styled from 'styled-components';
import { wrapperStyles } from '../../styles/global.styled';
import { respondTo } from '../../styles/breakpoints.styled';

export const WorkStyled = styled.section`
	${wrapperStyles};
`;

export const WorkTitleStyled = styled.h3`
	font-size: 36px;
	text-align: center;
	margin-bottom: 20px;
`;

export const WorkDescriptionStyled = styled.h3`
	text-align: center;
	font-size: 16px;
	line-height: 26px;
	margin-bottom: 20px;
`;

export const WorkLinkStyled = styled.a`
	color: var(--cyan);
	margin-left: 8px;
`;

export const WorkListStyled = styled.ul`
	margin-top: 60px;
	display: grid;
	grid-gap: 80px;

	${respondTo.tablet`
 		grid-gap: 35px;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
	`};

	${respondTo.desktop`
		grid-template-columns: repeat(3, 1fr);
	`};
`;

export const WorkListItemStyled = styled.li`
	position: relative;
`;
