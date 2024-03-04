import styled from 'styled-components';
import { respondTo } from '../../styles/breakpoints.styled';
import { wrapperStyles } from '../../styles/global.styled';

export const HeaderStyled = styled.header`
	${wrapperStyles};
	text-align: center;
	margin-top: 30px;
	font-size: 40px;
	
	${respondTo.desktop`
        font-size: 55px;
    `}
`;

export const HeaderSubtitleStyled = styled.h2`
`;

export const HeaderTitleStyled = styled.h1``;

export const HeaderAvatarStyled = styled.img`
	max-width: 310px;
	width: 100%;
	border-radius: 50%;
	margin: 30px auto;
`;