import styled from 'styled-components';
import { respondTo } from '../../styles/breakpoints.styled';
import { wrapperStyles } from '../../styles/global.styled';

export const HeaderStyled = styled.header`
	${wrapperStyles};
	text-align: center;
	margin-top: 120px;
	font-size: 40px;

	${respondTo.desktop`
        font-size: 55px;
    `}
`;

export const HeaderTitleStyled = styled.h1``;

export const HeaderSubtitleStyled = styled.h3`
	font-family: var(--primary-font-light);
	font-size: 20px;
	font-weight: 300;
	margin-top: 12px;

	${respondTo.desktop`
        font-size: 24px;
    `}
`;

export const HeaderAvatarStyled = styled.img`
	max-width: 210px;
	width: 100%;
	border-radius: 50%;
	margin: 30px auto;
`;

export const HeaderImgStyled = styled.img`
	margin: 100px auto 0 auto;
	padding: 0 20px;

	${respondTo.desktop`
        padding: 0;
    `}
`;
