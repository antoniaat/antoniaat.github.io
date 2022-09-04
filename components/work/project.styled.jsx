import styled from 'styled-components';
import { respondTo } from '../../styles/breakpoints.styled';

export const ProjectStyled = styled.section`
	border-radius: 12px;

	&:hover {
		cursor: pointer;

		.content {
			display: block;
		}

		${ProjectImgStyled} {
			transition: filter 0.5s ease-in-out;
			filter: brightness(0.2);
		}
	}
}
`;

export const ProjectImgStyled = styled.img`
	object-fit: cover;
	border-radius: 12px;
	transition: filter 0.5s ease-in-out;
	filter: brightness(0.8);
	height: 220px;

	${respondTo.tablet`
		width: 500px;
		height: 200px;
	`};
`;

export const ProjectContentStyled = styled.article`
	display: none;
	position: absolute;
	top: 0;
	padding: 10px;
	text-align: center;
	line-height: 26px;
	color: var(--white);

	${respondTo.tablet`
	 	padding: 35px;
	`};
`;

export const ProjectContentTextStyled = styled.p``

export const ProjectContentCtaStyled = styled(OutlineButton)`
	background: transparent;
	margin-top: 20px;
`;

export const ProjectContentLinkCtaStyled = styled.a`
	color: var(--white);
`;
