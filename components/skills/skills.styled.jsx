import styled from 'styled-components';
import { wrapperStyles } from '../../styles/global.styled';
import { respondTo } from '../../styles/breakpoints.styled';

export const SkillsStyled = styled.section`
	${wrapperStyles};
`;

export const SkillStyled = styled.article`
	padding: 40px 60px;
`;

export const SkillsListStyled = styled.ul`
	display: grid;
	text-align: center;
	box-shadow: 0 5px 5px 0 rgba(233, 240, 243, 0.5), 0 0 0 1px #e6ecf8;
	border-radius: 12px;
	position: relative;
	top: -150px;
	background: var(--white);
	margin: 0;
	padding: 0;

	${respondTo.desktop`
        grid-template-columns: repeat(3, 1fr);
	`};

	${SkillStyled}:nth-child(2) {
		border-top: 1px solid #e6ecf8;
		border-bottom: 1px solid #e6ecf8;

		${respondTo.desktop`
            border-top: none;
            border-bottom: none;
            border-left: 1px solid #e6ecf8;
            border-right: 1px solid #e6ecf8;
        }`}
	}
`;

export const SkillsListItemStyled = styled.li`
	margin: 12px auto;
`;

export const SkillTitleStyled = styled.h4`
	margin: 12px;
`;

export const SkillSubtitleStyled = styled.p``;

export const SkillHeaderStyled = styled.header`
	margin: 30px auto;
`;

export const SkillHeaderTitleStyled = styled.h5`
	margin: 20px auto 10px auto;
	font-size: 21px;
	font-weight: 500;
	font-family: var(--primary-font);
	color: var(--cyan-500);
`;

export const SkillImgStyled = styled.img`
	margin: 0 auto;
`;

export const SkillContentStyled = styled.article``;

export const SkillContentListStyled = styled.ul``;

export const SkillContentListItemStyled = styled.li`
	margin: 12px auto;
`;

