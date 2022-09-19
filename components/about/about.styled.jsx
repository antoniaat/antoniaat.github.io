import styled from 'styled-components';
import { wrapperStyles } from '../../styles/global.styled';

import { respondTo } from '../../styles/breakpoints.styled';

export const AboutWrapper = styled.section`
	${wrapperStyles};
	color: var(--grey);
	text-align: center;
`;

export const AboutTitleStyled = styled.h2`
	margin: 0 auto 20px auto;
`;

export const AboutImgStyled = styled.img`
	width: 100%;
	max-width: 300px;
	height: 240px;
	object-fit: cover;
	border-right: 7px solid var(--cyan);
	border-top: 7px solid var(--cyan);
	transition: filter 0.6s ease;
	filter: grayscale(0.8);
	margin: 5px auto;

	&:hover {
		filter: grayscale(0);
	}
`;

export const AboutTextStyled = styled.p`
	margin: 20px auto;
	line-height: 26px;
`;

export const AboutDescriptionStyled = styled.article`
	display: grid;
	grid-template-columns: 300px 1fr;
	grid-gap: 20px;
	align-items: center;
	justify-content: center;
	margin: auto;
	text-align: left;

	&:nth-child(even) {
		padding-left: 150px;
	}
`;

export const AboutHeaderStyled = styled.header`
	margin-bottom: 30px;
`;
