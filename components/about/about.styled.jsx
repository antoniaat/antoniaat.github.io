import styled from 'styled-components';
import { respondTo } from '../../styles/breakpoints.styled';

export const AboutWrapper = styled.section`
	background: var(--cyan);
	color: var(--white);
	text-align: center;
	width: 100%;
	margin: 0 auto;
	padding: 50px 20px 200px 20px;

	${respondTo.desktop`
		padding: 100px 100px 200px;
	`}
`;

export const AboutTitleStyled = styled.h2`
	margin: 0;
`;

export const AboutDescriptionStyled = styled.p`
	margin: 0 auto;
	line-height: 26px;

	${respondTo.desktop`
		width: 65%;
	`}
`;
